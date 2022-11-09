import React, { useEffect, useState } from "react";
import "./createaccount.css";
import { NavLink } from "react-router-dom";
import backButton from "../../Assets/universal/backbutton.svg";
import usernameImage from "../../Assets/createaccount/username.svg";
import email from "../../Assets/createaccount/email.svg";
import password from "../../Assets/createaccount/password.svg";
import CharacterSelect from "../CharacterSelect";
import CreateAccountErrorModal from "../../Components/Modals/CreateAccountErrorModal";

const CreateAccount1 = ({
  setUsercredentialscreated,
  setCharSelect,
  username,
  setUsername,
}) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  //================================BACKEND FETCHING=======================================
  const validateUsername = async (usernameInput) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/validate/${usernameInput}`
      );

      const res2 = await fetch(
        `http://127.0.0.1:8001/handyman/validate/${usernameInput}`
      );

      const data = await res.json();
      const data2 = await res2.json();

      if (
        data === "Username already exists" ||
        data2 === "Username already exists"
      ) {
        setCharSelect("");
        setErrorModal(true);
      } else {
        setCharSelect("step1");
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    setUsername(usernameInput);
    validateUsername(usernameInput);
    setErrorModal(false);
  };

  console.log(username);
  return (
    <>
      {errorModal && <CreateAccountErrorModal errorModal={errorModal} />}
      <div className="create--account--main--container mt46">
        <NavLink to="/">
          <img src={backButton} className="back--button" />
        </NavLink>
        <p className="create--account--header--font mb36 fs32 fw700 white">
          Create account
        </p>

        <div className="universal--input--forms mb24">
          <img src={usernameImage} className="user--login--input--icon ml12" />
          <input
            type="text"
            placeholder="username"
            className="create--account--input ml12"
            onChange={(e) => {
              setUsernameInput(e.target.value.toLowerCase());
            }}
          />
        </div>
        <span className="create--account--font1 fs16 fw700 white mb8">
          Create password
        </span>
        <div className="universal--input--forms mb24">
          <img src={password} className="user--login--input--icon ml12" />
          <input
            type="text"
            placeholder="password"
            className="create--account--input ml12"
          />
        </div>
        <div className="universal--input--forms mb36">
          <img src={password} className="user--login--input--icon ml12" />
          <input
            type="text"
            placeholder="password"
            className="create--account--input ml12"
          />
        </div>
        <button
          className="user--create--account--button"
          onClick={(e) => {
            setUsercredentialscreated(true);
            handleCreateAccount(e);
          }}
        >
          Create Account
        </button>
      </div>
    </>
  );
};

export default CreateAccount1;
