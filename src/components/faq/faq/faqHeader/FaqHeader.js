import React from "react";
import "./FaqHeader.scss";

const FaqHeader = () => {
  return (
    <div className="Contact_header_container">
      <img
        src="assets/images/bannerImages/slider_06.png"
        alt=""
        className="Contact_header_image"
      />
      <span className="Contact_header_text">سوالات متداول از ترخینه</span>
    </div>
  );
};

export default FaqHeader;
