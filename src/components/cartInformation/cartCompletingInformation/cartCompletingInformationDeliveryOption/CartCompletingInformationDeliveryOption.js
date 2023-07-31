import React from "react";
import "./CartCompletingInformationDeliveryOption.scss";
import CartCompletingInformationDeliveryOptionHeader from "./cartCompletingInformationDeliveryOptionHeader/CartCompletingInformationDeliveryOptionHeader";
import CartCompletingInformationDeliveryOptionBottom from "./cartCompletingInformationDeliveryOptionBottom/CartCompletingInformationDeliveryOptionBottom";

const CartCompletingInformationDeliveryOption = ({
  content,
  onOptionChange,
  setContent,
}) => {
  return (
    <div className="cart_completing_information_delivery_option_container">
      <CartCompletingInformationDeliveryOptionHeader />
      <hr className="cart_completing_information_line cart_completing_information_line_hidden" />
      <CartCompletingInformationDeliveryOptionBottom
        content={content}
        onOptionChange={onOptionChange}
        setContent={setContent}
      />
    </div>
  );
};

export default CartCompletingInformationDeliveryOption;
