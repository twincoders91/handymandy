import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";

const CategoryCards = ({
  first_name,
  category,
  service_image,
  price_from,
  type_of_work,
  handleCategoryCard,
  description,
}) => {
  return (
    <div
      className="individual--category--card mt24"
      onClick={() => {
        handleCategoryCard({
          first_name,
          category,
          price_from,
          description,
          type_of_work,
        });
      }}
    >
      <img
        src={recommended4usampleimage}
        className="individual--category--image"
        alt="images"
      />
      <div className="individual--category--description--container">
        <div className="individual--category--description--section ml12">
          <p className="individual--category--title fs16 fw700 m0 white mb4">
            {category}
          </p>
          <p className="individual--category--name fs12 fw400 m0 white mb4">
            {first_name}
          </p>
          <div className="individual--category--profile--stars mb4">
            <img src={recommendedprofile} alt="images"></img>
            <div className="individual--category--stars">
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
              <img src={starfilled} alt="images"></img>
            </div>
          </div>
          <p className="m0 fw700 fs8 white">34 reviews | 82 jobs completed</p>
        </div>
        <div className="individual--category--price ml12">
          <p className="starting--from m0 white fw700">starting from</p>
          <p className="starting--from--price m0 fs28 fw700">${price_from}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
