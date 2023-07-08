import React from "react";
import "./NavbarToggle.scss";

const NavbarToggle = ({ open, isOpen }) => {
  return (
    <div className="navbar_toggle_container">
      {!isOpen && (
        <img
          onClick={open}
          className="navbar_icon"
          src="assets/images/icons/menu.png"
          alt=""
        />
      )}
    </div>
  );
};

export default NavbarToggle;
