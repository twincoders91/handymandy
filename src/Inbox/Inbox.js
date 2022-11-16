import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./inbox.css";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import InboxMessagesCard from "./InboxMessagesCard";

const Inbox = ({ userNotifications, charSelect, inboxData }) => {
  const [userProfile_image, setUserProfile_image] = useState("");
  const [hmProfile_image, setHmProfile_image] = useState("");
  const [message, setMessage] = useState("");
  const [newInboxData, setNewInboxData] = useState([]);
  console.log(message);
  console.log(inboxData);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      postMessage();
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

  function updateScroll() {
    var element = document.getElementById("inbox--container");
    element.scrollTop = element.scrollHeight;
  }

  useEffect(() => {
    fetchPfps();
  }, []);

  return (
    <>
      <Navbar userNotifications={userNotifications} />
      <div className="inbox--global--container mt24">
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
        <input
          className="message--input--box"
          placeholder="input your message here"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={200}
        ></input>
      </div>
    </>
  );
};

export default Inbox;
