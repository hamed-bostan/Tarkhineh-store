import React from "react";
import "./MenuTitle.scss";

const MenuTitle = () => {
  return (
    <div className="menu_title_container">
      <span className="menu_title">لیست غذاها </span>
      <div className="menu_button_container">
        <img
          src="assets/images/icons/shopping-cart.png"
          alt=""
          className="menu_cart_icon"
        />
        <button className="menu_title_button">تکمیل خرید</button>
      </div>
    </div>
  );
};

export default MenuTitle;
