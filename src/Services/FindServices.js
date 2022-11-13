import React, { useEffect, useState } from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";

const FindServices = ({
  servicesCategorySelection,
  filteredServicesData,
  // setFilteredServicesData,
  setChooseCategory,
  setBackButtonVisibility,
  setSelectedServiceId,
  setViewHmProfile,
}) => {
  //==================== Handle Button Clicks ======================
  const handleCategoryCard = (id) => {
    setChooseCategory(true);
    setSelectedServiceId(id);
    setViewHmProfile(true);
  };
  useEffect(() => {
    setBackButtonVisibility(true);
    // filterServices();
  }, []);

  return (
    <>
      <div className="category--page--container">
        <div className="category--input--container">
          <input
            className="category--search--bar"
            placeholder="I need help with..."
          ></input>
          <img
            src={searchIcon}
            className="category--search--icon"
            alt="images"
          />
        </div>
        <div className="category--header">
          <span>{filteredServicesData.length}</span> services for you
        </div>
        {filteredServicesData.length > 0 ? (
          filteredServicesData.map((hmService) => {
            return (
              <CategoryCards
                first_name={hmService.first_name}
                last_name={hmService.last_name}
                hm_id={hmService.hm_id}
                price_from={hmService.price_from}
                description={hmService.description}
                id={hmService.id}
                title={hmService.title}
                handleCategoryCard={handleCategoryCard}
                setViewHmProfile={setViewHmProfile}
                services_id={hmService.services_id}
              />
            );
          })
        ) : (
          <div className="fs32 fw700 mt24">No Services</div>
        )}
      </div>
    </>
  );
};

export default FindServices;
