import React from "react";
import "./CartCompletingInformationPayment.scss";
import { useSelector } from "react-redux";

const CartCompletingInformationPayment = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div className="cart_Completing_Information_Payment_container">
      <div className="cart_Completing_Information_Payment_wrapper">
        <span className="cart_Completing_Information_Payment_text">
          تخفیف محصولات
        </span>
        <span className="cart_Completing_Information_Payment_text_gray">
          ۶۳٬۰۰۰ تومان
        </span>
      </div>
      <hr className="cart_completing_information_line" />
      <div className="cart_Completing_Information_Payment_wrapper">
        <span className="cart_Completing_Information_Payment_text">
          هزینه ارسال
        </span>
        <span className="cart_Completing_Information_Payment_text_gray">
          ۶۳٬۰۰۰ تومان
        </span>
      </div>
      <hr className="cart_completing_information_line" />
      <div className="cart_Completing_Information_Payment_wrapper">
        <span className="cart_Completing_Information_Payment_text">
          مبلغ قابل پرداخت
        </span>
        <span className="cart_Completing_Information_Payment_text_green">
          {state.totalPrice} تومان
        </span>
      </div>
      <div className="cart_Completing_Information_Payment_button_container">
        <img
          src="assets/images/icons/card_white.png"
          alt=""
          className="cart_completing_information_icons"
        />
        <button className="cart_Completing_Information_Payment_button">
          تایید و پرداخت
        </button>
      </div>
    </div>
  );
};

export default CartCompletingInformationPayment;
