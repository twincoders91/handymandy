import React, { useState, useEffect, useMemo } from "react";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import default_image from "../Assets/homepage/recommended4usampleimage.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";

const CategoryCards = ({
  first_name,
  last_name,
  hm_id,
  price_from,
  title,
  id,
  handleCategoryCard,
  services_id,
  image_url,
}) => {
  const [hmRatings, setHmRatings] = useState([]);
  const [hmProfileImage, setHMProfileImage] = useState("");

  //=================== Truncate String =======================
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  //====================== RATINGS FETCHING =======================
  const getHmRatings = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/averageratingandjobs`,
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
      console.error(e);
    }

    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      const hmProfileImage = await res.json();

      if (hmProfileImage.length === 0) {
        setHMProfileImage(defaultavatar);
      } else {
        setHMProfileImage(hmProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //======================Creating Star Ratings=======================
  let count = 5;
  const starColour = (index) => {
    if (hmRatings.length > 0) {
      if (hmRatings[0].average_rating >= index) {
        return starFilled;
      }
      return starUnFilled;
    } else {
      return starUnFilled;
    }
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <img src={starColour(idx)} key={idx} className="review--stars" />
      ));
  });
  //===================================================================

  useEffect(() => {
    getHmRatings();
  }, [first_name]);

  return (
    <div
      className="individual--category--card relative mt24"
      onClick={() => {
        handleCategoryCard(services_id);
      }}
    >
      <div className="individual--category--image--box">
        <div className="services--image--box">
          <img
            src={image_url ? image_url : default_image}
            className="individual--category--image"
            alt="images"
          />
        </div>
      </div>
      <div className="individual--category--description--container--findservices">
        <div className="hm3--info--description--mega--container">
          <p
            className="individual--category--title fs16 fw700 m0 white mb4 ml12"
            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
          >
            {truncate(title.charAt(0).toUpperCase() + title.slice(1), 25)}
          </p>
          <div className="individual--category--description--section ml12">
            <p className="individual--category--name fs12 fw400 m0 white mb4">
              {first_name.charAt(0).toUpperCase() + first_name.slice(1)}
            </p>
            <div className="individual--category--profile--stars mb4">
              <img
                src={hmProfileImage}
                alt="images"
                className="profile--image--small"
              ></img>
              <div className="individual--category--stars">{starRating}</div>
            </div>
            {hmRatings.length > 0 ? (
              <p className="m0 fw700 fs8 white">
                {hmRatings[0].total_jobs} job(s) completed
              </p>
            ) : (
              <p className="m0 fw700 fs8 white">0 job completed</p>
            )}
          </div>
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
