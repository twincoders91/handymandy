import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "./ProfileHandyman";
import ViewProfileHandyman from "./ViewProfileHandyMan";

const Profiles = ({
  charSelect,
  averageRating,
  totalJobs,
  totalReviews,
  setBackButtonVisibility,
  backButtonVisibility,
  serviceInfo,
}) => {
  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
      />
      {charSelect == "user" && <Profiles />}
      {charSelect == "handyman" && (
        <ProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
        />
      )}
      {charSelect == "user" && (
        <ViewProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          serviceInfo={serviceInfo}
        />
      )}
    </div>
  );
};

export default Profiles;
