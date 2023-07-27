import React, { useState } from "react";
import "./FaqLinks.scss";
import { faqQuestionsLinks } from "../../../data";

const FaqLinks = ({ setActiveTabIndex }) => {
  //  set the buttons on active style
  const [value, setValue] = useState(0);
  const activeFunction = (index) => {
    setValue(index);
  };
  // End of set the buttons on active style

  return (
    <div className="faq_links_container">
      {faqQuestionsLinks.map((link, index) => {
        return (
          <span
            key={link.id}
            className={`faq_links_text ${
              index == value && "faq_links_text_active"
            }`}
            onClick={() => {
              setActiveTabIndex(index);
              activeFunction(index);
            }}
          >
            {link.link}
          </span>
        );
      })}
    </div>
  );
};

export default FaqLinks;
