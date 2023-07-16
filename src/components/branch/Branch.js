import React, { useEffect, useRef, useState } from "react";
import "./Branch.scss";
import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import SpecialOffer from "./specialOffer/SpecialOffer";
import { motion } from "framer-motion";
import PopularFoods from "./popularFoods/PopularFoods";
import NotIranianFoods from "./notIranianFoods/NotIranianFoods";
import BranchFullMenuButton from "./branchFullMenuButton/BranchFullMenuButton";
import BranchList from "./branchList/BranchList";
import BranchComments from "./branchComments/BranchComments";

const Branch = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <motion.div ref={carousel} className="branch_carousel">
        <SpecialOffer width={width} />
      </motion.div>
      <motion.div ref={carousel} className="branch_carousel">
        <PopularFoods width={width} />
      </motion.div>
      <motion.div ref={carousel} className="branch_carousel">
        <NotIranianFoods width={width} />
      </motion.div>
      <BranchFullMenuButton />
      <BranchList />
      <BranchComments />
    </div>
  );
};

export default Branch;
