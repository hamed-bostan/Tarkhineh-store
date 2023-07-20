import React from "react";
import "./SpecialOffer.scss";
import { foodInformation } from "../../../data";
import SpecialOfferCard from "./specialOfferCard/SpecialOfferCard";
import { motion } from "framer-motion";

const SpecialOffer = ({ width }) => {
  const specialOfferFoodInformation = foodInformation.filter(
    (item) => item.filter === "پیشنهاد ویژه"
  );
  return (
    <div className="branch_card_main_container">
      <span className="branch_main_title">پیشنهاد ویژه</span>
      <motion.div drag="x" dragConstraints={{ left: 0, right: width }}>
        <motion.div className="branch_card_container">
          {specialOfferFoodInformation.map((item) => {
            return <SpecialOfferCard key={item.id} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpecialOffer;
