import React, { useState } from "react";
import FindServices from "./FindServices";
import Navbar from "../Components/Navbar";
import HomePage from "../Home/HomePage";
import ServiceInfo from "./ServiceInfo";
import CategoryCards from "./CategoryCards";
import AcceptedServices from "./AcceptedServices";
import AcceptedServiceInfo from "./AcceptedServiceInfo";
import HamburgerModal from "../Components/Modals/HamburgerModal";

const Services = ({
  averageRating,
  totalReviews,
  totalJobs,
  handymanServicesData,
  servicesCategory,
}) => {
  const [chooseCategory, setChooseCategory] = useState(false);

  console.log(servicesCategory);

  return (
    <>
      <Navbar />
      <div className="category--page--container">
        {!chooseCategory && (
          <FindServices
            averageRating={averageRating}
            totalJobs={totalJobs}
            totalReviews={totalReviews}
            handymanServicesData={handymanServicesData}
            servicesCategory={servicesCategory}
            setChooseCategory={setChooseCategory}
          />
        )}
        {chooseCategory && <ServiceInfo />}
        {/* <AcceptedServices /> */}
        {/* <AcceptedServiceInfo /> */}
      </div>
    </>
  );
};

export default Services;
