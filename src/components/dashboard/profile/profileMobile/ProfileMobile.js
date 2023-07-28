import React from "react";
import "./ProfileMobile.scss";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileLinks from "./profileLinks/ProfileLinks";

const ProfileMobile = () => {
  return (
    <div className="profile_mobile_container">
      <ProfileHeader />
      <hr className="dashboard_horizontal_line" />
      <ProfileLinks />
    </div>
  );
};

export default ProfileMobile;
