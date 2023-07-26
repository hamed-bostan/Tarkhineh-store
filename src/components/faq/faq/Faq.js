import React from "react";
import "./Faq.scss";
import Navbar from "../../home/navbar/Navbar";
import FaqHeader from "./faqHeader/FaqHeader";
import FaqLinks from "../faqLinks/FaqLinks";
import FaqQuestions from "./faqQuestions/FaqQuestions";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <FaqHeader />
      <FaqLinks />
      <div className="faq_main_container">
        <FaqQuestions />
      </div>
    </div>
  );
};

export default Faq;
