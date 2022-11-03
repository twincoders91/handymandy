import { React, useState } from "react";
import "./modal.css";

const AcceptedServicesModal = () => {
  const [rating, setRating] = useState(0);

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
        <button className="review--submit--button">Submit</button>
      </div>
    </div>
  );
};

export default AcceptedServicesModal;
