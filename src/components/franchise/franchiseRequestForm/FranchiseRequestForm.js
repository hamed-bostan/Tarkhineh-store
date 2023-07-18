import React from "react";
import "./FranchiseRequestForm.scss";
import FranchiseIndividualProfile from "./franchiseIndividualProfile/FranchiseIndividualProfile";
import FranchiseAddressProperty from "./franchiseAddressProperty/FranchiseAddressProperty";
import FranchiseSpecificationProperty from "./franchiseSpecificationProperty/FranchiseSpecificationProperty";
import FranchiseFacilityProperty from "./franchiseFacilityProperty/FranchiseFacilityProperty";

const FranchiseRequestForm = () => {
  return (
    <div className="franchise_request_form_container">
      <span className="franchise_request_form_main_title">
        فرم درخواست نمایندگی
      </span>
      <FranchiseIndividualProfile />
      <FranchiseAddressProperty />
      <FranchiseSpecificationProperty />
      <FranchiseFacilityProperty />
    </div>
  );
};

export default FranchiseRequestForm;
