import React, { useState } from "react";
import "./Faq.scss";
import Navbar from "../../home/navbar/Navbar";
import FaqLinks from "../faqLinks/FaqLinks";
import FaqQuestions from "./faqQuestions/FaqQuestions";
import FaqHeaderBanner from "./faqHeaderBanner/FaqHeaderBanner";
import Footer from "../../home/footer/Footer";

const Faq = () => {
  const [jobs, setJobs] = useState([]); // data
  const [value, setValue] = useState(0);
  const { title, information } = jobs[value];

  return (
    <div>
      <Navbar />
      <FaqHeaderBanner />
      <div className="faq_main_container">
        <FaqLinks />
        <div className="faq_main_wrapper">
          <FaqQuestions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
