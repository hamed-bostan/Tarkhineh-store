import React from "react";
import "./FaqLinks.scss";
import { Link } from "react-router-dom";

const FaqLinks = () => {
  return (
    <div className="faq_links_container">
      <Link to="/faq" className="faq_links_underline_hidden">
        <span className="faq_links_text">سوالات متداول</span>
      </Link>
      <Link to="/rules" className="faq_links_underline_hidden">
        <span className="faq_links_text">قوانین ترخینه</span>
      </Link>
      <Link to="/privacy" className="faq_links_underline_hidden">
        <span className="faq_links_text">حریم خصوصی</span>
      </Link>
    </div>
  );
};

export default FaqLinks;
