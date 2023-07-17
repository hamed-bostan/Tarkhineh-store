import React from "react";
import Navbar from "../home/navbar/Navbar";
import FranchiseHeader from "./franchiseHeader/FranchiseHeader";
import FranchiseIcons from "./franchiseIcons/FranchiseIcons";
import FranchisePrivilege from "./franchisePrivilege/FranchisePrivilege";
import FranchiseConsultation from "./franchiseConsultation/FranchiseConsultation";
import FranchiseRequestForm from "./franchiseRequestForm/FranchiseRequestForm";

const Franchise = () => {
  return (
    <div>
      <Navbar />
      <FranchiseHeader />
      <FranchiseIcons />
      <FranchisePrivilege />
      <FranchiseConsultation />
      <FranchiseRequestForm />
    </div>
  );
};

export default Franchise;
