import React from "react";
import "./FranchiseSpecificationProperty.scss";

const FranchiseSpecificationProperty = () => {
  return (
    <>
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
    </>
  );
};

export default FranchiseSpecificationProperty;
