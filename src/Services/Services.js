import React, { useState } from "react";
import FindServices from "./FindServices";
import Navbar from "../Components/Navbar";
import HomePage from "../Home/HomePage";
import ServiceInfo from "./ServiceInfo";
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
  setHmProfile,
  setIndividualHmStar,
  setIndividualHmReviews,
  filteredServicesData,
  setFilteredServicesData,
  setViewHmProfile,
  setHmAverageRating,
  setJobsCompleted,
  setTotalRatings,
  user_id,
  userNotifications,
  hmNotifications,
}) => {
  //====================== States for Services ======================
  const [chooseCategory, setChooseCategory] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  //=================================================================================================================

  return (
    <>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        currentPage={currentPage}
        chooseCategory={chooseCategory}
        setChooseCategory={setChooseCategory}
        setCurrentPage={setCurrentPage}
        hmNotifications={hmNotifications}
        userNotifications={userNotifications}
      />
      <div className="category--page--container">
        {!chooseCategory && (
          <FindServices
            filteredServicesData={filteredServicesData}
            setFilteredServicesData={setFilteredServicesData}
            servicesCategorySelection={servicesCategorySelection}
            setChooseCategory={setChooseCategory}
            setBackButtonVisibility={setBackButtonVisibility}
            setSelectedServiceId={setSelectedServiceId}
            setViewHmProfile={setViewHmProfile}
          />
        )}
        {chooseCategory && (
          <ServiceInfo
            filteredServicesData={filteredServicesData}
            selectedServiceId={selectedServiceId}
            setHm_id={setHm_id}
            setHmProfile={setHmProfile}
            setIndividualHmStar={setIndividualHmStar}
            setIndividualHmReviews={setIndividualHmReviews}
            setHmAverageRating={setHmAverageRating}
            setJobsCompleted={setJobsCompleted}
            setTotalRatings={setTotalRatings}
            setCurrentPage={setCurrentPage}
            user_id={user_id}
          />
        )}
      </div>
    </>
  );
};

export default Services;
