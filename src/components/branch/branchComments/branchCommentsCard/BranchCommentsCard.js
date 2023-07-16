import React from "react";
import "./BranchCommentsCard.scss";

const BranchCommentsCard = ({ data }) => {
  return (
    <div className="branch_comment_card_container">
      <div className="branch_comment_card_first_container">
        <img src={data.image} alt="" className="branch_comment_card_image" />
        <div className="branch_comment_card_name_date_container">
          <span className="branch_comment_card_name">{data.name}</span>
          <span className="branch_comment_card_date">{data.date}</span>
        </div>
      </div>
      <div className="branch_comment_card_comment_container">
        <p className="branch_comment_card_comment">{data.comment}</p>
      </div>
    </div>
  );
};

export default BranchCommentsCard;
