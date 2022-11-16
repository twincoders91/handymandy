import React, { useState, useEffect } from "react";
import MyHandymanServicesCard from "./MyHandymanServicesCard";
import ClipLoader from "react-spinners/RiseLoader";
import ApproveJobsModal from "../Components/Modals/ApproveJobsModal";
import ApproveJobsModalHm from "../Components/Modals/ApproveJobsModalHm";
import DeclineJobsModalHm from "../Components/Modals/DeclineJobsModalHm";
import CharacterSelect from "../LoginPage/CharacterSelect";
import progressData from "../DummyDataSets/Progress";

const MyHandymanServices = ({
  hm_id,
  setLoading,
  loading,
  userDetails,
  setCurrentPage,
  charSelect,
  setInboxData,
  setBackButtonVisibility,
}) => {
  const [allJobs, setAllJobs] = useState("");
  const [approveJobsModalValue, setApproveJobsModalValue] = useState(false);
  const [declineJobsModalValue, setDeclineJobsModalValue] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [filteredClicked, setFilteredClicked] = useState(false);
  const [currentFilteredCategory, setCurrentFilteredCategory] = useState("");

  console.log(charSelect);

  const fetchJobsByHm = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/jobs/handyman-up/${hm_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      setAllJobs(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

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

  //===================================================================

  useEffect(() => {
    fetchJobsByHm();
  }, [approveJobsModalValue, declineJobsModalValue]);
  console.log(allJobs);

  return (
    <div>
      {approveJobsModalValue && (
        <ApproveJobsModalHm
          setApproveJobsModalValue={setApproveJobsModalValue}
          cardClicked={cardClicked}
          setFilteredClicked={setFilteredClicked}
        />
      )}
      {declineJobsModalValue && (
        <DeclineJobsModalHm
          setDeclineJobsModalValue={setDeclineJobsModalValue}
          cardClicked={cardClicked}
          setFilteredClicked={setFilteredClicked}
        />
      )}
      <div className="my--services--main--container">
        <span className="fw700 fs32 mt24 mb24 white">Your Jobs</span>

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
              <MyHandymanServicesCard
                key={item.jobs_id}
                eachJobData={item}
                userDetails={userDetails}
                setCurrentPage={setCurrentPage}
                setDeclineJobsModalValue={setDeclineJobsModalValue}
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
              <MyHandymanServicesCard
                key={item.jobs_id}
                eachJobData={item}
                userDetails={userDetails}
                setCurrentPage={setCurrentPage}
                setDeclineJobsModalValue={setDeclineJobsModalValue}
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
        {filteredArray.length === 0 && filteredClicked === true && (
          <div className="hm3--noservices--text--box">No Services</div>
        )}
        {filteredArray.length !== 0 && filteredClicked === false && (
          <div className="hm3--noservices--text--box">
            Your services has been updated
          </div>
        )}
      </div>
    </div>
  );
};

export default MyHandymanServices;
