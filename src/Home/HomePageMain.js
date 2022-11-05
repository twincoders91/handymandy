import React, { useState } from "react";
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

  console.log(serviceCategory);

  return (
    <div>
      <Navbar />
      {charSelect == "user" && (
        <HomePage
          handymanServicesData={handymanServicesData}
          setServicesCategory={setServicesCategory}
        />
      )}
      {charSelect == "handyman" &&
        createService == false &&
        updateService == false && (
          <HomePageHandyman
            HMindividualServices={HMindividualServices}
            setCreateService={setCreateService}
            setUpdateService={setUpdateService}
            setUpdateServiceDetails={setUpdateServiceDetails}
          />
        )}
      {createService == true && (
        <CreateServicesHandyman
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
      {/* <ProfileHandyman
        averageRating={averageRating}
        totalReviews={totalReviews}
        totalJobs={totalJobs}
      /> */}
    </div>
  );
};

export default HomePageMain;
