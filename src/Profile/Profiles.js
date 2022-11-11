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
  hm_id,
  hmProfile,
  individualHmStar,
  individualHmReviews,
}) => {
  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
      />
      {charSelect == "handyman" && (
        <ProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          hm_id={hm_id}
        />
      )}
      {charSelect == "user" && (
        <ViewProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          serviceInfo={serviceInfo}
          hm_id={hm_id}
          hmProfile={hmProfile}
          individualHmStar={individualHmStar}
          individualHmReviews={individualHmReviews}
        />
      )}
    </div>
  );
};

export default Profiles;
