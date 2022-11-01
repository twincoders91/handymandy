import React from "react";
import "./characterselect.css";
import backButton from "../Assets/universal/backbutton.svg";
import userCharacter from "../Assets/characterselect/usercharacter.svg";
import handymanCharacter from "../Assets/characterselect/handymancharacter.svg";

const CharacterSelect = () => {
  return (
    <div className="character--select--container">
      <img src={backButton} className="back--button" />
      <p className="character--select--header">Character Select</p>
      <p className="character--select--sub--header">
        We all deserve better, even your house does!
        <br />
        Join the <span>HandyMandy</span> community now.
      </p>
      <div className="character--select--characters--container">
        <div className="character--select--characters"></div>
      </div>
    </div>
  );
};

export default CharacterSelect;
