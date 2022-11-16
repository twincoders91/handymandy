import React, { useEffect, useState, useMemo } from "react";
import ClipLoader from "react-spinners/RiseLoader";
import MyUserServicesCard from "./MyUserServicesCard";
import CancelJobsModal from "../Components/Modals/CancelJobsModal";
import ApproveJobsModal from "../Components/Modals/ApproveJobsModal";
import progressData from "../DummyDataSets/Progress";

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
  setInboxData,
  setBackButtonVisibility,
}) => {
  const [allJobs, setAllJobs] = useState("");
  const [cancelJobsModalValue, setCancelJobsModalValue] = useState(false);
  const [approveJobsModalValue, setApproveJobsModalValue] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [filteredClicked, setFilteredClicked] = useState(false);
  const [currentFilteredCategory, setCurrentFilteredCategory] = useState("");

  const fetchJobsByUser = async () => {
    setLoading(true);
    console.log(user_id);
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
  console.log(allJobs);
  console.log(cancelJobsModalValue);
  //===================================================================

  //=========================Filter by Category Button============================

  const handleFilterByProgress = (categories) => {
    setFilteredArray(
      allJobs.filter(
        (services) => services.job_status === categories.category.toLowerCase()
      )
    );
    if (categories.category === currentFilteredCategory) {
      setFilteredClicked(false);
      setCurrentFilteredCategory("");
      setFilteredArray([]);
    } else {
      setFilteredClicked(true);
      setCurrentFilteredCategory(categories.category);
    }
  };
  console.log(filteredArray);
  console.log(filteredClicked);

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
        <div className="my--services--filter--by--progress--container">
          {progressData.map((progressStatus) => {
            return (
              <div
                className="my--services--category--buttons"
                onClick={() => {
                  handleFilterByProgress(progressStatus);
                }}
              >
                {currentFilteredCategory !== progressStatus.category ? (
                  <img
                    src={require(`../Assets/services/${progressStatus.icon}.svg`)}
                    className={"my-services--category--cards--icon"}
                    alt="images"
                  ></img>
                ) : (
                  <div className="my--services--category--buttons--text">
                    <p className="m0">{progressStatus.category}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {loading && (
          <div className="my--services--loading--container">
            <ClipLoader size={50} color={"#FFBA0A"} loading={loading} />
          </div>
        )}
        {allJobs.length > 0 &&
          !loading &&
          filteredArray.length === 0 &&
          filteredClicked === false &&
          allJobs.map((item) => {
            return (
              <MyUserServicesCard
                key={item.jobs_id}
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
                setInboxData={setInboxData}
                setBackButtonVisibility={setBackButtonVisibility}
              />
            );
          })}
        {allJobs.length > 0 &&
          !loading &&
          filteredArray.length > 0 &&
          filteredClicked === true &&
          filteredArray.map((item) => {
            return (
              <MyUserServicesCard
                key={item.jobs_id}
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
                setInboxData={setInboxData}
                setBackButtonVisibility={setBackButtonVisibility}
              />
            );
          })}
        {allJobs.length === 0 && !loading && (
          <div className="fs32 fw700 mt24">No Services yet</div>
        )}
      </div>
    </>
  );
};

export default MyUserServices;
