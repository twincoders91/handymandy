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
  //===========================================States for Service Info Page================================
  const [chooseCategory, setChooseCategory] = useState(false);
  const [serviceInfo, setServiceInfo] = useState("");
  //=================================================================================================================

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
            setServiceInfo={setServiceInfo}
          />
        )}
        {chooseCategory && <ServiceInfo serviceInfo={serviceInfo} />}
        {/* <AcceptedServices /> */}
        {/* <AcceptedServiceInfo /> */}
      </div>
    </>
  );
};

export default Services;
