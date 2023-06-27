import React from "react";
import "./Menu.scss";
// Components
import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import { foodInformation } from "../../data";
import { useState } from "react";
import Category from "./category/Category";
import Search from "./search/Search";

const Menu = () => {
  const [data, setData] = useState(foodInformation);

  const categories = [
    ...new Set(foodInformation.map((category) => category.category)),
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <Category categories={categories} />
      <Search />
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
      <section className="menu_items_main_container">
        {data.map((item) => {
          const {
            image,
            title,
            description,
            highPrice,
            discount,
            discountedPrice,
            star,
          } = item;
          return (
            <article className="menu_items_container">
              <img src={image} alt="" className="menu_image" />
              <div className="menu_items_information_container">
                {/* first div */}
                <div className="menu_single_item_container">
                  <span className="menu_single_item_title">{title}</span>
                  <div className="menu_high_price_container">
                    <span className="menu_high_price">{highPrice}</span>
                    <span className="menu_discount_item">{discount}</span>
                  </div>
                </div>
                {/* next div */}
                <div className="menu_single_item_container">
                  <p>{description.slice(0, 20)} ...</p>
                  <span>{discountedPrice}</span>
                </div>
                {/* next div */}
                <div className="menu_single_item_container">
                  <img
                    src="assets/images/icons/heart.png"
                    alt=""
                    className="menu_heart_icon"
                  />
                  <span>{star}</span>
                  <button className="menu_add_to_cart_button">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
