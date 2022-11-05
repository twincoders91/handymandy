import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileHandyman from "./ProfileHandyman";

const Profiles = ({
  charSelect,
  averageRating,
  totalJobs,
  totalReviews,
  setBackButtonVisibility,
  backButtonVisibility,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <div>
      <Navbar
        backButtonVisibility={backButtonVisibility}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        charSelect={charSelect}
      />
      {charSelect == "user" && <Profiles />}
      {charSelect == "handyman" && (
        <ProfileHandyman
          averageRating={averageRating}
          totalJobs={totalJobs}
          totalReviews={totalReviews}
          setBackButtonVisibility={setBackButtonVisibility}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Profiles;
