import React from "react";
import "./Home.scss";
// Components
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import MenuComponent from "./menuComponent/MenuComponent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuComponent />
    </div>
  );
};

export default Home;
