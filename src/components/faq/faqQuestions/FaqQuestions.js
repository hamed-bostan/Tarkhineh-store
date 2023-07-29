import React from "react";
import "./FaqQuestions.scss";
import FaqQuestionsCard from "./faqQuestionsCard/FaqQuestionsCard";
import {
  faqQuestions,
  rulesInformation,
  privacyInformation,
} from "../../../data";

const FaqQuestions = ({ activeTabIndex }) => {
  const allQuestions = [faqQuestions, rulesInformation, privacyInformation];

  const singleQuestion = allQuestions.filter(
    (item, index) => index === activeTabIndex
  );

  return (
    <div className="questions_container">
      {singleQuestion[0].map((questions, index) => {
        return (
          <FaqQuestionsCard
            key={questions.id}
            {...questions}
            length={singleQuestion[0].length}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FaqQuestions;
