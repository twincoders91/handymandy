import { React, useMemo, useState } from "react";
import ReactDom from "react-dom";
import "./modal.css";
import starUnfilled from "../../Assets/services/starunfilled.svg";
import starFilled from "../../Assets/services/starfilled.svg";
import crossButton from "../../Assets/services/crossbutton.svg";

const AcceptedServicesModal = ({ setAcceptedServicesModal }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

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

  console.log(hoverRating);
  console.log(rating);

  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--overlay">
          <div className="modal--container">
            <p className="fw700 fs28 white modal--header m0 mt24 mb24">
              Leave a review
            </p>
            <p className="m0 white fw700 fs16 mb8 modal--text">
              Lets help the community
            </p>
            <p className="m0 white fw400 fs12 mb24 modal--text">
              Share your experience with Plumber Jack and leave a review for our
              community!
            </p>
            <p className="fw700 fs16 white m0 modal--text">Review</p>
            <div className="about--input--forms--full mt8">
              <textarea
                type="text"
                placeholder="Let others know how your experience went (200 characters)"
                className="review--input"
              />
            </div>
            <div className="review--star--box mt8">{starRating}</div>
            <button className="review--submit--button fs16 fw700">
              Complete job
            </button>
            <img
              src={crossButton}
              className="modal--cross--button"
              onClick={() => setAcceptedServicesModal(false)}
            />
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default AcceptedServicesModal;
