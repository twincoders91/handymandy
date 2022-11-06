import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./editprofile.css";

import downArrow from "../Assets/universal/downarrow.svg";
import Navbar from "../Components/Navbar";
import handymanData from "../DummyDataSets/profileHandyman";
import uploadimage from "../Assets/profile/uploadimage.svg";

const EditProfileHandyMan = ({ setCharSelect, setAccountCreated }) => {
  const [specialities, setSpecialities] = useState(false);
  const [years, setYears] = useState(false);

  //================= Handle Button Clicks ===================
  const handleClickSpecialities = () => {
    setSpecialities((current) => !current);
  };
  const handleClickSpecialitiesSelection = () => {
    setSpecialities((current) => !current);
  };
  const handleClickYears = () => {
    setYears((current) => !current);
  };
  const handleClickYearsSelection = () => {
    setYears((current) => !current);
  };

  //================= Confirm account created ===================
  const handleSubmitButtonClick = () => {
    setAccountCreated(true);
  };

  return (
    <div className="">
      <Navbar />
      <div className="edit-profile-image--container">
        <div className="edit--profile--image--box relative">
          <img
            src={require(`../Assets/profile/${handymanData[0].profile_image}`)}
            className=" edit--profile--image"
          />
          <div className="middle--content absolute">
            <img src={uploadimage} className="middle--image"></img>
          </div>
        </div>
      </div>
      <div className="edit--profile--container relative mb36">
        <div className="create--profile--header--container mb24">
          <p className="fs24 fw700 mb8 white create--profile--header--font">
            Let's edit your profile.
          </p>
          <span className="fs14 fw400 white">
            HandyMandy uses this information to help ensure trust and safety for
            HandyMany users.
          </span>
        </div>
        <div className="create--profile--middle--container mb36">
          <span className="fs16 fw700 white">Legal name</span>
          <div className="legal--name--container mt8 mb24">
            <div className="universal--input--forms--half">
              <input
                type="text"
                placeholder="First name"
                className="create--account--input ml12"
              />
            </div>
            <div className="universal--input--forms--half">
              <input
                type="text"
                placeholder="Last name"
                className="create--account--input ml12"
              />
            </div>
          </div>
          <span className="fs16 fw700 white">Email address</span>
          <div className="legal--name--container mt8 mb24">
            <div className="universal--input--forms--full">
              <input
                type="text"
                placeholder="Email address"
                className="create--account--input ml12"
              />
            </div>
          </div>
          <div className="">
            <p className="fs16 fw700 mb8 white create--profile--header--font">
              Business name.
            </p>
            <span className="fs12 fw400 white">
              If your business name is your name, please enter your name
              instead.
            </span>
          </div>

          <div className="home--address--container mt8">
            <div className="universal--input--forms--full mb8">
              <input
                type="text"
                placeholder="e.g. Handyman services"
                className="create--account--input ml12"
              />
            </div>
            <span className="fs16 fw700 white">
              What are your specialities?{" "}
            </span>
            <div className="mb8">
              <div
                className="specialities--box--selection  mt8 relative"
                onClick={() => handleClickSpecialities()}
              >
                Select your specialities
                <img
                  src={downArrow}
                  className="absolute create--account--downarrow"
                ></img>
              </div>
              {specialities && (
                <div className="dropdown--menu--specialities absolute">
                  <div
                    className="specialities--selection  fs14 fw300"
                    onClick={() => handleClickSpecialitiesSelection()}
                  >
                    Lighting
                  </div>
                  <div
                    className="specialities--selection  fs14 fw300"
                    onClick={() => handleClickSpecialitiesSelection()}
                  >
                    Lighting
                  </div>
                  <div
                    className="specialities--selection fs14 fw300"
                    onClick={() => handleClickSpecialitiesSelection()}
                  >
                    Lighting
                  </div>
                </div>
              )}
            </div>
            <span className="fs16 fw700 white">Years in business </span>
            <div className="mb8">
              <div
                className="specialities--box--selection mt8  relative"
                onClick={() => handleClickYears()}
              >
                Select number of years
                <img
                  src={downArrow}
                  className="absolute create--account--downarrow"
                ></img>
              </div>
              {years && (
                <div className="dropdown--menu--specialities absolute">
                  <div
                    className="specialities--selection  fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    0-2 years
                  </div>
                  <div
                    className="specialities--selection  fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    2-4 years
                  </div>
                  <div
                    className="specialities--selection fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    4-6 years
                  </div>
                  <div
                    className="specialities--selection fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    6-8 years
                  </div>
                  <div
                    className="specialities--selection fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    8-10 years
                  </div>
                  <div
                    className="specialities--selection fs14 fw300"
                    onClick={() => handleClickYearsSelection()}
                  >
                    {">"}10
                  </div>
                </div>
              )}
            </div>
            <span className="fs16 fw700 white">About your business</span>
            <div className="about--business--input--forms--full mt8">
              <textarea
                type="text"
                placeholder="Let others know more about your business (200 characters)"
                className="create--account--input ml12 mt12"
              />
            </div>
          </div>
          <div className="buttons--align--center--box">
            <NavLink className="navlinks" to="/home">
              <button
                className="user--create--account--button"
                onClick={() => handleSubmitButtonClick()}
              >
                Submit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileHandyMan;
