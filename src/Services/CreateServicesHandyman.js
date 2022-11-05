import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreateServicesHandyman = ({ setBackButtonVisibility }) => {
  const [tOWInput, setTOWInput] = useState("");
  const [tOWArray, setTOWArray] = useState([]);

  const handleAddTOW = (details) => {
    const array = [...tOWArray, details];
    setTOWArray(array);
  };

  const handleTOWDelete = (item) => {
    console.log(item);
    const remainingArray = tOWArray.filter((d, i) => d !== item);
    setTOWArray(remainingArray);
    console.log("clicked");
  };

  console.log(tOWArray);

  const handleSubmitCreateServices = () => {
    setBackButtonVisibility(false);
  };

  useEffect(() => {
    setBackButtonVisibility(true);
  });

  return (
    <>
      <div className="mb36">
        <div className="create--services--container">
          <div className="create--profile--header--container mb24 mt36">
            <p className="fs24 fw700 mb8 white create--profile--header--font">
              Let's create your services.
            </p>
            <span className="fs14 fw400 white">
              Fill up the below information to let users know what kind of
              services you provide
            </span>
          </div>
          <div className="create--profile--middle--container">
            <span className="fs16 fw700 white">Title</span>
            <div className="legal--name--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder="e.g. Plumbing services"
                  className="create--account--input ml12"
                />
              </div>
            </div>
            <span className="fs16 fw700 white">Description</span>
            <div className="legal--name--container mt8 mb24">
              <div className="about--business--input--forms--full">
                <textarea
                  type="text"
                  placeholder="Let others know more about your services (200 characters)"
                  className="create--account--input ml12 mt12"
                />
              </div>
            </div>
            <p className="fs16 fw700 white m0 mb16">Type of work</p>
            <div className="services--type--of--work--added--container mt0">
              {tOWArray.map((items) => {
                return (
                  <div className="services--type--of--work--added">
                    <div className="services--type--of--work--added--text mt8">
                      {items}
                    </div>
                    <button
                      className="services--type--of--work--delete--button mb8 mt8"
                      onClick={() => {
                        handleTOWDelete(items);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="services--type--of--work--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder="e.g. Sink repairs"
                  className="create--account--input ml12"
                  onChange={(e) => {
                    setTOWInput(e.target.value);
                  }}
                />
              </div>
              <button
                className="services--type--of--work--button mt8 fs24 fw300"
                onClick={() => {
                  handleAddTOW(tOWInput);
                }}
              >
                +
              </button>
            </div>
            <span className="fs16 fw700 white">Price from</span>
            <div className="legal--name--container mt8">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder="e.g. $150"
                  className="create--account--input ml12"
                />
              </div>
            </div>
            <div className="buttons--align--center--box">
              <NavLink to="/home">
                <button
                  className="user--create--account--button"
                  onClick={() => handleSubmitCreateServices()}
                >
                  Submit
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateServicesHandyman;
