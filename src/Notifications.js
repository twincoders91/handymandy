import React from "react";

const Notifications = ({ userNotifications }) => {
  console.log(userNotifications);
  return (
    <>
      {userNotifications.map(() => {
        return (
          <>
            {/* <div
            className="individual--category--card relative mt24"
            onClick={() => {
              handleCategoryCard(services_id);
            }}
          >
            <div className="individual--category--image--box">
              <div className="services--image--box">
                <img
                  src={image_url ? image_url : default_image}
                  className="individual--category--image"
                  alt="images"
                />
              </div>
            </div>
            <div className="individual--category--description--container--findservices">
              <div className="hm3--info--description--mega--container">
                <p
                  className="individual--category--title fs16 fw700 m0 white mb4 ml12"
                  style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                >
                  {truncate(title.charAt(0).toUpperCase() + title.slice(1), 25)}
                </p>
                <div className="individual--category--description--section ml12">
                  <p className="individual--category--name fs12 fw400 m0 white mb4">
                    {first_name.charAt(0).toUpperCase() + first_name.slice(1)}
                  </p>
                  <div className="individual--category--profile--stars mb4">
                    <img
                      src={hmProfileImage}
                      alt="images"
                      className="profile--image--small"
                    ></img>
                    <div className="individual--category--stars">{starRating}</div>
                  </div>
                  {hmRatings.length > 0 ? (
                    <p className="m0 fw700 fs8 white">
                      {hmRatings[0].total_jobs} job(s) completed
                    </p>
                  ) : (
                    <p className="m0 fw700 fs8 white">0 job completed</p>
                  )}
                </div>
              </div>
              <div className="individual--category--price ml12">
                <p className="starting--from m0 white fw700">starting from</p>
                <p className="starting--from--price m0 fs28 fw700">${price_from}</p>
              </div>
            </div>
          </div> */}
          </>
        );
      })}
    </>
  );
};

export default Notifications;
