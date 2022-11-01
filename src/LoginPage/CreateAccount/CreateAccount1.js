import React from "react";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";
import username from "../../Assets/createaccount/username.svg";
import email from "../../Assets/createaccount/email.svg";
import password from "../../Assets/createaccount/password.svg";

const CreateAccount1 = () => {
  return (
    <div className="create--account--container">
      <img src={backButton} className="back--button" />
      <p className="character--select--header mb36">Create account</p>

      <div className="universal--input--forms mb24">
        <img src={username} className="user--login--input--icon" />
        <input
          type="text"
          placeholder="username"
          className="user--login-input"
        />
      </div>
      <div className="universal--input--forms mb36">
        <img src={email} className="user--login--input--icon" />
        <input type="text" placeholder="email" className="user--login-input" />
      </div>
      <span className="create--account--font1 fs16 fw700 white mb8">
        Create password
      </span>
      <div className="universal--input--forms mb24">
        <img src={password} className="user--login--input--icon" />
        <input
          type="text"
          placeholder="password"
          className="user--login-input"
        />
      </div>
      <div className="universal--input--forms mb36">
        <img src={password} className="user--login--input--icon" />
        <input
          type="text"
          placeholder="password"
          className="user--login-input"
        />
      </div>
      <div className="user--create--account--button">Create Account</div>
    </div>
  );
};

export default CreateAccount1;
