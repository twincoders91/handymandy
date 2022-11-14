import React, { useEffect, useState } from "react";
import defaultavatar from "../Assets/profile/defaultavatar.jpeg";

const ProfileHmReviewCards = (items) => {
  console.log(items);
  const [userProfile_image, setUserProfile_image] = useState("");

  //====================== User Profile Image fetching =======================
  const fetchUserProfileImage = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/user/${items.user_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const userProfileImage = await res.json();
      if (userProfileImage.length === 0) {
        setUserProfile_image(defaultavatar);
      } else {
        setUserProfile_image(userProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUserProfileImage();
  }, []);

  return (
    <div>
      <div className="reviews--cards--box mb8 relative">
        <img
          src={userProfile_image}
          className="profile--image--icons ml16 mt16 mb16"
          alt="images"
        ></img>
        <div className="reviews--description--cards ml16 mt16 mb16">
          <div className=" fw700 fs12  mb4">{items.first_name}</div>
          <div className="reviews--message fw400 fs12 white">
            {items.reviews}
          </div>
        </div>
        <div className="reviews--score--box absolute">
          <span className="fs56 fw700">{items.ratings}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHmReviewCards;
