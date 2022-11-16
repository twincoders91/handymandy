import { React, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import edit from "../Assets/universal/edit.svg";
import starUnfilled from "../Assets/universal/starUnfilled.svg";
import starFilled from "../Assets/universal/starFilled.svg";
import trophy from "../Assets/profile/new/trophy.svg";
import time from "../Assets/profile/new/time.svg";
import reviews from "../Assets/profile/new/reviews.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import ProfileHmReviewCards from "./ProfileHmReviewCards";

const ProfileHandyman = ({
  setBackButtonVisibility,
  hm_id,
  hMDetails,
  setHMDetails,
}) => {
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
  const [totalRatingsPoints, setTotalRatingPoints] = useState("");
  const [individualHMReviews, setIndividualHMReviews] = useState([]);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const retreiveHandymanRatingsSummary = async () => {
    try {
      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/ratingssummary`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const hm_ratings_summary = await res2.json();

      const res3 = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/averageratingandjobs`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const ratingData = await res3.json();

      const overallData = { hm_ratings_summary, ratingData };

      if (overallData.ratingData[0]) {
        setAverageRating(overallData.ratingData[0].average_rating);
      } else {
        setAverageRating(0);
      }
      if (overallData.ratingData[0]) {
        setJobsCompleted(overallData.ratingData[0].total_jobs);
      } else {
        setJobsCompleted(0);
      }
      if (overallData.ratingData[0]) {
        setTotalRatingPoints(overallData.ratingData[0].total_ratings);
      } else {
        setTotalRatingPoints(0);
      }
      if (overallData.hm_ratings_summary.length > 0) {
        setIndividualHMReviews(overallData.hm_ratings_summary);
      } else {
        setIndividualHMReviews([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const retreiveHandymanInfo = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${hm_id}/profileimage`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const hm_details = await res.json();
      console.log(hm_details);

      if (hm_details.length === 0) {
        try {
          const res = await fetch(`http://127.0.0.1:8001/handyman/${hm_id}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          });
          const hm_details = await res.json();

          setHMDetails(hm_details[0]);
          if (hm_details[0].profile_image) {
            setProfile_image(hm_details[0].profile_image);
          } else {
            setProfile_image(defaultavatar);
          }

          if (hm_details[0].about) {
            setAboutHM(hm_details[0].about);
          } else {
            setAboutHM("No Description");
          }
          if (hm_details[0].business_name) {
            setCompanyHM(hm_details[0].business_name);
          } else {
            setCompanyHM("No Company");
          }
          if (hm_details[0].number_of_years) {
            setNumberOfYears(hm_details[0].number_of_years);
          } else {
            setNumberOfYears(0);
          }
          if (hm_details[0].specialities) {
            setSpecialitiesHM(hm_details[0].specialities);
          } else {
            setSpecialitiesHM([]);
          }

          setfirst_name_hm(hm_details[0].first_name);
          setlast_name_hm(hm_details[0].last_name);
          setDate(hm_details[0].date_joined);
        } catch (e) {
          console.log(e);
        }
      } else {
        setHMDetails(hm_details[0]);
        if (hm_details[0].about) {
          setAboutHM(hm_details[0].about);
        } else {
          setAboutHM("No Description");
        }

        if (hm_details[0].business_name) {
          setCompanyHM(hm_details[0].business_name);
        } else {
          setCompanyHM("No Company");
        }

        if (hm_details[0].number_of_years) {
          setNumberOfYears(hm_details[0].number_of_years);
        } else {
          setNumberOfYears(0);
        }

        if (hm_details[0].specialities) {
          setSpecialitiesHM(hm_details[0].specialities);
        } else {
          setSpecialitiesHM([]);
        }

        setfirst_name_hm(hm_details[0].first_name);
        setlast_name_hm(hm_details[0].last_name);
        setProfile_image(hm_details[0].image_url);
        setDate(hm_details[0].date_joined);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //=========================================================

  const updateProfileImage = async (event) => {
    try {
      const file = event.target.files[0];

      // GET SECURE URL FROM OUR SERVER TO ACCESS S3 BUCKET
      const { url } = await fetch("http://localhost:8001/s3url").then((res) =>
        res.json()
      );
      console.log(url);

      // POST THE IMAGE DIRECTLY TO THE S3 BUCKET
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });

      const imageUrl = url.split("?")[0];

      // POST REQUEST TO MY SERVER TO STORE ANY EXTRA
      console.log(imageUrl);
      console.log(hMDetails);

      if (hMDetails.image_url === null || !hMDetails.image_url) {
        try {
          const res = await fetch("http://127.0.0.1:8001/profileimage/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              image_url: imageUrl,
              hm_id: hm_id,
            }),
          });
          console.log(res);
          retreiveHandymanInfo();
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          const res = await fetch("http://127.0.0.1:8001/profileimage/hm", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
              hm_id: hm_id,
              image_url: imageUrl,
            }),
          });
          console.log(res);
          retreiveHandymanInfo();
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  //=========================================================

  const handleEditProfile = async () => {
    console.log(hm_id);
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${hm_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const hm_details = await res.json();
      setHMDetails(hm_details[0]);
      console.log(hm_details);
      navigate("/editprofilehm");
    } catch (e) {
      console.error(e);
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
    retreiveHandymanRatingsSummary();
    retreiveHandymanInfo();
  }, []);
  console.log(specialitiesHM);
  return (
    <div className="profile--info--container">
      <div className="profile--image--box">
        <img src={profile_image} className="absolute profile--image" />
        <form className="absolute update--profile--image--form">
          <input
            onChange={(e) => {
              updateProfileImage(e);
            }}
            type="file"
            accept="image/*"
            className="absolute update--profile--image--button"
            s
          ></input>
        </form>
      </div>
      <div className="profile--info--card relative">
        <div className="profile--name--box mt60 fs16 fw700 white">
          <span>
            {" "}
            {first_name_hm.charAt(0).toUpperCase() +
              first_name_hm.slice(1)}{" "}
            {last_name_hm.charAt(0).toUpperCase() + last_name_hm.slice(1)}
          </span>
        </div>
        <div className="reviews--box ">
          <div className="reviews--stars--box fw700 fs16">{averageRating}</div>
          <div className="reviews--stars--box ml4 ">{starRating}</div>
        </div>

        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt8">About</div>
          <span className="fw400 fs12 mt12">
            {aboutHM.charAt(0).toUpperCase() + aboutHM.slice(1)}
          </span>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Company</div>
          <span className="fw400 fs12 mt12">
            {companyHM.charAt(0).toUpperCase() + companyHM.slice(1)}
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
                  {numberOfYears}
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
                  {jobsCompleted} Jobs
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
                  {totalRatingsPoints}
                </div>
                <div className="fw400 fs12">Rating Points</div>
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
                  <div className="category--profile--cards--image--box">
                    <img
                      src={require(`../Assets/profile/new/${item}.svg`)}
                      className="category--cards--icon"
                      alt="images"
                    ></img>
                  </div>
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
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Date Joined</div>
        </div>
        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards">
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img src={time} className="profile--icons" alt="images"></img>
              </div>

              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {date.slice(0, 10)}
                </div>
                <div className="fw400 fs12">since</div>
              </div>
            </div>
          </div>
        </div>
        <div className="message--button--box mb24">
          <button
            className="message--button fw700 fs14"
            onClick={handleEditProfile}
          >
            <img src={edit} />
            Edit profile
          </button>
        </div>
      </div>
      <div className="reviews--info--container">
        <div className="reviews--header white fw700 fs16 ml24 mt24 mb4">
          Reviews
        </div>
        {individualHMReviews.map((items) => {
          return (
            <ProfileHmReviewCards
              user_id={items.user_id}
              first_name={items.first_name}
              ratings={items.ratings}
              reviews={items.reviews}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHandyman;
