import React from "react";
import "./DashboardHeaderMobile.scss";

const DashboardHeaderMobile = ({ step, nextStep, previousStep }) => {
  return (
    <div className="dashboard_mobile_header_container">
      <img
        src="assets/images/icons/arrow_right.png"
        alt=""
        className={`${
          step < 5
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

      <img
        src="assets/images/icons/arrow_left_grey.png"
        alt=""
        className={`${
          step > 1
            ? "cart_arrow_icon"
            : "cart_arrow_icon cart_trash_icon_inactive"
        }`}
        onClick={() => previousStep()}
      />
    </div>
  );
};

export default DashboardHeaderMobile;
