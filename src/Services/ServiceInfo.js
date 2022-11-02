import React from "react";
import starfilled from "../Assets/homepage/starfilled.svg";
import recommendedprofile from "../Assets/homepage/randomman.svg";
import recommended4usampleimage from "../Assets/homepage/recommended4usampleimage.svg";
import tick from "../Assets/services/tick.svg";

const ServiceInfo = () => {
  return (
    <>
      <span className="fw700 fs32 mt24 mb24 white">Service Info</span>
      <div className="service--info--card">
        <div className="service--info--card--top">
          <img
            src={recommended4usampleimage}
            className="service--info--image"
            alt="images"
          />
          <div className="service--info--description--container">
            <div className="service--info--description--section ml12">
              <p className="service--info--title fs16 fw700 m0 white mb4">
                Plumbing services
              </p>
              <p className="service--info--name fs12 fw400 m0 white mb4">
                Plumber Jack
              </p>
              <div className="service--info--profile--stars mb4">
                <img src={recommendedprofile} alt="images"></img>
                <div className="service--info--stars">
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
            <div className="service--info--price ml12">
              <p className="starting--from m0 white fw700">starting from</p>
              <p className="starting--from--price m0 fs28 fw700">$150</p>
            </div>
          </div>
        </div>
        <div className="service--info--card--bottom">
          <span className="service--info--desc fs12 fw400 white">
            At Plumber Jack, we work with clients closely to provide the best
            repair services, with no hidden costs. At Plumber Jack, we work with
            clients closely to provide the best repair services, with no hidden
            costs. At Plumber Jack, we work with clients closely to provide the
            best repair services, with no hidden costs. At Plumber Jack, we work
            with clients closely to provide the best repair services, with no
            hidden costs.
          </span>
          <p className="fs12 fw700 m0 mt12 mb8">Type of work:</p>
          <div className="type--of--work">
            <div className="m0 fs12 fw700 type--of--work--content">
              <img src={tick} />
              <p className="m0 fs12 fw400 white ml8">Sink repairs</p>
            </div>
            <div className="m0 fs12 fw700 type--of--work--content">
              <img src={tick} />
              <p className="m0 fs12 fw400 white ml8">Sink repairs</p>
            </div>
            <div className="m0 fs12 fw700 type--of--work--content">
              <img src={tick} />
              <p className="m0 fs12 fw400 white ml8">Sink repairs</p>
            </div>
            <button className="service--info--view--profile--button br4 fw700 fs12">
              View profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;
