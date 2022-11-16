import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactDom from "react-dom";
import crossButton from "../../Assets/services/crossbutton.svg";
import facebookIcon from "../../Assets/universal/facebook2.svg";
import instagramIcon from "../../Assets/universal/instagram2.svg";
import twitterIcon from "../../Assets/universal/twitter2.svg";

const HamburgerModal = ({
  setHamburgerModal,
  setIsActive,
  charSelect,
  setCurrentPage,
  userNotifications,
  hmNotifications,
}) => {
  const navigate = useNavigate();
  console.log(charSelect);
  console.log(userNotifications);

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

  const handleHomeButtonClick = () => {
    setHamburgerModal((current) => !current);
    setIsActive((current) => !current);
  };

  const handleProfileButtonClick = () => {
    setHamburgerModal((current) => !current);
    setIsActive((current) => !current);
    if (charSelect === "user") {
      setCurrentPage("General User Page");
    }
    console.log("clicked");
  };

  const handleServicesClick = () => {
    navigate("/myservices");
  };

  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--hamburger--overlay">
          <div className="modal--hamburger--container">
            <NavLink
              className="navlinks"
              to="/home"
              onClick={() => handleHomeButtonClick()}
            >
              <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
                Home
              </p>
            </NavLink>
            <NavLink
              className="navlinks"
              to={userNotifications ? "/notifications" : "/hmnotifications"}
              onClick={() => handleHomeButtonClick()}
            >
              <div className="modal--hamburger--text white fs16 fw700 m0 mt24">
                Notifications
                {userNotiCircle()}
                {hmNotiCircle()}
              </div>
            </NavLink>
            <p
              className="modal--hamburger--text white fs16 fw700 m0 mt24"
              onClick={handleServicesClick}
            >
              Your Jobs
            </p>
            <NavLink
              className="navlinks"
              to="/profile"
              onClick={() => {
                handleProfileButtonClick();
              }}
            >
              <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
                Profile
              </p>
            </NavLink>
            <img
              src={crossButton}
              className="modal--cross--button"
              onClick={() => {
                setHamburgerModal(false);
                setIsActive((current) => !current);
              }}
            />
            <div className="hamburger--modal--socials--icons">
              <img
                src={facebookIcon}
                className="hamburger--modal--socials--icon"
              />
              <img
                src={instagramIcon}
                className="hamburger--modal--socials--icon"
              />
              <img
                src={twitterIcon}
                className="hamburger--modal--socials--icon"
              />
            </div>
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default HamburgerModal;
