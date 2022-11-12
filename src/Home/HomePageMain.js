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
  setUser_id,
  setHm_id,
  hm_id,
  individualHMServices,
  setIndividualHMServices,
  setFilteredServicesData,
  setCurrentPage,
}) => {
  //============================States to make sure correct pages show============================
  const [updateService, setUpdateService] = useState(false);
  //============================ STAR states ============================
  const [hmRatings, setHmRatings] = useState([]);

  //===================================== Get HM ID ========================================
  //============================= Get Handyman ID ================================
  console.log(charSelect);
  console.log(username);

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
      const data = await res.json();
      setHm_id(data.id);
      getHmRatings(data.id);
      fetchIndividualHMServices(data.id);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  //===================================== Get User ID ========================================

  const getUserID = async () => {
    if (!username || charSelect === "handyman") return;
    try {
      const res = await fetch(`http://127.0.0.1:8001/user/${username}/id`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setUser_id(data.id);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  //============================= Get Handyman Ratings ================================

  // const getUserID = async () => {
  //   if (!username || charSelect === "handyman") return;
  //   try {
  //     const res = await fetch(`http://127.0.0.1:8001/handyman/${username}/id`, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       method: "GET",
  //     });
  //     console.log(res);
  //     const data = await res.json();

  //     setHm_id(data.id);
  //     getHmRatings(data.id);
  //     return data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  //===================================== STAR RATINGS ========================================
  const getHmRatings = async (id) => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  };

  //============================= Fetch all Services ================================

  const fetchIndividualHMServices = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/services/handyman/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setIndividualHMServices(data);
      console.log(individualHMServices);
    } catch (e) {
      console.log(e);
    }
  };

  //================================================================================

  useEffect(() => {
    getHandymanID();
    getUserID();
  }, []);

  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
        setCurrentPage={setCurrentPage}
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
          setIndividualHMServices={setIndividualHMServices}
          setHmRatings={setHmRatings}
          hmRatings={hmRatings}
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
