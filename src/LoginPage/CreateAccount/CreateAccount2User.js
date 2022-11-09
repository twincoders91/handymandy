import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./createaccount.css";
import backButton from "../../Assets/universal/backbutton.svg";
import CreateAccountEmailErrorModal from "../../Components/Modals/CreateAccountEmailErrorModal";

const CreateAccount2User = ({ username, setCharSelect, setAccountCreated }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [errorEmailModal, setErrorEmailModal] = useState(false);

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
  console.log(message);

  const validateEmail = async (email) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/validate/email/${email}`
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

  //================= Back button function ===================
  const handleBackButtonClick = () => {
    setCharSelect("step1");
  };
  //================= Confirm account created ===================
  const handleSubmitButtonClick = () => {
    setAccountCreated(true);
    createUserProfile();
  };

  //==================== BACKEND FETCHING ======================
  const createUserProfile = async () => {
    const res = await fetch("http://127.0.0.1:8001/user/", {
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
        street_address: streetAddress.toLowerCase(),
        block_number: blockNumber,
        postal_code: postCode,
        profile_image: null,
      }),
    });
    console.log(res);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  return (
    <>
      {errorEmailModal && (
        <CreateAccountEmailErrorModal errorEmailModal={errorEmailModal} />
      )}
      <img
        src={backButton}
        className="back--button"
        onClick={() => handleBackButtonClick()}
      />
      <div className="create--profile--header--container mb24">
        <p className="fs24 fw700 mb8 mt60 white create--profile--header--font">
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
              onChange={(e) => setFirstName(e.target.value)}
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
        <div className="legal--name--container mt8 mb24">
          <div className="email--box--with--error">
            <div className="universal--input--forms--full">
              <input
                type="text"
                maxLength={50}
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
        <span className="fs16 fw700 white">Home address</span>
        <div className="home--address--container mt8">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="Street address"
              className="create--account--input ml12"
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
            />
          </div>
          <div className="universal--input--forms--full mb8">
            <input
              type="number"
              placeholder="Block number #"
              className="create--account--input ml12"
              onChange={(e) => setBlockNumber(e.target.value)}
            />
          </div>
          <div className="universal--input--forms--full">
            <input
              type="number"
              max="100"
              placeholder="Postal code"
              className="create--account--input ml12"
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <NavLink className="navlinks" to="/home">
        <button
          className="user--create--account--button"
          onClick={() => handleSubmitButtonClick()}
          disabled={errorEmailModal}
        >
          Create Account
        </button>
      </NavLink>
    </>
  );
};

export default CreateAccount2User;
