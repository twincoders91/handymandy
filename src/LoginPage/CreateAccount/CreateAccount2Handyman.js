import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";
import downArrow from "../../Assets/universal/downarrow.svg";
import categoryData from "../../DummyDataSets/Category";
import yearsData from "../../DummyDataSets/Years";
import crossbutton from "../../Assets/services/crossbutton.svg";

const CreateAccount2Handyman = ({ setCharSelect, setAccountCreated }) => {
  const [specialities, setSpecialities] = useState(false);
  const [yearsClick, setYearsClick] = useState(false);
  const [yearsSelection, setYearsSelection] = useState(
    "Select number of years"
  );
  const [firstNameInput, setFirstNameInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [businessNameInput, setBusinessNameInput] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [specialitiesArray, setSpecialitiesArray] = useState([]);
  const [numberOfYears, setNumberOfYears] = useState("");
  const [aboutBusinessInput, setAboutBusinessInput] = useState("");
  const [aboutBusiness, setAboutBusiness] = useState("");

  //================= Handle Button Clicks ===================
  const handleClickSpecialities = () => {
    setSpecialities((current) => !current);
  };
  const handleClickSpecialitiesSelection = (event) => {
    setSpecialities((current) => !current);
    handleAddSpecialities(event);
  };
  const handleClickYears = () => {
    setYearsClick((current) => !current);
  };
  const handleClickYearsSelection = (event) => {
    setYearsClick((current) => !current);
    setYearsSelection(event);
  };

  //================= Valid Email Check ===================
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
      setEmailInput(event.target.value);
    }
    setMessage(event.target.value);
  };
  console.log(message);

  //==================== Specialities Array  ======================
  function addIntoArray(details) {
    const array = [...specialitiesArray, details];
    setSpecialitiesArray(array);
  }

  const handleAddSpecialities = (details) => {
    console.log(details);
    if (specialitiesArray.length === 0) {
      addIntoArray(details);
    } else if (specialitiesArray.length > 0) {
      if (specialitiesArray.includes(details)) {
        return null;
      } else {
        addIntoArray(details);
      }
    }
  };

  const handleDeleteSpecialities = (item) => {
    const remainingArray = specialitiesArray.filter((d, i) => d !== item);
    setSpecialitiesArray(remainingArray);
  };

  //================= Back button function ===================
  const handleBackButtonClick = () => {
    setCharSelect("step1");
  };
  //================= Confirm account created ===================
  const handleSubmitButtonClick = () => {
    setFirstName(firstNameInput.toLowerCase());
    setLastName(lastNameInput.toLowerCase());
    setNumberOfYears(yearsSelection.toLowerCase());
    setEmail(emailInput.toLowerCase());
    setBusinessName(businessNameInput.toLowerCase());
    setAboutBusiness(aboutBusinessInput);
    setAccountCreated(true);
  };

  return (
    <div className="mb36">
      <img
        src={backButton}
        className="back--button"
        onClick={() => handleBackButtonClick()}
      />
      <div className="create--profile--header--container mb24 mt60">
        <p className="fs24 fw700 mb8 white create--profile--header--font">
          Let's create your profile.
        </p>
        <span className="fs14 fw400 white">
          HandyMandy uses this information to help ensure trust and safety for
          HandyMany users.
        </span>
      </div>
      <div className="create--profile--middle--container mb36">
        <span className="fs16 fw700 white">Legal name</span>
        <div className="legal--name--container mt8 mb24">
          <div className="universal--input--forms--half">
            <input
              type="text"
              placeholder="First name"
              className="create--account--input ml12"
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
          </div>
          <div className="universal--input--forms--half">
            <input
              type="text"
              placeholder="Last name"
              className="create--account--input ml12"
              onChange={(e) => setLastNameInput(e.target.value)}
            />
          </div>
        </div>
        <span className="fs16 fw700 white">Email address</span>
        <div className="legal--name--container mt8 mb16">
          <div className="email--box--with--error">
            <div className="universal--input--forms--full">
              <input
                type="text"
                placeholder="Email address"
                value={message}
                className="create--account--input ml12"
                onChange={handleEmailChange}
              />
            </div>
            {error && (
              <h2 className="email--alert--font fs12 fw300">{error}</h2>
            )}
          </div>
        </div>
        <div className="">
          <p className="fs16 fw700 mb8 white create--profile--header--font">
            Business name.
          </p>
          <span className="fs12 fw400 white">
            If your business name is your name, please enter your name instead.
          </span>
        </div>

        <div className="home--address--container mt8">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="e.g. Handyman services"
              className="create--account--input ml12"
              onChange={(e) => setBusinessNameInput(e.target.value)}
            />
          </div>
          <span className="fs16 fw700 white">What are your specialities? </span>
          <div className="mb8">
            {specialitiesArray.length !== 0 &&
              specialitiesArray.map((item) => {
                return (
                  <>
                    <div
                      className={
                        "specialities--box--selected fw700 mt8 relative"
                      }
                    >
                      {item}
                      <img
                        src={crossbutton}
                        className="absolute create--account--crossbutton"
                        onClick={() => handleDeleteSpecialities(item)}
                      ></img>
                    </div>
                  </>
                );
              })}
            <div
              className="specialities--box--selection  mt8 relative"
              onClick={() => handleClickSpecialities()}
            >
              Select your specialities
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
                      key={items.category}
                    >
                      {items.category}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <span className="fs16 fw700 white">Years in business </span>
          <div className="mb8">
            <div
              className="specialities--box--selection mt8  relative"
              onClick={() => handleClickYears()}
            >
              {yearsSelection}
              <img
                src={downArrow}
                className="absolute create--account--downarrow"
              ></img>
            </div>
            {yearsClick && (
              <div className="dropdown--menu--specialities absolute">
                {yearsData.map((items) => {
                  return (
                    <div
                      className="specialities--selection  fs14 fw300"
                      onClick={() => handleClickYearsSelection(items.years)}
                    >
                      {items.years}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <span className="fs16 fw700 white">About your business</span>
          <div className="about--business--input--forms--full mt8">
            <textarea
              type="text"
              placeholder="Let others know more about your business (200 characters)"
              className="create--account--input ml12 mt12"
              onChange={(e) => setAboutBusinessInput(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons--align--center--box">
          <Link className="navlinks" to="/home">
            <button
              className="user--create--account--button"
              onClick={() => handleSubmitButtonClick()}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount2Handyman;
