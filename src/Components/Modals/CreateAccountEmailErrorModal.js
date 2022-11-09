import React from "react";

const CreateAccountEmailErrorModal = (errorEmailModal) => {
  return (
    <div
      className={
        errorEmailModal
          ? "username--exist--modal--containerActive"
          : "username--exist--modal--container"
      }
    >
      <div className="username--exist--text--container">
        <p className="m0">Email taken. Try another email.</p>
      </div>
    </div>
  );
};

export default CreateAccountEmailErrorModal;
