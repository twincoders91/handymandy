import { React, useEffect, useMemo, useState } from "react";
import ReactDom from "react-dom";
import "./modal.css";
import closesign from "../../Assets/universal/closesign.svg";
import defaultavatar from "../../Assets/profile/defaultavatar.svg";
import starUnfilled from "../../Assets/services/starunfilled.svg";
import starFilled from "../../Assets/services/starfilled.svg";

const ApproveJobsModal = ({ setApproveJobsModalValue, cardClicked }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState("");
  const [hmProfile_image, setHmProfile_image] = useState("");

  //=============================Fetch Profile Image ===================================
  const fetchHmProfileImage = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${cardClicked.hm_id}/profileimage/any`,
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
  };

  //=============================BACKEND API===================================
  //====================Change status to completed===================================
  console.log(reviews);
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
          status_id: "completed",
        }),
      });

      try {
        const res2 = await fetch("http://127.0.0.1:8001/user/ratings", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            jobs_id: cardClicked.jobs_id,
            ratings: rating,
            reviews: reviews,
          }),
        });
      } catch (e) {
        console.error(e);
      }

      setApproveJobsModalValue(false);
    } catch (e) {
      console.error(e);
    }
  };

  let count = 5;

  //=============================Creating Star Ratings=============================

  const starColour = (index) => {
    if (hoverRating >= index) {
      return starFilled;
    } else if (!hoverRating && rating >= index) {
      return starFilled;
    }
    return starUnfilled;
  };

  const starRating = useMemo(
    () => {
      return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map((idx) => (
          <img
            src={starColour(idx)}
            key={idx}
            onClick={() => {
              setRating(idx);
            }}
            onMouseEnter={() => setHoverRating(idx)}
            onMouseLeave={() => setHoverRating(0)}
            className="review--stars"
          />
        ));
    },
    [rating],
    [hoverRating]
  );

  useEffect(() => {
    fetchHmProfileImage();
  });
  console.log(hoverRating);
  console.log(rating);

  return (
    <div>
      <>
        {ReactDom.createPortal(
          <div className="modal--overlay">
            <div className="modal--container--approvebooking relative">
              <p className="fw700 fs28 white modal--header--approvebooking m0 mt24 mb24">
                Approval
              </p>
              <p className="m0 white fw700 fs16 mb8 modal--text--approvebooking">
                You are about to complete a service by {cardClicked.first_name}!
              </p>
              {/* <p className="m0 white fw400 fs12 mb24 modal--text--confirmbooking">
                {cardClicked.first_name} will be notified! Thank you for
                trusting in our handyman!
              </p> */}
              <div className="confirm--booking--hm--profile--box">
                <div className="confirm--booking--profileimage--box">
                  <img
                    src={hmProfile_image}
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
                    Description
                  </p>
                  <p className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description">
                    {cardClicked.description}
                  </p>
                </div>
              </div>
              <p className="fw700 fs16 white m0 modal--approval--text">
                Leave a Review
              </p>
              <div className="about--review--forms--full mt8">
                <textarea
                  type="text"
                  placeholder="Let others know how your experience went (200 characters)"
                  className="review--input"
                  maxlength="200"
                  onChange={(e) => setReviews(e.target.value)}
                />
              </div>
              <div className="review--star--box mt8">{starRating}</div>
              <button
                className="review--submit--button--confirmbooking mt24 fs16 fw700"
                onClick={approveService}
                disabled={rating == 0}
              >
                Confirm completion?
              </button>
              <p className="m0 white fw400 fs8 mb24 modal--text--confirmbooking--terms mt24">
                By clicking on "Confirm completion?", you confirm that you have
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

export default ApproveJobsModal;
