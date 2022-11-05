import React from "react";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage2HandyMan from "./HomePage2HandyMan";
import HomePage3HandyMan from "./HomePage3HandyMan";

const HomePageHandyman = ({ HMindividualServices, setCreateService }) => {
  console.log(HMindividualServices);
  console.log(HMindividualServices.length);
  return (
    //===========================if handymanServicesData is empty, show no services================
    //==========================if handymanServicesData is not empty, show services================
    <>
      {HMindividualServices.length == 0 && (
        <HomePage2HandyMan setCreateService={setCreateService} />
      )}
      {HMindividualServices.length !== 0 && (
        <HomePage3HandyMan
          HMindividualServices={HMindividualServices}
          setCreateService={setCreateService}
        />
      )}
    </>
  );
};

export default HomePageHandyman;
