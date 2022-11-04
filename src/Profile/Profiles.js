import React from "react";
import ProfileHandyman from "./ProfileHandyman";

const Profiles = ({ charSelect }) => {
  return (
    <div>
      {charSelect == "user" && <Profiles />}
      {charSelect == "handyman" && <ProfileHandyman />}
    </div>
  );
};

export default Profiles;
