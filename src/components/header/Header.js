import React, { useState } from "react";
import "./Header.scss";
import { banner } from "../../data";

const Header = () => {
  return (
    <div className="header_container">
      {banner.map((item) => {
        const { image, text, id } = item;
        return (
          <div onKeyUp={id} className="header_information_container">
            <img src={image} alt="" className="header_image" />
            <span className="header_text">{text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
