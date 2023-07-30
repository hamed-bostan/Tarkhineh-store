import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      {/* sidebar section */}
      <div className="footer_sidebar">
        <span className="footer_title">دسترسی آسان</span>
        <Link to="/faq" className="footer_link_underline_hidden">
          <span className="footer_text">پرسش‌های متداول</span>
        </Link>
        <Link to="/faq" className="footer_link_underline_hidden">
          <span className="footer_text">قوانین ترخینه</span>
        </Link>
        <Link to="/faq" className="footer_link_underline_hidden">
          <span className="footer_text">حریم خصوصی</span>
        </Link>
        <Link to="/dashboard" className="footer_link_underline_hidden">
          <span className="footer_text">دشبورد</span>
        </Link>
        <div className="footer_icon_container">
          <img
            src="assets/images/icons/twitter.png"
            alt=""
            className="footer_icon"
          />
          <img
            src="assets/images/icons/instagram.png"
            alt=""
            className="footer_icon"
          />
          <img
            src="assets/images/icons/telegram.png"
            alt=""
            className="footer_icon"
          />
        </div>
      </div>
      <div className="footer_sidebar">
        <span className="footer_title">شعبه‌های ترخینه</span>
        <span className="footer_text">شعبه اکباتان</span>
        <span className="footer_text">شعبه چالوس</span>
        <span className="footer_text">شعبه اقدسیه</span>
        <span className="footer_text">شعبه ونک</span>
      </div>
      {/* End of sidebar section */}

      {/* input section */}
      <div className="footer_input_container">
        <span className="footer_title">پیام به ترخینه </span>
        <div className="footer_input_main_wrapper">
          <div className="footer_input_wrapper">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="footer_input_item"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="footer_input_item"
            />
            <input
              type="email"
              placeholder="آدرس ایمیل (اختیاری)"
              className="footer_input_item"
            />
          </div>
          <div className="footer_your_message_container">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="پیام شما"
              className="footer_your_message_item"
            ></textarea>
          </div>
        </div>
        <button className="footer_button">ارسال پیام</button>
      </div>
    </div>
  );
};

export default Footer;
