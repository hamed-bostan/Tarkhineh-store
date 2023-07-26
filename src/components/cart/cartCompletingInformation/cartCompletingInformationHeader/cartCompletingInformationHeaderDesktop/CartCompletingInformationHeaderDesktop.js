import React from "react";
import "./CartCompletingInformationHeaderDesktop.scss";
import { Link } from "react-router-dom";

const CartCompletingInformationHeaderDesktop = () => {
  return (
    <div className="cart_completing_information_desktop_container">
      <Link
        to="/cart"
        className="cart_completing_information_desktop_removing_link"
      >
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
      <Link
        to="/cartCompletingInformation"
        className="cart_completing_information_desktop_removing_link"
      >
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
      <Link
        to="/CartPaymentPage"
        className="cart_completing_information_desktop_removing_link"
      >
        <div className="cart_completing_information_desktop_wrapper">
          <img
            src="assets/images/icons/wallet_gray.png"
            alt=""
            className="cart_completing_information_desktop_icon"
          />
          <span className="cart_completing_information_desktop_text">
            پرداخت
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartCompletingInformationHeaderDesktop;
