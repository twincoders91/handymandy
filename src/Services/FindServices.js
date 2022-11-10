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
}) => {
  //==================== Handle Button Clicks ======================
  const handleCategoryCard = (id) => {
    setChooseCategory(true);
    setSelectedServiceId(id);
  };

  // //==================== BACKEND FETCHING ======================
  // //=============== Fetch services by category ===============
  // const filterServices = async () => {
  //   try {
  //     const res = await fetch(
  //       `http://127.0.0.1:8001/services/category/${servicesCategorySelection}`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         method: "GET",
  //       }
  //     );
  //     const data = await res.json();
  //     setFilteredServicesData(data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

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
                category={hmService.category}
                hm_id={hmService.hm_id}
                price_from={hmService.price_from}
                type_of_works={hmService.type_of_works}
                description={hmService.description}
                id={hmService.id}
                handleCategoryCard={handleCategoryCard}
              />
            );
          })
        ) : (
          <div className="fs32 fw700 mt24">No Services</div>
        )}
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
