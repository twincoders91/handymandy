import React, { useState, useEffect, useMemo, useDebugValue } from "react";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import default_image from "../Assets/homepage/recommended4usampleimage.svg";
import wrench from "../Assets/services/wrench.svg";
import { useNavigate } from "react-router-dom";

const MyUserServicesCard = ({
  item,
  setCurrentPage,
  setHmProfile,
  setHmAverageRating,
  setIndividualHmStar,
  setJobsCompleted,
  setTotalRatings,
  setIndividualHmReviews,
  setCancelJobsModalValue,
  setApproveJobsModalValue,
  setCardClicked,
}) => {
  const [hmRatings, setHmRatings] = useState([]);
  const [hmProfile_image, setHmProfile_image] = useState("");
  //=================== Truncate String =======================
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const navigate = useNavigate();
  console.log(item);
  //====================== RATINGS FETCHING =======================
  const getHmRatings = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${item.hm_id}/averageratingandjobs`,
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
        `http://127.0.0.1:8001/handyman/${item.hm_id}/profileimage/any`,
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
        setHmProfile_image(defaultavatar);
      } else {
        setHmProfile_image(hmProfileImage[0].image_url);
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
  const getHmProfile = async (item) => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${item.hm_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/${item.hm_id}/averageratingandjobs`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const res3 = await fetch(
        `http://127.0.0.1:8001/handyman/${item.hm_id}/ratingssummary`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      setCurrentPage("Service Info");
      const hmProfileData = await res.json();
      setHmProfile(hmProfileData);
      const hmStars = await res2.json();
      if (hmStars.length > 0) {
        setHmAverageRating(hmStars[0].average_rating);
        setIndividualHmStar(hmStars);
      } else {
        setHmAverageRating(0);
      }
      if (hmStars.length > 0) {
        setJobsCompleted(hmStars[0].total_jobs);
      } else {
        setJobsCompleted(0);
      }
      const hmReviews = await res3.json();
      if (hmStars.length > 0 && hmReviews.length > 0) {
        setTotalRatings(hmStars[0].total_ratings);
        setIndividualHmReviews(hmReviews);
      } else {
        setTotalRatings(0);
        setIndividualHmReviews([]);
      }
      console.log(hmReviews);
      navigate("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  //===================================================================
  const handleDeleteMyService = () => {
    setCancelJobsModalValue(true);
    setCardClicked({ item, hmProfile_image });
  };

  const handleApproveMyService = () => {
    setApproveJobsModalValue(true);
    setCardClicked(item);
  };

  //===================================================================

  useEffect(() => {
    getHmRatings();
  }, []);

  return (
    <>
      <div className="myuserservice--card mb24">
        <div className="myuserservice--card--top">
          <img
            src={item.image_url ? item.image_url : default_image}
            className="myuserservice--image"
            alt="images"
          />
          <div className="hm3--info--description--mega--container">
            <p className="myuserservice--title fs16 fw700 m0 white mb4 ml12 mt8">
              {truncate(
                item.title.charAt(0).toUpperCase() + item.title.slice(1),
                25
              )}
            </p>
            <div className="myuserservice--description--container">
              <div className="myuserservice--description--section ml12">
                <p className="myuserservice--name fs12 fw400 m0 white mb4">
                  {item.first_name.charAt(0).toUpperCase() +
                    item.first_name.slice(1)}
                </p>
                <div className="myuserservice--profile--stars mb4">
                  <img
                    src={hmProfile_image}
                    alt="images"
                    className="profile--image--small"
                  ></img>
                  <div className="myuserservice--stars">{starRating}</div>
                </div>
                {hmRatings.length > 0 ? (
                  <p className="m0 fw700 fs8 white">
                    {hmRatings[0].total_jobs} job(s) completed
                  </p>
                ) : (
                  <p className="m0 fw700 fs8 white">0 job completed</p>
                )}
              </div>
              <div className="myuserservice--price m0">
                <p className="starting--from m0 white fw700">starting from</p>
                <p className="starting--from--price m0 fs28 fw700">
                  ${item.price_from}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myuserservice--card--bottom">
          <p className="m0 fs14 fw700 mb8 mt8">Job Requirement</p>
          <span
            className="myuserservice--desc fs12 fw400 white"
            style={{ "white-space": "pre-wrap", "overflow-wrap": "break-word" }}
          >
            {item.job_requirement}
          </span>
          <p className="m0 fs14 fw700 mb8 mt12">{item.category}</p>
          <span className="myuserservice--desc fs12 fw400 white">
            {item.description}
          </span>

          <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
          <div className="type--of--work--servicescard">
            {item.types_of_work.map((works) => {
              return (
                <div
                  className="m0 fs12 fw700 type--of--work--content"
                  key={Math.random() * 1000}
                >
                  <img src={wrench} />
                  <p className="m0 fs12 fw400 white ml8">{works}</p>
                </div>
              );
            })}
            <div className="userservices--card--job--status--box">
              <p className="m0 fw700 fs14">{item.job_status}</p>
              <img
                src={require(`../Assets/services/${item.job_status}.svg`)}
                className="ml12"
              />
            </div>
            <div className="myuserservice--buttons--container">
              <button
                className="myuserservice--view--profile--button fw700 fs12"
                onClick={() => {
                  getHmProfile(item);
                }}
              >
                View profile
              </button>
              {item.job_status === "inprogress" && (
                <button
                  className="myuserservice--view--approve--button fw700 fs12"
                  onClick={() => {
                    handleApproveMyService();
                  }}
                >
                  Complete
                </button>
              )}
              {item.job_status === "inprogress" ||
              item.job_status === "pending" ? (
                <>
                  <button
                    className="myuserservice--view--cancel--button fw700 fs12"
                    onClick={() => {
                      handleDeleteMyService();
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyUserServicesCard;
