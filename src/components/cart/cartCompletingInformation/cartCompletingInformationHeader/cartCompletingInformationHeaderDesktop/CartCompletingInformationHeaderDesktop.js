import React from "react";
import "./CartCompletingInformationHeaderDesktop.scss";
import { Link } from "react-router-dom";

const CartCompletingInformationHeaderDesktop = () => {
  return (
    <div className="cart_completing_information_desktop_container">
      <Link to="/cart">
        <div className="cart_completing_information_desktop_wrapper">
          <img
            src="assets/images/icons/shopping-cart.png"
            alt=""
            className="cart_completing_information_desktop_icon"
          />
          <span className="cart_completing_information_desktop_text">
            سبد خرید
          </span>
        </div>
      </Link>
      <Link to="/cartCompletingInformation">
        <div className="cart_completing_information_desktop_wrapper">
          <img
            src="assets/images/icons/tick_square_gray.png"
            alt=""
            className="cart_completing_information_desktop_icon"
          />
          <span className="cart_completing_information_desktop_text">
            تکمیل اطلاعات
          </span>
        </div>
      </Link>
      <div className="cart_completing_information_desktop_wrapper">
        <img
          src="assets/images/icons/wallet_gray.png"
          alt=""
          className="cart_completing_information_desktop_icon"
        />
        <span className="cart_completing_information_desktop_text">پرداخت</span>
      </div>
    </div>
  );
};

export default CartCompletingInformationHeaderDesktop;
