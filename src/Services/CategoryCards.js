import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";

const CategoryCards = () => {
  return (
    <div className="individual--category--card mt24">
      <img
        src={recommended4usampleimage}
        className="individual--category--image"
        alt="images"
      />
      <div className="individual--category--description--container">
        <div className="individual--category--description--section ml12">
          <p className="individual--category--title fs16 fw700 m0 white mb4">
            Plumbing services
          </p>
          <p className="individual--category--name fs12 fw400 m0 white mb4">
            Plumber Jack
          </p>
          <div className="individual--category--profile--stars mb4">
            <img src={recommendedprofile} alt="images"></img>
            <div className="individual--category--stars">
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
            </div>
          </div>
          <p className="m0 fw700 fs8 white">34 reviews | 82 jobs completed</p>
        </div>
        <div className="individual--category--price ml12">
          <p className="starting--from m0 white fw700">starting from</p>
          <p className="starting--from--price m0 fs28 fw700">$150</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
