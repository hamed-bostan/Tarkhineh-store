import React from "react";
import "./BranchComments.scss";
import { branchCommentsInformation } from "../../../data";
import BranchCommentsCard from "./branchCommentsCard/BranchCommentsCard";

const BranchComments = () => {
  return (
    <div className="branch_comment_main_container">
      <span className="branch_comment_main_title">نظرات کاربران</span>
      <div className="branch_comment_card_main_container">
        {branchCommentsInformation.map((item) => {
          return <BranchCommentsCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default BranchComments;
