import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "../Profile/ProfileHandyman";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import UpdateServicesHandyman from "../Services/UpdateServicesHandyman";
import HomePage from "./HomePage";
import HomePageHandyman from "./HomePageHandyman";

const HomePageMain = ({
  charSelect,
  handymanServicesData,
  setServicesCategory,
  username,
  setBackButtonVisibility,
  backButtonVisibility,
  setCurrentPage,
  currentPage,
}) => {
  //============================States to make sure correct pages show============================
  const [createService, setCreateService] = useState(false);
  const [updateService, setUpdateService] = useState(false);

  //============================State that hold services data=====================================
  const [updateServiceDetails, setUpdateServiceDetails] = useState({});
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceTOW, setServiceTOW] = useState([]);
  const [servicePriceFrom, setServicePriceFrom] = useState("");

  //============================Filtering HM data down to HM's username===========================
  const HMindividualServices = handymanServicesData.filter(
    (filteredServices) => {
      return filteredServices.username === username;
    }
  );

  //======================================================================

  console.log(charSelect);

  console.log(serviceCategory);

  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        setCurrentPage={setCurrentPage}
        charSelect={charSelect}
        currentPage={currentPage}
      />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
          setCurrentPage={setCurrentPage}
        />
      )}
      {charSelect == "handyman" &&
        currentPage === "HomePageHandyman" &&
        updateService == false && (
          <HomePageHandyman
            HMindividualServices={HMindividualServices}
            setCreateService={setCreateService}
            setUpdateService={setUpdateService}
            setUpdateServiceDetails={setUpdateServiceDetails}
            setBackButtonVisibility={setBackButtonVisibility}
            setCurrentPage={setCurrentPage}
          />
        )}
      {currentPage === "CreateServicesHandyman" && (
        // createService == true
        <CreateServicesHandyman
          setCreateService={setCreateService}
          setBackButtonVisibility={setBackButtonVisibility}
          setCurrentPage={setCurrentPage}
          setServiceCategory={setServiceCategory}
          setServiceDescription={setServiceDescription}
          setServiceTOW={setServiceTOW}
          setServicePriceFrom={setServicePriceFrom}
        />
      )}
      {updateService && (
        <UpdateServicesHandyman
          updateServiceDetails={updateServiceDetails}
          setServiceCategory={setServiceCategory}
          setServiceDescription={setServiceDescription}
          setServiceTOW={setServiceTOW}
          setServicePriceFrom={setServicePriceFrom}
        />
      )}

      {createService == true && <CreateServicesHandyman />}
      {/* <ProfileHandyman
        averageRating={averageRating}
        totalReviews={totalReviews}
        totalJobs={totalJobs}
      /> */}
    </div>
  );
};

export default HomePageMain;
