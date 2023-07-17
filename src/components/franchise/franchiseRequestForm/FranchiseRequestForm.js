import React from "react";
import "./FranchiseRequestForm.scss";

const FranchiseRequestForm = () => {
  return (
    <div>
      <span>فرم درخواست نمایندگی</span>
      <span>مشخصات فردی متقاضی</span>
      <input type="text" placeholder="نام و نام خانوادگی" />
      <input type="text" placeholder="کدملی" />
      <input type="text" placeholder="شماره تماس" />
      <span>آدرس ملک متقاضی</span>
      <input type="text" placeholder="استان" />
      <input type="text" placeholder="شهر" />
      <input type="text" placeholder="منطقه" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="آدرس دقیق"
      ></textarea>
      <img
        src="assets/images/franchise/franchise_map.png"
        alt=""
        className="franchise_request_form"
      />
      <span>مشخصات ملک متقاضی</span>
      <input type="text" placeholder="نوع مالکیت" />
      <input type="text" placeholder="مساحت ملک (متر مربع)" />
      <input type="text" placeholder="سن بنا" />
      <span>امکانات ملک متقاضی</span>
      <span>ملک متقاضی:</span>
      <label htmlFor="">پروانه کسب دارد.</label>
      <input type="checkbox" />
      <label htmlFor="">آشپزخانه دارد.</label>
      <input type="checkbox" />
      <label htmlFor="">پارکینگ دارد.</label>
      <input type="checkbox" />
      <label htmlFor="">انبار دارد.</label>
      <input type="checkbox" />
      <span>تصاویر ملک</span>
      <img src="assets/images/icons/upload.png" alt="" />
      <span>تصاویری از ملک را بارگذاری کنید...</span>
    </div>
  );
};

export default FranchiseRequestForm;
