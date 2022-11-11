import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  charSelect,
  setServicesCategory,
  setServicesCategorySelection,
  username,
  setBackButtonVisibility,
  backButtonVisibility,
  setUpdateServiceDetails,
  setHm_id,
  hm_id,
  individualHMServices,
  setFilteredServicesData,
}) => {
  //============================States to make sure correct pages show============================
  const [updateService, setUpdateService] = useState(false);
  //============================ STAR states ============================
  const [hmRatings, setHmRatings] = useState([]);

  //============================[OLD HARDCODE] Filtering HM data down to HM's username===========================
  // const HMindividualServices = handymanServicesData.filter(
  //   (filteredServices) => {
  //     return filteredServices.username === username;
  //   }
  // );

  //===================================== Get HM ID ========================================
  console.log(username);
  console.log(charSelect);

  const getHandymanID = async () => {
    if (!username || charSelect === "user") return;
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${username}/id`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      console.log(res);
      const data = await res.json();

      setHm_id(data.id);
      getHmRatings(data.id);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  //===================================== Get User ID ========================================
  console.log(username);
  console.log(charSelect);

  const getUserID = async () => {
    if (!username || charSelect === "handyman") return;
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${username}/id`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      console.log(res);
      const data = await res.json();

      setHm_id(data.id);
      getHmRatings(data.id);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  //===================================== STAR RATINGS ========================================
  const getHmRatings = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8001/handyman/${id}/averageratingandjobs`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    );
    const ratingData = await res.json();
    setHmRatings(ratingData);
  };

  //================================================================================

  useEffect(() => {
    getHandymanID();
  }, []);

  console.log(individualHMServices);

  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
      />
      {charSelect == "user" && (
        <HomePage
          setServicesCategory={setServicesCategory}
          setServicesCategorySelection={setServicesCategorySelection}
          setBackButtonVisibility={setBackButtonVisibility}
          setFilteredServicesData={setFilteredServicesData}
        />
      )}
      {charSelect == "handyman" && updateService == false && (
        <HomePageHandyman
          setUpdateService={setUpdateService}
          setUpdateServiceDetails={setUpdateServiceDetails}
          setBackButtonVisibility={setBackButtonVisibility}
          hm_id={hm_id}
          individualHMServices={individualHMServices}
          setHmRatings={setHmRatings}
          hmRatings={hmRatings}
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
