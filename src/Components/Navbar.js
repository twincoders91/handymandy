import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backButton from "../Assets/universal/backbutton.svg";
import HamburgerModal from "./Modals/HamburgerModal";
import "./navbar.css";

const Navbar = () => {
  //===============================STATES=======================================
  //============================NavBar states===================================
  const [isActive, setIsActive] = useState(false); //hamburger animation states
  const [hamburgerModal, setHamburgerModal] = useState(false); //modal animation states

  return (
    <>
      {hamburgerModal && (
        <HamburgerModal
          setHamburgerModal={setHamburgerModal}
          setIsActive={setIsActive}
        />
      )}
      <div className="navbar--wrapper">
        <div className="container">
          <img src={backButton} className="back--button" />
          <p className="navbar--header">HandyMandy</p>
          <div className="navbar--menu">
            <button className="is-active">Inbox</button>
            <button>Jobs</button>
            <button>Services</button>
            <button>Home</button>
            <NavLink className="navlinks" to="/profile">
              <button>Profile</button>
            </NavLink>
          </div>

          <button
            className={
              isActive ? "navbar--hamburger is-active" : "navbar--hamburger"
            }
            onClick={() => {
              setIsActive((current) => !current);
              setHamburgerModal(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
