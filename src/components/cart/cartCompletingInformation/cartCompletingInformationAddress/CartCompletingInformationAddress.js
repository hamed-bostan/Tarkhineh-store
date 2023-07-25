import React from "react";
import "./CartCompletingInformationAddress.scss";
import CartCompletingInformationAddressHeader from "./cartCompletingInformationAddressHeader/CartCompletingInformationAddressHeader";
import CartCompletingInformationAddressBottom from "./cartCompletingInformationAddressBottom/CartCompletingInformationAddressBottom";

const CartCompletingInformationAddress = () => {
  return (
    <div className="cart_completing_information_address_main_container">
      <CartCompletingInformationAddressHeader />
      <hr className="cart_completing_information_line" />
      <CartCompletingInformationAddressBottom />
    </div>
  );
};

export default CartCompletingInformationAddress;
