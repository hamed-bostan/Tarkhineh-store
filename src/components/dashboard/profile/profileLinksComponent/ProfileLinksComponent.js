import React from "react";
import "./ProfileLinksComponent.scss";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileLinks from "./profileLinks/ProfileLinks";

const ProfileLinksComponent = ({ setStep }) => {
  return (
    <div className="profile_mobile_container">
      <ProfileHeader />
      <hr className="dashboard_horizontal_line" />
      <ProfileLinks setStep={setStep} />
    </div>
  );
};

export default ProfileLinksComponent;
