import React from "react";
import FindServices from "./FindServices";
import Navbar from "../Components/Navbar";
import HomePage from "../Home/HomePage";
import ServiceInfo from "./ServiceInfo";
import CategoryCards from "./CategoryCards";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="category--page--container">
        {/* <HomePage /> */}
        {/* <FindServices /> */}
        <ServiceInfo />
      </div>
    </>
  );
};

export default Services;
