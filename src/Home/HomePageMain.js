import React from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  totalReviews,
  averageRating,
  totalJobs,
  charSelect,
  handymanServicesData,
  setServicesCategory,
}) => {
  return (
    <div>
      <Navbar />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
        />
      )}
      {charSelect == "handyman" && (
        <HomePageHandyman handymanServicesData={handymanServicesData} />
      )}

      {/* <CreateServicesHandyman /> */}
      {/* <ProfileHandyman
        averageRating={averageRating}
        totalReviews={totalReviews}
        totalJobs={totalJobs}
      /> */}
    </div>
  );
};

export default HomePageMain;
