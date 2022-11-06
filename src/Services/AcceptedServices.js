import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import inProgress from "../Assets/services/inprogress.svg";
import completedProgress from "../Assets/services/complete.svg";
import Navbar from "../Components/Navbar";
import userData from "../DummyDataSets/UserProfile";
import { findAllInRenderedTree } from "react-dom/test-utils";

//services must have schema with progress: completed true or false

const AcceptedServices = ({ handymanServicesData, username }) => {
  const currentUser = userData.filter((userFilter) => {
    return userFilter.username === username;
  })[0];

  let handyManMatched = [];

  if (currentUser.hired_services) {
    const handyMenHired = currentUser.hired_services.map(
      (hiredHandyman) => hiredHandyman.hm_username
    );

    handyManMatched = handymanServicesData.filter((handyMan) => {
      return handyMenHired.includes(handyMan.username);
    });

    console.log(handyManMatched);
  } else {
    console.log("no user");
  }

  return (
    <>
      <Navbar />
      <div className="accepted--services--container">
        <span className="fw700 fs32 mt24 mb24 white">Accepted Services</span>
        {handyManMatched.map((hiredHM) => {
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
                    <img src={inProgress} />
                    <p className="m0 fw700 fs12 white ml8">
                      Project in progress
                    </p>
                  </div>
                </div>
                <div className="accepted--services--profile--pic ml36">
                  <img src={recommendedprofile} alt="images"></img>
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
