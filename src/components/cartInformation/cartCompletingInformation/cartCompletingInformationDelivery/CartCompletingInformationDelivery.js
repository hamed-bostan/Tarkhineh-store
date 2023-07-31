import React from "react";
import "./CartCompletingInformationDelivery.scss";
import { useSelector } from "react-redux";
import CartCompletingInformationDeliveryOption from "../cartCompletingInformationDeliveryOption/CartCompletingInformationDeliveryOption";
import CartCompletingInformationAddress from "./cartCompletingInformationAddress/CartCompletingInformationAddress";
import CartCompletingInformationOrderingDescription from "./cartCompletingInformationOrderingDescription/CartCompletingInformationOrderingDescription";
import CartCompletingInformationPaymentHeader from "../cartCompletingInformationPayment/cartCompletingInformationPaymentHeader/CartCompletingInformationPaymentHeader";
import CartCompletingInformationPaymentCard from "../cartCompletingInformationPayment/cartCompletingInformationPaymentCard/CartCompletingInformationPaymentCard";
import CartCompletingInformationPayment from "../cartCompletingInformationPayment/CartCompletingInformationPayment";

const CartCompletingInformationDelivery = ({ onOptionChange, content }) => {
  const state = useSelector((state) => state.cartState);

  return (
    <div className="cart_completing_information_main_container">
      <div className="cart_completing_information_delivery_address_description_container">
        <CartCompletingInformationDeliveryOption
          content={content}
          onOptionChange={onOptionChange}
        />
        <CartCompletingInformationAddress />
        <CartCompletingInformationOrderingDescription />
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
  );
};

export default CartCompletingInformationDelivery;
