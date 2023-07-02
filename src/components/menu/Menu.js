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

const Menu = () => {
  const [data, setData] = useState(foodInformation);

  const categories = [
    ...new Set(foodInformation.map((category) => category.category)),
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="menu_component_category_search_container">
        <Category categories={categories} />
        <Search />
      </div>
      {/* title section */}
      <div className="menu_title_container">
        <span className="menu_title">غذاهای ایرانی</span>
        <div className="menu_button_container">
          <img
            src="assets/images/icons/shopping-cart.png"
            alt=""
            className="menu_cart_icon"
          />
          <button className="menu_title_button">تکمیل خرید</button>
        </div>
      </div>
      {/* End of title section */}
      {/* card section */}
      <div className="menu_card_main_container">
        {data.map((item) => {
          return <MenuCard data={item} key={item.id} />;
        })}
      </div>
      {/* End of card section */}
      <Footer />
    </div>
  );
};

export default Menu;
