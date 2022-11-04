import React from "react";
import { NavLink } from "react-router-dom";

import ReactDom from "react-dom";
import crossButton from "../../Assets/services/crossbutton.svg";
import facebookIcon from "../../Assets/universal/facebook.svg";
import instagramIcon from "../../Assets/universal/instagram.svg";
import twitterIcon from "../../Assets/universal/twitter.svg";

const HamburgerModal = ({ setHamburgerModal, setIsActive }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--hamburger--overlay">
          <div className="modal--hamburger--container">
            <NavLink className="navlinks" to="/home">
              <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
                Home
              </p>
            </NavLink>
            <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
              About
            </p>
            <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
              Inbox
            </p>
            <NavLink className="navlinks" to="/profile">
              <p className="modal--hamburger--text white fs16 fw700 m0 mt24">
                Profile
              </p>
            </NavLink>
            <img
              src={crossButton}
              className="modal--cross--button"
              onClick={() => {
                setHamburgerModal(false);
                setIsActive(false);
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
