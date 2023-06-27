import React from "react";
import "./Menu.scss";
// Components
import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import { foodInformation } from "../../data";
import { useState } from "react";
import HeaderComponent from "./headerComponent/HeaderComponent";

const Menu = () => {
  const [data, setData] = useState(foodInformation);

  const categories =[ ...new Set(
    foodInformation.map((category) => category.category)
  )];

  console.log(categories);

  return (
    <div>
      <Navbar />
      <Header />
      <HeaderComponent categories={categories}/>
    </div>
  );
};

export default Menu;
