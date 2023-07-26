import React from "react";
import "./CartPaymentPage.scss";
import Navbar from "../../home/navbar/Navbar";
import CartCompletingInformationHeader from "../cartCompletingInformation/cartCompletingInformationHeader/CartCompletingInformationHeader";
import CartPaymentPageDiscount from "./cartPaymentPageDiscount/CartPaymentPageDiscount";
import CartPaymentPageHowToPay from "./cartPaymentPageHowToPay/CartPaymentPageHowToPay";
import CartPaymentPagePaymentGateway from "./cartPaymentPagePaymentGateway/CartPaymentPagePaymentGateway";
import CartCompletingInformationPayment from "./cartPaymentPagePaymentSection/CartCompletingInformationPayment";
import CartCompletingInformationPaymentHeader from "./cartPaymentPagePaymentSection/cartCompletingInformationPaymentHeader/CartCompletingInformationPaymentHeader";
import CartCompletingInformationPaymentCard from "./cartPaymentPagePaymentSection/cartCompletingInformationPaymentCard/CartCompletingInformationPaymentCard";
import { useSelector } from "react-redux";

const CartPaymentPage = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
      <CartCompletingInformationHeader />
      <div className="cart_payment_page_main_wrapper">
        <div className="cart_payment_page_discount_howToPay_gateway_container">
          <CartPaymentPageDiscount />
          <CartPaymentPageHowToPay />
          <CartPaymentPagePaymentGateway />
        </div>
        <div className="cart_completing_information_payment_all_data_container">
          <CartCompletingInformationPaymentHeader />
          <hr className="cart_completing_information_line cart_payment_horizontal_hidden" />
          <div className="cart_completing_information_payment_card_main_container">
            {state.selectedItems.map((item) => {
              return (
                <div key={item.id}>
                  <CartCompletingInformationPaymentCard item={item} />
                </div>
              );
            })}
          </div>
          <hr className="cart_completing_information_line cart_payment_horizontal_hidden" />
          <CartCompletingInformationPayment />
        </div>
      </div>
    </div>
  );
};

export default CartPaymentPage;
