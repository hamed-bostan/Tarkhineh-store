import React, { useState } from "react";
import "./Navbar.scss";
// Components
import { navbarItems } from "../../../data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_container_hamed">
      <div className="navbar_header">
        {/* Header section */}
        <div className="navbar_right_side_container">
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="navbar_icon"
            src="assets/images/icons/menu.png"
            alt=""
          />
        </div>
        <div className="navbar_center_container">
          <img
            className="navbar_logo"
            src="assets/images/icons/Logo.png"
            alt=""
          />
        </div>
        <div className="navbar_left_side_container">
          <img
            className="navbar_icon"
            src="assets/images/icons/search-normal-01.png"
            alt=""
          />
          <img
            className="navbar_icon"
            src="assets/images/icons/shopping-cart.png"
            alt=""
          />
          <img
            className="navbar_icon"
            src="assets/images/icons/user.png"
            alt=""
          />
        </div>
        {/* End of Header section */}
        {/* Link section*/}
        <div className="navbar_links_container ">
          {navbarItems.map((link) => {
            return (
              <div
                className={`${
                  isOpen
                    ? "navbar_links_wrapper_show"
                    : "navbar_links_wrapper_not_show"
                }`}
              >
                <NavLink
                  to={link?.path}
                  className={({ isActive }) =>
                    isActive ? "navbar_link_active" : "navbar_link_not_active"
                  }
                >
                  <p className="navbar_link_item">{link.text}</p>
                  {link?.icon && (
                    <img src={link.icon} alt="" className="navbar_arrow_icon" />
                  )}
                </NavLink>
              </div>
            );
          })}
        </div>
        {/* End of Link section */}
      </div>
    </div>
  );
};

export default Navbar;
