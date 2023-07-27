import React, { useState } from "react";
import "./Faq.scss";
import FaqHeaderBanner from "./faqHeaderBanner/FaqHeaderBanner";
import FaqLinks from "./faqLinks/FaqLinks";
import FaqQuestions from "./faqQuestions/FaqQuestions";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";

const Faq = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <Navbar />
      <FaqHeaderBanner />
      <div className="faq_main_container">
        <FaqLinks setActiveTabIndex={setActiveTabIndex} />
        <div className="faq_main_wrapper">
          <FaqQuestions activeTabIndex={activeTabIndex} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
