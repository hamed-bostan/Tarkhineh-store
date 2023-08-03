import React, { useState } from "react";
import "./DashboardHeaderMobile.scss";
import { useSelector } from "react-redux";
import CartClear from "../../../cart/cartClear/CartClear";

const DashboardHeaderMobile = ({ step, nextStep, previousStep }) => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.cartState);

  return (
    <div className="cart_header_container">
      <img
        src="assets/images/icons/arrow_right.png"
        alt=""
        className={`${
          step < 3
            ? "cart_arrow_icon"
            : "cart_arrow_icon cart_trash_icon_inactive"
        }`}
        onClick={() => nextStep()}
      />

      {step === 1 ? (
        <span className="cart_header_title">پروفایل</span>
      ) : step === 2 ? (
        <span className="cart_header_title">پیگیری سفارشات</span>
      ) : step === 3 ? (
        <span className="cart_header_title">علاقمندی‌ها</span>
      ) : step === 4 ? (
        <span className="cart_header_title">آدرس‌های من</span>
      ) : (
        <span className="cart_header_title">خروج</span>
      )}

      {step === 1 && (
        <img
          src="assets/images/icons/trash.png"
          alt=""
          className={`${
            state.itemsCounter > 0
              ? "cart_trash_icon"
              : "cart_trash_icon cart_trash_icon_inactive"
          }`}
          onClick={() => setIsOpen(true)}
        />
      )}

      {step > 1 && (
        <img
          src="assets/images/icons/arrow_left_grey.png"
          alt=""
          className="cart_arrow_icon"
          onClick={() => previousStep()}
        />
      )}

      {isOpen && state.itemsCounter > 0 && (
        <CartClear close={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default DashboardHeaderMobile;
