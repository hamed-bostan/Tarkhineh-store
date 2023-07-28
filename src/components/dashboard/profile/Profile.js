import React from "react";
import "./Profile.scss";
import MyProfile from "./myProfile/MyProfile";
import ProfileMobile from "./profileMobile/ProfileMobile";

const Profile = () => {
  return (
    <div className="profile_main_container">
      <div className="profile_container">
        <ProfileMobile />
      </div>
      <MyProfile />
    </div>
  );
};

export default Profile;
