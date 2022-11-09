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
  // averageRating,
  totalReviews,
  totalJobs,
  handymanServicesData,
  servicesCategory,
  servicesCategorySelection,
  setBackButtonVisibility,
  backButtonVisibility,
  currentPage,
  setCurrentPage,
  serviceInfo,
  setServiceInfo,
}) => {
  //====================== States for Services ======================
  const [filteredServicesData, setFilteredServicesData] = useState([]);
  const [chooseCategory, setChooseCategory] = useState(false);

  //=================================================================================================================

  console.log(servicesCategorySelection);

  return (
    <>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        currentPage={currentPage}
        chooseCategory={chooseCategory}
        setChooseCategory={setChooseCategory}
      />
      <div className="category--page--container">
        {!chooseCategory && (
          <FindServices
            // averageRating={averageRating}
            setFilteredServicesData={setFilteredServicesData}
            filteredServicesData={filteredServicesData}
            totalJobs={totalJobs}
            totalReviews={totalReviews}
            handymanServicesData={handymanServicesData}
            servicesCategory={servicesCategory}
            servicesCategorySelection={servicesCategorySelection}
            setChooseCategory={setChooseCategory}
            setServiceInfo={setServiceInfo}
            setBackButtonVisibility={setBackButtonVisibility}
            setCurrentPage={setCurrentPage}
          />
        )}
        {chooseCategory && (
          <ServiceInfo
            serviceInfo={serviceInfo}
            filteredServicesData={filteredServicesData}
          />
        )}
        {/* <AcceptedServices /> */}
        {/* <AcceptedServiceInfo /> */}
      </div>
    </>
  );
};

export default Services;
