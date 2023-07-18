import React from "react";
import "./FranchiseAddressProperty.scss";

const FranchiseAddressProperty = () => {
  return (
    <>
      <span className="franchise_request_form_title">آدرس ملک متقاضی</span>
      <div className="franchise_request_form_input_wrapper">
        <div className="franchise_request_form_address_wrapper">
          <input
            type="text"
            placeholder="استان"
            className="franchise_request_form_address_input"
          />
          <input
            type="text"
            placeholder="منطقه"
            className="franchise_request_form_address_input"
          />
        </div>
        <div className="franchise_request_form_address_wrapper">
          <input
            type="text"
            placeholder="شهر"
            className="franchise_request_form_address_input"
          />

          <textarea
            className="franchise_request_form_address_input franchise_request_form_address_text_area"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="آدرس دقیق"
          ></textarea>
        </div>
        <div className="franchise_request_form_map_image_container">
          <img
            src="assets/images/franchise/franchise_map.png"
            alt=""
            className="franchise_request_form_map_image"
          />
        </div>
      </div>
    </>
  );
};

export default FranchiseAddressProperty;
