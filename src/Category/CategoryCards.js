import React from "react";
import categorycardtestimage from "../Assets/categorypage/categorycardtestimage.svg";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";

const CategoryCards = () => {
  return (
    <div className="individual--category--card--container">
      <div className="individual--category--card--image"></div>
      <div className="individual--category--card--content--container">
        <div className="individual--category--card--content--container--L">
          <div className="recommended--description--section">
            <div className="individual--category--card--header">
              Plumbing services
            </div>
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
        <div className="individual--category--card--content--container--R">
          <p>starting from</p>
          <p className="individual--category--card--price">$150</p>
        </div>
      </div>
      <p className="individual--category--reviews--jobs--completed">
        34 reviews | 82 jobs completed
      </p>
    </div>
  );
};

export default CategoryCards;
