import React, { useState } from "react";
import "./FaqQuestions.scss";

const FaqQuestions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="questions_container">
      <div className="questions_wrapper">
        <span className="questions_text">ترخینه چه امکانات متفاوتی داره؟</span>
        <img
          src="assets/images/icons/arrow_down_black.png"
          alt=""
          className="questions_icon"
        />
      </div>
      <div className="questions_wrapper">
        <span className="questions_text">حساب کاربری در ترخینه</span>
        <img
          src="assets/images/icons/arrow_down_black.png"
          alt=""
          className="questions_icon"
        />
      </div>
    </div>
  );
};

export default FaqQuestions;
