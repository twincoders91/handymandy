import React from "react";
import "./loginpage.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home--container">
      <div className="home--content">
        <p className="home--header fw700 fs56">Handy Mandy</p>
        <div className="home--buttons--container">
          <NavLink className="navlinks" to="/signup">
            <button className="home--buttons fs24 fw700 br4">Sign Up</button>
          </NavLink>
          <NavLink className="navlinks" to="/login">
            <button className="home--buttons fs24 fw700 br4">Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
