import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";

const CategoryCards = () => {
  return (
    <div className="individual--category--card--container">
      <div className="recommended--cards">
        <img
          src={recommended4usampleimage}
          className="recommended--image"
          alt="images"
        />
        <div className="recommended--description--section">
          <p className="recommended--title">Plumbing services</p>
          <p className="recommended--name">Plumber Jack</p>
          <div className="recommended--profile--stars">
            <img src={recommendedprofile} alt="images"></img>
            <div className="recommended--stars">
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
