import { React, useEffect, useMemo, useState } from "react";
import "./profile.css";
import defaultavatar from "../Assets/profile/defaultavatar_small.svg";
import starUnfilled from "../Assets/universal/starUnfilled.svg";
import starFilled from "../Assets/universal/starFilled.svg";
import trophy from "../Assets/profile/new/trophy.svg";
import time from "../Assets/profile/new/time.svg";
import reviews from "../Assets/profile/new/reviews.svg";
import noreviews from "../Assets/profile/new/rating.svg";

const ViewProfileHandyman = ({
  setBackButtonVisibility,
  hmProfile,
  individualHmStar,
  individualHmReviews,
  hmAverageRating,
  jobsCompleted,
  totalRatings,
  setCurrentPage,
}) => {
  const [hMProfileImage, sethMProfileImage] = useState("");
  //=============================FETCHING APIS============================
  console.log(hmProfile);
  console.log(individualHmStar);
  console.log(individualHmReviews);
  console.log(hmAverageRating);
  console.log(jobsCompleted);
  console.log(totalRatings);

  const getHMProfileImage = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${hmProfile[0].id}/profileimage/any`,
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
        sethMProfileImage(defaultavatar);
      } else {
        sethMProfileImage(hmProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //======================Creating Star Ratings=======================
  console.log(individualHmStar);
  let count = 5;
  const starColour = (index) => {
    if (individualHmStar.length > 0) {
      if (hmAverageRating >= index) {
        return starFilled;
      }
      return starUnfilled;
    } else {
      return starUnfilled;
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

  useEffect(() => {
    setBackButtonVisibility(true);

    getHMProfileImage();
  }, []);

  return (
    <div className="profile--info--container">
      <div className="profile--image--box">
        <img src={hMProfileImage} className="absolute profile--image" />
      </div>
      <div className="profile--info--card relative">
        <div className="profile--name--box mt60 fs16 fw700 white">
          <span>
            {hmProfile[0].first_name.charAt(0).toUpperCase() +
              hmProfile[0].first_name.slice(1)}{" "}
            {hmProfile[0].last_name.charAt(0).toUpperCase() +
              hmProfile[0].last_name.slice(1)}
          </span>
        </div>
        <div className="reviews--box ">
          <div className="reviews--stars--box fw700 fs16">
            {hmAverageRating}
          </div>
          <div className="reviews--stars--box ml4 ">{starRating}</div>
        </div>

        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt8">About</div>
          <span className="fw400 fs12 mt12">
            {hmProfile[0].about.charAt(0).toUpperCase() +
              hmProfile[0].about.slice(1)}
          </span>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Company</div>
          <span className="fw400 fs12 mt12">
            {hmProfile[0].business_name.charAt(0).toUpperCase() +
              hmProfile[0].business_name.slice(1)}
          </span>
        </div>
        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards">
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img src={time} className="profile--icons" alt="images"></img>
              </div>

              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {hmProfile[0].number_of_years}
                </div>
                <div className="fw400 fs12">in business</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img
                  src={trophy}
                  className="profile--trophy--icons"
                  alt="images"
                ></img>
              </div>

              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {jobsCompleted} jobs
                </div>
                <div className="fw400 fs12">completed</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img
                  src={reviews}
                  className="profile--icons"
                  alt="images"
                ></img>
              </div>

              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {totalRatings}
                </div>
                <div className="fw400 fs12">Rating points</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Handy Specialities</div>
        </div>
        <div className="profile--medal--icons--box  mt16 mb24">
          <div className="category--profile--cards">
            {hmProfile[0].specialities.map((item) => {
              return (
                <div
                  className="category--profile--cards--box"
                  key={Math.random() * 1000}
                >
                  {" "}
                  <div className="category--profile--cards--image--box">
                    <img
                      src={require(`../Assets/profile/new/${item}.svg`)}
                      className="category--cards--icon"
                      alt="images"
                    ></img>
                  </div>
                  <div className="profile--description--cards">
                    <div className="category--cards--text fw700 fs14">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="reviews--info--container">
        <div className="reviews--header white fw700 fs16 ml24 mt24 mb4">
          Reviews
        </div>
        {individualHmReviews.length > 0 ? (
          <div>
            {individualHmReviews.map((items) => {
              return (
                <div className="reviews--cards--box mb8 relative">
                  <img
                    src={require(`../Assets/profile/defaultavatar.jpeg`)}
                    className="profile--image--icons ml16 mt16 mb16"
                    alt="images"
                  ></img>
                  <div className="reviews--description--cards ml16 mt16 mb16">
                    <div className=" fw700 fs12  mb4">
                      {items.first_name.charAt(0).toUpperCase() +
                        items.first_name.slice(1)}
                    </div>
                    <div className="reviews--message fw400 fs12 white">
                      {items.reviews}
                    </div>
                  </div>
                  <div className="reviews--score--box absolute">
                    <span className="fs56 fw700">{items.ratings}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="reviews--cards--box mb8 relative">
            <div className="reviews--description--cards ml16 mt16 mb16">
              <div className="no--reviews--font fw700 fs16">
                No reviews yet!
              </div>
            </div>
            <div className="reviews--score--box">
              <div className="no--reviews--score--box absolute">
                <img
                  src={noreviews}
                  className="profile--image--icons ml16 mt16 mb16"
                  alt="images"
                ></img>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProfileHandyman;
