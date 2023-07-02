import React from "react";
import "./FooterAboutUs.scss";

const FooterAboutUs = () => {
  return (
    <div className="footer_aboutUs_container">
      <div className="footer_aboutUs_wrapper">
        <img
          src="assets/images/icons/user_03.png"
          alt=""
          className="footer_aboutUs_icon"
        />
        <span className="footer_aboutUs_text">پرسنلی مجرب و حرفه‌ای</span>
      </div>
      <hr className="footer_aboutUs_vertical_line" />
      <div className="footer_aboutUs_wrapper">
        <img
          src="assets/images/icons/diagram_02.png"
          alt=""
          className="footer_aboutUs_icon"
        />
        <span className="footer_aboutUs_text">کیفیت بالای غذاها</span>
      </div>
      <hr className="footer_aboutUs_vertical_line" />
      <div className="footer_aboutUs_wrapper">
        <img
          src="assets/images/icons/home-wifi_02.png"
          alt=""
          className="footer_aboutUs_icon"
        />
        <span className="footer_aboutUs_text">محیطی دلنشین و آرام</span>
      </div>
      <hr className="footer_aboutUs_vertical_line" />
      <div className="footer_aboutUs_wrapper">
        <img
          src="assets/images/icons/menu-board_02.png"
          alt=""
          className="footer_aboutUs_icon"
        />
        <span className="footer_aboutUs_text">منوی متنوع</span>
      </div>
    </div>
  );
};

export default FooterAboutUs;
