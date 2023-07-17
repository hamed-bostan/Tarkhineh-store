import React from "react";
import "./FranchiseConsultation.scss";

const FranchiseConsultation = () => {
  return (
    <div className="franchise_consultation_container">
      <span className="franchise_consultation_title">دریافت مشاوره</span>
      <div className="franchise_consultation_wrapper">
        <input
          type="text"
          placeholder="نام و نام‌خانوادگی"
          className="franchise_consultation_input"
        />
        <input
          type="text"
          placeholder="شماره تماس"
          className="franchise_consultation_input"
        />
        <input
          type="text"
          placeholder="زمان ایده‌آل"
          className="franchise_consultation_input"
        />
      </div>
      <button className="franchise_consultation_button">درخواست مشاوره</button>
    </div>
  );
};

export default FranchiseConsultation;
