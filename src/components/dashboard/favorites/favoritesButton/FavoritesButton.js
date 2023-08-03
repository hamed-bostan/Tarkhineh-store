import React from "react";
import "./FavoritesButton.scss";
import { foodCategoryInformation } from "../../../../data";

const FavoritesButton = () => {
  return (
    <div className="order_tracking_status_button_header_container">
      {foodCategoryInformation.map((item, index) => {
        const { foodCategory } = item;
        return (
          <div key={index} className="header_component_button_container">
            <button className="header_component_button">{foodCategory}</button>
            <img
              src="assets/images/icons/arrow_left_grey.png"
              alt=""
              className="header_component_arrow_icon"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavoritesButton;
