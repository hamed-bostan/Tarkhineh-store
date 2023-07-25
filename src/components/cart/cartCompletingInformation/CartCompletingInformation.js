import React from "react";
import "./CartCompletingInformation.scss";
import CartCompletingInformationDeliveryOption from "./cartCompletingInformationDeliveryOption/CartCompletingInformationDeliveryOption";
import Navbar from "../../home/navbar/Navbar";
import CartCompletingInformationHeader from "./cartCompletingInformationHeader/CartCompletingInformationHeader";
import CartCompletingInformationAddress from "./cartCompletingInformationAddress/CartCompletingInformationAddress";
import CartCompletingInformationOrderingDescription from "./cartCompletingInformationOrderingDescription/CartCompletingInformationOrderingDescription";
import CartCompletingInformationPayment from "./cartCompletingInformationPayment/CartCompletingInformationPayment";

const CartCompletingInformation = () => {
  return (
    <div>
      <Navbar />
      <div className="cart_completing_information_main_container">
        <CartCompletingInformationHeader />
        <CartCompletingInformationDeliveryOption />
        <CartCompletingInformationAddress />
        <CartCompletingInformationOrderingDescription />
        <CartCompletingInformationPayment />
      </div>
    </div>
  );
};

export default CartCompletingInformation;
