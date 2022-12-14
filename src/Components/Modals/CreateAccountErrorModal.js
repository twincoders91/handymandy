import React from "react";

const CreateAccountErrorModal = () => {
  return (
    <div className="username--exist--modal--container">
      <div className="username--exist--text--container">
        <p className="m0">Username taken. Try another username.</p>
      </div>
    </div>
  );
};

export default CreateAccountErrorModal;
