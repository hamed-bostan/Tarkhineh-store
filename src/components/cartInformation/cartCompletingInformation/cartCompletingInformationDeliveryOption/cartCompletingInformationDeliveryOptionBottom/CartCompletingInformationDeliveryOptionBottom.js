import React from "react";
import "./CartCompletingInformationDeliveryOptionBottom.scss";

const CartCompletingInformationDeliveryOptionBottom = ({
  content,
  onOptionChange,
  setContent,
}) => {
  return (
    <div className="cart_completing_information_delivery_bottom_container">
      <div className="cart_completing_information_delivery_bottom_wrapper">
        <div>
          <input
            type="radio"
            name="content"
            value="Delivery"
            checked={content === "Delivery"}
            onChange={onOptionChange}
            className="cart_completing_information_delivery_bottom_button"
          />
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
            onClick={() => setContent("Delivery")}
          >
            ارسال توسط پیک
          </label>
        </div>
      </div>
      <div className="cart_completing_information_delivery_bottom_wrapper">
        <div>
          <input
            type="radio"
            name="content"
            value="InPerson"
            checked={content === "InPerson"}
            onChange={onOptionChange}
            className="cart_completing_information_delivery_bottom_button"
          />
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
            onClick={() => setContent("InPerson")}
          >
            تحویل حضوری
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartCompletingInformationDeliveryOptionBottom;
