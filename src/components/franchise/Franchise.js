import React from "react";
import "./Franchise.scss";
import Navbar from "../home/navbar/Navbar";
import FranchiseHeader from "./franchiseHeader/FranchiseHeader";
import FranchiseIcons from "./franchiseIcons/FranchiseIcons";
import FranchisePrivilege from "./franchisePrivilege/FranchisePrivilege";
import FranchiseConsultation from "./franchiseConsultation/FranchiseConsultation";
import FranchiseRequestForm from "./franchiseRequestForm/FranchiseRequestForm";
import Footer from "../home/footer/Footer";

const Franchise = () => {
  return (
    <>
      <Navbar />
      <FranchiseHeader />
      <div className="franchise_container">
        <FranchiseIcons />
        <hr className="franchise_line" />
        <FranchisePrivilege />
        <hr className="franchise_line" />
        <FranchiseConsultation />
        <hr className="franchise_line" />
        <FranchiseRequestForm />
      </div>
      <Footer />
    </>
  );
};

export default Franchise;
