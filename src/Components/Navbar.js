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
  hmNotifications,
  setUserNotifications,
  setHMNotifications,
  username,
}) => {
  const navigate = useNavigate();
  //===============================STATES=======================================
  //============================NavBar states===================================
  const [isActive, setIsActive] = useState(false); //hamburger animation states
  const [hamburgerModal, setHamburgerModal] = useState(false); //modal animation states

  //================================================================================

  //===================================== Get HM ID ========================================
  //============================= Get Handyman ID ================================

  const getHandymanID = async () => {
    if (!username || charSelect === "user") return;
    try {
      const res = await fetch(`http://127.0.0.1:8001/handyman/${username}/id`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();

      //=============== Fetch notifications by HM ID ===============

      try {
        const res = await fetch(
          `http://127.0.0.1:8001/handyman/notifications/${data.id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        const notiData = await res.json();
        setHMNotifications(notiData);
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //===================================== Get User ID ========================================

  const getUserID = async () => {
    if (!username || charSelect === "handyman") return;
    try {
      const res = await fetch(`http://127.0.0.1:8001/user/${username}/id`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();

      //=============== Fetch notifications by User ID ===============

      try {
        const res = await fetch(
          `http://127.0.0.1:8001/user/notifications/${data.id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        const notiData = await res.json();
        setUserNotifications(notiData);
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //================================================================================

  const userNotiCircle = () => {
    if (userNotifications) {
      return (
        <>
          {userNotifications &&
            userNotifications.length > 0 &&
            userNotifications.length !== 0 && (
              <div className="notifications--cirle">
                <p className="notifications--number m0">
                  {userNotifications.length}
                </p>
              </div>
            )}
          {userNotifications.length === 0 && <></>}
        </>
      );
    }
  };
  const hmNotiCircle = () => {
    if (hmNotifications) {
      return (
        <>
          {hmNotifications &&
            hmNotifications.length > 0 &&
            hmNotifications.length !== 0 && (
              <div className="notifications--cirle">
                <p className="notifications--number m0">
                  {hmNotifications.length}
                </p>
              </div>
            )}
          {hmNotifications.length === 0 && <></>}
        </>
      );
    }
  };

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

  useEffect(() => {
    getHandymanID();
    getUserID();
  }, []);

  console.log(userNotifications);
  console.log(username);
  console.log(charSelect);
  console.log(hmNotifications);

  return (
    <>
      {hamburgerModal && (
        <HamburgerModal
          setHamburgerModal={setHamburgerModal}
          setIsActive={setIsActive}
          charSelect={charSelect}
          setCurrentPage={setCurrentPage}
          userNotifications={userNotifications}
          hmNotifications={hmNotifications}
        />
      )}
      <div className="navbar--wrapper">
        <div className="container">
          {backButtonVisibility && currentPage === "From Home's Featured" && (
            <NavLink to="/home">
              <img
                src={backButton}
                className="back--button"
                onClick={() => handleBackButtonClick2()}
              />
            </NavLink>
          )}
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
            currentPage !== "From Home's Featured" &&
            currentPage !== "Service Info" &&
            currentPage !== "My jobs" && (
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
          {backButtonVisibility && currentPage === "My jobs" && (
            <NavLink to="/myservices">
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
            {userNotiCircle()}
            {hmNotiCircle()}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
