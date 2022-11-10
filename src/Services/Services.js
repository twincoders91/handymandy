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
  setHm_id,
}) => {
  //====================== States for Services ======================
  const [filteredServicesData, setFilteredServicesData] = useState([]);
  const [chooseCategory, setChooseCategory] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");

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
            setFilteredServicesData={setFilteredServicesData}
            filteredServicesData={filteredServicesData}
            servicesCategorySelection={servicesCategorySelection}
            setChooseCategory={setChooseCategory}
            setBackButtonVisibility={setBackButtonVisibility}
            setSelectedServiceId={setSelectedServiceId}
          />
        )}
        {chooseCategory && (
          <ServiceInfo
            filteredServicesData={filteredServicesData}
            selectedServiceId={selectedServiceId}
            setHm_id={setHm_id}
          />
        )}
        {/* <AcceptedServices /> */}
        {/* <AcceptedServiceInfo /> */}
      </div>
    </>
  );
};

export default Services;
