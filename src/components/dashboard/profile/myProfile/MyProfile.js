import React from "react";
import "./MyProfile.scss";

const MyProfile = () => {
  return (
    <div className="my_profile_container">
      <span className="my_profile_title">پروفایل من</span>
      <hr className="my_profile_horizontal_line"/>
      <div className="my_profile_bottom_container">
        <div className="my_profile_wrapper">
          <input
            type="text"
            placeholder="نام"
            className="my_profile_placeholder_text"
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="my_profile_placeholder_text"
          />
        </div>
        <div className="my_profile_wrapper">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="my_profile_placeholder_text"
          />
          <input
            type="text"
            placeholder="۰۹۱۴ ۸۶۴ ۳۳۵۰"
            className="my_profile_placeholder_text"
          />
        </div>
        <div className="my_profile_wrapper">
          <input
            type="text"
            placeholder="تاریخ تولد (اختیاری)"
            className="my_profile_placeholder_text"
          />
          <input
            type="text"
            placeholder="نام نمایشی"
            className="my_profile_placeholder_text"
          />
        </div>
      </div>
      <div className="my_profile_button_container">
        <img
          src="assets/images/icons/edit_green.png"
          alt=""
          className="my_profile_edit_icon"
        />
        <button className="my_profile_button">ویرایش اطلاعات شخصی</button>
      </div>
    </div>
  );
};

export default MyProfile;
