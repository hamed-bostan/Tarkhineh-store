import React from "react";
import "./FaqQuestions.scss";
import { faqQuestions } from "../../../../data";
import FaqQuestionsCard from "./faqQuestionsCard/FaqQuestionsCard";

const FaqQuestions = () => {
  return (
    <div className="questions_container">
      {faqQuestions.map((questions) => {
        return <FaqQuestionsCard key={questions.id} {...questions} />;
      })}
    </div>
  );
};

export default FaqQuestions;
