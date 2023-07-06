import React, { useState } from "react";
import "./Navbar.scss";
// Components
import { navbarItems } from "../../../data";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_header">
      <div className="navbar_toggle_container">
        {!isOpen && (
          <img
            onClick={() => setIsOpen(true)}
            className="navbar_icon menu_icon"
            src="assets/images/icons/menu.png"
            alt=""
          />
        )}

        {isOpen && (
          <img
            onClick={() => setIsOpen(false)}
            className="navbar_icon close_icon"
            src="assets/images/icons/Close icon.png"
            alt=""
          />
        )}
      </div>
      <div className="navbar_logo_container">
        <img
          className="navbar_logo"
          src="assets/images/icons/Logo.png"
          alt=""
        />
      </div>
      {/* Link section*/}
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
                <div className="arrow_icon_container">
                  <p className="navbar_link_item">{link.text}</p>
                  {link?.icon && (
                    <img src={link.icon} alt="" className="navbar_arrow_icon" />
                  )}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      {/* End of Link section */}
      {/* Icons container */}
      <div className="navbar_icons_container">
        <img
          className="navbar_icon search_icon"
          src="assets/images/icons/search-normal-01.png"
          alt=""
        />
        <Link to="/cart">
          <img
            className="navbar_icon"
            src="assets/images/icons/shopping-cart.png"
            alt=""
          />
        </Link>
        <img
          className="navbar_icon"
          src="assets/images/icons/user.png"
          alt=""
        />
      </div>
      {/* End of Icons container */}
    </div>
  );
};

export default Navbar;
