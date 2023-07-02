import React from "react";
import "./InformationAboutUs.scss";

const InformationAboutUs = () => {
  return (
    <div className="information_aboutUs_container">
      <span className="information_aboutUs_title">درباره ما</span>
      <div className="information_aboutUs_wrapper">
        <p className="information_aboutUs_first_text_container">
          رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این
          سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش
          برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت
          مشتریان بوده است.
        </p>
        <div className="information_aboutUs_image_container">
          <img
            src="assets/images/bannerImages/aboutUs_image.png"
            alt=""
            className="information_aboutUs_image"
          />
        </div>
        <p className="information_aboutUs_second_text_container">
          دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای
          خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه
          در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح
          کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ
          شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی
          شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد
          کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم
          انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده
          برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود. به امید آن روز که همه
          ایرانیان سالم و سلامت باشند.
        </p>
      </div>
    </div>
  );
};

export default InformationAboutUs;
