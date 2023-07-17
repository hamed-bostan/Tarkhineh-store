import React from "react";
import "./Franchise.scss";
import Navbar from "../home/navbar/Navbar";
import FranchiseHeader from "./franchiseHeader/FranchiseHeader";
import FranchiseIcons from "./franchiseIcons/FranchiseIcons";
import FranchisePrivilege from "./franchisePrivilege/FranchisePrivilege";
import FranchiseConsultation from "./franchiseConsultation/FranchiseConsultation";
import FranchiseRequestForm from "./franchiseRequestForm/FranchiseRequestForm";

const Franchise = () => {
  return (
    <>
      <Navbar />
      <FranchiseHeader />
      <div className="franchise_container">
        <FranchiseIcons />
        <FranchisePrivilege />
        <FranchiseConsultation />
        <FranchiseRequestForm />
      </div>
    </>
  );
};

export default Franchise;
