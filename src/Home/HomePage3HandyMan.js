import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import HmServicesCards from "./HmServicesCards";

const HomePage3HandyMan = ({
  setUpdateService,
  setUpdateServiceDetails,
  setCurrentPage,
  individualHMServices,
  setIndividualHMServices,
  hmRatings,
  setBackButtonVisibility,
  hm_id,
}) => {
  console.log(individualHMServices);
  console.log(hm_id);
  const [hmProfile_image, setHmProfile_image] = useState("");
  //============================= BACKEND FETCHING ================================
  //============================= DELETE Service ================================

  const deleteServiceDB = async (id, hm_id) => {
    try {
      const res = await fetch("http://127.0.0.1:8001/services/inactive", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: id,
        }),
      });
      fetchIndividualHMServices(hm_id);
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
    } catch (e) {
      console.log(e);
    }
  };

  // ====================== User Profile Image fetching =======================
  const fetchHmProfileImage = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/profileimage/any`
      );
      const hmProfileImage = await res.json();
      if (hmProfileImage.length === 0) {
        setHmProfile_image(defaultavatar);
      } else {
        setHmProfile_image(hmProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //=======================Clicking Create Service Button============================
  const handleCreateServiceClick = () => {
    setCurrentPage("CreateServicesHandyman");
  };

  //=========================Clicking Edit Service Button============================
  const handleUpdateServiceClick = (services) => {
    setUpdateService(true);
    setUpdateServiceDetails(services);
    console.log(services);
  };

  //=========================Clicking Delete Service Button============================
  const handleDeleteServiceClick = (services) => {
    deleteServiceDB(services.services.services_id, services.services.hm_id);
  };

  useEffect(() => {
    setBackButtonVisibility(false);
    fetchHmProfileImage();
  }, []);

  return (
    <>
      <p className="m0 fw700 fs32 mt24 white hm3--header">Your Services</p>
      {individualHMServices.map((services) => {
        return (
          <HmServicesCards
            setUpdateService={setUpdateService}
            setUpdateServiceDetails={setUpdateServiceDetails}
            handleDeleteServiceClick={handleDeleteServiceClick}
            handleUpdateServiceClick={handleUpdateServiceClick}
            services={services}
            hmRatings={hmRatings}
            hmProfile_image={hmProfile_image}
          />
        );
      })}
      <div className="hm3--info--view--create--button--container mb48">
        <NavLink className="navlinks" to="/createservice">
          <button
            className="hm3--info--view--create--button br4 fw700 fs24 mt60"
            onClick={handleCreateServiceClick}
          >
            Create
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default HomePage3HandyMan;
