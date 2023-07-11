import React from "react";
import "./Category.scss";
import { motion } from "framer-motion";

const Category = ({ categories, productCategories, width }) => {
  return (
    <motion.div
      className="header_component_container"
      drag="x"
      dragConstraints={{ left: 0, right: width }}
    >
      {categories.map((category, index) => {
        return (
          <motion.div
            key={index}
            className="header_component_button_container"
            onClick={() => productCategories(category)}
          >
            <button className="header_component_button">{category}</button>
            <img
              src="assets/images/icons/arrow_left_grey.png"
              alt=""
              className="header_component_arrow_icon"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Category;
