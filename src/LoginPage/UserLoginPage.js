import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import passwordKey from "../Assets/userloginpage/passwordkey.svg";
import emailIcon from "../Assets/userloginpage/emailicon.svg";
import LoginErrorModal from "../Components/Modals/LoginErrorModal";
import "./userloginpage.css";

const UserLoginPage = ({
  charSelect,
  accountCreated,
  setUsername,
  username,
  setCharSelect,
}) => {
  const [password, setPassword] = useState("");
  const [errorLoginModal, setErrorLoginModal] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data1 = await res.json();
      console.log(data1);
      console.log(username);
      if (data1.loggedIn === false) {
        console.log(data1.status);
        setErrorLoginModal(true);
      } else if (data1.status === "ok") {
        const res2 = await fetch(
          `http://127.0.0.1:8001/user/character/${username}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        const data = await res2.json();
        console.log(res2);
        if (data.length !== 0) {
          setCharSelect("user");
        } else {
          setCharSelect("handyman");
        }
        console.log(charSelect);
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {errorLoginModal && <LoginErrorModal />}
      <div className="user--login--page--container">
        <p className="user--login--page--header mb36 fw700 fs32 m0 mt46">
          Login
        </p>
        <div className="universal--input--forms mb24">
          <img src={emailIcon} className="user--login--input--icon ml12" />
          <input
            type="text"
            placeholder="username"
            className="user--login-input ml12"
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
        </div>
        <div className="universal--input--forms">
          <img src={passwordKey} className="user--login--input--icon ml12" />
          <input
            type="text"
            placeholder="password"
            className="user--login-input ml12 fw400 fs16"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* {!accountCreated && (
        <NavLink to="/signup">
          <button className="home--buttons fs24 fw700 br4 mt24">Login</button>
        </NavLink>
      )} */}
        {!accountCreated && (
          <button
            className="home--buttons fs24 fw700 br4 mt24"
            onClick={handleLogin}
          >
            Login
          </button>
        )}

        <p className="user--login--page--no--account--header">
          Don't have an account yet?
        </p>
        <NavLink className="navlinks" to="/signup">
          <button className="home--buttons fw700 fs24 mt20 br4">Sign Up</button>
        </NavLink>
      </div>
    </>
  );
};

export default UserLoginPage;
