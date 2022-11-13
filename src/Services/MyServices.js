import React from "react";
import Navbar from "../Components/Navbar";
import CharacterSelect from "../LoginPage/CharacterSelect";
import MyHandymanServices from "./MyHandymanServices";
import MyUserServices from "./MyUserServices";

const MyServices = ({
  charSelect,
  hm_id,
  user_id,
  setLoading,
  loading,
  setHmProfile,
  userDetails,
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
      {charSelect == "handyman" && (
        <MyHandymanServices
          hm_id={hm_id}
          setLoading={setLoading}
          loading={loading}
          userDetails={userDetails}
          setCurrentPage={setCurrentPage}
          charSelect={charSelect}
        />
      )}
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
