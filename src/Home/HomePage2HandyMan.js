import React, { useEffect } from "react";

const HomePage2HandyMan = ({ setBackButtonVisibility, setCurrentPage }) => {
  const handleCreateServices = () => {
    setCurrentPage("CreateServicesHandyman");
  };

  useEffect(() => {
    setBackButtonVisibility(false);
  });

  return (
    <div>
      <div className="home--page--container">
        <div className="home--page--top--section">
          <p className="home--page--header">
            You have not created any <span>services</span> yet
          </p>
          <p className="home--page--sub--header">Start creating now.</p>
        </div>
        <div className="home--page--create--section">
          <button
            className="home--page--create--button br4 fs24 fw700"
            onClick={() => {
              handleCreateServices();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage2HandyMan;
