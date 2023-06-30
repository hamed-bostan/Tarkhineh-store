import React from "react";
import "./HeaderAboutUs.scss";

const HeaderAboutUs = () => {
  return (
    <div className="aboutUs_header_container">
      <img
        src="assets/images/bannerImages/slider_05.png"
        alt=""
        className="aboutUs_header_image"
      />
      <span className="aboutUs_header_text">درباره ترخینه بیشتر بدانید!</span>
    </div>
  );
};

export default HeaderAboutUs;
