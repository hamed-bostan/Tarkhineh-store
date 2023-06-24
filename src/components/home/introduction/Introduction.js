import React from "react";
import "./Introduction.scss";
// Components
import { introductionIcons } from "../../../data";

const Introduction = () => {
  return (
    <div className="Introduction_container">
      {/* information section */}
      <div className="introduction_information_container">
        <span className="Introduction_title">رستوران‌های زنجیره‌ای ترخینه</span>
        <p className="introduction_information">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <button className="Introduction_button">اطلاعات بیشتر</button>
      </div>
      {/* End of information section */}

      {/* Icons section */}
      <div className="Introduction_icons_container">
        {introductionIcons.map((item) => {
          const { icon, id, text } = item;
          return (
            <div key={id}>
              <div className="introduction_icons_wrapper">
                <img src={icon} alt="" className="Introduction_icon" />
                <span className="Introduction_text">{text}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* End of Icons section */}
    </div>
  );
};

export default Introduction;
