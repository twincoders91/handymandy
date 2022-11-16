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

  setHmAverageRating,
  setIndividualHmStar,
  setJobsCompleted,
  setTotalRatings,
  setIndividualHmReviews,
  userNotifications,
  hmNotifications,
  setInboxData,
  setCurrentPage,
  setBackButtonVisibility,
}) => {
  return (
    <div>
      <Navbar
        userNotifications={userNotifications}
        hmNotifications={hmNotifications}
      />
      {charSelect == "handyman" && (
        <MyHandymanServices
          hm_id={hm_id}
          setLoading={setLoading}
          loading={loading}
          userDetails={userDetails}
          charSelect={charSelect}
          setInboxData={setInboxData}
          setCurrentPage={setCurrentPage}
          setBackButtonVisibility={setBackButtonVisibility}
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
          setInboxData={setInboxData}
          setBackButtonVisibility={setBackButtonVisibility}
        />
      )}
    </div>
  );
};

export default MyServices;
