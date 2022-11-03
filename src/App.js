import React from "react";
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
import ServicesHandyman from "./Services/ServicesHandyman";
import AcceptedServicesModal from "./Components/Modals/AcceptedServicesModal";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <CategoryPage /> */}
      {/* <Services /> */}
      <AcceptedServicesModal />
      {/* <UserLoginPage /> */}
      {/* <CharacterSelect /> */}
      {/* <CreateAccountMain /> */}
      {/* <HomePageMain /> */}
      {/* <ServicesHandyman /> */}
    </div>
  );
}
