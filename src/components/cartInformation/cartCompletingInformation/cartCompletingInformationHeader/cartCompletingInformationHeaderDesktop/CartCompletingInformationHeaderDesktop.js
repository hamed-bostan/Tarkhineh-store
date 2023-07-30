import React from "react";
import "./CartCompletingInformationHeaderDesktop.scss";

const CartCompletingInformationHeaderDesktop = ({ setStep }) => {
  return (
    <div className="cart_completing_information_desktop_container">
      <div
        className="cart_completing_information_desktop_wrapper"
        onClick={() => setStep(1)}
      >
        <img
          src="assets/images/icons/shopping-cart.png"
          alt=""
          className="cart_completing_information_desktop_icon"
        />
        <span className="cart_completing_information_desktop_text">
          سبد خرید
        </span>
      </div>

      <div
        className="cart_completing_information_desktop_wrapper"
        onClick={() => setStep(2)}
      >
        <img
          src="assets/images/icons/tick_square_gray.png"
          alt=""
          className="cart_completing_information_desktop_icon"
        />
        <span className="cart_completing_information_desktop_text">
          تکمیل اطلاعات
        </span>
      </div>

      <div
        className="cart_completing_information_desktop_wrapper"
        onClick={() => setStep(3)}
      >
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
