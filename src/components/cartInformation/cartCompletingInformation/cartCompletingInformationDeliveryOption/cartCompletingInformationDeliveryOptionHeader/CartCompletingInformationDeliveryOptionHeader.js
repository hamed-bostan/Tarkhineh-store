import React from "react";
import "./CartCompletingInformationDeliveryOptionHeader.scss";

const CartCompletingInformationDeliveryOptionHeader = () => {
  return (
    <div className="cart_completing_information_delivery_wrapper_top">
      <img
        src="assets/images/icons/truck.png"
        alt=""
        className="cart_completing_information_icons"
      />
      <span className="cart_completing_information_delivery_title">
        روش تحویل سفارش
      </span>
    </div>
  );
};

export default CartCompletingInformationDeliveryOptionHeader;
