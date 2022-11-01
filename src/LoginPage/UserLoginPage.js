import React from "react";
import passwordKey from "../Assets/userloginpage/passwordkey.svg";
import emailIcon from "../Assets/userloginpage/emailicon.svg";
import "./userloginpage.css";

const UserLoginPage = () => {
  return (
    <div className="user--login--page--container">
      <p className="user--login--page--header">Login</p>
      <div className="user--login--page--input--container">
        <div className="email--login">
          <img src={emailIcon} className="user--login--input--icon" />
          <input
            type="text"
            placeholder="email"
            className="user--login-input"
          />
        </div>
        <div className="password--login">
          <img src={passwordKey} className="user--login--input--icon" />
          <input
            type="text"
            placeholder="password"
            className="user--login-input"
          />
        </div>
      </div>
      <p className="user--login--page--no--account--header">
        Don't have an account yet?
      </p>
      <div className="user--login--page--signup--button">Sign Up</div>
    </div>
  );
};

export default UserLoginPage;
