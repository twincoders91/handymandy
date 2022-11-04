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

export default function App() {
  const [averageRating, setAverageRating] = useState(0);

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
  //======================================================================

  useEffect(() => {
    setAverageRating(reviews_average);
  }, []);
  console.log(averageRating);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<CreateAccountMain />} />
        <Route path="/home" element={<HomePageMain />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
