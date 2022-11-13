import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";
import wrench from "../Assets/services/wrench.svg";
import ConfirmBookingModal from "../Components/Modals/ConfirmBookingModal";

const ServiceInfo = ({
  filteredServicesData,
  selectedServiceId,
  setHm_id,
  setHmProfile,
  setIndividualHmStar,
  setIndividualHmReviews,
  setHmAverageRating,
  setJobsCompleted,
  setTotalRatings,
  setCurrentPage,
  user_id,
}) => {
  const [hmRatings, setHmRatings] = useState([]);
  const navigate = useNavigate();

  //=================== Truncate String =======================
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  //============================modal states====================================
  const [acceptedServicesModal, setAcceptedServicesModal] = useState(false);

  // ============== Filter Service category data by Service ID ==============
  const serviceInfo = filteredServicesData.filter(
    (item) => item.services_id === selectedServiceId
  );
  setHm_id(serviceInfo.hm_id);
  console.log(selectedServiceId);
  console.log(filteredServicesData);
  console.log(serviceInfo);

  //====================== Fetch HM profile by ID =======================
  const getHmProfile = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${serviceInfo[0].hm_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/${serviceInfo[0].hm_id}/averageratingandjobs`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const res3 = await fetch(
        `http://127.0.0.1:8001/handyman/${serviceInfo[0].hm_id}/ratingssummary`,
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

  //====================== Fetch avg ratings =======================
  const getHmRatings = async () => {
    const res = await fetch(
      `http://127.0.0.1:8001/handyman/${serviceInfo[0].hm_id}/averageratingandjobs`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    );
    const ratingData = await res.json();
    console.log(ratingData);
    setHmRatings(ratingData);
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
  //========================== Handle Confirm Booking =============================
  const handleBookButton = () => {
    setAcceptedServicesModal(true);
  };

  useEffect(() => {
    getHmRatings();
  }, []);

  return (
    <>
      {acceptedServicesModal && (
        <ConfirmBookingModal
          setAcceptedServicesModal={setAcceptedServicesModal}
          serviceInfo={serviceInfo}
          user_id={user_id}
        />
      )}
      <span className="fw700 fs32 mt24 mb24 white">Service Info</span>
      <div className="service--info--card">
        <div className="service--info--card--top">
          <img
            src={recommended4usampleimage}
            className="service--info--image"
            alt="images"
          />
          <div className="hm3--info--description--mega--container">
            <p className="service--info--title2 fs16 fw700 m0 white mb4 ml12 mt8">
              {truncate(
                serviceInfo[0].title.charAt(0).toUpperCase() +
                  serviceInfo[0].title.slice(1),
                25
              )}
            </p>
            <div className="service--info--description--container">
              <div className="service--info--description--section ml12">
                <p className="service--info--name fs12 fw400 m0 white mb4">
                  {serviceInfo[0].first_name.charAt(0).toUpperCase() +
                    serviceInfo[0].first_name.slice(1)}
                </p>
                <div className="service--info--profile--stars mb4">
                  <img src={recommendedprofile} alt="images"></img>
                  <div className="service--info--stars">{starRating}</div>
                </div>
                {hmRatings.length > 0 ? (
                  <p className="m0 fw700 fs8 white">
                    {hmRatings[0].total_jobs} job(s) completed
                  </p>
                ) : (
                  <p className="m0 fw700 fs8 white">0 job completed</p>
                )}
              </div>
              <div className="service--info--price ml12">
                <p className="starting--from m0 white fw700">starting from</p>
                <p className="starting--from--price m0 fs28 fw700">
                  ${serviceInfo[0].price_from}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service--info--card--bottom">
          <p className="m0 fs12 fw700 mb8">{serviceInfo[0].title}</p>
          <span className="service--info--desc fs12 fw400 white">
            {serviceInfo[0].description}
          </span>
          <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
          <div className="type--of--work">
            {serviceInfo[0].types_of_work.length <= 0 && (
              <p className="m0 fs12 fw400 white ml8">-nil-</p>
            )}
            {serviceInfo[0].types_of_work.map((works) => {
              return (
                <div className="m0 fs12 fw700 type--of--work--content">
                  <img src={wrench} />
                  <p className="m0 fs12 fw400 white ml8">{works}</p>
                </div>
              );
            })}
            <button
              className="service--info--view--profile--button br4 fw700 fs12"
              onClick={getHmProfile}
            >
              View profile
            </button>
          </div>
        </div>
      </div>
      <button
        className="service--info--view--booknow--button br4 fw700 fs24 mt60"
        onClick={() => handleBookButton()}
      >
        Book now
      </button>
    </>
  );
};

export default ServiceInfo;
