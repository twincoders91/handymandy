import React from "react";
import Navbar from "../Components/Navbar";
import CharacterSelect from "../LoginPage/CharacterSelect";
import MyHandymanServices from "./MyHandymanServices";
import MyUserServices from "./MyUserServices";

const MyServices = ({ charSelect, user_id, hm_id, setLoading, loading }) => {
  return (
    <div>
      <Navbar />
      {charSelect == "handyman" && <MyHandymanServices />}
      {charSelect == "user" && (
        <MyUserServices
          user_id={user_id}
          setLoading={setLoading}
          loading={loading}
          hm_id={hm_id}
        />
      )}
    </div>
  );
};

export default MyServices;
