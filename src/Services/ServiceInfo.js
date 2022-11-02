import React from "react";
import categorycardtestimage from "../Assets/categorypage/categorycardtestimage.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";

const ServiceInfo = () => {
  return (
    <>
      <span className="fw700 fs32 mt24 mb36 white">Service Info</span>
      <div className="services--info--container">
        <div className="services--info--image--container mt16">
          <img src={categorycardtestimage} />
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
