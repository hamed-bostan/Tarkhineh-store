import React from "react";
import "./FranchisePrivilege.scss";

const FranchisePrivilege = () => {
  return (
    <div className="franchise_privilege_container">
      <span className="franchise_privilege_title">مزیت دریافت نمایندگی</span>
      <div className="franchise_privilege_information_container">
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            استفاده از برند شناخته شده ترخینه
          </span>
        </div>
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            مشاوره در امور حقوقی، مالی و مالیاتی
          </span>
        </div>
      </div>
      <div className="franchise_privilege_information_container">
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            به حداقل رساندن ریسک سرمایه گذاری
          </span>
        </div>
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            پشتیبانی بازاریابی و منابع انسانی
          </span>
        </div>
      </div>
      <div className="franchise_privilege_information_container">
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            تسریع روند بازگشت سرمایه
          </span>
        </div>
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
          </span>
        </div>
      </div>
      <div className="franchise_privilege_information_container">
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            مشاوره های تخصصی جهت مدیریت رستوران
          </span>
        </div>
        <div className="franchise_privilege_information_wrapper">
          <img
            src="assets/images/icons/rectangle.png"
            alt=""
            className="franchise_privilege_icon"
          />
          <span className="franchise_privilege_text">
            طرح های تشویقی برای ارتقا فروش
          </span>
        </div>
      </div>
    </div>
  );
};

export default FranchisePrivilege;
