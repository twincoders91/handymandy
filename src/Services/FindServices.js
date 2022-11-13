import React, { useEffect, useState } from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import pricedown from "../Assets/universal/pricesortdown.svg";
import priceup from "../Assets/universal/pricesortup.svg";
import CategoryCards from "./CategoryCards";

const FindServices = ({
  servicesCategorySelection,
  filteredServicesData,
  setFilteredServicesData,
  setChooseCategory,
  setBackButtonVisibility,
  setSelectedServiceId,
  setViewHmProfile,
}) => {
  console.log(filteredServicesData);

  //==================== Handle Button Clicks ======================
  const handleCategoryCard = (id) => {
    setChooseCategory(true);
    setSelectedServiceId(id);
    setViewHmProfile(true);
  };

  const handleSortDown = () => {
    setFilteredServicesData(
      [...filteredServicesData].sort((a, b) => a.price_from - b.price_from)
    );
  };
  const handleSortUp = () => {
    setFilteredServicesData(
      [...filteredServicesData].sort((a, b) => b.price_from - a.price_from)
    );
  };
  console.log(filteredServicesData);
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
        <div className="sorting--buttons--box">
          <img src={priceup} onClick={handleSortDown} />
          <img src={pricedown} onClick={handleSortUp} className="ml4" />
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
