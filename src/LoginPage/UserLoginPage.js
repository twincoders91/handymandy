import React from "react";
import { NavLink } from "react-router-dom";
import passwordKey from "../Assets/userloginpage/passwordkey.svg";
import emailIcon from "../Assets/userloginpage/emailicon.svg";
import "./userloginpage.css";

const UserLoginPage = ({ charSelect, accountCreated }) => {
  return (
    <div className="user--login--page--container">
      <p className="user--login--page--header mb36 fw700 fs32 m0 mt46">Login</p>
      <div className="universal--input--forms mb24">
        <img src={emailIcon} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="email"
          className="user--login-input ml12"
        />
      </div>
      <div className="universal--input--forms">
        <img src={passwordKey} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="password"
          className="user--login-input ml12 fw400 fs16"
        />
      </div>
      {!accountCreated && (
        <NavLink to="/signup">
          <button className="home--buttons fs24 fw700 br4 mt24">Login</button>
        </NavLink>
      )}
      {accountCreated && (
        <NavLink to="/home">
          <button className="home--buttons fs24 fw700 br4 mt24">Login</button>
        </NavLink>
      )}

      <p className="user--login--page--no--account--header">
        Don't have an account yet?
      </p>
      <NavLink className="navlinks" to="/signup">
        <button className="home--buttons fw700 fs24 mt20 br4">Sign Up</button>
      </NavLink>
    </div>
  );
};

export default UserLoginPage;
