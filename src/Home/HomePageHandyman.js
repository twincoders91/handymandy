import React, { useEffect, useState } from "react";
import CreateServicesHandyman from "../Services/CreateServicesHandyman";
import HomePage2HandyMan from "./HomePage2HandyMan";
import HomePage3HandyMan from "./HomePage3HandyMan";

const HomePageHandyman = ({
  setCreateService,
  setUpdateService,
  setUpdateServiceDetails,
  setBackButtonVisibility,
  setCurrentPage,
  individualHMServices,
  setHmRatings,
  hmRatings,
}) => {
  //========================================API============================

  return (
    //===========================if handymanServicesData is empty, show no services================
    //==========================if handymanServicesData is not empty, show services================
    <>
      {individualHMServices.length == 0 && (
        <HomePage2HandyMan
          setCreateService={setCreateService}
          setBackButtonVisibility={setBackButtonVisibility}
          setCurrentPage={setCurrentPage}
        />
      )}
      {individualHMServices.length !== 0 && (
        <HomePage3HandyMan
          individualHMServices={individualHMServices}
          setCreateService={setCreateService}
          setCurrentPage={setCurrentPage}
          setUpdateService={setUpdateService}
          setUpdateServiceDetails={setUpdateServiceDetails}
          setHmRatings={setHmRatings}
          hmRatings={hmRatings}
        />
      )}
    </>
  );
};

export default HomePageHandyman;
