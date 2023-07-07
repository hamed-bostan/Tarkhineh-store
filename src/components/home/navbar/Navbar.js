import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import "./Navbar.scss";
import { navbarIcons, navbarItems } from "../../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.cartState);

  //  set the buttons on active style
  const [value, setValue] = useState(0);
  const activeFunction = (index) => {
    setValue(index);
    console.log(index);
  };
  // End of set the buttons on active style

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
                  <div className="navbar_mobile_icon_link_container">
                    <img
                      src={link.image}
                      alt=""
                      className="navbar_mobile_icon"
                    />
                    <p className="navbar_link_item">{link.text}</p>
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
      </div>
      {/* End of Link section */}
      {/* Icons container */}
      <div className="navbar_icons_container">
        {navbarIcons.map((item, index) => {
          return (
            <div className="navbar_badge_container" key={item.id}>
              <NavLink
                to={item?.path}
                className={({ isActive }) =>
                  isActive ? "green_background_active" : "green_background"
                }
              >
                <img className="navbar_icon" src={item.icons} alt="" />
                {/* <span
                  // className="navbar_icon"
                  className={`${
                    index === value ? "navbar_icon_active" : "navbar_icon"
                  }`}
                  onClick={() => activeFunction(index)}
                >
                  {item.icons}
                </span> */}
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
  );
};

export default Navbar;
