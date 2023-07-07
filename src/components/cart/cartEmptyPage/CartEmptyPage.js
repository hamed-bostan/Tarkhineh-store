import React from "react";
import "./CartEmptyPage.scss";
import { Link } from "react-router-dom";

const CartEmptyPage = () => {
  return (
    <div className="cart_empty_page_container">
      <img
        src="assets/images/icons/empty_page.png"
        alt=""
        className="cart_empty_page_image"
      />
      <span className="cart_empty_page_text">
        شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
      </span>
      <Link to="/menu">
        <button className="cart_restaurant_menu_button">منوی رستوران</button>
      </Link>
    </div>
  );
};

export default CartEmptyPage;
