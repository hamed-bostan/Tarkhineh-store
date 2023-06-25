import React from "react";
import "./Home.scss";
// Components
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import MenuComponent from "./menuComponent/MenuComponent";
import Introduction from "./introduction/Introduction";
import BranchComponent from "./branchComponent/BranchComponent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuComponent />
      <Introduction />
      <BranchComponent />
    </div>
  );
};

export default Home;
