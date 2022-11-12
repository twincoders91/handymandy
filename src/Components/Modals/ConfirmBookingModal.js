import React, { useMemo, useState } from "react";
import ReactDom from "react-dom";
import "./modal.css";
import closesign from "../../Assets/universal/closesign.svg";
import defaultavatar from "../../Assets/profile/defaultavatar.jpeg";

const ConfirmBookingModal = ({ setAcceptedServicesModal, serviceInfo }) => {
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
                Let {serviceInfo[0].first_name} know you are interested.
              </p>
              <p className="m0 white fw400 fs12 mb24 modal--text--confirmbooking">
                Send a job request to {serviceInfo[0].first_name}
              </p>
              <div className="confirm--booking--hm--profile--box">
                <div className="confirm--booking--profileimage--box">
                  <img
                    src={defaultavatar}
                    className="confirm--booking--hm--profile--image"
                  />
                </div>
                <div className="confirm--booking--description--box ml12">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Title
                  </p>
                  <p className="m0 white fw400 fs12 mt8 ml16 modal--text--confirmbooking--description">
                    {serviceInfo[0].title}
                  </p>
                </div>
                <div className="confirm--booking--description--box ml12">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Description
                  </p>
                  <p className="m0 white fw400 fs12 mt8 ml16 modal--text--confirmbooking--description">
                    {serviceInfo[0].description}
                  </p>
                </div>
              </div>
              <button className="review--submit--button--confirmbooking mt24 fs16 fw700">
                Confirm booking request?
              </button>
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
