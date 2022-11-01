import React from "react";
import passwordKey from "../Assets/userloginpage/passwordkey.svg";
import emailIcon from "../Assets/userloginpage/emailicon.svg";

const UserLoginPage = () => {
  return (
    <div className="user--login--page--container">
      <p className="user--login--page--header">Login</p>
      <div className="user--login--page--input--container">
        <div className="email--login">
          <input placeholder="email" />
          <img src={emailIcon} />
        </div>
        <div className="password--login">
          <input placeholder="password" />
          <img src={passwordKey} />
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
