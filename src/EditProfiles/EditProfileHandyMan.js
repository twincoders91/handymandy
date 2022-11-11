import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backButton from "../Assets/universal/backbutton.svg";
import downArrow from "../Assets/universal/downarrow.svg";
import categoryData from "../DummyDataSets/Category";
import yearsData from "../DummyDataSets/Years";
import crossbutton from "../Assets/services/crossbutton.svg";
import "./editprofile.css";

const EditProfileHandyMan = ({ hm_id, hMDetails }) => {
  const [specialities, setSpecialities] = useState(false);
  const [yearsClick, setYearsClick] = useState(false);
  const [yearsSelection, setYearsSelection] = useState(
    hMDetails.number_of_years
  );
  const [firstName, setFirstName] = useState(hMDetails.first_name);
  const [lastName, setLastName] = useState(hMDetails.last_name);
  const [email, setEmail] = useState(hMDetails.email);
  const [businessName, setBusinessName] = useState(hMDetails.business_name);
  const [specialitiesArray, setSpecialitiesArray] = useState(
    hMDetails.specialities
  );
  const [aboutBusiness, setAboutBusiness] = useState(hMDetails.about);

  const navigate = useNavigate();

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

  //==================== Specialities Array  ======================
  function addIntoArray(details) {
    const array = [...specialitiesArray, details];
    setSpecialitiesArray(array);
  }

  const handleAddSpecialities = (details) => {
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
    navigate("/home");
  };

  //==================== BACKEND FETCHING ======================

  const updateHmProfile = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/handyman/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: hm_id,
          first_name: firstName,
          last_name: lastName,
          email: email,
          about: aboutBusiness,
          business_name: businessName,
          number_of_years: yearsSelection,
          specialities: specialitiesArray,
        }),
      });
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="mb36 edit--profile--page--main--container">
        <img
          src={backButton}
          className="back--button"
          onClick={() => handleBackButtonClick()}
        />
        <div className="create--profile--header--container mb24 mt60">
          <p className="fs24 fw700 mb8 white create--profile--header--font">
            Let's edit your profile.
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
                value={firstName}
                placeholder="First name"
                className="create--account--input ml12"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="universal--input--forms--half">
              <input
                type="text"
                value={lastName}
                placeholder="Last name"
                className="create--account--input ml12"
                onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  className="create--account--input ml12"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="">
            <p className="fs16 fw700 mb8 white create--profile--header--font">
              Business name.
            </p>
            <span className="fs12 fw400 white">
              If your business name is your name, please enter your name
              instead.
            </span>
          </div>

          <div className="home--address--container mt8">
            <div className="universal--input--forms--full mb8">
              <input
                type="text"
                value={businessName}
                placeholder="e.g. Handyman services"
                className="create--account--input ml12"
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <span className="fs16 fw700 white">
              What are your specialities?{" "}
            </span>
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
                value={aboutBusiness}
                placeholder="Let others know more about your business (200 characters)"
                className="create--account--input ml12 mt12"
                onChange={(e) => setAboutBusiness(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons--align--center--box">
            <button
              className="user--create--account--button"
              onClick={updateHmProfile}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileHandyMan;
