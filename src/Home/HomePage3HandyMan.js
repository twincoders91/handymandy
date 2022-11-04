import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";

const HomePage3HandyMan = ({ handymanServicesData, setCreateService }) => {
  //=======================Clicking Create Service Button============================
  const handleCreateServiceClick = () => {
    setCreateService(true);
  };
  console.log(handymanServicesData);

  return (
    <>
      <p className="m0 fw700 fs32 mt24 white hm3--header">Your Services</p>
      {handymanServicesData.map((services) => {
        return (
          <div className="hm3--page--container mt24">
            <div className="hm3--info--card">
              <div className="hm3--info--card--top">
                <img
                  src={recommended4usampleimage}
                  className="hm3--info--image"
                  alt="images"
                />
                <div className="hm3--info--description--container">
                  <div className="hm3--info--description--section ml12">
                    <p className="hm3--info--title fs16 fw700 m0 white mb4">
                      {services.category}
                    </p>
                    <p className="hm3--info--name fs12 fw400 m0 white mb4">
                      {services.first_name}
                    </p>
                    <div className="hm3--info--profile--stars mb4">
                      <img src={recommendedprofile} alt="images"></img>
                      <div className="hm3--info--stars">
                        <img src={starfilled} alt="images"></img>
                        <img src={starfilled} alt="images"></img>
                        <img src={starfilled} alt="images"></img>
                        <img src={starfilled} alt="images"></img>
                        <img src={starfilled} alt="images"></img>
                      </div>
                    </div>
                    <p className="m0 fw700 fs8 white">
                      34 reviews | 82 jobs completed
                    </p>
                  </div>
                  <div className="hm3--info--price ml12">
                    <p className="starting--from m0 white fw700">
                      starting from
                    </p>
                    <p className="starting--from--price m0 fs28 fw700">
                      ${services.price_from}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hm3--info--card--bottom">
                <span className="hm3--info--desc fs12 fw400 white">
                  {services.description}
                </span>
                <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
                <div className="type--of--work">
                  {services.type_of_work.map((types) => {
                    return (
                      <div className="m0 fs12 fw700 type--of--work--content">
                        <img src={tick} />
                        <p className="m0 fs12 fw400 white ml8">{types}</p>
                      </div>
                    );
                  })}

                  <button className="hm3--info--view--profile--button br4 fw700 fs12">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="hm3--info--view--create--button--container mb48">
        <button
          className="hm3--info--view--create--button br4 fw700 fs24 mt60"
          onClick={handleCreateServiceClick}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default HomePage3HandyMan;
