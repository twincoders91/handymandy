import React, { useMemo, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import closesign from "../../Assets/universal/closesign.svg";
import defaultavatar from "../../Assets/profile/defaultavatar.jpeg";

const ConfirmBookingModal = ({
  setAcceptedServicesModal,
  serviceInfo,
  user_id,
}) => {
  const navigate = useNavigate();
  const [job_requirement, setjob_requirement] = useState("");

  const createJob = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/jobs/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          user_id: user_id,
          services_id: serviceInfo[0].services_id,
          status_id: "pending",
          job_requirement: job_requirement,
        }),
      });
      navigate("/myservices");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <>
        {ReactDom.createPortal(
          <div className="modal--overlay">
            <div className="modal--container--confirmbooking relative">
              <p className="fw700 fs28 white modal--header--confirmbooking m0 mt24 mb24">
                Almost there!
              </p>
              <p className="m0 white fw700 fs16 mb8 modal--text--confirmbooking">
                Let {serviceInfo[0].first_name} know you are interested
              </p>
              <div className="confirm--booking--hm--profile--box">
                <div className="confirm--booking--profileimage--box">
                  <img
                    src={defaultavatar}
                    className="confirm--booking--hm--profile--image"
                  />
                </div>
                <div className="confirm--booking--description--box mt8">
                  <span className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Title
                  </span>
                  <p className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description">
                    {serviceInfo[0].title}
                  </p>
                </div>
                <div className="confirm--booking--description--box">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Job Description
                  </p>
                  <p className="m0 white fw300 fs12 mt8  modal--text--confirmbooking--description">
                    What do you need from {serviceInfo[0].first_name}?
                  </p>
                </div>
                <div className="about--business--input--forms--full--modal mt12">
                  <textarea
                    type="text"
                    placeholder="e.g. My sink is clogged and I need help unclogging the pipes... (200 characters)"
                    className="create--account--input ml12 mt12 fs12"
                    onChange={(e) => setjob_requirement(e.target.value)}
                    maxLength={200}
                  ></textarea>
                </div>
              </div>
              <div className="confirmbooking--request--box relative">
                <button
                  className="review--submit--button--confirmbooking mt24 fs16 fw700"
                  onClick={createJob}
                >
                  Confirm booking request?
                </button>
              </div>
              <p className="m0 white fw400 fs8 mb24 modal--text--confirmbooking--terms mt24">
                By clicking on "Confirm booking request?", you confirm that you
                have read and agreed to HandyMandy's terms and conditions.
              </p>
              <img
                src={closesign}
                className="modal--cross--button"
                onClick={() => setAcceptedServicesModal(false)}
              />
            </div>
          </div>,
          document.querySelector("#modal-root")
        )}
      </>
    </div>
  );
};

export default ConfirmBookingModal;
