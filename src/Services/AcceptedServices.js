import React, { useState, useEffect } from "react";

import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import pending from "../Assets/services/pending.svg";
import inprogress from "../Assets/services/in progress.svg";
import completed from "../Assets/services/complete.svg";
import cancelled from "../Assets/services/cancelled.svg";
import Navbar from "../Components/Navbar";
import { findAllInRenderedTree } from "react-dom/test-utils";

//services must have schema with progress: completed true or false

const AcceptedServices = ({ username, user_id }) => {
  const [allJobRequestsUser, setAllJobRequestsUser] = useState([]);

  //==================== Fetch Jobs by user_id ======================
  const getAllJobRequestsUser = async () => {
    const res = await fetch(`http://127.0.0.1:8001/jobs/user/${user_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setAllJobRequestsUser(data);
  };

  useEffect(() => {
    getAllJobRequestsUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="accepted--services--container">
        <span className="fw700 fs32 mt24 mb24 white">Your Services</span>
        {allJobRequestsUser.map((hiredHM) => {
          return (
            <div className="accepted--services--card mt24">
              <img
                src={recommended4usampleimage}
                className="accepted--services--image"
                alt="images"
              />
              <div className="accepted--services--description--container">
                <div className="accepted--services--description--section ml12">
                  <p className="accepted--services--title fs16 fw700 m0 white mb4">
                    {hiredHM.category}
                  </p>
                  <p className="accepted--services--name fs12 fw400 m0 white mb4">
                    {hiredHM.first_name}
                  </p>
                  <div className="progress--icon--and--progress mt12">
                    <img src={hiredHM.job_status.split(" ").join("")} />
                    <p className="m0 fw700 fs12 white ml8">
                      {hiredHM.job_status}
                    </p>
                  </div>
                </div>
                <div className="accepted--services--profile--pic ml36">
                  <img src={hiredHM.profile_image} alt="images"></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AcceptedServices;
