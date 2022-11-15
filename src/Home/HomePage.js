import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./homepage.css";
import categoryData from "../DummyDataSets/Category";
import FeaturedServicesCard from "./FeaturedServicesCard";

const HomePage = ({
  setBackButtonVisibility,
  setFilteredServicesData,
  setFeaturedData,
  setCurrentPage,
  userNotifications,
}) => {
  const navigate = useNavigate();
  const [filteredServicesCount, setFilteredServicesCount] = useState([]);

  //==================== BACKEND FETCHING ======================
  //=============== Fetch services by category ===============
  const filterServices = async (items) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/services/category/${items}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      setFilteredServicesData(data);
      navigate("/services");
    } catch (e) {
      console.error(e);
    }
  };

  //===================== Fetch total job count for services ============================
  const filterCountTotalJobs = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/services/totaljobs`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      const data = await res.json();
      console.log(data);
      //=============== Filter top 4 services by job count =====================
      setFilteredServicesCount(
        [...data].sort((a, b) => b.total_jobs - a.total_jobs).slice(0, 4)
      );
    } catch (e) {
      console.error(e);
    }
  };
  console.log(filteredServicesCount);

  useEffect(() => {
    setBackButtonVisibility(false);
    filterCountTotalJobs();
  }, []);

  return (
    <>
      <div className="home--page--container">
        <div className="home--page--top--section">
          <p className="home--page--header">
            Find local <span>handyman</span> for pretty much anything.
          </p>
          <p className="home--page--sub--header">Explore services</p>
        </div>
        <div className="home--page--middle--section">
          <div className="category--cards">
            {categoryData.map((items) => {
              return (
                <div
                  className="navlinks"
                  onClick={() => filterServices(items.category.toLowerCase())}
                >
                  <div className="category--cards--box">
                    <img
                      src={require(`../Assets/homepage/new/${items.icon}.svg`)}
                      className="category--cards--icon"
                      alt="images"
                    ></img>
                    <div className="category--cards--text">
                      {items.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home--page--bottom--section mb36">
          <p className="home--page--sub--header2">Hot Picks</p>
          <div className="recommended--grid--box">
            {filteredServicesCount.map((item) => {
              return (
                <FeaturedServicesCard
                  services_id={item.services_id}
                  setFeaturedData={setFeaturedData}
                  setCurrentPage={setCurrentPage}
                  setBackButtonVisibility={setBackButtonVisibility}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
