import React from "react";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <HomePageHandyman />
    </div>
  );
};

export default HomePageMain;
