import React from "react";
import "./profile.css";
import message from "../Assets/universal/message.svg";
import handymanData from "../DummyDataSets/profileHandyman";

const ProfileHandyman = () => {
  //total review_score and average review_score
  const reviews_sum = handymanData[0].reviews_score.reduce(
    (accumulator, value) => {
      return accumulator + value;
    },
    0
  );
  const reviews_average =
    Math.round((reviews_sum / handymanData[0].number_of_reviews.reviews) * 10) /
    10;

  return (
    <div className="profile--info--container">
      <div className="profile--image--box">
        <img
          src={require(`../Assets/profile/${handymanData[0].profile_image}`)}
          className="absolute profile--image"
        />
      </div>
      <div className="profile--info--card relative">
        <div className="reviews--box absolute">
          <div> {reviews_average}</div>
          <div></div>
        </div>
        <div className="profile--about--box ml24 mt36">
          <div className="fw700 fs16 white mt8">About</div>
          <span className="fw400 fs12 mt12">{handymanData[0].about}</span>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Company</div>
          <span className="fw400 fs12 mt12">
            {handymanData[0].business_name}
          </span>
        </div>
        <div className="profile--medal--icons--box ml16 mr16 mt16">
          <div className="category--profile--cards">
            <div className="category--profile--cards--box">
              <img
                src={require(`../Assets/profile/${handymanData[0].number_of_years.icon}`)}
                className="category--profile--cards--icon"
                alt="images"
              ></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {handymanData[0].number_of_years.years}
                </div>
                <div className="fw400 fs12">in business</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <img
                src={require(`../Assets/profile/${handymanData[0].number_of_jobs.icon}`)}
                className="category--profile--cards--icon"
                alt="images"
              ></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {handymanData[0].number_of_jobs.jobs}
                </div>
                <div className="fw400 fs12">completed</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <img
                src={require(`../Assets/profile/${handymanData[0].number_of_reviews.icon}`)}
                className="category--profile--cards--icon"
                alt="images"
              ></img>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {handymanData[0].number_of_reviews.reviews}
                </div>
                <div className="fw400 fs12">reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Handy Specialities</div>
        </div>
        <div className="profile--medal--icons--box ml16 mr16 mt16">
          <div className="category--profile--cards">
            {handymanData[0].specialities.map((item) => {
              return (
                <div
                  className="category--profile--cards--box"
                  key={Math.random() * 1000}
                >
                  <img
                    src={require(`../Assets/profile/${item.icon}`)}
                    className="category--cards--icon"
                    alt="images"
                  ></img>
                  <div className="profile--description--cards">
                    <div className="category--cards--text fw700 fs14">
                      {item.speciality}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="message--button--box mb24">
          <button className="message--button fw700 fs16">
            <img src={message} />
            Message
          </button>
        </div>
      </div>
      <div className="reviews--info--container">
        <div className="reviews--header white fw700 fs16 ml24 mt24 mb4">
          Reviews
        </div>
        {handymanData[0].reviews.map((items) => {
          return (
            <div className="reviews--cards--box mb8 relative">
              <img
                src={require(`../Assets/profile/${items.icon}`)}
                className="category--profile--cards--icon ml16 mt16 mb16"
                alt="images"
              ></img>
              <div className="reviews--description--cards ml16 mt16 mb16">
                <div className=" fw700 fs12  mb4">{items.name}</div>
                <div className="reviews--message fw400 fs12 white">
                  {items.message}
                </div>
              </div>
              <div className="reviews--score--box absolute">
                <span className="fs56 fw700">{items.score}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHandyman;
