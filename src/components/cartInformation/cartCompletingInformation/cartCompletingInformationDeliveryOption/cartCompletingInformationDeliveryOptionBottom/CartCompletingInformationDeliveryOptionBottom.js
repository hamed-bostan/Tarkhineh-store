import React from "react";
import "./CartCompletingInformationDeliveryOptionBottom.scss";
import CartDeliveryOptionBottomIconFilled from "./cartDeliveryOptionBottomIcon/CartDeliveryOptionBottomIconFilled";
import CartDeliveryOptionBottomIconVoid from "./cartDeliveryOptionBottomIcon/CartDeliveryOptionBottomIconVoid";

const CartCompletingInformationDeliveryOptionBottom = ({
  content,
  onOptionChange,
  setContent,
}) => {
  return (
    <div className="cart_completing_information_delivery_bottom_container">
      <div
        onClick={() => setContent("Delivery")}
        className="cart_completing_information_delivery_bottom_wrapper"
      >
        <input
          type="radio"
          name="content"
          value="Delivery"
          checked={content === "Delivery"}
          onChange={onOptionChange}
          className="cart_completing_information_delivery_bottom_button"
        />
        {content === "Delivery" ? (
          <CartDeliveryOptionBottomIconFilled />
        ) : (
          <CartDeliveryOptionBottomIconVoid />
        )}
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
      <div
        onClick={() => setContent("InPerson")}
        className="cart_completing_information_delivery_bottom_wrapper"
      >
        <input
          type="radio"
          name="content"
          value="InPerson"
          checked={content === "InPerson"}
          onChange={onOptionChange}
          className="cart_completing_information_delivery_bottom_button"
        />
        {content === "InPerson" ? (
          <CartDeliveryOptionBottomIconFilled />
        ) : (
          <CartDeliveryOptionBottomIconVoid />
        )}
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
          >
            تحویل حضوری
          </label>
          <span className="cart_completing_information_delivery_details">
            دریافت حضوری در رستوران.
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
