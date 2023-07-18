import React from "react";
import "./FranchiseIcons.scss";
import { FranchiseInformation } from "../../../data";

const FranchiseIcons = () => {
  return (
    <div className="franchise_icons_main_container">
      <div className="franchise_icons_container">
        {FranchiseInformation.map((item) => {
          return (
            <div className="franchise_icons_wrapper">
              <img src={item.image} alt="" className="franchise_icons_image" />
              <span className="franchise_icons_text">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FranchiseIcons;
