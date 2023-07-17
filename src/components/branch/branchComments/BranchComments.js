import React from "react";
import "./BranchComments.scss";
import { branchCommentsInformation } from "../../../data";
import BranchCommentsCard from "./branchCommentsCard/BranchCommentsCard";
import { motion } from "framer-motion";

const BranchComments = ({ width }) => {
  return (
    <div className="branch_comment_main_container">
      <span className="branch_comment_main_title">نظرات کاربران</span>
      <motion.div drag="x" dragConstraints={{ left: 0, right: width }}>
        <motion.div className="branch_comment_card_main_container">
          {branchCommentsInformation.map((item) => {
            return <BranchCommentsCard data={item} key={item.id} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BranchComments;
