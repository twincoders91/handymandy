import { React, useMemo, useState } from "react";
import "./modal.css";
import starUnfilled from "../../Assets/services/starunfilled.svg";
import starFilled from "../../Assets/services/starfilled.svg";
import { hover } from "@testing-library/user-event/dist/hover";

const AcceptedServicesModal = () => {
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

  const starRating = useMemo(() => {
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
  }, [rating]);

  console.log(hoverRating);
  console.log(rating);

  return (
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
        <button className="review--submit--button fs16 fw700">Submit</button>
      </div>
    </div>
  );
};

export default AcceptedServicesModal;
