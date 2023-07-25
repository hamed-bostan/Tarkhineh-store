import React from "react";
import "./CartCompletingInformationHeaderMobile.scss";

const CartCompletingInformationHeaderMobile = () => {
  return (
    <div className="cart_completing_information_mobile_container">
      <img
        src="assets/images/icons/arrow_right.png"
        alt=""
        className="cart_completing_information_mobile_icon"
      />
      <span className="cart_completing_information_mobile_text">
        تکمیل اطلاعات
      </span>
    </div>
  );
};

export default CartCompletingInformationHeaderMobile;
