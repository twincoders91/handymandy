import React from "react";
import FindServices from "./FindServices";
import Navbar from "../Components/Navbar";
import HomePage from "../Home/HomePage";
import ServiceInfo from "./ServiceInfo";
import CategoryCards from "./CategoryCards";
import AcceptedServices from "./AcceptedServices";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="category--page--container">
        {/* <HomePage /> */}
        {/* <FindServices /> */}
        <ServiceInfo />
        {/* <AcceptedServices /> */}
      </div>
    </>
  );
};

export default Services;
