import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import "./Navbar.scss";
import { navbarIcons, navbarItems } from "../../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.cartState);

  return (
    <div className="navbar_container">
      <div className="navbar_header">
        <div className="navbar_toggle_container">
          {!isOpen && (
            <img
              onClick={() => setIsOpen(true)}
              className="navbar_icon"
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
        {/* logo section */}
        <div className="navbar_logo_container">
          <img
            className="navbar_logo"
            src="assets/images/icons/Logo.png"
            alt=""
          />
        </div>
        {/* End of logo section */}
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
                  <div className="navbar_arrow_icon_container">
                    <div className="navbar_mobile_icon_link_container">
                      <img
                        src={link.image}
                        alt=""
                        className="navbar_mobile_icon"
                      />
                      <p>{link.text}</p>
                    </div>
                    {link?.icon && (
                      <img
                        src={link.icon}
                        alt=""
                        className="navbar_arrow_icon"
                      />
                    )}
                  </div>
                </NavLink>
                <hr className="navbar_horizontal_line" />
              </div>
            );
          })}
        </div>
        {/* End of Link section */}
        {/* Icons container */}
        <div className="navbar_icons_container">
          {navbarIcons.map((item) => {
            return (
              <div className="navbar_badge_container" key={item.id}>
                <NavLink
                  to={item?.path}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar_green_background_active"
                      : "navbar_green_background"
                  }
                >
                  <img className="navbar_icon" src={item.icons} alt="" />
                </NavLink>
                {item.path === "/cart" && (
                  <span className="navbar_badge">{state.itemsCounter}</span>
                )}
              </div>
            );
          })}
        </div>
        {/* End of Icons container */}
      </div>
    </div>
  );
};

export default Navbar;
