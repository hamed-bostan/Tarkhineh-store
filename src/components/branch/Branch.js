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
import Footer from "../home/footer/Footer";

const Branch = () => {
  // SpecialOffer
  const [widthSpecialOffer, setWidthSpecialOffer] = useState(0);
  const carouselSpecialOffer = useRef();
  useEffect(() => {
    setWidthSpecialOffer(
      carouselSpecialOffer.current.scrollWidth -
        carouselSpecialOffer.current.offsetWidth
    );
  }, []);
  // End od SpecialOffer

  // PopularFoods
  const [widthPopularFoods, setWidthPopularFoods] = useState(0);
  const carouselPopularFoods = useRef();
  useEffect(() => {
    setWidthPopularFoods(
      carouselPopularFoods.current.scrollWidth -
        carouselPopularFoods.current.offsetWidth
    );
  }, []);
  // End of PopularFoods

  // NotIranianFoods
  const [widthNotIranianFoods, setWidthNotIranianFoods] = useState(0);
  const carouselNotIranianFoods = useRef();
  useEffect(() => {
    setWidthNotIranianFoods(
      carouselNotIranianFoods.current.scrollWidth -
        carouselNotIranianFoods.current.offsetWidth
    );
  }, []);
  // End of NotIranianFoods

  // BranchComments
  const [widthBranchComments, setWidthBranchComments] = useState(0);
  const carouselBranchComments = useRef();
  useEffect(() => {
    setWidthBranchComments(
      carouselBranchComments.current.scrollWidth -
        carouselBranchComments.current.offsetWidth
    );
  }, []);
  // End of BranchComments

  return (
    <div>
      <Navbar />
      <Header />
      <motion.div ref={carouselSpecialOffer} className="branch_carousel">
        <SpecialOffer width={widthSpecialOffer} />
      </motion.div>
      <motion.div ref={carouselPopularFoods} className="branch_carousel">
        <PopularFoods width={widthPopularFoods} />
      </motion.div>
      <motion.div ref={carouselNotIranianFoods} className="branch_carousel">
        <NotIranianFoods width={widthNotIranianFoods} />
      </motion.div>
      <BranchFullMenuButton />
      <BranchList />
      <motion.div ref={carouselBranchComments} className="branch_carousel">
        <BranchComments width={widthBranchComments} />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Branch;
