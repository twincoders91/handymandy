import React, { useState } from "react";
import backButton from "../Assets/universal/backbutton.svg";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navbar--wrapper">
      <div className="container">
        <img src={backButton} className="back--button" />
        <p className="navbar--header">HandyMandy</p>
        <div className="navbar--menu">
          <button className="is-active">Inbox</button>
          <button>Jobs</button>
          <button>Services</button>
          <button>Alerts</button>
          <button>Profile</button>
        </div>

        <button
          className={
            isActive ? "navbar--hamburger is-active" : "navbar--hamburger"
          }
          onClick={() => {
            setIsActive((current) => !current);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
