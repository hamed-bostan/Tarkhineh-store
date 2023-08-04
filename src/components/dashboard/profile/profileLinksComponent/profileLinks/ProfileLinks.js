import React from "react";
import "./ProfileLinks.scss";
import { dashboardLinks } from "../../../../../data";

const ProfileLinks = ({ step, setStep }) => {
  return (
    <div className="profile_bottom_container">
      {dashboardLinks.map((link, index) => {
        return (
          <div className="profile_bottom_wrapper" key={link.id}>
            <img src={link.icon} alt="" className="profile_icons" />
            <span
              className={`${
                step === index && step < 4
                  ? "profile_bottom_text_active"
                  : link.link === "خروج"
                  ? "profile_bottom_text_logout"
                  : "profile_bottom_text"
              }`}
              onClick={() => setStep(index)}
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
