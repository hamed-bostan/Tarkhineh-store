import React from "react";
import "./FranchiseFacilityProperty.scss";

const FranchiseFacilityProperty = () => {
  return (
    <>
      <span className="franchise_request_form_title">امکانات ملک متقاضی</span>
      <div className="franchise_request_form_label_main_container">
        <div className="franchise_request_form_label_main_wrapper">
          <span className="franchise_request_form_address_title">
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
          <span className="franchise_request_form_address_title">
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
      <button className="franchise_request_form_confirm_button">ثبت اطلاعات</button>
    </>
  );
};

export default FranchiseFacilityProperty;
