import React from "react";
import "./Category.scss";

const Category = ({ categories }) => {
  return (
    <div className="header_component_container">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <div className="header_component_button_container">
              <button className="header_component_button">{category}</button>
              <img
                src="assets/images/icons/arrow_left_grey.png"
                alt=""
                className="header_component_arrow_icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
