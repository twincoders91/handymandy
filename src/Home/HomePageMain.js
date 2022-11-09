import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  charSelect,
  handymanServicesData,
  setServicesCategory,
  setServicesCategorySelection,
  username,
  setBackButtonVisibility,
  backButtonVisibility,
  setUpdateServiceDetails,
}) => {
  //============================States to make sure correct pages show============================
  const [updateService, setUpdateService] = useState(false);

  //============================Filtering HM data down to HM's username===========================
  const HMindividualServices = handymanServicesData.filter(
    (filteredServices) => {
      return filteredServices.username === username;
    }
  );

  //======================================================================

  console.log(charSelect);

  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
      />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
          setServicesCategorySelection={setServicesCategorySelection}
          setBackButtonVisibility={setBackButtonVisibility}
        />
      )}
      {charSelect == "handyman" && updateService == false && (
        <HomePageHandyman
          HMindividualServices={HMindividualServices}
          setUpdateService={setUpdateService}
          setUpdateServiceDetails={setUpdateServiceDetails}
          setBackButtonVisibility={setBackButtonVisibility}
        />
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
