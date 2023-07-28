import React from "react";
import "./ProfileLinks.scss";
import { dashboardLinks } from "../../../../../data";
import { Link } from "react-router-dom";

const ProfileLinks = () => {
  return (
    <div className="profile_bottom_container">
      {dashboardLinks.map((link) => {
        return (
          <div className="profile_bottom_wrapper">
            <img src={link.icon} alt="" className="profile_icons" />
            <Link to={link?.to}>
              <span
                className={`${
                  link.link === "خروج"
                    ? "profile_bottom_text profile_bottom_text_logout"
                    : "profile_bottom_text"
                }`}
              >
                {link.link}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
