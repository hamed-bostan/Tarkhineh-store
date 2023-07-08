import React from "react";
import "./NavbarIcons.scss";
import { navbarIcons } from "../../../../data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarIcons = () => {
  const state = useSelector((state) => state.cartState);
  
  return (
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
  );
};

export default NavbarIcons;
