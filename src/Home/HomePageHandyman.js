import React from "react";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage2HandyMan from "./HomePage2HandyMan";
import HomePage3HandyMan from "./HomePage3HandyMan";

const HomePageHandyman = ({ handymanServicesData, setCreateService }) => {
  return (
    //===========================if handymanServicesData is empty, show no services================
    //==========================if handymanServicesData is not empty, show services================
    <>
      {handymanServicesData.length == 0 && <HomePage2HandyMan />}
      {handymanServicesData.length !== 0 && (
        <HomePage3HandyMan setCreateService={setCreateService} />
      )}
    </>
  );
};

export default HomePageHandyman;
