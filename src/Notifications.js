import React, { useEffect } from "react";
import default_image from "./Assets/homepage/recommended4usampleimage.svg";
import defaultavatar from "./Assets/profile/defaultavatar.svg";
import Navbar from "./Components/Navbar";

const Notifications = ({ userNotifications, user_id }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  console.log(userNotifications);

  const updateUserNotifications = async () => {
    if (userNotifications.length > 0) {
      try {
        const res = await fetch(
          `http://127.0.0.1:8001/user/notifications/${user_id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PUT",
          }
        );
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    updateUserNotifications();
  }, []);

  return (
    <>
      <Navbar userNotifications={userNotifications} />
      <div className="notifications--main--container">
        <p className="notifications--header">Your Notifications</p>
        {userNotifications.length > 0 &&
          userNotifications.map((items) => {
            return (
              <div>
                <div
                  className={
                    items.status_id === "cancelled"
                      ? "individual--notification--card--cancelled relative"
                      : "individual--notification--card--inprogress relative"
                  }
                >
                  <div className="individual--notification--image--box">
                    <div className="notifications--image--box">
                      <img
                        src={items.image_url ? items.image_url : defaultavatar}
                        alt="images"
                        className="profile--image--small"
                      ></img>
                    </div>
                  </div>
                  <div className="individual--notifications--description--container--findservices">
                    <div className="individual--notifications--title">
                      <p
                        className="individual--notifications--title--text fs16 fw700 m0 white"
                        style={{
                          whiteSpace: "pre-wrap",
                          overflowWrap: "break-word",
                        }}
                      >
                        {truncate(
                          items.title.charAt(0).toUpperCase() +
                            items.title.slice(1),
                          25
                        )}
                      </p>
                      <img
                        src={require(`./Assets/homepage/notificationpage/${items.category}.svg`)}
                        className={"noti--category--icon"}
                        alt="images"
                      ></img>
                    </div>
                    <div className="individual--notification--description--section">
                      <p className="individual--notification--name fs12 fw400 m0 white">
                        {items.first_name.charAt(0).toUpperCase() +
                          items.first_name.slice(1)}{" "}
                        {items.status_id === "inprogress"
                          ? "has accepted this job request."
                          : `has ${items.status_id} this job request.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {userNotifications.length === 0 && (
          <p className="0 no--new--notifications fs24 fw700">
            No New Notifications
          </p>
        )}
      </div>
    </>
  );
};

export default Notifications;
