import React from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage />
      <HomePageHandyman /> */}
      {/* <CreateServicesHandyman /> */}
      <ProfileHandyman />
    </div>
  );
};

export default HomePageMain;
