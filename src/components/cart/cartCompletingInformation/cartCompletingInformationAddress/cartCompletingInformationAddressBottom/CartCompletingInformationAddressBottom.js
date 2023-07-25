import React from "react";
import "./CartCompletingInformationAddressBottom.scss";

const CartCompletingInformationAddressBottom = () => {
  return (
    <div className="cart_completing_information_address_bottom_main_container">
      {/* first article */}
      <div className="cart_completing_information_address_bottom_container">
        <div className="cart_completing_information_address_bottom_wrapper">
          <p className="cart_completing_information_address_bottom_text cart_completing_information_address_bottom_text_black_color">
            تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
          </p>
          <div className="cart_completing_information_address_bottom_icon_container">
            <img
              src="assets/images/icons/edit.png"
              alt=""
              className="cart_completing_information_icons"
            />
            <img
              src="assets/images/icons/trash.png"
              alt=""
              className="cart_completing_information_icons"
            />
          </div>
        </div>
        <div className="cart_completing_information_address_name_phoneNumber_container">
          <span className="cart_completing_information_address_bottom_text">
            محل کار
          </span>
          <span className="cart_completing_information_address_bottom_text">
            سردار وظیفه
          </span>
          <span className="cart_completing_information_address_bottom_text">
            ۰۹۱۴ ۸۶۴ ۳۳۵۰
          </span>
        </div>
      </div>
      {/* second article */}
      <div className="cart_completing_information_address_bottom_container">
        <div className="cart_completing_information_address_bottom_wrapper">
          <p className="cart_completing_information_address_bottom_text cart_completing_information_address_bottom_text_black_color">
            تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
          </p>
          <div className="cart_completing_information_address_bottom_icon_container">
            <img
              src="assets/images/icons/edit.png"
              alt=""
              className="cart_completing_information_icons"
            />
            <img
              src="assets/images/icons/trash.png"
              alt=""
              className="cart_completing_information_icons"
            />
          </div>
        </div>
        <div className="cart_completing_information_address_name_phoneNumber_container">
          <span className="cart_completing_information_address_bottom_text">
            محل کار
          </span>
          <span className="cart_completing_information_address_bottom_text">
            سردار وظیفه
          </span>
          <span className="cart_completing_information_address_bottom_text">
            ۰۹۱۴ ۸۶۴ ۳۳۵۰
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCompletingInformationAddressBottom;
