import React from "react";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";

const CreateAccount2User = () => {
  return (
    <div className="create--account2--container">
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
      <div className="create--profile--middle--container">
        <span className="fs12 fw400 white">Legal name</span>
        <div className="legal--name--container mt8 mb24">
          <div className="universal--input--forms--half">
            <input
              type="text"
              placeholder="First name"
              className="user--login-input"
            />
          </div>
          <div className="universal--input--forms--half">
            <input
              type="text"
              placeholder="Last name"
              className="user--login-input"
            />
          </div>
        </div>
        <span className="fs12 fw400 white">Email address</span>
        <div className="legal--name--container mt8 mb24">
          <div className="universal--input--forms--full">
            <input
              type="text"
              placeholder="Email address"
              className="user--login-input"
            />
          </div>
        </div>
        <span className="fs12 fw400 white">Home address</span>
        <div className="home--address--container mt8">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="Street address"
              className="user--login-input"
            />
          </div>
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="Block number #"
              className="user--login-input"
            />
          </div>
          <div className="universal--input--forms--full">
            <input
              type="text"
              placeholder="Postal code"
              className="user--login-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount2User;
