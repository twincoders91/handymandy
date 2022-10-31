import React from "react";
import "./loginpage.css";

const HomePage = () => {
  return (
    <div className="home--container">
      <div className="home--content">
        <p className="home--header">Handy Mandy</p>
        <div className="home--buttons--container">
          <button className="home--buttons">Sign Up</button>
          <button className="home--buttons">Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
