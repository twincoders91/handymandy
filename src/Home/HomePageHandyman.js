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
  setIndividualHMServices,
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
          setIndividualHMServices={setIndividualHMServices}
          individualHMServices={individualHMServices}
          setCreateService={setCreateService}
          setCurrentPage={setCurrentPage}
          setUpdateService={setUpdateService}
          setUpdateServiceDetails={setUpdateServiceDetails}
          setHmRatings={setHmRatings}
          hmRatings={hmRatings}
          setBackButtonVisibility={setBackButtonVisibility}
        />
      )}
    </>
  );
};

export default HomePageHandyman;
