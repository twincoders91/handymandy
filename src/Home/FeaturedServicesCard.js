import React, { useEffect, useState, useMemo } from "react";
import default_image from "../Assets/homepage/recommended4usampleimage.svg";
import starFilled from "../Assets/homepage/starfilled.svg";
import starUnFilled from "../Assets/homepage/starunfilled.svg";
import defaultavatar from "../Assets/profile/defaultavatar.svg";
import { useNavigate } from "react-router-dom";

const FeaturedServicesCard = ({
  services_id,
  setFeaturedData,
  setCurrentPage,
  setBackButtonVisibility,
}) => {
  const [filteredServicesData, setFilteredServicesData] = useState([]);
  const [hmRatings, setHmRatings] = useState([]);
  const [hmProfileImage, setHMProfileImage] = useState("");

  const navigate = useNavigate();

  //=================== Truncate String =======================
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  //=============== Fetch services by top 4 ===============
  const fetchTop4 = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/services/${services_id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setFilteredServicesData(data);
      getHmRatings(data);
      retreiveHandymanProfileImage(data);
    } catch (e) {
      console.error(e);
    }
  };

  //====================== RATINGS FETCHING =======================
  const getHmRatings = async (data) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${data[0].hm_id}/averageratingandjobs`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const ratingData = await res.json();
      setHmRatings(ratingData);
    } catch (e) {
      console.error(e);
    }
  };
  //======================Creating Star Ratings=======================
  let count = 5;
  const starColour = (index) => {
    if (hmRatings.length > 0) {
      if (hmRatings[0].average_rating >= index) {
        return starFilled;
      }
      return starUnFilled;
    } else {
      return starUnFilled;
    }
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <img src={starColour(idx)} key={idx} className="review--stars" />
      ));
  });

  //====================== Fetch HM Profile Image =======================
  const retreiveHandymanProfileImage = async (data) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8001/handyman/${data[0].hm_id}/profileimage/any`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const hmProfileImage = await res.json();

      if (hmProfileImage.length === 0) {
        setHMProfileImage(defaultavatar);
      } else {
        setHMProfileImage(hmProfileImage[0].image_url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const retrieveFeaturedInfo = async (service_id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8001/services/${service_id}/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const featuredInfoData = await res.json();
      console.log(featuredInfoData);
      setFeaturedData(featuredInfoData);
      setCurrentPage("From Home's Featured");
      setBackButtonVisibility(true);
      navigate("/featuredinfo");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTop4();
  }, []);

  return (
    <div>
      {filteredServicesData.length !== 0 ? (
        <div
          className="recommended--box mb24"
          onClick={() => retrieveFeaturedInfo(services_id)}
        >
          <div className="recommended--cards">
            <div className="services--image--box2">
              <img
                src={
                  filteredServicesData[0].image_url
                    ? filteredServicesData[0].image_url
                    : default_image
                }
                className="recommended--info--image"
                alt="images"
              />
            </div>
            <div className="recommended--description--section">
              <div className="recommended--description--section--inner--box">
                <p className="recommended--title ml8">
                  {truncate(
                    filteredServicesData[0].title.charAt(0).toUpperCase() +
                      filteredServicesData[0].title.slice(1),
                    18
                  )}
                </p>
                <p className="recommended--name">
                  {filteredServicesData[0].first_name.charAt(0).toUpperCase() +
                    filteredServicesData[0].first_name.slice(1)}
                </p>
                <div className="recommended--profile--image mt8">
                  <img
                    src={hmProfileImage}
                    alt="images"
                    className="profile--image--small"
                  ></img>
                  <div className="individual--category--stars">
                    {starRating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="fs24 fw700">No hot picks for today</p>
      )}
    </div>
  );
};

export default FeaturedServicesCard;
