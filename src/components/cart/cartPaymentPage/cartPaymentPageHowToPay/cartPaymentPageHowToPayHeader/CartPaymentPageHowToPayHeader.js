import React from "react";
import "./CartPaymentPageHowToPayHeader.scss";

const CartPaymentPageHowToPayHeader = () => {
  return (
    <div className="cart_completing_information_delivery_wrapper_top">
      <img
        src="assets/images/icons/wallet_money.png"
        alt=""
        className="cart_completing_information_icons"
      />
      <span className="cart_completing_information_delivery_title">
        روش پرداخت
      </span>
    </div>
  );
};

export default CartPaymentPageHowToPayHeader;
