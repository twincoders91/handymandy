import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./inbox.css";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import InboxMessagesCard from "./InboxMessagesCard";
import imageupload from "../Assets/universal/imageupload.svg";

const Inbox = ({
  userNotifications,
  hmNotifications,
  charSelect,
  inboxData,
  setBackButtonVisibility,
  backButtonVisibility,
  currentPage,
  setViewHmProfile,
  setCurrentPage,
}) => {
  const [userProfile_image, setUserProfile_image] = useState("");
  const [hmProfile_image, setHmProfile_image] = useState("");
  const [message, setMessage] = useState("");
  const [newInboxData, setNewInboxData] = useState([]);
  console.log(message);
  console.log(inboxData);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      postMessage();
      document.getElementById("message--input--box").value = "";
    }
  };

  const fetchPfps = async () => {
    //====================== User Profile Image fetching =======================
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/${inboxData.user_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const userProfileImage = await res.json();
      if (userProfileImage.length === 0) {
        setUserProfile_image(defaultavatar);
      } else {
        setUserProfile_image(userProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
    //====================== HM Profile Image fetching =======================
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${inboxData.hm_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const hmProfileImage = await res.json();
      if (hmProfileImage.length === 0) {
        setHmProfile_image(defaultavatar);
      } else {
        setHmProfile_image(hmProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
    //====================== Fetch initial inbox messages =======================
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/inbox/${inboxData.jobs_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      const getInboxData = await res.json();
      setNewInboxData(getInboxData);
    } catch (error) {
      console.error(error);
    }
  };

  //====================== Post Messages into Inbox =======================
  const postMessage = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/inbox/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          jobs_id: inboxData.jobs_id,
          user_id: inboxData.user_id,
          hm_id: inboxData.hm_id,
          character: charSelect,
          message: message,
        }),
      });
      const res2 = await fetch(
        `http://127.0.0.1:8001/inbox/${inboxData.jobs_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      const getInboxData = await res2.json();
      setNewInboxData(getInboxData);
    } catch (e) {
      console.error(e);
    }
  };

  //====================== Post Images into Inbox =======================
  const postImage = async (event) => {
    try {
      const file = event.target.files[0];

      const { url } = await fetch("http://localhost:8001/s3url").then((res) =>
        res.json()
      );
      console.log(url);

      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });

      const imageUrl = url.split("?")[0];

      console.log(imageUrl);

      try {
        const res = await fetch(`http://127.0.0.1:8001/inbox/image`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            jobs_id: inboxData.jobs_id,
            user_id: inboxData.user_id,
            hm_id: inboxData.hm_id,
            character: charSelect,
            inboximage_url: imageUrl,
          }),
        });

        const res2 = await fetch(
          `http://127.0.0.1:8001/inbox/${inboxData.jobs_id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        const getInboxData = await res2.json();
        setNewInboxData(getInboxData);
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  };

  function updateScroll() {
    var element = document.getElementById("inbox--container");
    element.scrollTop = element.scrollHeight;
  }

  useEffect(() => {
    fetchPfps();
  }, []);

  return (
    <>
      <Navbar
        userNotifications={userNotifications}
        hmNotifications={hmNotifications}
        setBackButtonVisibility={setBackButtonVisibility}
        backButtonVisibility={backButtonVisibility}
        currentPage={currentPage}
        setViewHmProfile={setViewHmProfile}
        setCurrentPage={setCurrentPage}
      />
      <div className="inbox--global--container">
        <div className="inbox--title--box ">
          <span className="inbox--title--name fs16 fw700 mt4">
            {inboxData.title.charAt(0).toUpperCase() + inboxData.title.slice(1)}
          </span>
        </div>
        <div className="inbox--container" id="inbox--container">
          {newInboxData.map((item) => {
            return (
              <InboxMessagesCard
                item={item}
                hmProfile_image={hmProfile_image}
                userProfile_image={userProfile_image}
                updateScroll={updateScroll}
              />
            );
          })}
        </div>
      </div>

      <div className="inbox--input--container mt24">
        <textarea
          className="message--input--box"
          id="message--input--box"
          placeholder="input your message here"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={300}
        ></textarea>
        <img src={imageupload} alt="images" className="image--upload--inbox" />
        <form className="inbox--image--form">
          <input
            onChange={(e) => {
              postImage(e);
            }}
            type="file"
            accept="image/*"
            className="upload--image--button"
          ></input>
        </form>
      </div>
    </>
  );
};

export default Inbox;
