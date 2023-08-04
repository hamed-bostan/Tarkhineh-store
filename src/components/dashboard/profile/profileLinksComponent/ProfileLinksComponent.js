import React from "react";
import "./ProfileLinksComponent.scss";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileLinks from "./profileLinks/ProfileLinks";

const ProfileLinksComponent = ({ step, setStep }) => {
  return (
    <div className="profile_mobile_container">
      <ProfileHeader />
      <hr className="dashboard_horizontal_line" />
      <ProfileLinks step={step} setStep={setStep} />
    </div>
  );
};

export default ProfileLinksComponent;
