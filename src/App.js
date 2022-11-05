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
import Profiles from "./Profile/Profiles";

export default function App() {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  //================================== Navbar States===========================================
  const [backButtonVisibility, setBackButtonVisibility] = useState(true);
  const [currentPage, setCurrentPage] = useState("");
  const [previousPage, setPreviousPage] = useState();
  //==================================Account States===========================================
  const [charSelect, setCharSelect] = useState("");
  const [usercredentialscreated, setUsercredentialscreated] = useState(false);
  const [username, setUsername] = useState("");
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

  console.log(totalReviews);
  console.log(averageRating);
  console.log(currentPage);
  console.log(backButtonVisibility);

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
              setPreviousPage={setPreviousPage}
              setAccountCreated={setAccountCreated}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
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
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
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
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
      </Routes>
    </div>
  );
}
