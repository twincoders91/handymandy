import React from "react";
import "./characterselect.css";
import { NavLink } from "react-router-dom";
import backButton from "../Assets/universal/backbutton.svg";
import userCharacter from "../Assets/characterselect/usercharacter.svg";
import handymanCharacter from "../Assets/characterselect/handymancharacter.svg";

const CharacterSelect = ({ setCharSelect }) => {
  return (
    <div className="character--select--main--container">
      <NavLink to="/login">
        <img src={backButton} className="back--button" />
      </NavLink>
      <p className="fs32 fw700 mt46 white m0">Character Select</p>
      <p className="character--select--sub--header mt36 fs14 fw700 white mb24">
        We all deserve better, even your house does!
        <br />
        Join the <span>HandyMandy</span> community now.
      </p>
      <div className="character--select--characters--container">
        <div
          className="character--select--characters"
          onClick={() => setCharSelect("user")}
        >
          <img src={userCharacter} />
          <div className="character--select--characters--type1 fs28 fw700 orange">
            USER
          </div>
          <p className="fw400 fs12">
            Join as a user and search for your ideal handyman to do any kind of
            work around your home.
          </p>
        </div>
        <div
          className="character--select--characters"
          onClick={() => setCharSelect("handyman")}
        >
          <img src={handymanCharacter} />
          <div className="character--select--characters--type2 fs28 fw700 orange">
            HANDYMAN
          </div>
          <p className="fw400 fs12">
            Join as a handyman and advertise your business by creating a
            profile. Your businesses are shown to potential users for free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
