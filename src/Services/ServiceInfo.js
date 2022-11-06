import React from "react";
import { NavLink } from "react-router-dom";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";

const ServiceInfo = ({ serviceInfo }) => {
  console.log(serviceInfo);
  return (
    <>
      <span className="fw700 fs32 mt24 mb24 white">Service Info</span>
      <div className="service--info--card">
        <div className="service--info--card--top">
          <img
            src={recommended4usampleimage}
            className="service--info--image"
            alt="images"
          />
          <div className="service--info--description--container">
            <div className="service--info--description--section ml12">
              <p className="service--info--title fs16 fw700 m0 white mb4">
                {serviceInfo.category}
              </p>
              <p className="service--info--name fs12 fw400 m0 white mb4">
                {serviceInfo.first_name}
              </p>
              <div className="service--info--profile--stars mb4">
                <img src={recommendedprofile} alt="images"></img>
                <div className="service--info--stars">
                  <img src={starfilled} alt="images"></img>
                  <img src={starfilled} alt="images"></img>
                  <img src={starfilled} alt="images"></img>
                  <img src={starfilled} alt="images"></img>
                  <img src={starfilled} alt="images"></img>
                </div>
              </div>
              <p className="m0 fw700 fs8 white">
                34 reviews | 82 jobs completed
              </p>
            </div>
            <div className="service--info--price ml12">
              <p className="starting--from m0 white fw700">starting from</p>
              <p className="starting--from--price m0 fs28 fw700">
                ${serviceInfo.price_from}
              </p>
            </div>
          </div>
        </div>
        <div className="service--info--card--bottom">
          <span className="service--info--desc fs12 fw400 white">
            {serviceInfo.description}
          </span>
          <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
          <div className="type--of--work">
            {serviceInfo.type_of_work.map((works) => {
              return (
                <div className="m0 fs12 fw700 type--of--work--content">
                  <img src={tick} />
                  <p className="m0 fs12 fw400 white ml8">{works}</p>
                </div>
              );
            })}
            <NavLink className="navlinks" to="/profile">
              <button className="service--info--view--profile--button br4 fw700 fs12">
                View profile
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <button className="service--info--view--booknow--button br4 fw700 fs24 mt60">
        Book now
      </button>
    </>
  );
};

export default ServiceInfo;
