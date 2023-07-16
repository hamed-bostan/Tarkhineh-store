import React from "react";
import "./PopularFoods.scss";
import { foodInformation } from "../../../data";
import { motion } from "framer-motion";
import PopularFoodsCard from "./popularFoodsCard/PopularFoodsCard";

const PopularFoods = ({ width }) => {
  return (
    <div className="branch_card_main_container green_background">
      <span className="branch_main_title_white_color">غذاهای محبوب</span>
      <motion.div drag="x" dragConstraints={{ left: 0, right: width }}>
        <motion.div className="branch_card_container">
          {foodInformation.map((item) => {
            return <PopularFoodsCard key={item.id} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PopularFoods;
