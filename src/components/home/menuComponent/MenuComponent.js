import React from "react";
import "./MenuComponent.scss";
import { menuInformation } from "../../../data";

const MenuComponent = () => {
  return (
    <div className="menu_component_container">
      <p className="menu_component_title">منوی رستوران</p>
      <div className="menu_component_wrapper">
        {menuInformation.map((item) => {
          return (
            <div className="menu_component_item_container" key={item.id}>
              <img src={item.image} alt="" className="menu_component_image" />
              <div className="menu_component_background"></div>
              <span className="menu_component_text">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuComponent;
