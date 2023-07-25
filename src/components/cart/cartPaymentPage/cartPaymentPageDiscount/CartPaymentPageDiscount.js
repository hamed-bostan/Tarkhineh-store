import React from "react";
import "./CartPaymentPageDiscount.scss";

const CartPaymentPageDiscount = () => {
  return (
    <div className="cart_payment_page_discount_container">
      <div className="cart_payment_page_discount_top_wrapper">
        <img
          src="assets/images/icons/discount_shape.png"
          alt=""
          className="cart_payment_page_discount_icon"
        />
        <span className="cart_payment_page_discount_text">ثبت کد تخفیف</span>
      </div>
      <hr className="cart_completing_information_line" />
      <div className="cart_payment_page_discount_button_container">
        <input
          type="text"
          placeholder="کد تخفیف"
          className="cart_payment_page_discount_placeholder_text"
        />
        <button className="cart_payment_page_discount_button">ثبت کد</button>
      </div>
    </div>
  );
};

export default CartPaymentPageDiscount;
