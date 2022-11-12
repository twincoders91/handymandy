import React from "react";
import Navbar from "../Components/Navbar";
import CharacterSelect from "../LoginPage/CharacterSelect";
import MyHandymanServices from "./MyHandymanServices";
import MyUserServices from "./MyUserServices";

const MyServices = ({ charSelect, user_id }) => {
  return (
    <div>
      <Navbar />
      {charSelect == "handyman" && <MyHandymanServices />}
      {charSelect == "user" && <MyUserServices user_id={user_id} />}
    </div>
  );
};

export default MyServices;
