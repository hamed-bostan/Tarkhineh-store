import React from "react";
import "./BranchListAddress.scss";

const BranchListAddress = () => {
  return (
    <div className="Branch_address_container">
      <div className="Branch_address_first_row">
        <div className="Branch_address_wrapper">
          <img
            src="assets/images/icons/location.png"
            alt=""
            className="Branch_address_icon"
          />
          <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
        </div>
      </div>
      <div className="Branch_address_second_row">
        <div className="Branch_address_wrapper">
          <img
            src="assets/images/icons/call-calling.png"
            alt=""
            className="Branch_address_icon"
          />
          <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
          <span className="Branch_address_phone_number">۰۲۱-۳۳۵۳۵۳۵۶</span>
        </div>

        <div className="Branch_address_wrapper">
          <img
            src="assets/images/icons/clock.png"
            alt=""
            className="Branch_address_icon"
          />
          <span>همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
        </div>
      </div>
    </div>
  );
};

export default BranchListAddress;
