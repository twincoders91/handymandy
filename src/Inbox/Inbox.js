import React from "react";
import Navbar from "../Components/Navbar";
import "./inbox.css";

const Inbox = ({ userNotifications, inboxData }) => {
  console.log(inboxData);
  return (
    <>
      <Navbar userNotifications={userNotifications} />
      <div className="inbox--global--container mt24">
        <div className="inbox--container"></div>
      </div>
    </>
  );
};

export default Inbox;
