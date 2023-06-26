import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_sidebar">
        <span className="footer_title">دسترسی آسان</span>
        <span className="footer_text">پرسش‌های متداول</span>
        <span className="footer_text">قوانین ترخینه</span>
        <span className="footer_text">حریم خصوصی</span>
        <div className="footer_icon_container">
          <img src="assets/images/icons/twitter.png" alt=""  className="footer_icon"/>
          <img src="assets/images/icons/instagram.png" alt="" className="footer_icon"/>
          <img src="assets/images/icons/telegram.png" alt="" className="footer_icon"/>
        </div>
      </div>
      <div className="footer_sidebar">
        <span className="footer_title">شعبه‌های ترخینه</span>
        <span className="footer_text">شعبه اکباتان</span>
        <span className="footer_text">شعبه چالوس</span>
        <span className="footer_text">شعبه اقدسیه</span>
        <span className="footer_text">شعبه ونک</span>
      </div>
    </div>
  );
};

export default Footer;
