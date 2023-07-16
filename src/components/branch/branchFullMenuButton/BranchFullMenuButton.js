import React from "react";
import "./BranchFullMenuButton.scss";
import { Link } from "react-router-dom";

const BranchFullMenuButton = () => {
  return (
    <div className="branch_full_menu_button_container">
      <img
        src="assets/images/icons/note.png"
        alt=""
        className="branch_note_icon"
      />
      <Link to="/menu">
        <button className="branch_full_menu_button">مشاهده منوی کامل</button>
      </Link>
    </div>
  );
};

export default BranchFullMenuButton;
