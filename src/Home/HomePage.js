import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import lighting from "../Assets/homepage/lightbulbs.svg";
import plumber from "../Assets/homepage/plumber.svg";
import airconditioner from "../Assets/homepage/airconditioner.svg";
import painting from "../Assets/homepage/painting.svg";
import waterheater from "../Assets/homepage/waterheater.svg";
import cabinets from "../Assets/homepage/cabinets.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import starfilled from "../Assets/homepage/starfilled.svg";
import starunfilled from "../Assets/homepage/starunfilled.svg";
import "./homepage.css";

const HomePage = ({ handymanServicesData, setServicesCategory }) => {
  const handleCategoryClick = () => {
    const categoryFilter = handymanServicesData.filter((filteredServices) => {
      return filteredServices.category === "Lighting";
    });
    setServicesCategory(categoryFilter);
  };

  return (
    <>
      <div className="home--page--container">
        <div className="home--page--top--section">
          <p className="home--page--header">
            Find local <span>handyman</span> for pretty much anything.
          </p>
          <p className="home--page--sub--header">Explore services</p>
        </div>
        <div className="home--page--middle--section">
          <div className="category--cards">
            <NavLink
              className="navlinks"
              to="/services"
              onClick={handleCategoryClick}
            >
              <div className="category--cards--box">
                <img
                  src={lighting}
                  className="category--cards--icon"
                  alt="images"
                ></img>
                <div className="category--cards--text">Lighting</div>
              </div>
            </NavLink>
            <div className="category--cards--box">
              <img
                src={plumber}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text">Plumbing</div>
            </div>
            <div className="category--cards--box">
              <img
                src={airconditioner}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text">Aircon</div>
            </div>
            <div className="category--cards--box">
              <img
                src={painting}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text">Painting</div>
            </div>
            <div className="category--cards--box">
              <img
                src={waterheater}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text">Heaters</div>
            </div>
            <div className="category--cards--box">
              <img
                src={cabinets}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text">Cabinets</div>
            </div>
          </div>
        </div>
        <div className="home--page--bottom--section mb36">
          <p className="home--page--sub--header2">Recommended for you</p>
          <div className="recommended--box mb24">
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
