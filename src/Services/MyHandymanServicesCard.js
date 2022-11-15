import React, { useEffect, useState } from "react";
import default_image from "../Assets/homepage/recommended4usampleimage.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import wrench from "../Assets/services/wrench.svg";
import { useNavigate } from "react-router-dom";

const MyHandymanServicesCard = ({
  userDetails,
  eachJobData,
  setCurrentPage,
  setDeclineJobsModalValue,
  setApproveJobsModalValue,
  setCardClicked,
  setInboxData,
}) => {
  const [userRatings, setUserRatings] = useState([]);
  const [userProfile_image, setUserProfile_image] = useState("");
  const navigate = useNavigate();
  console.log(eachJobData);

  //=================== Truncate String =======================
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
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
    //====================== User Profile Image fetching =======================
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/${eachJobData.user_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const userProfileImage = await res.json();
      if (userProfileImage.length === 0) {
        setUserProfile_image(defaultavatar);
      } else {
        setUserProfile_image(userProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserRatings();
  }, []);

  //=======================Handle button clicks ============================
  const handleApproveMyService = () => {
    setApproveJobsModalValue(true);
    setCardClicked({ eachJobData, userProfile_image });
    console.log("clicked");
  };
  const handleDeclineMyService = () => {
    setDeclineJobsModalValue(true);
    setCardClicked({ eachJobData, userProfile_image });
  };

  const handleMessageMyService = () => {
    // try {
    //   const res = await fetch(`http://127.0.0.1:8001/inbox/${id}`, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     method: "GET",
    //   });

    //   const getInboxData = await res.json();
    //   const overallData = { eachJobData, getInboxData };
    //   setInboxData(overallData);
    // } catch (error) {
    //   console.error(error);
    // }
    setInboxData(eachJobData);
    navigate("/inbox");
  };
  //===================================================================

  return (
    <div>
      <div className="myuserservice--card mb24">
        <div className="myuserservice--card--top">
          <div className="services--image--box">
            <img
              src={
                eachJobData.image_url ? eachJobData.image_url : default_image
              }
              className="myuserservice--image"
              alt="images"
            />
          </div>
          <div className="hm3--info--description--mega--container">
            <p className="myhmservice--title fs16 fw700 m0 white mb4 ml12 mt8">
              {truncate(
                eachJobData.title.charAt(0).toUpperCase() +
                  eachJobData.title.slice(1),
                25
              )}
            </p>
            <div className="myuserservice--description--container">
              <div className="myuserservice--description--section ml12">
                <p className="myuserservice--name fs12 fw400 m0 white mb4">
                  {eachJobData.user_first_name.charAt(0).toUpperCase() +
                    eachJobData.user_first_name.slice(1)}
                </p>
                <div className="myuserservice--profile--stars mb4">
                  <img
                    src={userProfile_image}
                    alt="images"
                    className="profile--image--small"
                  ></img>
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
              {eachJobData.job_status === "inprogress" ? (
                <>
                  <button
                    className="myuserservice--view--message--button fw700 fs12"
                    onClick={() => {
                      handleMessageMyService(eachJobData.jobs_id);
                    }}
                  >
                    Message
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
