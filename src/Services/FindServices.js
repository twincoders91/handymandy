import React, { useEffect, useState } from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";

const FindServices = ({
  servicesCategory,
  servicesCategorySelection,
  setChooseCategory,
  setServiceInfo,
  setBackButtonVisibility,
  setFilteredServicesData,
  filteredServicesData,
}) => {
  //==================== Handle Button Clicks ======================
  const handleCategoryCard = (cardData) => {
    setChooseCategory(true);
    // setServiceInfo(cardData);
  };

  //==================== BACKEND FETCHING ======================
  //=============== Fetch services by category ===============
  const filterServices = async () => {
    const res = await fetch(
      `http://127.0.0.1:8001/category/${servicesCategorySelection}`,
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
  };

  useEffect(() => {
    setBackButtonVisibility(true);
    filterServices();
  });

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
          <span>{servicesCategory.length}</span> Lighting services for you.
        </div>
        {filteredServicesData.map((hmService) => {
          return (
            <CategoryCards
              first_name={hmService.first_name}
              last_name={hmService.last_name}
              category={hmService.category}
              hm_id={hmService.hm_id}
              // service_image={hmService.service_image}
              price_from={hmService.price_from}
              type_of_work={hmService.type_of_work}
              description={hmService.description}
              handleCategoryCard={handleCategoryCard}
            />
          );
        })}
        {/* {servicesCategory.map((hmService) => {
          return (
            <CategoryCards
              first_name={hmService.first_name}
              category={hmService.category}
              service_image={hmService.service_image}
              price_from={hmService.price_from}
              type_of_work={hmService.type_of_work}
              description={hmService.description}
              handleCategoryCard={handleCategoryCard}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default FindServices;
