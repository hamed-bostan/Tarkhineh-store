import React from "react";
import "./FranchiseRequestForm.scss";

const FranchiseRequestForm = () => {
  return (
    <div className="franchise_request_form_container">
      <span className="franchise_request_form_main_title">
        فرم درخواست نمایندگی
      </span>
      <span className="franchise_request_form_title">مشخصات فردی متقاضی</span>
      <div className="franchise_request_form_input_wrapper">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="franchise_request_form_input"
        />
        <input
          type="text"
          placeholder="کدملی"
          className="franchise_request_form_input"
        />
        <input
          type="text"
          placeholder="شماره تماس"
          className="franchise_request_form_input"
        />
      </div>
      <span className="franchise_request_form_title">آدرس ملک متقاضی</span>
      <div className="franchise_request_form_input_wrapper">
        <div className="franchise_request_form_second_wrapper">
          <input
            type="text"
            placeholder="استان"
            className="franchise_request_form_second_input"
          />
          <input
            type="text"
            placeholder="منطقه"
            className="franchise_request_form_second_input"
          />
        </div>
        <div className="franchise_request_form_second_wrapper">
          <input
            type="text"
            placeholder="شهر"
            className="franchise_request_form_second_input"
          />

          <textarea
            className="franchise_request_form_second_input franchise_request_form_address_input"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="آدرس دقیق"
          ></textarea>
        </div>
        <img
          src="assets/images/franchise/franchise_map.png"
          alt=""
          className="franchise_request_form_image"
        />
      </div>
      <span className="franchise_request_form_title">مشخصات ملک متقاضی</span>
      <div className="franchise_request_form_input_wrapper">
        <input
          type="text"
          placeholder="نوع مالکیت"
          className="franchise_request_form_input"
        />
        <input
          type="text"
          placeholder="مساحت ملک (متر مربع)"
          className="franchise_request_form_input"
        />
        <input
          type="text"
          placeholder="سن بنا"
          className="franchise_request_form_input"
        />
      </div>
      <span className="franchise_request_form_title">امکانات ملک متقاضی</span>
      <div className="franchise_request_form_label_main_container">
        <div className="franchise_request_form_label_main_wrapper">
          <span className="franchise_request_form_secondary_title">
            ملک متقاضی:
          </span>
          <div className="franchise_request_form_all_label_container">
            <div className="franchise_request_form_label_container">
              <div className="franchise_request_form_label_wrapper">
                <input
                  type="checkbox"
                  className="franchise_request_form_checkbox"
                />
                <label htmlFor="" className="franchise_request_form_label">
                  پروانه کسب دارد.
                </label>
              </div>

              <div className="franchise_request_form_label_wrapper">
                <input
                  type="checkbox"
                  className="franchise_request_form_checkbox"
                />
                <label htmlFor="" className="franchise_request_form_label">
                  پارکینگ دارد.
                </label>
              </div>
            </div>
            <div className="franchise_request_form_label_container">
              <div className="franchise_request_form_label_wrapper">
                <input
                  type="checkbox"
                  className="franchise_request_form_checkbox"
                />
                <label htmlFor="" className="franchise_request_form_label">
                  آشپزخانه دارد.
                </label>
              </div>

              <div className="franchise_request_form_label_wrapper">
                <input
                  type="checkbox"
                  className="franchise_request_form_checkbox"
                />
                <label htmlFor="" className="franchise_request_form_label">
                  انبار دارد.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="franchise_request_form_upload_container">
          <span className="franchise_request_form_secondary_title">
            تصاویر ملک
          </span>
          <div className="franchise_request_form_upload_wrapper">
            <img
              src="assets/images/icons/upload.png"
              alt=""
              className="franchise_request_form_upload_icon"
            />
            <span className="franchise_request_form_label">
              تصاویری از ملک را بارگذاری کنید...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseRequestForm;
