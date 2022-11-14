import { React, useEffect, useMemo, useState } from "react";
import ReactDom from "react-dom";
import "./modal.css";
import closesign from "../../Assets/universal/closesign.svg";
import defaultavatar from "../../Assets/profile/defaultavatar.svg";

const ApproveJobsModalHm = ({ setApproveJobsModalValue, cardClicked }) => {
  const [userProfile_image, setUserProfile_image] = useState("");

  //=============================Fetch Profile Image ===================================
  const fetchUserProfileImage = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${cardClicked.user_id}/profileimage/any`,
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
  };

  //====================Change status to inprogress===================================
  console.log(cardClicked);
  const approveService = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/jobs/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: cardClicked.jobs_id,
          status_id: "inprogress",
        }),
      });
      setApproveJobsModalValue(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUserProfileImage();
  }, []);

  return (
    <div>
      <>
        {ReactDom.createPortal(
          <div className="modal--overlay">
            <div className="modal--container--approvebooking relative">
              <p className="fw700 fs28 white modal--header--approvebooking m0 mt24 mb24">
                Approve Job?
              </p>
              <p className="m0 white fw700 fs16 mb8 modal--text--approvebooking">
                You are about to accept a job request by{" "}
                {cardClicked.user_first_name}!
              </p>
              <div className="confirm--booking--hm--profile--box">
                <div className="confirm--booking--profileimage--box">
                  <img
                    src={userProfile_image}
                    className="confirm--booking--hm--profile--image"
                  />
                </div>
                <div className="confirm--booking--description--box ">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Title
                  </p>
                  <p className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description">
                    {cardClicked.title}
                  </p>
                </div>
                <div className="confirm--booking--description--box">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Job requirement
                  </p>
                  <p
                    className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description"
                    style={{
                      "white-space": "pre-wrap",
                      "overflow-wrap": "break-word",
                    }}
                  >
                    {cardClicked.job_requirement}
                  </p>
                </div>
              </div>
              <button
                className="review--submit--button--confirmbooking mt24 fs16 fw700"
                onClick={approveService}
              >
                Confirm approval?
              </button>
              <p className="m0 white fw400 fs8 mb24 modal--text--confirmbooking--terms mt24">
                By clicking on "Confirm approval?", you confirm that you have
                read and agreed to HandyMandy's terms and conditions.
              </p>
              <img
                src={closesign}
                className="modal--cross--button"
                onClick={() => setApproveJobsModalValue(false)}
              />
            </div>
          </div>,
          document.querySelector("#modal-root")
        )}
      </>
    </div>
  );
};

export default ApproveJobsModalHm;
