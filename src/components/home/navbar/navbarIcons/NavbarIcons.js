import React, { useState } from "react";
import "./NavbarIcons.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarIcons = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div className="navbar_icons_container">
      <div className="navbar_green_background search_icon_container">
        <img
          className="navbar_icons_left_side"
          src="assets/images/icons/search-normal-01.png"
          alt=""
        />
      </div>
      <div className="navbar_badge_container">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "navbar_green_background navbar_green_background_active"
              : "navbar_green_background"
          }
        >
          <img
            className="navbar_icons_left_side"
            src="assets/images/icons/shopping-cart.png"
            alt=""
          />
        </NavLink>
        <span className="navbar_badge">{state.itemsCounter}</span>
      </div>
      <div className="navbar_green_background">
        <img
          className="navbar_icons_left_side"
          src="assets/images/icons/user.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarIcons;
