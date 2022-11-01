import React from "react";
import HomePage from "./Home/HomePage";
import FindServices from "./Services/FindServices";
import CharacterSelect from "./LoginPage/CharacterSelect";
import CreateAccount1 from "./LoginPage/CreateAccount/CreateAccount1";
import LoginPage from "./LoginPage/LoginPage";
import UserLoginPage from "./LoginPage/UserLoginPage";
import "./style.css";
import ServiceInfo from "./Services/ServiceInfo";
import Services from "./Services/Services";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <FindServices /> */}
      <Services />
      {/* <ServiceInfo /> */}
      {/* <UserLoginPage /> */}
      {/* <CharacterSelect /> */}
      {/* <CreateAccount1 /> */}
    </div>
  );
}
