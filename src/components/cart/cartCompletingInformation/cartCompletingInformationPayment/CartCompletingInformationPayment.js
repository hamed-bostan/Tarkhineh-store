import React from "react";
import "./CartCompletingInformationPayment.scss";

const CartCompletingInformationPayment = () => {
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
          ۵۴۲٬۰۰۰ تومان
        </span>
      </div>
      <div className="cart_Completing_Information_Payment_button_container">
        <img
          src="assets/images/icons/tick_circle.png"
          alt=""
          className="cart_completing_information_icons"
        />
        <button className="cart_Completing_Information_Payment_button">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default CartCompletingInformationPayment;
