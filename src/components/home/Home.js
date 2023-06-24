import React from "react";
import "./Home.scss";
// Components
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import MenuComponent from "./menuComponent/MenuComponent";
import Introduction from "./introduction/Introduction";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuComponent />
      <Introduction />
    </div>
  );
};

export default Home;
