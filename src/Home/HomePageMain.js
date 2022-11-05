import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  charSelect,
  handymanServicesData,
  setServicesCategory,
  username,
  setBackButtonVisibility,
  backButtonVisibility,
  setCurrentPage,
  currentPage,
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
        setCurrentPage={setCurrentPage}
        charSelect={charSelect}
        currentPage={currentPage}
      />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
          setCurrentPage={setCurrentPage}
        />
      )}
      {charSelect == "handyman" &&
        currentPage === "HomePageHandyman" &&
        updateService == false && (
          <HomePageHandyman
            HMindividualServices={HMindividualServices}
            setUpdateService={setUpdateService}
            setUpdateServiceDetails={setUpdateServiceDetails}
            setBackButtonVisibility={setBackButtonVisibility}
            setCurrentPage={setCurrentPage}
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
