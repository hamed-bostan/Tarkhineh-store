import React from "react";
import "./CartPaymentPagePayingInMyLocation.scss";

const CartPaymentPagePayingInMyLocation = () => {
  return (
    <div className="cart_payment_page_paying_in_my_location_container">
      <div className="cart_payment_page_paying_in_my_location_header_wrapper">
        <img
          src="assets/images/icons/warning_black.png"
          alt=""
          className="cart_payment_page_paying_in_my_location_icon"
        />
        <span className="cart_payment_page_paying_in_my_location_title">
          قابل توجه
        </span>
      </div>
      <hr className="cart_completing_information_in_person_horizontal_line cart_completing_information_in_person_horizontal_line_hiding" />
      <div className="cart_payment_page_paying_in_my_location_description_container">
        <p className="cart_payment_page_paying_in_my_location_description">
          هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل
          کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای
          پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
        </p>
      </div>
    </div>
  );
};

export default CartPaymentPagePayingInMyLocation;
