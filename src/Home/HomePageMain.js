import React, { useEffect, useState } from "react";
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
  setBackButtonVisibility,
  backButtonVisibility,
  setCurrentPage,
  currentPage,
}) => {
  const [createService, setCreateService] = useState(false);

  //============================Filtering HM data down to HM's username============================
  const HMindividualServices = handymanServicesData.filter(
    (filteredServices) => {
      return filteredServices.username === username;
    }
  );

  //======================================================================

  useEffect(() => {
    // if (charSelect == "handyman") {
    //   setCurrentPage("HomePageHandyman");
    // } else if (charSelect == "user") {
    //   setCurrentPage("HomePageUser");
    // }
  });

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
        />
      )}
      {charSelect == "handyman" && currentPage === "HomePageHandyman" && (
        // createService == false
        <HomePageHandyman
          HMindividualServices={HMindividualServices}
          setCreateService={setCreateService}
          setBackButtonVisibility={setBackButtonVisibility}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "CreateServicesHandyman" && (
        // createService == true
        <CreateServicesHandyman
          setCreateService={setCreateService}
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
