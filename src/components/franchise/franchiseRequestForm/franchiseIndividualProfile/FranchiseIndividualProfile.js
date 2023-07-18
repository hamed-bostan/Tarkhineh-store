import React from "react";
import "./FranchiseIndividualProfile.scss";

const FranchiseIndividualProfile = () => {
  return (
    <>
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
    </>
  );
};

export default FranchiseIndividualProfile;
