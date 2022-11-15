import React from "react";
import defaultavatar from "../Assets/profile/defaultavatar.svg";

const InboxMessagesCard = ({ item, hmProfile_image, userProfile_image }) => {
  return (
    <div className="inbox--toggle--container">
      <div className="inbox--text--container relative mt8">
        <div className="inbox--profileimage--box ">
          {item.character === "user" && (
            <img
              src={userProfile_image}
              className="inbox--profile--image--small"
            />
          )}
          {item.character === "handyman" && (
            <img
              src={hmProfile_image}
              className="inbox--profile--image--small"
            />
          )}
        </div>
        <div className="inbox--text--box">{item.message}</div>
      </div>
    </div>
  );
};

export default InboxMessagesCard;
