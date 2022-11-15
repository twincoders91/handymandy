import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "./ProfileHandyman";
import ProfileUser from "./ProfileUser";
import ViewProfileHandyman from "./ViewProfileHandyMan";

const Profiles = ({
  charSelect,
  averageRating,
  totalJobs,
  totalReviews,
  setBackButtonVisibility,
  backButtonVisibility,
  serviceInfo,
  user_id,
  hm_id,
  hmProfile,
  individualHmStar,
  individualHmReviews,
  viewHmProfile,
  setViewHmProfile,
  hmAverageRating,
  jobsCompleted,
  totalRatings,
  hMDetails,
  setHMDetails,
  userDetails,
  setUserDetails,
  setCurrentPage,
  currentPage,
  userNotifications,
}) => {
  console.log(currentPage);
  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        charSelect={charSelect}
        viewHmProfile={viewHmProfile}
        setViewHmProfile={setViewHmProfile}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        userNotifications={userNotifications}
      />
      {charSelect == "handyman" && (
        <ProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          hm_id={hm_id}
          hMDetails={hMDetails}
          setHMDetails={setHMDetails}
          currentPage={currentPage}
        />
      )}
      {charSelect == "user" && currentPage === "General User Page" && (
        <ProfileUser
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          user_id={user_id}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {charSelect == "user" &&
        (currentPage === "Service Info" || currentPage === "From Featured") && (
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
            hmAverageRating={hmAverageRating}
            jobsCompleted={jobsCompleted}
            totalRatings={totalRatings}
            setCurrentPage={setCurrentPage}
          />
        )}
    </div>
  );
};

export default Profiles;
