import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLinks.scss";
import { navbarItems } from "../../../../data";

const NavbarLinks = ({ isOpen, close }) => {
  return (
    <div
      className={`${
        isOpen
          ? "navbar_links_container navbar_links_show"
          : "navbar_links_container"
      }`}
    >
      {navbarItems.map((link) => {
        return (
          <div key={link.id}>
            <NavLink
              to={link?.path}
              className={({ isActive }) =>
                isActive ? "navbar_link_active" : "navbar_link_not_active"
              }
            >
              <div className="navbar_arrow_icon_container">
                <div className="navbar_mobile_icon_link_container">
                  <img src={link.image} alt="" className="navbar_mobile_icon" />
                  <p>{link.text}</p>
                </div>
                {link?.icon && (
                  <img src={link.icon} alt="" className="navbar_arrow_icon" />
                )}
              </div>
            </NavLink>
            <hr className="navbar_horizontal_line" />
          </div>
        );
      })}
      {/* close Icon */}
      {isOpen && (
        <>
          <img
            onClick={close}
            className="navbar_icon close_icon"
            src="assets/images/icons/close_icon_02.png"
            alt=""
          />
          <img
            src="assets/images/bannerImages/top_frame.png"
            alt=""
            className="navbar_top_frame_image"
          />
        </>
      )}
    </div>
  );
};

export default NavbarLinks;
