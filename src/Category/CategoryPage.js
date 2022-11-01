import React from "react";
import "./categorypage.css";
import Navbar from "../Components/Navbar";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";

const CategoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="category--page--container">
        <div className="category--input--container">
          <input
            className="category--search--bar"
            placeholder="search services..."
          ></input>
          <img src={searchIcon} className="category--search--icon" />
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

export default CategoryPage;
