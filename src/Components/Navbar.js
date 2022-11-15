import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import backButton from "../Assets/universal/backbutton.svg";
import HamburgerModal from "./Modals/HamburgerModal";
import "./navbar.css";

const Navbar = ({
  backButtonVisibility,
  charSelect,
  chooseCategory,
  setChooseCategory,
  setViewHmProfile,
  viewHmProfile,
  setCurrentPage,
  currentPage,
  userNotifications,
}) => {
  const navigate = useNavigate();
  //===============================STATES=======================================
  //============================NavBar states===================================
  const [isActive, setIsActive] = useState(false); //hamburger animation states
  const [hamburgerModal, setHamburgerModal] = useState(false); //modal animation states
  const handleBackButtonClick = () => {
    setChooseCategory(false);
  };
  const handleBackButtonClick2 = () => {
    setViewHmProfile(false);
    setCurrentPage("General User Page");
  };
  const handleCurrentPage = async () => {
    console.log("clicked");
    try {
      await setCurrentPage("General User Page");
      navigate("/profile");
    } catch (e) {
      console.log("easter egg!");
    }
  };

  return (
    <>
      {hamburgerModal && (
        <HamburgerModal
          setHamburgerModal={setHamburgerModal}
          setIsActive={setIsActive}
          charSelect={charSelect}
          setCurrentPage={setCurrentPage}
          userNotifications={userNotifications}
        />
      )}
      <div className="navbar--wrapper">
        <div className="container">
          {backButtonVisibility && chooseCategory && (
            <NavLink to="/services">
              <img
                src={backButton}
                className="back--button"
                onClick={() => handleBackButtonClick()}
              />
            </NavLink>
          )}
          {backButtonVisibility &&
            !chooseCategory &&
            !viewHmProfile &&
            currentPage !== "Service Info" && (
              <NavLink to="/home">
                <img src={backButton} className="back--button" />
              </NavLink>
            )}
          {backButtonVisibility &&
            !chooseCategory &&
            !viewHmProfile &&
            currentPage === "Service Info" && (
              <NavLink to="/myservices">
                <img src={backButton} className="back--button" />
              </NavLink>
            )}
          {backButtonVisibility && !chooseCategory && viewHmProfile && (
            <NavLink to="/services">
              <img
                src={backButton}
                className="back--button"
                onClick={handleBackButtonClick2}
              />
            </NavLink>
          )}
          <p className="navbar--header">HandyMandy</p>
          <div className="navbar--menu">
            <button className="is-active">Inbox</button>
            <button>Jobs</button>
            <button>Services</button>
            <button>Home</button>

            <button className="navlinks" onClick={handleCurrentPage}>
              Profile
            </button>
          </div>

          <button
            className={
              isActive ? "navbar--hamburger is-active" : "navbar--hamburger"
            }
            onClick={() => {
              setIsActive((current) => !current);
              setHamburgerModal((current) => !current);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            {(userNotifications || userNotifications.length > 0) &&
              userNotifications.length !== 0 && (
                <div className="notifications--cirle">
                  <p className="notifications--number m0">
                    {userNotifications.length}
                  </p>
                </div>
              )}
            {userNotifications.length === 0 && <></>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
