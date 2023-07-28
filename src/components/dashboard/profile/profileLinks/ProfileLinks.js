import React from "react";
import "./ProfileLinks.scss";
import { dashboardLinks } from "../../../../data";

const ProfileLinks = () => {
  return (
    <div className="profile_bottom_container">
      {dashboardLinks.map((link) => {
        return (
          <div className="profile_bottom_wrapper">
            <img src={link.icon} alt="" className="profile_icons" />
            <span
              className={`${
                link.link === "خروج"
                  ? "profile_bottom_text profile_bottom_text_logout"
                  : "profile_bottom_text"
              }`}
            >
              {link.link}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
