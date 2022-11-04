import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import FindServices from "./Services/FindServices";
import CharacterSelect from "./LoginPage/CharacterSelect";
import CreateAccount1 from "./LoginPage/CreateAccount/CreateAccount1";
import CreateAccount2User from "./LoginPage/CreateAccount/CreateAccount2User";
import CreateAccountMain from "./LoginPage/CreateAccountMain";
import LoginPage from "./LoginPage/LoginPage";
import UserLoginPage from "./LoginPage/UserLoginPage";
import "./style.css";
import ServiceInfo from "./Services/ServiceInfo";
import Services from "./Services/Services";
import HomePageMain from "./Home/HomePageMain";
import CreateServicesHandyman from "./Services/CreateServicesHandyman";
import AcceptedServicesModal from "./Components/Modals/AcceptedServicesModal";
import HamburgerModal from "./Components/Modals/HamburgerModal";

import handymanData from "./DummyDataSets/profileHandyman";
import handymanServicesData from "./DummyDataSets/HandymanServices";
import Profiles from "./Profile/Profiles";

export default function App() {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  //=============================================================================
  const [charSelect, setCharSelect] = useState("");
  const [usercredentialscreated, setUsercredentialscreated] = useState(false);

  //=============================================================================
  // const [handymanServicesData, setHandymanServicesData] = useState([]);
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

  useEffect(() => {
    setAverageRating(reviews_average);
    setTotalReviews(handymanData[0].number_of_reviews.reviews);
    setTotalJobs(handymanData[0].number_of_jobs.jobs);
  }, []);

  console.log(handymanServicesData);
  console.log(averageRating);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route
          path="/signup"
          element={
            <CreateAccountMain
              charSelect={charSelect}
              setCharSelect={setCharSelect}
              usercredentialscreated={usercredentialscreated}
              setUsercredentialscreated={setUsercredentialscreated}
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
        <Route path="/profile" element={<Profiles charSelect={charSelect} />} />
      </Routes>
    </div>
  );
}
