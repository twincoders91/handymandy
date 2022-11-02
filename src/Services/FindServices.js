import React from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";

const FindServices = () => {
  return (
    <>
      <div className="category--page--container">
        <div className="category--input--container">
          <input
            className="category--search--bar"
            placeholder="I need help with..."
          ></input>
          <img
            src={searchIcon}
            className="category--search--icon"
            alt="images"
          />
        </div>
        <div className="category--header">
          <span>21</span> Lighting services for you.
        </div>
        <div className="category--cards--container">
          <CategoryCards />
        </div>
      </div>
    </>
  );
};

export default FindServices;
