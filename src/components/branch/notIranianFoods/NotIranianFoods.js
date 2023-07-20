import React from "react";
import "./NotIranianFoods.scss";
import { foodInformation } from "../../../data";
import { motion } from "framer-motion";
import NotIranianFoodsCard from "./notIranianFoodsCard/NotIranianFoodsCard";

const NotIranianFoods = ({ width }) => {
  const NotIranianFoodInformation = foodInformation.filter(
    (item) => item.category === "غذاهای غیر ایرانی"
  );

  return (
    <div className="branch_card_main_container">
      <span className="branch_main_title">غذاهای غیر ایرانی</span>
      <motion.div drag="x" dragConstraints={{ left: 0, right: width }}>
        <motion.div className="branch_card_container">
          {NotIranianFoodInformation.map((item) => {
            return <NotIranianFoodsCard key={item.id} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotIranianFoods;
