import React from "react";
import "./loginpage.css";

const HomePage = () => {
  return (
    <div className="home--container">
      <div className="home--content">
        <p className="home--header fw700 fs56">Handy Mandy</p>
        <div className="home--buttons--container">
          <button className="home--buttons fs24 fw700 br4">Sign Up</button>
          <button className="home--buttons fs24 fw700 br4">Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
