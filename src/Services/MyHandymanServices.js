import React, { useState, useEffect } from "react";
import MyHandymanServicesCard from "./MyHandymanServicesCard";
import ClipLoader from "react-spinners/RiseLoader";
import ApproveJobsModal from "../Components/Modals/ApproveJobsModal";
import ApproveJobsModalHm from "../Components/Modals/ApproveJobsModalHm";
import DeclineJobsModalHm from "../Components/Modals/DeclineJobsModalHm";
import CharacterSelect from "../LoginPage/CharacterSelect";

const MyHandymanServices = ({
  hm_id,
  setLoading,
  loading,
  userDetails,
  setCurrentPage,
  charSelect,
}) => {
  const [allJobs, setAllJobs] = useState("");
  const [approveJobsModalValue, setApproveJobsModalValue] = useState(false);
  const [declineJobsModalValue, setDeclineJobsModalValue] = useState(false);
  const [cardClicked, setCardClicked] = useState("");

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
        />
      )}
      {declineJobsModalValue && (
        <DeclineJobsModalHm
          setDeclineJobsModalValue={setDeclineJobsModalValue}
          cardClicked={cardClicked}
        />
      )}
      <div className="my--services--main--container">
        <span className="fw700 fs32 mt24 mb24 white">Your Jobs</span>

        {loading ? (
          <div className="my--services--loading--container">
            <ClipLoader size={50} color={"#FFBA0A"} loading={loading} />
          </div>
        ) : allJobs.length > 0 ? (
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
              />
            );
          })
        ) : (
          <div className="fs32 fw700 mt24">No Services yet</div>
        )}
      </div>
    </div>
  );
};

export default MyHandymanServices;
