import React, { useMemo } from "react";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import default_image from "../Assets/homepage/recommended4usampleimage.svg";
import wrench from "../Assets/services/wrench.svg";
import { NavLink } from "react-router-dom";

const HmServicesCards = ({
  handleDeleteServiceClick,
  handleUpdateServiceClick,
  services,
  hmRatings,
  hmProfile_image,
}) => {
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
  return (
    <div>
      <div className="hm3--page--container mt24" key={Math.random() * 1000}>
        <div className="hm3--info--card">
          <div className="hm3--info--card--top">
            <img
              src={services.image_url ? services.image_url : default_image}
              className="hm3--info--image"
              alt="images"
            />
            <div className="hm3--info--description--mega--container">
              <div className="hm3--info--description--easter--container">
                <p className="hm3--info--title fs16 fw700 m0 ml12 mt8 white mb4">
                  {services.title.charAt(0).toUpperCase() +
                    services.title.slice(1)}
                </p>
              </div>
              <div className="hm3--info--description--container">
                <div className="hm3--info--description--section ml12">
                  <p className="hm3--info--name fs12 fw400 m0 white mb4">
                    {services.first_name.charAt(0).toUpperCase() +
                      services.first_name.slice(1)}
                  </p>
                  <div className="hm3--info--profile--stars mb4">
                    <img
                      src={hmProfile_image}
                      alt="images"
                      className="profile--image--small"
                    ></img>
                    <div className="hm3--info--stars">{starRating}</div>
                  </div>
                  <div className="m0 fw700 fs8 white">
                    {hmRatings.length > 0 ? (
                      <p className="m0 fw700 fs8 white">
                        {hmRatings[0].total_jobs} job(s) completed
                      </p>
                    ) : (
                      <p className="m0 fw700 fs8 white">0 job completed</p>
                    )}
                  </div>
                </div>
                <div className="hm3--info--price">
                  <p className="starting--from m0 white fw700">starting from</p>
                  <p className="starting--from--price m0 fs28 fw700">
                    ${services.price_from}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hm3--info--card--bottom">
            <span className="hm3--info--desc fs12 fw400 white">
              {services.description.charAt(0).toUpperCase() +
                services.description.slice(1)}
            </span>
            <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
            <div className="type--of--work--with--buttons">
              <div className="type--of--work">
                {services.types_of_work.map((types) => {
                  return (
                    <div
                      className="m0 fs12 fw700 type--of--work--content"
                      key={Math.random() * 1000}
                    >
                      <img src={wrench} />
                      <p className="m0 fs12 fw400 white ml8">{types}</p>
                    </div>
                  );
                })}
              </div>
              <div className="hm3--info--button--box">
                <NavLink className="navlink--class" to="/updateservice">
                  <button
                    className="hm3--info--view--profile--button--active br4 fw700 fs12"
                    onClick={() => {
                      handleUpdateServiceClick({ services });
                    }}
                  >
                    Edit
                  </button>
                </NavLink>

                <button
                  className="hm3--info--delete--profile--button br4 fw700 fs12"
                  onClick={() => {
                    handleDeleteServiceClick({ services });
                    console.log(services);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HmServicesCards;
