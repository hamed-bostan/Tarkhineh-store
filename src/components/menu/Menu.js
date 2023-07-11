import React, { useEffect, useRef } from "react";
import "./Menu.scss";
import { useState } from "react";
import { motion } from "framer-motion";

// Components
import { foodInformation } from "../../data";
import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import Category from "./category/Category";
import MenuCard from "./menuCard/MenuCard";
import Footer from "../home/footer/Footer";
import MenuTitle from "./menuTitle/MenuTitle";
import Search from "./search/Search";

const Menu = () => {
  const [data, setData] = useState(foodInformation);
  const [search, setSearch] = useState("");
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const categories = [
    "نمایش همه",
    ...new Set(foodInformation.map((item) => item.category)),
    "پرفروش‌ترین",
    "اقتصادی‌ترین",
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Categories function
  const productCategories = (category) => {
    if (category === "نمایش همه") {
      setData(foodInformation);
      return;
    } else {
      const newProducts = foodInformation.filter(
        (item) => item.category === category
      );
      setData(newProducts);
    }
  };
  // End of categories function

  // search function
  const searchedProducts = data.filter((item) => item.title.includes(search));
  // End od search function

  return (
    <div>
      <Navbar />
      <Header />
      <div className="menu_component_container">
        <div className="menu_component_category_search_container">
          <motion.div ref={carousel} className="hamed">
            <Category
              categories={categories}
              productCategories={productCategories}
              width={width}
              setWidth={setWidth}
            />
          </motion.div>
          <Search setSearch={setSearch} search={search} />
        </div>
        {searchedProducts.length > 0 ? (
          <>
            <MenuTitle />
            <div className="menu_card_main_container">
              {searchedProducts.map((item) => {
                return <MenuCard data={item} key={item.id} />;
              })}
            </div>
          </>
        ) : (
          <div className="menu_component_match_not_found_container">
            <p className="menu_component_match_not_found_text">
              موردی با این مشخصات پیدا نکردیم!
            </p>
            <img
              src="assets/images/icons/match_not_found.png"
              alt=""
              className="menu_component_match_not_found_image"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
