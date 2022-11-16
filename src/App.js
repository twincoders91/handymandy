import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccountMain from "./LoginPage/CreateAccountMain";
import LoginPage from "./LoginPage/LoginPage";
import UserLoginPage from "./LoginPage/UserLoginPage";
import "./style.css";
import Services from "./Services/Services";
import HomePageMain from "./Home/HomePageMain";
import handymanData from "./DummyDataSets/profileHandyman";
import handymanServicesData from "./DummyDataSets/HandymanServices";
import CreateServicesHandyman from "./Services/CreateServicesHandyman";
import UpdateServicesHandyman from "./Services/UpdateServicesHandyman";
import Profiles from "./Profile/Profiles";
import AcceptedServices from "./Services/AcceptedServices";
import EditProfileHandyMan from "./EditProfiles/EditProfileHandyMan";
import EditProfileUser from "./EditProfiles/EditProfileMain";
import MyServices from "./Services/MyServices";
import Notifications from "./Notifications";
import FeaturedServiceInfo from "./Home/FeaturedServiceInfo";
import Inbox from "./Inbox/Inbox";
import NotificationsHM from "./NotificationsHM";

export default function App() {
  //================================== Navbar States===========================================
  const [backButtonVisibility, setBackButtonVisibility] = useState(true);
  const [viewHmProfile, setViewHmProfile] = useState(false);
  const [currentPage, setCurrentPage] = useState("General User Page");
  //==================================Account States===========================================
  const [charSelect, setCharSelect] = useState("");
  const [usercredentialscreated, setUsercredentialscreated] = useState(false);
  const [username, setUsername] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [hm_id, setHm_id] = useState("");
  const [user_id, setUser_id] = useState("");
  //=================================Services States=====================================
  const [servicesCategory, setServicesCategory] = useState("");
  const [filteredServicesData, setFilteredServicesData] = useState([]);
  const [servicesCategorySelection, setServicesCategorySelection] =
    useState("");
  const [individualHMServices, setIndividualHMServices] = useState([]);

  //============================State that hold services data=====================================
  const [createService, setCreateService] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceTOW, setServiceTOW] = useState([]);
  const [servicePriceFrom, setServicePriceFrom] = useState("");
  const [updateServiceDetails, setUpdateServiceDetails] = useState({});
  const [featuredData, setFeaturedData] = useState();

  //============================INBOX States=====================================
  const [inboxData, setInboxData] = useState([]);

  //=============================Profile States=====================================
  const [hmProfile, setHmProfile] = useState([]);
  const [individualHmStar, setIndividualHmStar] = useState([]);
  const [individualHmReviews, setIndividualHmReviews] = useState([]);
  const [hmAverageRating, setHmAverageRating] = useState(0);
  const [jobsCompleted, setJobsCompleted] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [hMDetails, setHMDetails] = useState({});

  //==============================Loading===========================================
  const [loading, setLoading] = useState(false);

  //============================Notifications States=====================================
  const [userNotifications, setUserNotifications] = useState("");
  const [hmNotifications, setHMNotifications] = useState("");

  //======================= Back button settings ===========================

  console.log(currentPage);
  console.log(inboxData);
  console.log(hmNotifications);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/login"
          element={
            <UserLoginPage
              charSelect={charSelect}
              username={username}
              setUsername={setUsername}
              accountCreated={accountCreated}
              setCharSelect={setCharSelect}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <CreateAccountMain
              charSelect={charSelect}
              setCharSelect={setCharSelect}
              usercredentialscreated={usercredentialscreated}
              setUsercredentialscreated={setUsercredentialscreated}
              username={username}
              setUsername={setUsername}
              setAccountCreated={setAccountCreated}
              setUser_id={setUser_id}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePageMain
              // averageRating={averageRating}
              charSelect={charSelect}
              setServicesCategory={setServicesCategory}
              setServicesCategorySelection={setServicesCategorySelection}
              setFilteredServicesData={setFilteredServicesData}
              username={username}
              setBackButtonVisibility={setBackButtonVisibility}
              backButtonVisibility={backButtonVisibility}
              setUpdateServiceDetails={setUpdateServiceDetails}
              setUser_id={setUser_id}
              user_id={user_id}
              setHm_id={setHm_id}
              hm_id={hm_id}
              setIndividualHMServices={setIndividualHMServices}
              individualHMServices={individualHMServices}
              setCurrentPage={setCurrentPage}
              setFeaturedData={setFeaturedData}
              userNotifications={userNotifications}
              setUserNotifications={setUserNotifications}
              hmNotifications={hmNotifications}
              setHMNotifications={setHMNotifications}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              // averageRating={averageRating}
              // handymanServicesData={handymanServicesData}
              servicesCategory={servicesCategory}
              servicesCategorySelection={servicesCategorySelection}
              backButtonVisibility={backButtonVisibility}
              setBackButtonVisibility={setBackButtonVisibility}
              setHm_id={setHm_id}
              setHmProfile={setHmProfile}
              setIndividualHmStar={setIndividualHmStar}
              setIndividualHmReviews={setIndividualHmReviews}
              setFilteredServicesData={setFilteredServicesData}
              filteredServicesData={filteredServicesData}
              setViewHmProfile={setViewHmProfile}
              setHmAverageRating={setHmAverageRating}
              setJobsCompleted={setJobsCompleted}
              setTotalRatings={setTotalRatings}
              setCurrentPage={setCurrentPage}
              user_id={user_id}
              hmNotifications={hmNotifications}
              userNotifications={userNotifications}
            />
          }
        />
        <Route
          path="/createservice"
          element={
            <CreateServicesHandyman
              backButtonVisibility={backButtonVisibility}
              setBackButtonVisibility={setBackButtonVisibility}
              setServiceCategory={setServiceCategory}
              setServiceDescription={setServiceDescription}
              setServiceTOW={setServiceTOW}
              setServicePriceFrom={setServicePriceFrom}
              hm_id={hm_id}
              setIndividualHMServices={setIndividualHMServices}
              hmNotifications={hmNotifications}
              userNotifications={userNotifications}
            />
          }
        />
        <Route
          path="/updateservice"
          element={
            <UpdateServicesHandyman
              updateServiceDetails={updateServiceDetails}
              setServiceCategory={setServiceCategory}
              setServiceDescription={setServiceDescription}
              setServiceTOW={setServiceTOW}
              setServicePriceFrom={setServicePriceFrom}
              setIndividualHMServices={setIndividualHMServices}
            />
          }
        />
        {/* <Route
          path="/acceptedservice"
          element={<AcceptedServices username={username} user_id={user_id} />}
        /> */}
        <Route
          path="/profile"
          element={
            <Profiles
              charSelect={charSelect}
              setBackButtonVisibility={setBackButtonVisibility}
              backButtonVisibility={backButtonVisibility}
              user_id={user_id}
              hm_id={hm_id}
              hmProfile={hmProfile}
              individualHmStar={individualHmStar}
              individualHmReviews={individualHmReviews}
              setViewHmProfile={setViewHmProfile}
              viewHmProfile={viewHmProfile}
              hmAverageRating={hmAverageRating}
              jobsCompleted={jobsCompleted}
              totalRatings={totalRatings}
              hMDetails={hMDetails}
              setHMDetails={setHMDetails}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              userNotifications={userNotifications}
              hmNotifications={hmNotifications}
            />
          }
        />
        <Route
          path="/editprofilehm"
          element={<EditProfileHandyMan hm_id={hm_id} hMDetails={hMDetails} />}
        />
        <Route
          path="/editprofileuser"
          element={
            <EditProfileUser user_id={user_id} userDetails={userDetails} />
          }
        />
        <Route
          path="/myservices"
          element={
            <MyServices
              charSelect={charSelect}
              hm_id={hm_id}
              user_id={user_id}
              loading={loading}
              setLoading={setLoading}
              setHmProfile={setHmProfile}
              userDetails={userDetails}
              setCurrentPage={setCurrentPage}
              setHmAverageRating={setHmAverageRating}
              setIndividualHmStar={setIndividualHmStar}
              setJobsCompleted={setJobsCompleted}
              setTotalRatings={setTotalRatings}
              setIndividualHmReviews={setIndividualHmReviews}
              userNotifications={userNotifications}
              hmNotifications={hmNotifications}
              setInboxData={setInboxData}
            />
          }
        />
        <Route
          path="/featuredinfo"
          element={
            <FeaturedServiceInfo
              featuredData={featuredData}
              setHmProfile={setHmProfile}
              setIndividualHmStar={setIndividualHmStar}
              setIndividualHmReviews={setIndividualHmReviews}
              setHmAverageRating={setHmAverageRating}
              setJobsCompleted={setJobsCompleted}
              setTotalRatings={setTotalRatings}
              setCurrentPage={setCurrentPage}
              backButtonVisibility={backButtonVisibility}
              setBackButtonVisibility={setBackButtonVisibility}
              currentPage={currentPage}
              setViewHmProfile={setViewHmProfile}
              user_id={user_id}
              userNotifications={userNotifications}
              hmNotifications={hmNotifications}
            />
          }
        />
        <Route
          path="/inbox"
          element={
            <Inbox
              hmNotifications={hmNotifications}
              userNotifications={userNotifications}
              inboxData={inboxData}
              charSelect={charSelect}
            />
          }
        />
        <Route
          path="/notifications"
          element={
            <Notifications
              userNotifications={userNotifications}
              user_id={user_id}
            />
          }
        />
        <Route
          path="/hmnotifications"
          element={
            <NotificationsHM hmNotifications={hmNotifications} hm_id={hm_id} />
          }
        />
      </Routes>
    </div>
  );
}
