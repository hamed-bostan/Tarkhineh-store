import React from "react";
import "./CartPaymentPagePaymentGateway.scss";

const CartPaymentPagePaymentGateway = () => {
  return (
    <div className="cart_payment_page_payment_gateway_container">
      <div className="cart_payment_page_payment_gateway_top_container">
        <img
          src="assets/images/icons/card.png"
          alt=""
          className="cart_payment_page_payment_gateway_icon"
        />
        <span className="cart_payment_page_payment_gateway_top_text">
          درگاه پرداخت
        </span>
      </div>
      <hr className="cart_completing_information_line cart_payment_page_payment_gateway_line_hidden" />
      <div className="cart_payment_page_payment_gateway_bank_image_text_container">
        <div className="cart_payment_page_payment_gateway_bank_image_container">
          <img
            src="assets/images/icons/bank_1.png"
            alt=""
            className="cart_payment_page_payment_gateway_bank_image"
          />
          <img
            src="assets/images/icons/bank_2.png"
            alt=""
            className="cart_payment_page_payment_gateway_bank_image"
          />
          <img
            src="assets/images/icons/bank_3.png"
            alt=""
            className="cart_payment_page_payment_gateway_bank_image"
          />
        </div>
        <div className="cart_payment_page_payment_gateway_text_container">
          <span className="cart_payment_page_payment_gateway_bottom_text cart_payment_page_payment_gateway_bottom_text_bigger">
            پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
          </span>
          <span className="cart_payment_page_payment_gateway_bottom_text">
            (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPaymentPagePaymentGateway;
