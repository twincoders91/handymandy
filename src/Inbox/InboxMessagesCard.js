import React, { useEffect } from "react";
import defaultavatar from "../Assets/profile/defaultavatar.svg";

const InboxMessagesCard = ({
  item,
  hmProfile_image,
  userProfile_image,
  updateScroll,
}) => {
  console.log(item);

  useEffect(() => {
    updateScroll();
  }, []);

  return (
    <>
      {item.character === "user" && (
        <div className="inbox--toggle--container">
          <div className="inbox--text--container relative mt4 mb4">
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
            <div className="inbox--text--box fs14">{item.message}</div>
          </div>
        </div>
      )}
      {item.character === "handyman" && (
        <div className="inbox--toggle--container--hm">
          <div className="inbox--text--container--hm relative mt4 mb4">
            <div className="inbox--text--box--hm fs14">{item.message}</div>
            <div className="inbox--profileimage--box ">
              {item.character === "user" && (
                <img
                  src={userProfile_image}
                  className="inbox--profile--image--small--hm"
                />
              )}
              {item.character === "handyman" && (
                <img
                  src={hmProfile_image}
                  className="inbox--profile--image--small--hm"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InboxMessagesCard;
