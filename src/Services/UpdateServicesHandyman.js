import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryData from "../DummyDataSets/Category";
import downArrow from "../Assets/universal/downarrow.svg";

const UpdateServicesHandyman = ({
  updateServiceDetails,
  setServiceCategory,
  setServiceDescription,
  setServiceTOW,
  setServicePriceFrom,
  setIndividualHMServices,
}) => {
  const [categoryInput, setCategoryInput] = useState(
    updateServiceDetails.services.category
  );
  const [titleInput, setTitleInput] = useState(
    updateServiceDetails.services.title
  );
  const [descriptionInput, setDescriptionInput] = useState(
    updateServiceDetails.services.description
  );
  const [tOWInput, setTOWInput] = useState("");
  const [tOWArray, setTOWArray] = useState(
    updateServiceDetails.services.types_of_work
  );

  const [priceFromInput, setPriceFromInput] = useState(
    updateServiceDetails.services.price_from
  );

  const updatedServiceObj = {
    categoryInput,
    descriptionInput,
    tOWArray,
    priceFromInput,
    titleInput,
  };

  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState(false);
  const [currentCategorySelection, setCurrentCategorySelection] = useState(
    "Select your category"
  );
  const [categorySelection, setCategorySelection] = useState("");

  //==================== BACKEND FETCHING ======================

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
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  const updateServiceDB = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/services/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: updateServiceDetails.services.services_id,
          description: descriptionInput,
          category: categoryInput,
          types_of_work: tOWArray,
          price_from: priceFromInput,
          title: titleInput,
        }),
      });
      fetchIndividualHMServices(updateServiceDetails.services.id);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddTOW = (details) => {
    const array = [...tOWArray, details];
    setTOWArray(array);
  };

  const handleTOWDelete = (item) => {
    const remainingArray = tOWArray.filter((d, i) => d !== item);
    setTOWArray(remainingArray);
    console.log(tOWArray);
  };

  const handleUpdateServicesSubmit = () => {
    setServiceCategory(categoryInput);
    setServiceDescription(descriptionInput);
    setServiceTOW(tOWArray);
    setServicePriceFrom(priceFromInput);
    const updatedServiceObj = {
      categoryInput,
      descriptionInput,
      tOWArray,
      priceFromInput,
    };
    console.log(updatedServiceObj);
    console.log(tOWArray);
  };

  //================= Handle Button Clicks ===================
  const handleClickSpecialities = () => {
    setSpecialities((current) => !current);
  };
  const handleClickSpecialitiesSelection = (e) => {
    setCurrentCategorySelection(e);
    setSpecialities((current) => !current);
    setCategoryInput(e.toLowerCase());
    console.log(categorySelection);
  };

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
              <div
                className="specialities--box--selection2  relative"
                onClick={() => handleClickSpecialities()}
              >
                {currentCategorySelection}
                <img
                  src={downArrow}
                  className="absolute create--account--downarrow"
                ></img>
              </div>
              {specialities && (
                <div className="dropdown--menu--specialities absolute">
                  {categoryData.map((items) => {
                    return (
                      <div
                        className="specialities--selection  fs14 fw300"
                        onClick={() =>
                          handleClickSpecialitiesSelection(items.category)
                        }
                      >
                        {items.category}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <span className="fs16 fw700 white">Title</span>
            <div className="legal--name--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value.toLowerCase())}
                  placeholder="e.g. Plumbing services"
                  className="create--account--input ml12"
                  maxLength={30}
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
                  maxLength={200}
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
                onClick={updateServiceDB}
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
