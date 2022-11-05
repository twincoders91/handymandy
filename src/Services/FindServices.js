import React from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";

const FindServices = ({
  averageRating,
  totalJobs,
  totalReviews,
  handymanServicesData,
  servicesCategory,
  setChooseCategory,
}) => {
  const handleCategoryCard = () => {
    setChooseCategory(true);
  };

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
        {servicesCategory.map((hmService) => {
          return (
            <CategoryCards
              first_name={hmService.first_name}
              category={hmService.category}
              service_image={hmService.service_image}
              price_from={hmService.price_from}
              type_of_work={hmService.type_of_work}
              handleCategoryCard={handleCategoryCard}
            />
          );
        })}
      </div>
    </>
  );
};

export default FindServices;
