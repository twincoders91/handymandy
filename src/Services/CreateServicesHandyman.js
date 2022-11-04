import React from "react";

const CreateServicesHandyman = () => {
  return (
    <div className="mb36">
      <div className="home--page--container ">
        <div className="create--profile--header--container mb24">
          <p className="fs24 fw700 mb8 white create--profile--header--font">
            Let's create your services.
          </p>
          <span className="fs14 fw400 white">
            Fill up the below information to let users know what kind of
            services you provide
          </span>
        </div>
        <div className="create--profile--middle--container mb36">
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
            <div className="about--input--forms--full">
              <textarea
                type="text"
                placeholder="Let others know more about your services (200 characters)"
                className="create--account--input ml12 mt12"
              />
            </div>
          </div>
          <span className="fs16 fw700 white">Type of work</span>
          <div className="services--type--of--work--container mt8 mb24">
            <div className="universal--input--forms--full">
              <input
                type="text"
                placeholder="e.g. Sink repairs"
                className="create--account--input ml12"
              />
            </div>
            <button className="services--type--of--work--button mt8 fs24 fw300">
              +
            </button>
          </div>
          <span className="fs16 fw700 white">Price from</span>
          <div className="legal--name--container mt8 mb24">
            <div className="universal--input--forms--full">
              <input
                type="text"
                placeholder="e.g. $150"
                className="create--account--input ml12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buttons--align--center--box">
        <button className="user--create--account--button ">Submit</button>
      </div>
    </div>
  );
};

export default CreateServicesHandyman;
