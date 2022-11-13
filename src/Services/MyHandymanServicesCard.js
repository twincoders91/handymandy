import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";
import wrench from "../Assets/services/wrench.svg";

const MyHandymanServicesCard = ({
  userDetails,
  eachJobData,
  setCurrentPage,
  setDeclineJobsModalValue,
  setApproveJobsModalValue,
  setCardClicked,
}) => {
  const [userRatings, setUserRatings] = useState([]);
  console.log(eachJobData);

  //====================== RATINGS FETCHING =======================
  const getUserRatings = async () => {
    // if (eachJobData.length <= 0) return;
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/${eachJobData.user_id}/ratingssummary`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const ratingData = await res.json();
      setUserRatings(ratingData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserRatings();
  }, []);
  //===================================================================
  const handleApproveMyService = () => {
    setApproveJobsModalValue(true);
    setCardClicked(eachJobData);
    console.log("clicked");
  };
  const handleDeclineMyService = () => {
    setDeclineJobsModalValue(true);
    setCardClicked(eachJobData);
  };
  //===================================================================

  return (
    <div>
      <div className="myuserservice--card mb24">
        <div className="myuserservice--card--top">
          <img
            src={recommended4usampleimage}
            className="myuserservice--image"
            alt="images"
          />
          <div className="hm3--info--description--mega--container">
            <p className="myhmservice--title fs16 fw700 m0 white mb4 ml12 mt8">
              {eachJobData.title}
            </p>
            <div className="myuserservice--description--container">
              <div className="myuserservice--description--section ml12">
                <p className="myuserservice--name fs12 fw400 m0 white mb4">
                  {eachJobData.user_first_name}
                </p>
                <div className="myuserservice--profile--stars mb4">
                  <img src={recommendedprofile} alt="images"></img>
                </div>
                {userRatings.length > 0 ? (
                  <p className="m0 fw700 fs8 white">
                    {userRatings[0].total_jobs} job(s) engaged
                  </p>
                ) : (
                  <p className="m0 fw700 fs8 white">0 job engaged</p>
                )}
              </div>
              <div className="myuserservice--price m0">
                <p className="starting--from m0 white fw700">starting from</p>
                <p className="starting--from--price m0 fs28 fw700">
                  ${eachJobData.price_from}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myuserservice--card--bottom">
          <p className="m0 fs14 fw700 mb8 mt8">Job Requirement</p>
          <span className="myuserservice--desc fs12 fw400 white">
            {eachJobData.job_requirement}
          </span>
          <p className="m0 fs14 fw700 mb8 mt12">{eachJobData.category}</p>
          <span className="myuserservice--desc fs12 fw400 white">
            {eachJobData.description}
          </span>
          <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
          <div className="type--of--work--servicescard">
            {eachJobData.types_of_work.length === 0 && (
              <div className="fs12 fw300 white">- nil -</div>
            )}
            {eachJobData.types_of_work.map((works) => {
              return (
                <div
                  className="m0 fs12 fw700 type--of--work--content"
                  key={Math.random() * 1000}
                >
                  <img src={wrench} />
                  <p className="m0 fs12 fw400 white ml8">{works}</p>
                </div>
              );
            })}
            <div className="userservices--card--job--status--box">
              <p className="m0 fw700 fs14">{eachJobData.job_status}</p>
              <img
                src={require(`../Assets/services/${eachJobData.job_status}.svg`)}
                className="ml12"
              />
            </div>
            <div className="myuserservice--buttons--container">
              {eachJobData.job_status === "pending" && (
                <button
                  className="myuserservice--view--approve--button fw700 fs12"
                  onClick={() => {
                    handleApproveMyService();
                  }}
                >
                  Approve
                </button>
              )}
              {eachJobData.job_status === "pending" ? (
                <>
                  <button
                    className="myuserservice--view--cancel--button fw700 fs12"
                    onClick={() => {
                      handleDeclineMyService();
                    }}
                  >
                    Decline
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHandymanServicesCard;
