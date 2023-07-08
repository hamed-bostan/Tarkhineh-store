import React, { useState } from "react";
import "./Navbar.scss";
// Components
import NavbarToggle from "./navbarToggle/NavbarToggle";
import NavbarLogo from "./navbarLogo/NavbarLogo";
import NavbarLinks from "./navbarLinks/NavbarLinks";
import NavbarIcons from "./navbarIcons/NavbarIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_header">
        <NavbarToggle
          close={() => setIsOpen(false)}
          open={() => setIsOpen(true)}
          isOpen={isOpen}
        />
        <NavbarLogo />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </div>
    </div>
  );
};

export default Navbar;
