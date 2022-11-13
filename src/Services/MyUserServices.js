import React, { useEffect, useState, useMemo } from "react";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import ClipLoader from "react-spinners/RiseLoader";
import MyUserServicesCard from "./MyUserServicesCard";
import CancelJobsModal from "../Components/Modals/CancelJobsModal";
import ApproveJobsModal from "../Components/Modals/ApproveJobsModal";

const MyUserServices = ({
  user_id,
  setLoading,
  loading,
  setCurrentPage,
  setHmProfile,
  setHmAverageRating,
  setIndividualHmStar,
  setJobsCompleted,
  setTotalRatings,
  setIndividualHmReviews,
}) => {
  const [allJobs, setAllJobs] = useState("");
  const [cancelJobsModalValue, setCancelJobsModalValue] = useState(false);
  const [approveJobsModalValue, setApproveJobsModalValue] = useState(false);
  const [cardClicked, setCardClicked] = useState("");

  const fetchJobsByUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8001/jobs/user/${user_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setAllJobs(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(cancelJobsModalValue);
  //===================================================================

  useEffect(() => {
    fetchJobsByUser();
  }, [cancelJobsModalValue, approveJobsModalValue]);

  return (
    <>
      {cancelJobsModalValue && (
        <CancelJobsModal
          setCancelJobsModalValue={setCancelJobsModalValue}
          cardClicked={cardClicked}
        />
      )}
      {approveJobsModalValue && (
        <ApproveJobsModal
          setApproveJobsModalValue={setApproveJobsModalValue}
          cardClicked={cardClicked}
        />
      )}
      <div className="my--services--main--container">
        <span className="fw700 fs32 mt24 mb24 white">My Services</span>

        {loading ? (
          <div className="my--services--loading--container">
            <ClipLoader size={50} color={"#FFBA0A"} loading={loading} />
          </div>
        ) : allJobs.length > 0 ? (
          allJobs.map((item) => {
            return (
              <MyUserServicesCard
                key={item.jobs_id}
                loading={loading}
                setLoading={setLoading}
                item={item}
                setHmProfile={setHmProfile}
                setCurrentPage={setCurrentPage}
                setHmAverageRating={setHmAverageRating}
                setIndividualHmStar={setIndividualHmStar}
                setJobsCompleted={setJobsCompleted}
                setTotalRatings={setTotalRatings}
                setIndividualHmReviews={setIndividualHmReviews}
                setCancelJobsModalValue={setCancelJobsModalValue}
                cancelJobsModalValue={cancelJobsModalValue}
                setApproveJobsModalValue={setApproveJobsModalValue}
                setCardClicked={setCardClicked}
              />
            );
          })
        ) : (
          <div className="fs32 fw700 mt24">No Services yet</div>
        )}
      </div>
    </>
  );
};

export default MyUserServices;
