import React, { useState } from "react";

const UpdateServicesHandyman = ({
  updateServiceDetails,
  setServiceCategory,
  setServiceDescription,
  setServiceTOW,
  setServicePriceFrom,
}) => {
  console.log(updateServiceDetails);
  const [categoryInput, setCategoryInput] = useState(
    updateServiceDetails.services.category
  );
  const [descriptionInput, setDescriptionInput] = useState(
    updateServiceDetails.services.description
  );

  const [tOWInput, setTOWInput] = useState("");
  const [tOWArray, setTOWArray] = useState(
    updateServiceDetails.services.type_of_work
  );

  const [priceFromInput, setPriceFromInput] = useState(
    updateServiceDetails.services.price_from
  );

  const handleAddTOW = (details) => {
    const array = [...tOWArray, details];
    setTOWArray(array);
  };

  const handleTOWDelete = (item) => {
    const remainingArray = tOWArray.filter((d, i) => d !== item);
    setTOWArray(remainingArray);
    console.log("clicked");
  };

  const handleUpdateServicesSubmit = () => {
    setServiceCategory(categoryInput);
    setServiceDescription(descriptionInput);
    setServiceTOW(tOWArray);
    setServicePriceFrom(priceFromInput);
  };
  console.log(tOWArray);

  return (
    <>
      <div className="mb36">
        <div className="create--services--container">
          <div className="create--profile--header--container mb24 mt36">
            <p className="fs24 fw700 mb8 white create--profile--header--font">
              Let's update your service.
            </p>
            <span className="fs14 fw400 white">
              Fill up the below information to let users know what kind of
              services you provide
            </span>
          </div>
          <div className="create--profile--middle--container">
            <span className="fs16 fw700 white">Category</span>
            <div className="legal--name--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
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
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
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
                  value={priceFromInput}
                  onChange={(e) => setPriceFromInput(e.target.value)}
                  placeholder="e.g. $150"
                  className="create--account--input ml12"
                />
              </div>
            </div>
            <div className="buttons--align--center--box">
              <button
                className="user--create--account--button"
                onClick={handleUpdateServicesSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateServicesHandyman;
