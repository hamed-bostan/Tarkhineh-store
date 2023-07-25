import React from "react";
import "./CartCompletingInformation.scss";
import CartCompletingInformationDeliveryOption from "./cartCompletingInformationDeliveryOption/CartCompletingInformationDeliveryOption";
import Navbar from "../../home/navbar/Navbar";
import CartCompletingInformationHeader from "./cartCompletingInformationHeader/CartCompletingInformationHeader";
import CartCompletingInformationAddress from "./cartCompletingInformationAddress/CartCompletingInformationAddress";
import CartCompletingInformationOrderingDescription from "./cartCompletingInformationOrderingDescription/CartCompletingInformationOrderingDescription";
import CartCompletingInformationPayment from "./cartCompletingInformationPayment/CartCompletingInformationPayment";
import CartCompletingInformationPaymentCard from "./cartCompletingInformationPayment/cartCompletingInformationPaymentCard/CartCompletingInformationPaymentCard";
import { useSelector } from "react-redux";
import CartCompletingInformationPaymentHeader from "./cartCompletingInformationPayment/cartCompletingInformationPaymentHeader/CartCompletingInformationPaymentHeader";

const CartCompletingInformation = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
      <CartCompletingInformationHeader />
      <div className="cart_completing_information_main_container">
        <div className="cart_completing_information_delivery_address_description_container">
          <CartCompletingInformationDeliveryOption />
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
    </div>
  );
};

export default CartCompletingInformation;
