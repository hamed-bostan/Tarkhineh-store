import React from "react";
import "./CartCompletingInformationDeliveryOptionBottom.scss";

const CartCompletingInformationDeliveryOptionBottom = () => {
  return (
    <div className="cart_completing_information_delivery_bottom_container">
      <div className="cart_completing_information_delivery_bottom_wrapper">
        <input type="radio" />
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
          >
            ارسال توسط پیک
          </label>
          <span className="cart_completing_information_delivery_details">
            توسط پیک رستوران ارسال شود.
          </span>
        </div>
        <img
          src="assets/images/icons/truck_fast.png"
          alt=""
          className="cart_completing_information_icons"
        />
      </div>
      <div className="cart_completing_information_delivery_bottom_wrapper">
        <input type="radio" />
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
          >
            تحویل حضوری
          </label>
          <span className="cart_completing_information_delivery_details">
            دریافت حضوری در رستوران
          </span>
        </div>
        <img
          src="assets/images/icons/shopping_bag.png"
          alt=""
          className="cart_completing_information_icons"
        />
      </div>
    </div>
  );
};

export default CartCompletingInformationDeliveryOptionBottom;
