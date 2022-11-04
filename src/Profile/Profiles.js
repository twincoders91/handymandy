import React from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "./ProfileHandyman";

const Profiles = ({ charSelect, averageRating, totalJobs, totalReviews }) => {
  return (
    <div>
      <Navbar />
      {charSelect == "user" && <Profiles />}
      {charSelect == "handyman" && (
        <ProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
        />
      )}
    </div>
  );
};

export default Profiles;
