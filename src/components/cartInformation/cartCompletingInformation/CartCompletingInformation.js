import React, { useState } from "react";
import "./CartCompletingInformation.scss";
import CartCompletingInformationDelivery from "./cartCompletingInformationDelivery/CartCompletingInformationDelivery";
import CartCompletingInformationInPerson from "./cartCompletingInformationInPerson/CartCompletingInformationInPerson";

const CartCompletingInformation = () => {
  const [content, setContent] = useState("Delivery");

  const onOptionChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      {content === "Delivery" && (
        <CartCompletingInformationDelivery
          onOptionChange={onOptionChange}
          content={content}
        />
      )}
      <div className="hamed">
        {content === "InPerson" && (
          <CartCompletingInformationInPerson
            onOptionChange={onOptionChange}
            content={content}
          />
        )}
      </div>
    </>
  );
};

export default CartCompletingInformation;
