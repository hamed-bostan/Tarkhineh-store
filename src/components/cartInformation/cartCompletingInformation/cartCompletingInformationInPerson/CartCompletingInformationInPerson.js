import React from "react";
import "./CartCompletingInformationInPerson.scss";

const CartCompletingInformationInPerson = () => {
  return (
    <div className="cart_completing_information_in_person_container">
      <div className="cart_completing_information_in_person_wrapper">
        <img src="assets/images/icons/location.png" alt="" className="cart_completing_information_in_person_location_icon"/>
        <span className="cart_completing_information_in_person_title">آدرس شعبه اکباتان</span>
      </div>
      <hr className="cart_completing_information_in_person_horizontal_line" />
      <div className="cart_completing_information_in_person_information">
        <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
        <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
        <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </span>
        <span>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</span>
      </div>
    </div>
  );
};

export default CartCompletingInformationInPerson;
