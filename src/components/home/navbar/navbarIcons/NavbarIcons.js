import React, { useState } from "react";
import "./NavbarIcons.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarCartIcon from "./navbarCartIcon/NavbarCartIcon";
import ProfileLink from "../../ProfileLinks/ProfileLink";
import ProfileLinkIcon from "./ProfileLinkIcon/ProfileLinkIcon";

const NavbarIcons = () => {
  const state = useSelector((state) => state.cartState);
  const [isOpen, setIsOpen] = useState(false);

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
          to="/cartInformation"
          className={({ isActive }) =>
            isActive
              ? "navbar_green_background navbar_green_background_active"
              : "navbar_green_background"
          }
        >
          <span className="navbar_cart_icon">
          <NavbarCartIcon />
          </span>
        </NavLink>
        <span className="navbar_badge">{state.itemsCounter}</span>
      </div>
      <div className="navbar_green_background"
      onClick={() => setIsOpen(!isOpen)}
      >
        {/* <img
          className="navbar_icons_left_side"
          src="assets/images/icons/user.png"
          alt=""
        /> */}
          <span className="navbar_cart_icon">
            <ProfileLinkIcon />
          </span>
      </div>
      { isOpen && <ProfileLink /> }
    </div>
  );
};

export default NavbarIcons;
