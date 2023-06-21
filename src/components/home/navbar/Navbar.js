import React, { useState } from "react";
import "./Navbar.scss";
// Components
import { navbarItems } from "../../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        {/* Header section */}
        <div className="navbar_header">
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
              src="assets/images/icons/shopping-cart.png"
              alt=""
            />
            <img
              className="navbar_icon"
              src="assets/images/icons/user.png"
              alt=""
            />
          </div>
        </div>
        {/* End of Header section */}
        {/* Link section*/}
        <div className="navbar_links_container">
          {navbarItems.map((link) => {
            return (
              <div
                className={`${
                  isOpen
                    ? "navbar_links_wrapper_show"
                    : "navbar_links_wrapper_not_show"
                }`}
              >
                <p className="navbar_link_item">{link.text}</p>
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
