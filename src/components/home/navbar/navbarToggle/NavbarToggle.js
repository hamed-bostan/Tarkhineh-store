import React from "react";
import "./NavbarToggle.scss";

const NavbarToggle = ({ close, open, isOpen }) => {
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

      {isOpen && (
        <img
          onClick={close}
          className="navbar_icon close_icon"
          src="assets/images/icons/Close icon.png"
          alt=""
        />
      )}
    </div>
  );
};

export default NavbarToggle;
