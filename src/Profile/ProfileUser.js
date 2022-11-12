import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import edit from "../Assets/universal/edit.svg";
import trophy from "../Assets/profile/trophy.svg";
import time from "../Assets/profile/time.svg";
import reviews from "../Assets/profile/reviews.svg";
import defaultavatar from "../Assets/profile/defaultavatar.jpeg";

const ProfileUser = ({ setBackButtonVisibility, user_id, setUserDetails }) => {
  //=============================FETCHING APIS============================
  const [averageRating, setAverageRating] = useState("");
  const [profile_image, setProfile_image] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userRatings, setUserRatings] = useState("");

  const navigate = useNavigate();

  const retreiveUserRatingsSummary = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/${user_id}/ratingssummary`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const user_ratings_jobs = await res.json();
      setUserRatings(user_ratings_jobs[0]);
      console.log(user_ratings_jobs);
    } catch (e) {
      console.error(e);
    }
  };

  const retreiveUserInfo = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/user/${user_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const user_details = await res.json();
      setUserDetails(user_details[0]);
      console.log(user_details);

      if ([0].profile_image) {
        setProfile_image(user_details[0].profile_image);
      } else {
        setProfile_image(defaultavatar);
      }
      setUserUsername(user_details[0].username);
      setFirstName(user_details[0].first_name);
      setLastName(user_details[0].last_name);
      setEmail(user_details[0].email);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditProfile = async () => {
    navigate("/editprofileuser");
  };

  useEffect(() => {
    setBackButtonVisibility(true);
    retreiveUserInfo();
    retreiveUserRatingsSummary();
  }, []);

  return (
    <div className="profile--info--container">
      <div className="profile--image--box">
        <img src={profile_image} className="absolute profile--image" />
      </div>
      <div className="profile--info--card relative">
        <div className="profile--name--box mt60 fs16 fw700 white">
          <span>{userUsername}</span>
        </div>

        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt8">Name</div>
          <span className="fw400 fs12 mt12">{`${firstName} ${" "} ${lastName} `}</span>
        </div>
        <div className="profile--about--box ml24">
          <div className="fw700 fs16 white mt16">Email</div>
          <span className="fw400 fs12 mt12">{email}</span>
        </div>
        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards">
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img src={time} className="profile--icons" alt="images"></img>
              </div>

              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {userRatings.total_jobs}
                </div>
                <div className="fw400 fs12">total jobs</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img
                  src={trophy}
                  className="profile--trophy--icons"
                  alt="images"
                ></img>
              </div>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {userRatings.average_rating}
                </div>
                <div className="fw400 fs12">average rating</div>
              </div>
            </div>
            <div className="category--profile--cards--box">
              <div className="category--profile--cards--image--box">
                <img
                  src={reviews}
                  className="profile--icons"
                  alt="images"
                ></img>
              </div>
              <div className="profile--description--cards">
                <div className="category--cards--text fw700 fs14">
                  {userRatings.total_ratings}
                </div>
                <div className="fw400 fs12">Rating Points</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile--medal--icons--box  mt16">
          <div className="category--profile--cards"></div>
        </div>
        <div className="message--button--box mb24">
          <button
            className="message--button fw700 fs14"
            onClick={handleEditProfile}
          >
            <img src={edit} />
            Edit profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
