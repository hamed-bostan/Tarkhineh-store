import React from "react";
import "./NavbarToggle.scss";

const NavbarToggle = ({ open }) => {
  return (
    <div className="navbar_toggle_container">
      <img
        onClick={open}
        className="navbar_icon"
        src="assets/images/icons/menu.png"
        alt=""
      />
    </div>
  );
};

export default NavbarToggle;
