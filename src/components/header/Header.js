import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { bannerInformation } from "../../data";
import { motion } from "framer-motion";

const Header = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const [indexSlider, setIndexSlider] = useState(0);

  useEffect(() => {
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const goToSlide = (index) => {
    setIndexSlider(index);
  };

  return (
    <div>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="header_container"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          className="header_wrapper"
        >
          {bannerInformation.map((item) => {
            const { image, text, id } = item;
            return (
              <motion.div key={id} className="header_item_container">
                <img src={image} alt="" className="header_image" />
                <span className="header_text">{text}</span>
                <button className="header_button">سفارش آنلاین غذا</button>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
