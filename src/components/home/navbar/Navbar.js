import React, { useState } from "react";
import "./Navbar.scss";
// Components
import { navbarItems } from "../../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_header">
      {/* Header section */}
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
      {/* End of Header section */}
      {/* Link section*/}
      <div className="navbar_links_container">
        {navbarItems.map((link) => {
          return <p className="navbar_link_item">{link.text}</p>;
        })}
      </div>
      {/* End of Link section */}
    </div>
  );
};

export default Navbar;
