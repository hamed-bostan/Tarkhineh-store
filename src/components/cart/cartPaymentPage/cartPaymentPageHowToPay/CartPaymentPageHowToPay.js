import React from "react";
import "./CartPaymentPageHowToPay.scss";
import CartPaymentPageHowToPayBottom from "./cartPaymentPageHowToPayBottom/CartPaymentPageHowToPayBottom";
import CartPaymentPageHowToPayHeader from "./cartPaymentPageHowToPayHeader/CartPaymentPageHowToPayHeader";

const CartPaymentPageHowToPay = () => {
  return (
    <div className="cart_completing_information_delivery_option_container">
      <CartPaymentPageHowToPayHeader />
      <hr className="cart_completing_information_line cart_completing_information_line_hidden" />
      <CartPaymentPageHowToPayBottom />
    </div>
  );
};

export default CartPaymentPageHowToPay;
