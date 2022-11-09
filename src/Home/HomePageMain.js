import React, { useEffect, useState } from "react";
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
  setHm_id,
}) => {
  //============================States to make sure correct pages show============================
  const [updateService, setUpdateService] = useState(false);

  //============================Filtering HM data down to HM's username===========================

  //======================================================================

  const getHandymanID = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${username}/id`);
      const data = await res.json();
      console.log(data);
      setHm_id(data.id);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHandymanID();
  }, []);

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
