import React from "react";
import "./services.css";
import searchIcon from "../Assets/categorypage/searchicon.svg";
import CategoryCards from "./CategoryCards";
import handymanServicesData from "../DummyDataSets/HandymanServices";

const FindServices = () => {
  console.log(handymanServicesData);

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
          <span>21</span> Lighting services for you.
        </div>
        {handymanServicesData.map((hmService) => {
          return (
            <CategoryCards
              first_name={hmService.first_name}
              title={hmService.title}
              service_image={hmService.service_image}
              price_from={hmService.price_from}
              type_of_work={hmService.type_of_work}
            />
          );
        })}
      </div>
    </>
  );
};

export default FindServices;
