import React from "react";
import "./CartCompletingInformationHeaderDesktop.scss";
import CartHeaderDesktopCartIcon from "./cartHeaderDesktopIcons/CartHeaderDesktopCartIcon";
import CartHeaderDesktopCompletingIcon from "./cartHeaderDesktopIcons/CartHeaderDesktopCompletingIcon";
import CartHeaderDesktopPaymentIcon from "./cartHeaderDesktopIcons/CartHeaderDesktopPaymentIcon";

const CartCompletingInformationHeaderDesktop = ({ step, setStep }) => {
  return (
    <div className="cart_completing_information_desktop_container">
      <div
        className={`${
          step >= 1
            ? "cart_completing_information_desktop_wrapper cart_completing_information_desktop_wrapper_active"
            : "cart_completing_information_desktop_wrapper"
        }`}
        onClick={() => setStep(1)}
      >
        <span className="cart_completing_information_desktop_icon">
          <CartHeaderDesktopCartIcon />
        </span>
        <span className="cart_completing_information_desktop_text">
          سبد خرید
        </span>
      </div>

      <div
        className={`${
          step >= 2
            ? "cart_completing_information_desktop_wrapper_active"
            : "cart_completing_information_desktop_wrapper"
        }`}
        onClick={() => setStep(2)}
      >
        <span className="cart_completing_information_desktop_icon">
          <CartHeaderDesktopCompletingIcon />
        </span>
        <span className="cart_completing_information_desktop_text">
          تکمیل اطلاعات
        </span>
      </div>

      <div
        className={`${
          step >= 3
            ? "cart_completing_information_desktop_wrapper_active"
            : "cart_completing_information_desktop_wrapper"
        }`}
        onClick={() => {
          setStep(3);
        }}
      >
        <span className="cart_completing_information_desktop_icon">
          <CartHeaderDesktopPaymentIcon />
        </span>
        <span className="cart_completing_information_desktop_text">پرداخت</span>
      </div>
    </div>
  );
};

export default CartCompletingInformationHeaderDesktop;
