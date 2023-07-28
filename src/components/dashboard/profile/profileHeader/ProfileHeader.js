import React from "react";
import "./ProfileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="profile_header_container">
      <img
        src="assets/images/icons/avatar.png"
        alt=""
        className="Profile_avatar_icon"
      />
      <div className="profile_header_wrapper">
        <span className="profile_name_text">کاربر ترخینه</span>
        <span className="profile_phoneNumber_text">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
