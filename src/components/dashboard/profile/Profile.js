import React from "react";
import "./Profile.scss";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileLinks from "./profileLinks/ProfileLinks";
import MyProfile from "./myProfile/MyProfile";

const Profile = () => {
  return (
    <div className="profile_main_container">
      <div className="profile_container">
        <ProfileHeader />
        <hr className="dashboard_horizontal_line" />
        <ProfileLinks />
      </div>
      <MyProfile />
    </div>
  );
};

export default Profile;
