import React from "react";
import "./Menu.scss";
import { useState } from "react";
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
  const [query, setQuery] = useState("");
  const categories = [
    "نمایش همه",
    ...new Set(foodInformation.map((item) => item.category)),
  ];

  // Categories function
  const productFiltered = (category) => {
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
  const search = () => {
    if (query == "") {
      setData(foodInformation);
    } else {
      const newData = foodInformation.filter((item) =>
        item.title.includes(query)
      );
      setData(newData);
    }
  };
  // End od search function

  return (
    <div>
      <Navbar />
      <Header />
      <div className="menu_component_container">
        <div className="menu_component_category_search_container">
          <Category categories={categories} productFiltered={productFiltered} />
          <Search setQuery={setQuery} search={search} />
        </div>
        <MenuTitle />
        {/* card section */}
        <div className="menu_card_main_container">
          {/* <MenuCard data={search(data)} /> */}
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
