import React, { useState, useEffect, useMemo } from "react";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";

const MyUserServicesCard = ({ item }) => {
  const [hmRatings, setHmRatings] = useState([]);

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
  }, []);

  console.log(item);
  console.log(item.job_status);

  return (
    <div className="service--info--card mb24">
      <div className="service--info--card--top">
        <img
          src={recommended4usampleimage}
          className="service--info--image"
          alt="images"
        />
        <div className="hm3--info--description--mega--container">
          <p
            className="service--info--title fs16 fw700 m0 white mb4 ml12 mt8"
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          >
            {item.title}
          </p>
          <div className="service--info--description--container">
            <div className="service--info--description--section ml12">
              <p className="service--info--name fs12 fw400 m0 white mb4">
                {item.first_name}
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
                ${item.price_from}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service--info--card--bottom">
        <p className="m0 fs14 fw700 mb8">{item.category}</p>
        <span className="service--info--desc fs12 fw400 white">
          {item.description}
        </span>
        <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
        <div className="type--of--work">
          {item.types_of_work.map((works) => {
            return (
              <div className="m0 fs12 fw700 type--of--work--content">
                <img src={tick} />
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

          <button
            className="service--info--view--profile--button br4 fw700 fs12"
            // onClick={getHmProfile}
          >
            View profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUserServicesCard;
