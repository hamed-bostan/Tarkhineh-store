import React from "react";
import "./CartCompletingInformationInPerson.scss";

const CartCompletingInformationInPerson = () => {
  return (
    <div className="cart_completing_information_in_person_main_container">
      <div className="cart_completing_information_in_person_container">
        {/* header section */}
        <div className="cart_completing_information_in_person_wrapper">
          <img
            src="assets/images/icons/location.png"
            alt=""
            className="cart_completing_information_in_person_location_icon"
          />
          <span className="cart_completing_information_in_person_title">
            آدرس شعبه اکباتان
          </span>
        </div>
        {/* End of header section */}

        <hr className="cart_completing_information_in_person_horizontal_line cart_completing_information_in_person_horizontal_line_hiding" />
        {/* information section */}
        <div className="cart_completing_information_in_person_information">
          <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
          <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
          <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </span>
          <span>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</span>
        </div>
        {/* End of information section */}

        <div>
          <button className="cart_completing_information_in_person_button">
            مشاهده در نقشه
          </button>
        </div>
      </div>

      <div className="cart_completing_information_in_person_image_container">
        <img
          src="assets/images/cart/map.png"
          alt=""
          className="cart_completing_information_in_person_image_map"
        />
      </div>
    </div>
  );
};

export default CartCompletingInformationInPerson;
