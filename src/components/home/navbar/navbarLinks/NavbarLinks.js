import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLinks.scss";
import { navbarItems } from "../../../../data";
import NavbarLinksImageFrame from "./navbarLinksImageFrame/NavbarLinksImageFrame";

const NavbarLinks = ({ isOpen, close }) => {
  return (
    <div
      className={`${
        isOpen
          ? "navbar_links_container navbar_links_show"
          : "navbar_links_container"
      }`}
    >
      <div className="navbar_links_wrapper">
        {navbarItems.map((link, index) => {
          return (
            <div key={link.id}>
              <NavLink
                to={link?.path}
                className={({ isActive }) =>
                  isActive ? "navbar_link_active" : "navbar_link_not_active"
                }
              >
                <div className="navbar_arrow_icon_container">
                  <div
                    className={`${
                      link.text === "اعطای نمایندگی"
                        ? "navbar_mobile_icon_link_container hiding_franchise"
                        : "navbar_mobile_icon_link_container"
                    }`}
                  >
                    <img
                      src={link.image}
                      alt=""
                      className="navbar_mobile_icon"
                    />
                    <p>{link.text}</p>
                  </div>
                  {link?.icon && (
                    <img src={link.icon} alt="" className="navbar_arrow_icon" />
                  )}
                </div>
              </NavLink>
              <hr
                className={`navbar_horizontal_line ${
                  link.text === "اعطای نمایندگی" || index === 5
                    ? "hiding_franchise"
                    : ""
                }`}
              />
            </div>
          );
        })}
      </div>
      {/* close Icon */}
      {isOpen && <NavbarLinksImageFrame close={close} />}
    </div>
  );
};

export default NavbarLinks;
