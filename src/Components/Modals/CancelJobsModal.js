import React from "react";
import ReactDom from "react-dom";
import "./modal.css";
import closesign from "../../Assets/universal/closesign.svg";
import defaultavatar from "../../Assets/profile/defaultavatar.jpeg";

const CancelJobsModal = ({
  setCancelJobsModalValue,
  cardClicked,
  setFilteredClicked,
}) => {
  console.log(cardClicked);
  const deleteService = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/jobs/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: cardClicked.item.jobs_id,
          status_id: "cancelled",
        }),
      });
      setFilteredClicked(false);
      setCancelJobsModalValue(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <>
        {ReactDom.createPortal(
          <div className="modal--overlay">
            <div className="modal--container--confirmbooking relative">
              <p className="fw700 fs28 white modal--header--confirmbooking m0 mt24 mb24">
                Cancellation
              </p>
              <p className="m0 white fw700 fs16 mb8 modal--text--confirmbooking">
                You are about to cancel a service by{" "}
                {cardClicked.item.first_name}!
              </p>
              <p className="m0 white fw400 fs12 mb24 modal--text--confirmbooking">
                {cardClicked.item.first_name} will be notified!
              </p>
              <div className="confirm--booking--hm--profile--box">
                <div className="confirm--booking--profileimage--box">
                  <img
                    src={
                      cardClicked.hmProfile_image
                        ? cardClicked.hmProfile_image
                        : defaultavatar
                    }
                    className="confirm--booking--hm--profile--image"
                  />
                </div>
                <div className="confirm--booking--description--box ">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Title
                  </p>
                  <p className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description">
                    {cardClicked.item.title}
                  </p>
                </div>
                <div className="confirm--booking--description--box">
                  <p className="m0 fw700 fs14 mt8 modal--text--confirmbooking--items">
                    Description
                  </p>
                  <p className="m0 white fw400 fs12 mt8 modal--text--confirmbooking--description">
                    {cardClicked.item.description}
                  </p>
                </div>
              </div>
              <button
                className="review--submit--button--confirmbooking mt24 fs16 fw700"
                onClick={deleteService}
              >
                Confirm cancellation?
              </button>
              <p className="m0 white fw400 fs8 mb24 modal--text--confirmbooking--terms mt24">
                By clicking on "Confirm cancellation?", you confirm that you
                have read and agreed to HandyMandy's terms and conditions.
              </p>
              <img
                src={closesign}
                className="modal--cross--button"
                onClick={() => setCancelJobsModalValue(false)}
              />
            </div>
          </div>,
          document.querySelector("#modal-root")
        )}
      </>
    </div>
  );
};

export default CancelJobsModal;
