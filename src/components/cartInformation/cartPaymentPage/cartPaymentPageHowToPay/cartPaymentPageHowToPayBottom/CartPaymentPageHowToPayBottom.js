import React from "react";
import "./CartPaymentPageHowToPayBottom.scss";

const CartPaymentPageHowToPayBottom = () => {
  return (
    <div className="cart_completing_information_delivery_bottom_container">
      <div className="cart_completing_information_delivery_bottom_wrapper">
        <input type="radio" />
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label"
          >
            پرداخت اینترنتی
          </label>
          <span className="cart_completing_information_delivery_details">
            به صورت اینترنتی پرداخت میکنم.
          </span>
        </div>
        <img
          src="assets/images/icons/card_pos.png"
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
            پرداخت در محل
          </label>
          <span className="cart_completing_information_delivery_details">
            در محل پرداخت میکنم.
          </span>
        </div>
        <img
          src="assets/images/icons/wallet_2.png"
          alt=""
          className="cart_completing_information_icons"
        />
      </div>
    </div>
  );
};

export default CartPaymentPageHowToPayBottom;
