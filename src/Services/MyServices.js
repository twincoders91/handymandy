import React from "react";
import Navbar from "../Components/Navbar";
import CharacterSelect from "../LoginPage/CharacterSelect";
import MyHandymanServices from "./MyHandymanServices";
import MyUserServices from "./MyUserServices";

const MyServices = ({
  charSelect,
  user_id,
  setLoading,
  loading,
  setHmProfile,
  setCurrentPage,
  setHmAverageRating,
  setIndividualHmStar,
  setJobsCompleted,
  setTotalRatings,
  setIndividualHmReviews,
}) => {
  return (
    <div>
      <Navbar />
      {charSelect == "handyman" && <MyHandymanServices />}
      {charSelect == "user" && (
        <MyUserServices
          user_id={user_id}
          setLoading={setLoading}
          loading={loading}
          setHmProfile={setHmProfile}
          setCurrentPage={setCurrentPage}
          setHmAverageRating={setHmAverageRating}
          setIndividualHmStar={setIndividualHmStar}
          setJobsCompleted={setJobsCompleted}
          setTotalRatings={setTotalRatings}
          setIndividualHmReviews={setIndividualHmReviews}
        />
      )}
    </div>
  );
};

export default MyServices;
