import React, { useEffect, useState, useMemo } from "react";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import ClipLoader from "react-spinners/RiseLoader";
import ClipLoader2 from "react-spinners/PulseLoader";
import MyUserServicesCard from "./MyUserServicesCard";

const MyUserServices = ({ user_id, hm_id, setLoading, loading }) => {
  const [allJobs, setAllJobs] = useState("");
  const [hmRatings, setHmRatings] = useState("");

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

  //===================================================================

  useEffect(() => {
    fetchJobsByUser();
  }, []);

  console.log(allJobs);
  console.log(loading);
  return (
    <div className="my--services--main--container">
      <span className="fw700 fs32 mt24 mb24 white">Service Info</span>
      {loading ? (
        <ClipLoader size={100} color={"#ffffff"} loading={loading} />
      ) : allJobs ? (
        allJobs.map((item) => {
          return <MyUserServicesCard item={item} />;
        })
      ) : (
        <>No Services yet</>
      )}
    </div>
  );
};

export default MyUserServices;
