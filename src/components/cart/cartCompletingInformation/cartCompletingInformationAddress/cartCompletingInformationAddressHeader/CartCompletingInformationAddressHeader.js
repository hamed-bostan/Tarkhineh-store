import React from "react";
import "./CartCompletingInformationAddressHeader.scss";

const CartCompletingInformationAddressHeader = () => {
  return (
    <div className="cart_completing_information_address_header_container">
      <div className="cart_completing_information_address_wrapper">
        <img
          src="assets/images/icons/location.png"
          alt=""
          className="cart_completing_information_icons"
        />
        <span className="cart_completing_information_address_text">
          آدرس‌ها
        </span>
      </div>
      <div className="cart_completing_information_address_wrapper">
        <img
          src="assets/images/icons/close_circle.png"
          alt=""
          className="cart_completing_information_address_icon"
        />
        <span className="cart_completing_information_address_text cart_completing_information_address_text_add">
          افزودن آدرس
        </span>
      </div>
    </div>
  );
};

export default CartCompletingInformationAddressHeader;
