import React, { useState } from "react";
import "./CartCompletingInformation.scss";
import CartCompletingInformationDeliveryOption from "./cartCompletingInformationDeliveryOption/CartCompletingInformationDeliveryOption";
import CartCompletingInformationAddress from "./cartCompletingInformationAddress/CartCompletingInformationAddress";
import CartCompletingInformationInPerson from "./cartCompletingInformationInPerson/CartCompletingInformationInPerson";
import CartCompletingInformationOrderingDescription from "./cartCompletingInformationOrderingDescription/CartCompletingInformationOrderingDescription";
import CartCompletingInformationAllPayment from "./cartCompletingInformationAllPayment/CartCompletingInformationAllPayment";

const CartCompletingInformation = () => {
  const [content, setContent] = useState("Delivery");

  const onOptionChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="cart_completing_information_main_container">
      <div className="cart_completing_information_delivery_address_description_container">
        <CartCompletingInformationDeliveryOption
          content={content}
          onOptionChange={onOptionChange}
        />
        {/* changeable section */}
        {content === "Delivery" && <CartCompletingInformationAddress />}
        {content === "InPerson" && <CartCompletingInformationInPerson />}
        {/* End of changeable section */}
        <CartCompletingInformationOrderingDescription />
      </div>
      <CartCompletingInformationAllPayment />
    </div>
  );
};

export default CartCompletingInformation;
