import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import downArrow from "../Assets/universal/downarrow.svg";
import categoryData from "../DummyDataSets/Category";

const CreateServicesHandyman = ({
  setBackButtonVisibility,
  backButtonVisibility,
}) => {
  const [tOWInput, setTOWInput] = useState("");
  const [tOWArray, setTOWArray] = useState([]);
  const [placeholder, setPlaceholder] = useState("e.g. Sink Repair");
  const [specialities, setSpecialities] = useState(false);
  const [categorySelection, setCategorySelection] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("");
  const [finalTow, setFinalTow] = useState();
  const [priceInput, setPriceInput] = useState("");
  const [price, setPrice] = useState("");

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
  //==================== BACKEND FETCHING ======================
  const createServicesDB = async () => {
    const res = await fetch("htt://127.0.0.1:8001/services/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        hm_id: "",
        description: description,
        category: categorySelection,
        types_of_work: tOWArray,
        price_from: finalTow,
      }),
    });
    console.log(res);
  };
  //================= Handle Button Clicks ===================
  const handleClickSpecialities = () => {
    setSpecialities((current) => !current);
  };
  const handleClickSpecialitiesSelection = (e) => {
    setSpecialities((current) => !current);
    setCategorySelection(e);
  };
  const handleSubmitCreateServices = (event) => {
    event.preventDefault();
    setBackButtonVisibility(false);
    setTitle(titleInput);
    setDescription(descriptionInput);
    setFinalTow(tOWArray);
    setPrice(parseInt(priceInput));
    createServicesDB();
  };
  console.log(finalTow);

  //======================= Use Effect =========================
  useEffect(() => {
    // setBackButtonVisibility(true);
  });
  console.log(backButtonVisibility);

  return (
    <>
      <Navbar backButtonVisibility={backButtonVisibility} />
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
            <div className="mb24">
              <span className="fs16 fw700 white">Category</span>
              <div
                className="specialities--box--selection  mt8 relative"
                onClick={() => handleClickSpecialities()}
              >
                Select your category
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
                  placeholder="e.g. Plumbing services"
                  className="create--account--input ml12"
                  onChange={(e) => setTitleInput(e.target.value)}
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
                  onChange={(e) => setDescriptionInput(e.target.value)}
                />
              </div>
            </div>
            <p className="fs16 fw700 white m0 mb16">Type of work</p>
            <div className="services--type--of--work--added--container mt0">
              {tOWArray.map((items) => {
                return (
                  <div className="services--type--of--work--added mt8">
                    <div className="services--type--of--work--added--text">
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
                  placeholder={placeholder}
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
                  setPlaceholder("Add another?");
                  setTOWInput(null);
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
                  onChange={(e) => setPriceInput(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons--align--center--box">
              <NavLink to="/home">
                <button
                  className="user--create--account--button"
                  onClick={(e) => handleSubmitCreateServices(e)}
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
