import React from "react";
import "./CartCompletingInformationAllPayment.scss";
import CartCompletingInformationPaymentHeader from "./cartCompletingInformationPaymentHeader/CartCompletingInformationPaymentHeader";
import CartCompletingInformationPaymentCard from "./cartCompletingInformationPaymentCard/CartCompletingInformationPaymentCard";
// import CartCompletingInformationPayment from "./cartCompletingInformationPayment/CartCompletingInformationPayment";
import { useSelector } from "react-redux";

const CartCompletingInformationAllPayment = () => {
  const state = useSelector((state) => state.cartState);

  return (
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
      {/* <CartCompletingInformationPayment /> */}
    </div>
  );
};

export default CartCompletingInformationAllPayment;
