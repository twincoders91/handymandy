import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccountMain from "./LoginPage/CreateAccountMain";
import LoginPage from "./LoginPage/LoginPage";
import UserLoginPage from "./LoginPage/UserLoginPage";
import "./style.css";
import Services from "./Services/Services";
import HomePageMain from "./Home/HomePageMain";
import handymanData from "./DummyDataSets/profileHandyman";
import handymanServicesData from "./DummyDataSets/HandymanServices";
import CreateServicesHandyman from "./Services/CreateServicesHandyman";
import UpdateServicesHandyman from "./Services/UpdateServicesHandyman";
import Profiles from "./Profile/Profiles";
import AcceptedServices from "./Services/AcceptedServices";
import EditProfileHandyMan from "./EditProfiles/EditProfileHandyMan";

export default function App() {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  //================================== Navbar States===========================================
  const [backButtonVisibility, setBackButtonVisibility] = useState(true);
  //==================================Account States===========================================
  const [charSelect, setCharSelect] = useState("");
  const [usercredentialscreated, setUsercredentialscreated] = useState(false);
  const [username, setUsername] = useState("User1");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const [postalCode, setPostalCose] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [yearsInBiz, setYearsInBiz] = useState("");
  const [aboutBiz, setAboutBiz] = useState("");
  //=================================Services States=====================================
  const [servicesCategory, setServicesCategory] = useState("");

  //============================State that hold services data=====================================
  const [createService, setCreateService] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceTOW, setServiceTOW] = useState([]);
  const [servicePriceFrom, setServicePriceFrom] = useState("");
  const [updateServiceDetails, setUpdateServiceDetails] = useState({});

  //================total review_score and average review_score==================
  const reviews_sum = handymanData[0].reviews_score.reduce(
    (accumulator, value) => {
      return accumulator + value;
    },
    0
  );
  const reviews_average =
    Math.round((reviews_sum / handymanData[0].number_of_reviews.reviews) * 10) /
    10;
  //=============================================================================

  //======================= Back button settings ===========================

  useEffect(() => {
    setAverageRating(reviews_average);
    setTotalReviews(handymanData[0].number_of_reviews.reviews);
    setTotalJobs(handymanData[0].number_of_jobs.jobs);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/login"
          element={
            <UserLoginPage
              charSelect={charSelect}
              accountCreated={accountCreated}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <CreateAccountMain
              charSelect={charSelect}
              setCharSelect={setCharSelect}
              usercredentialscreated={usercredentialscreated}
              setUsercredentialscreated={setUsercredentialscreated}
              setUsername={setUsername}
              setAccountCreated={setAccountCreated}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePageMain
              averageRating={averageRating}
              totalReviews={totalReviews}
              totalJobs={totalJobs}
              charSelect={charSelect}
              handymanServicesData={handymanServicesData}
              setServicesCategory={setServicesCategory}
              username={username}
              setBackButtonVisibility={setBackButtonVisibility}
              backButtonVisibility={backButtonVisibility}
              setUpdateServiceDetails={setUpdateServiceDetails}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              averageRating={averageRating}
              totalReviews={totalReviews}
              totalJobs={totalJobs}
              handymanServicesData={handymanServicesData}
              servicesCategory={servicesCategory}
              backButtonVisibility={backButtonVisibility}
              setBackButtonVisibility={setBackButtonVisibility}
            />
          }
        />
        <Route
          path="/createservice"
          element={
            <CreateServicesHandyman
              backButtonVisibility={backButtonVisibility}
              setBackButtonVisibility={setBackButtonVisibility}
              setServiceCategory={setServiceCategory}
              setServiceDescription={setServiceDescription}
              setServiceTOW={setServiceTOW}
              setServicePriceFrom={setServicePriceFrom}
            />
          }
        />
        <Route
          path="/updateservice"
          element={
            <UpdateServicesHandyman
              updateServiceDetails={updateServiceDetails}
              setServiceCategory={setServiceCategory}
              setServiceDescription={setServiceDescription}
              setServiceTOW={setServiceTOW}
              setServicePriceFrom={setServicePriceFrom}
            />
          }
        />
        <Route
          path="/acceptedservice"
          element={
            <AcceptedServices
              handymanServicesData={handymanServicesData}
              username={username}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profiles
              charSelect={charSelect}
              averageRating={averageRating}
              totalJobs={totalJobs}
              totalReviews={totalReviews}
              setBackButtonVisibility={setBackButtonVisibility}
              backButtonVisibility={backButtonVisibility}
            />
          }
        />
        <Route path="/editprofile" element={<EditProfileHandyMan />} />
      </Routes>
      <AcceptedServices
        handymanServicesData={handymanServicesData}
        username={username}
      />
    </div>
  );
}
