import React from "react";
import "./Menu.scss";
import { useState } from "react";
// Components
import { foodInformation } from "../../data";
import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import Category from "./category/Category";
import Search from "./search/Search";
import MenuCard from "./menuCard/MenuCard";
import Footer from "../home/footer/Footer";
import MenuTitle from "./menuTitle/MenuTitle";

const Menu = () => {
  const [data, setData] = useState(foodInformation);

  const categories = [
    ...new Set(foodInformation.map((category) => category.category)),
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="menu_component_container">
        <div className="menu_component_category_search_container">
          <Category categories={categories} />
          <Search />
        </div>
        <MenuTitle />
        {/* card section */}
        <div className="menu_card_main_container">
          {data.map((item) => {
            return <MenuCard data={item} key={item.id} />;
          })}
        </div>
        {/* End of card section */}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
