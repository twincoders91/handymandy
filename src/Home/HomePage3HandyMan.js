import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";

const HomePage3HandyMan = ({
  setUpdateService,
  setUpdateServiceDetails,
  setCurrentPage,
  individualHMServices,
  setIndividualHMServices,
  hmRatings,
}) => {
  //============================= BACKEND FETCHING ================================
  //============================= DELETE Service ================================
  const deleteServiceDB = async (id, hm_id) => {
    try {
      const res = await fetch("http://127.0.0.1:8001/services/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      });
      fetchIndividualHMServices(hm_id);
    } catch (e) {
      console.log(e);
    }
  };

  //============================= Fetch all Services ================================
  const fetchIndividualHMServices = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/services/handyman/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setIndividualHMServices(data);
    } catch (e) {
      console.log(e);
    }
  };

  //=======================Clicking Create Service Button============================
  const handleCreateServiceClick = () => {
    setCurrentPage("CreateServicesHandyman");
  };

  //=========================Clicking Edit Service Button============================
  const handleUpdateServiceClick = (services) => {
    setUpdateService(true);
    setUpdateServiceDetails(services);
    console.log(services);
  };

  //=========================Clicking Delete Service Button============================
  const handleDeleteServiceClick = (services) => {
    deleteServiceDB(services.services.services_id, services.services.hm_id);
  };

  //======================Creating Star Ratings=======================
  let count = 5;
  const starColour = (index) => {
    if (hmRatings.length > 0) {
      if (hmRatings[0].average_rating >= index) {
        return starFilled;
      }
      return starUnFilled;
    } else {
      return starUnFilled;
    }
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <img src={starColour(idx)} key={idx} className="review--stars" />
      ));
  });

  return (
    <>
      <p className="m0 fw700 fs32 mt24 white hm3--header">Your Services</p>
      {individualHMServices.map((services) => {
        return (
          <div className="hm3--page--container mt24">
            <div className="hm3--info--card">
              <div className="hm3--info--card--top">
                <img
                  src={recommended4usampleimage}
                  className="hm3--info--image"
                  alt="images"
                />
                <div className="hm3--info--description--container">
                  <div className="hm3--info--description--section ml12">
                    <p className="hm3--info--title fs16 fw700 m0 white mb4">
                      {services.title}
                    </p>
                    <p className="hm3--info--name fs12 fw400 m0 white mb4">
                      {services.first_name}
                    </p>
                    <div className="hm3--info--profile--stars mb4">
                      <img src={recommendedprofile} alt="images"></img>
                      <div className="hm3--info--stars">{starRating}</div>
                    </div>
                    <div className="m0 fw700 fs8 white">
                      {hmRatings.length > 0 ? (
                        <p className="m0 fw700 fs8 white">
                          {hmRatings[0].total_jobs} job(s) completed
                        </p>
                      ) : (
                        <p className="m0 fw700 fs8 white">0 job completed</p>
                      )}
                    </div>
                  </div>
                  <div className="hm3--info--price ml12">
                    <p className="starting--from m0 white fw700">
                      starting from
                    </p>
                    <p className="starting--from--price m0 fs28 fw700">
                      ${services.price_from}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hm3--info--card--bottom">
                <span className="hm3--info--desc fs12 fw400 white">
                  {services.description}
                </span>
                <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
                <div className="type--of--work">
                  {services.types_of_work.map((types) => {
                    return (
                      <div className="m0 fs12 fw700 type--of--work--content">
                        <img src={tick} />
                        <p className="m0 fs12 fw400 white ml8">{types}</p>
                      </div>
                    );
                  })}

                  <NavLink to="/updateservice">
                    {" "}
                    <button
                      className="hm3--info--view--profile--button br4 fw700 fs12"
                      onClick={() => {
                        handleUpdateServiceClick({ services });
                      }}
                    >
                      Edit
                    </button>
                  </NavLink>
                  <button
                    className="hm3--info--delete--profile--button br4 fw700 fs12"
                    onClick={() => {
                      handleDeleteServiceClick({ services });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="hm3--info--view--create--button--container mb48">
        <NavLink className="navlinks" to="/createservice">
          <button
            className="hm3--info--view--create--button br4 fw700 fs24 mt60"
            onClick={handleCreateServiceClick}
          >
            Create
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default HomePage3HandyMan;
