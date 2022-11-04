import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  charSelect,
  handymanServicesData,
  setServicesCategory,
}) => {
  const [createService, setCreateService] = useState(false);

  return (
    <div>
      <Navbar />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
        />
      )}
      {charSelect == "handyman" && createService == false && (
        <HomePageHandyman
          handymanServicesData={handymanServicesData}
          setCreateService={setCreateService}
        />
      )}
      {createService == true && <CreateServicesHandyman />}
      {/* <ProfileHandyman
        averageRating={averageRating}
        totalReviews={totalReviews}
        totalJobs={totalJobs}
      /> */}
    </div>
  );
};

export default HomePageMain;
