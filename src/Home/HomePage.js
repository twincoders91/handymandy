import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import starfilled from "../Assets/homepage/starfilled.svg";
import starunfilled from "../Assets/homepage/starunfilled.svg";
import "./homepage.css";
import categoryData from "../DummyDataSets/Category";

const HomePage = ({
  setBackButtonVisibility,
  setFilteredServicesData,
  userNotifications,
}) => {
  const navigate = useNavigate();

  //==================== BACKEND FETCHING ======================
  //=============== Fetch services by category ===============
  const filterServices = async (items) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/services/category/${items}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      setFilteredServicesData(data);
      navigate("/services");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setBackButtonVisibility(false);
  }, []);

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
            {categoryData.map((items) => {
              return (
                <div
                  className="navlinks"
                  onClick={() => filterServices(items.category.toLowerCase())}
                >
                  <div className="category--cards--box">
                    <img
                      src={require(`../Assets/homepage/new/${items.icon}.svg`)}
                      className="category--cards--icon"
                      alt="images"
                    ></img>
                    <div className="category--cards--text">
                      {items.category}
                    </div>
                  </div>
                </div>
              );
            })}
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
