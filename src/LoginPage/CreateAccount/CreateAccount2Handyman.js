import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";
import downArrow from "../../Assets/universal/downarrow.svg";
import categoryData from "../../DummyDataSets/Category";
import yearsData from "../../DummyDataSets/Years";
import crossbutton from "../../Assets/services/crossbutton.svg";
import CreateAccountEmailErrorModal from "../../Components/Modals/CreateAccountEmailErrorModal";

const CreateAccount2Handyman = ({ setCharSelect, username }) => {
  const [specialities, setSpecialities] = useState(false);
  const [yearsClick, setYearsClick] = useState(false);
  const [yearsSelection, setYearsSelection] = useState(
    "Select number of years"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [specialitiesArray, setSpecialitiesArray] = useState([]);
  const [aboutBusiness, setAboutBusiness] = useState("");
  const [errorEmailModal, setErrorEmailModal] = useState(false);

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

  //================= Valid Email Check ===================
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
      setEmail(event.target.value);
    }
    setMessage(event.target.value);
  };

  const validateEmail = async (email) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/validate/email/${email}`
      );

      const data = await res.json();

      if (data === "Email already exists") {
        setErrorEmailModal(true);
      } else {
        setErrorEmailModal(false);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  //==================== Specialities Array  ======================
  function addIntoArray(details) {
    const array = [...specialitiesArray, details];
    setSpecialitiesArray(array);
  }

  const handleAddSpecialities = (details) => {
    if (specialitiesArray.length === 0) {
      addIntoArray(details.toLowerCase());
    } else if (specialitiesArray.length > 0) {
      if (specialitiesArray.includes(details.toLowerCase())) {
        return null;
      } else {
        addIntoArray(details.toLowerCase());
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

  //==================== BACKEND FETCHING ======================
  //================= Confirm account created ===================
  const createHmProfile = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/handyman/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username.toLowerCase(),
          first_name: firstName.toLowerCase(),
          last_name: lastName.toLowerCase(),
          email: email.toLowerCase(),
          business_name: businessName.toLowerCase(),
          number_of_years: yearsSelection.toLowerCase(),
          profile_image: null,
          specialities: specialitiesArray,
          about: aboutBusiness.toLowerCase(),
        }),
      });
      navigate("/home");

      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/character/${username}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res2.json();
      if (data.length !== 0) {
        setCharSelect("handyman");
      } else {
        setCharSelect("user");
      }
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  return (
    <>
      {errorEmailModal && <CreateAccountEmailErrorModal />}
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
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="universal--input--forms--half">
              <input
                type="text"
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
              If your business name is your name, please enter your name
              instead.
            </span>
          </div>

          <div className="home--address--container mt8">
            <div className="universal--input--forms--full mb8">
              <input
                type="text"
                placeholder="e.g. Handyman services"
                className="create--account--input ml12"
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <p className="fs16 fw700 mb8 white">What are your specialities? </p>
            <span className="fs12 fw400 white">
              Specialities will be displayed on your profile. You can select
              more than one speciality, time to show off your skills!
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
                placeholder="Let others know more about your business (200 characters)"
                className="create--account--input ml12 mt12"
                onChange={(e) => setAboutBusiness(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons--align--center--box">
            <button
              className="user--create--account--button"
              onClick={createHmProfile}
              disabled={errorEmailModal}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount2Handyman;
