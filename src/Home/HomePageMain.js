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
  username,
}) => {
  const [createService, setCreateService] = useState(false);

  //============================Filtering HM data down to HM's username============================
  const HMindividualServices = handymanServicesData.filter(
    (filteredServices) => {
      return filteredServices.username === username;
    }
  );

  //======================================================================

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
          HMindividualServices={HMindividualServices}
          setCreateService={setCreateService}
        />
      )}
      {createService == true && (
        <CreateServicesHandyman setCreateService={setCreateService} />
      )}
      {/* <ProfileHandyman
        averageRating={averageRating}
        totalReviews={totalReviews}
        totalJobs={totalJobs}
      /> */}
    </div>
  );
};

export default HomePageMain;
