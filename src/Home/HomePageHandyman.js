import React from "react";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage2HandyMan from "./HomePage2HandyMan";

const HomePageHandyman = ({ handymanServicesData }) => {
  //===========================if handymanServicesData is empty, show no services================
  //==========================if handymanServicesData is not empty, show services================

  return (
    <>
      {handymanServicesData.length == 0 && <HomePage2HandyMan />}
      {handymanServicesData.length !== 0 && <CreateServicesHandyman />}
    </>
  );
};

export default HomePageHandyman;
