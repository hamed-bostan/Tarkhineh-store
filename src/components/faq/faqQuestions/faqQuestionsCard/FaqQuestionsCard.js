import React, { useState } from "react";
import "./FaqQuestionsCard.scss";

const FaqQuestionsCard = ({ title, information, length, index }) => {
  const [isInformationOpen, setIsInformationOpen] = useState(false);

  return (
    <article>
      <div className="questions_wrapper">
        <header
          className="questions_header_container"
          onClick={() => setIsInformationOpen(!isInformationOpen)}
        >
          <span
            className={`${
              isInformationOpen
                ? "questions_title questions_title_active"
                : "questions_title"
            }`}
          >
            {title}
          </span>
          {isInformationOpen ? (
            <img
              src="assets/images/icons/arrow_down_green.png"
              alt=""
              className="questions_icon"
            />
          ) : (
            <img
              src="assets/images/icons/arrow_down_black.png"
              alt=""
              className="questions_icon"
            />
          )}
        </header>
        {isInformationOpen && (
          <p className="questions_information">{information}</p>
        )}
      </div>
      <hr
        className={`${
          index === length - 1
            ? "questions_horizontal_line_hiding"
            : "questions_horizontal_line"
        }`}
      />
    </article>
  );
};

export default FaqQuestionsCard;
