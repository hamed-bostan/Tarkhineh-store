import React from "react";
import "./CartCompletingInformationHeader.scss";
import CartCompletingInformationHeaderMobile from "./cartCompletingInformationHeaderMobile/CartCompletingInformationHeaderMobile";
import CartCompletingInformationHeaderDesktop from "./cartCompletingInformationHeaderDesktop/CartCompletingInformationHeaderDesktop";

const CartCompletingInformationHeader = ({ setStep }) => {
  return (
    <>
      <CartCompletingInformationHeaderMobile />
      <CartCompletingInformationHeaderDesktop setStep={setStep} />
    </>
  );
};

export default CartCompletingInformationHeader;
