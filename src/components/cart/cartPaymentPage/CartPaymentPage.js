import React from "react";
import "./CartPaymentPage.scss";
import Navbar from "../../home/navbar/Navbar";
import CartCompletingInformationHeader from "../cartCompletingInformation/cartCompletingInformationHeader/CartCompletingInformationHeader";
import CartPaymentPageDiscount from "./cartPaymentPageDiscount/CartPaymentPageDiscount";
import CartPaymentPageHowToPay from "./cartPaymentPageHowToPay/CartPaymentPageHowToPay";

const CartPaymentPage = () => {
  return (
    <div>
      <Navbar />
      <CartCompletingInformationHeader />
      <div className="cart_payment_page_main_wrapper">
        <CartPaymentPageDiscount />
        <CartPaymentPageHowToPay />
      </div>
    </div>
  );
};

export default CartPaymentPage;
