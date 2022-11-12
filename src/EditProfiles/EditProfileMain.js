import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./editprofile.css";
import backButton from "../Assets/universal/backbutton.svg";
import defaultavatar from "../Assets/profile/defaultavatar.jpeg";

const EditProfileUser = ({ user_id, userDetails }) => {
  const [firstName, setFirstName] = useState(userDetails.first_name);
  const [lastName, setLastName] = useState(userDetails.last_name);
  const [email, setEmail] = useState(userDetails.email);
  const [streetAddress, setStreetAddress] = useState(
    userDetails.street_address
  );
  const [blockNumber, setBlockNumber] = useState(userDetails.block_number);
  const [postCode, setPostCode] = useState(userDetails.postal_code);
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();
  console.log(userDetails);

  //================= Back button function ===================
  const handleBackButtonClick = () => {
    navigate("/home");
  };
  //================= Confirm account created ===================
  const handleSubmitButtonClick = () => {
    updateUserProfile();
  };

  //==================== BACKEND FETCHING ======================

  const updateUserProfile = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/user/${user_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          street_address: streetAddress,
          block_number: blockNumber,
          postal_code: postCode,
          profile_image: profileImage,
        }),
      });
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mb36 edit--profile--page--main--container">
      <img
        src={backButton}
        className="back--button"
        onClick={() => handleBackButtonClick()}
      />
      <div className="create--profile--header--container mb24">
        <p className="fs24 fw700 mb8 mt60 white create--profile--header--font">
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
              onChange={(e) => setFirstName(e.target.value)}
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
        <div className="legal--name--container mt8 mb24">
          <div className="email--box--with--error">
            <div className="universal--input--forms--full">
              <input
                type="text"
                maxLength={50}
                placeholder="Email address"
                value={email}
                className="create--account--input ml12"
                disabled
              />
            </div>
          </div>
        </div>
        <span className="fs16 fw700 white">Home address</span>
        <div className="home--address--container mt8">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="Street address"
              value={streetAddress}
              className="create--account--input ml12"
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
            />
          </div>
          <div className="universal--input--forms--full mb8">
            <input
              type="number"
              value={blockNumber}
              placeholder="Block number #"
              className="create--account--input ml12"
              onChange={(e) => setBlockNumber(e.target.value)}
            />
          </div>
          <div className="universal--input--forms--full">
            <input
              type="number"
              value={postCode}
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

      <button
        className="user--create--account--button"
        onClick={() => handleSubmitButtonClick()}
      >
        Submit
      </button>
    </div>
  );
};

export default EditProfileUser;
