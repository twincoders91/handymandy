import { React, useEffect, useMemo, useState } from "react";
import "./profile.css";
import edit from "../Assets/universal/edit.svg";
import handymanData from "../DummyDataSets/profileHandyman";
import starUnfilled from "../Assets/universal/starUnfilled.svg";
import starFilled from "../Assets/universal/starFilled.svg";
import trophy from "../Assets/profile/trophy.svg";
import time from "../Assets/profile/time.svg";
import reviews from "../Assets/profile/reviews.svg";
import defaultavatar from "../Assets/profile/defaultavatar.jpeg";

const ProfileHandyman = ({ totalReviews, setBackButtonVisibility, hm_id }) => {
  //=============================FETCHING APIS============================
  const [averageRating, setAverageRating] = useState("");
  const [profile_image, setProfile_image] = useState("");
  const [aboutHM, setAboutHM] = useState("");
  const [companyHM, setCompanyHM] = useState("N.A");
  const [numberOfYears, setNumberOfYears] = useState("");
  const [jobsCompleted, setJobsCompleted] = useState(0);
  const [specialitiesHM, setSpecialitiesHM] = useState([]);
  const [first_name_hm, setfirst_name_hm] = useState("");
  const [last_name_hm, setlast_name_hm] = useState("");

  const retreiveHandymanInfo = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${hm_id}`);
      const hm_details = await res.json();
      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/ratingssummary`
      );
      const hm_ratings_summary = await res2.json();
      const overallData = { hm_details, hm_ratings_summary };
      console.log(overallData);
      if (overallData.hm_details[0].profile_image) {
        setProfile_image(overallData.hm_details[0].profile_image);
      } else {
        setProfile_image(defaultavatar);
      }

      setAverageRating(overallData.hm_ratings_summary[0].average_rating);
      setAboutHM(overallData.hm_details[0].about);
      setCompanyHM(overallData.hm_details[0].business_name);
      setNumberOfYears(overallData.hm_details[0].number_of_years);
      setJobsCompleted(overallData.hm_ratings_summary[0].total_jobs);
      setSpecialitiesHM(overallData.hm_details[0].specialities);
      setfirst_name_hm(overallData.hm_details[0].first_name);
      setlast_name_hm(overallData.hm_details[0].last_name);
      console.log(specialitiesHM);
    } catch (e) {
      console.log(e);
    }
  };

  //======================Creating Star Ratings=======================
  let count = 5;

  const starColour = (index) => {
    if (averageRating >= index) {
      return starFilled;
    }
    return starUnfilled;
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
    retreiveHandymanInfo();
  }, []);

  return (
    <div className="profile--info--container">
      <div className="profile--image--box">
        <img src={profile_image} className="absolute profile--image" />
      </div>
      <div className="profile--info--card relative">
        <div className="profile--name--box mt60 fs16 fw700 white">
          <span>{`${first_name_hm} ${" "} ${last_name_hm} `}</span>
        </div>
        <div className="reviews--box ">
          <div className="reviews--stars--box fw700 fs16">{averageRating}</div>
          <div className="reviews--stars--box ml4 ">{starRating}</div>
        </div>

        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt8">About</div>
          <span className="fw400 fs12 mt12">{aboutHM}</span>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Company</div>
          <span className="fw400 fs12 mt12">{companyHM}</span>
        </div>
        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards">
            <div className="category--profile--cards--box">
              <img src={time} className="profile--icons" alt="images"></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {numberOfYears} Years
                </div>
                <div className="fw400 fs12">in business</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <img
                src={trophy}
                className="profile--trophy--icons"
                alt="images"
              ></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {jobsCompleted} Jobs
                </div>
                <div className="fw400 fs12">completed</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <img src={reviews} className="profile--icons" alt="images"></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {totalReviews}
                </div>
                <div className="fw400 fs12">Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Handy Specialities</div>
        </div>
        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards">
            {specialitiesHM.map((item) => {
              return (
                <div
                  className="category--profile--cards--box"
                  key={Math.random() * 1000}
                >
                  <img
                    src={require(`../Assets/profile/${item}.svg`)}
                    className="category--cards--icon"
                    alt="images"
                  ></img>
                  <div className="profile--description--cards">
                    <div className="category--cards--text fw700 fs14">
                      {item}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="message--button--box mb24">
          <button className="message--button fw700 fs14">
            <img src={edit} />
            Edit profile
          </button>
        </div>
      </div>
      <div className="reviews--info--container">
        <div className="reviews--header white fw700 fs16 ml24 mt24 mb4">
          Reviews
        </div>
        {handymanData[0].reviews.map((items) => {
          return (
            <div className="reviews--cards--box mb8 relative">
              <img
                src={require(`../Assets/profile/${items.icon}`)}
                className="profile--image--icons ml16 mt16 mb16"
                alt="images"
              ></img>
              <div className="reviews--description--cards ml16 mt16 mb16">
                <div className=" fw700 fs12  mb4">{items.name}</div>
                <div className="reviews--message fw400 fs12 white">
                  {items.message}
                </div>
              </div>
              <div className="reviews--score--box absolute">
                <span className="fs56 fw700">{items.score}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHandyman;
