import React from "react";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";
import downArrow from "../../Assets/universal/downarrow.svg";

const CreateAccount2Handyman = () => {
  return (
    <>
      <img src={backButton} className="back--button" />
      <div className="create--profile--header--container mb24">
        <p className="fs16 fw700 mb8 white create--profile--header--font">
          Let's create your profile.
        </p>
        <span className="fs12 fw400 white">
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
            If your business name is your name, please enter your name instead.
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
          <span className="fs16 fw700 white">What are your specialities? </span>
          <div className="universal--input--forms--full mb8 mt8 relative">
            <input
              type="text"
              placeholder="e.g. Plumbing"
              className="create--account--input ml12"
            />
            <img
              src={downArrow}
              className="absolute create--account--downarrow"
            ></img>
          </div>
          <span className="fs16 fw700 white">Years in business </span>
          <div className="universal--input--forms--full mt8 mb8 relative">
            <input
              type="text"
              placeholder="Number of years"
              className="create--account--input ml12"
            />
            <img
              src={downArrow}
              className="absolute create--account--downarrow"
            ></img>
          </div>
          <span className="fs16 fw700 white">About </span>
          <div className="about--input--forms--full mt8">
            <textarea
              type="text"
              placeholder="Tell us about yourself (200 characters)"
              className="create--account--input ml12 mt12"
            />
          </div>
        </div>
      </div>
      <button className="user--create--account--button">Submit</button>
    </>
  );
};

export default CreateAccount2Handyman;
