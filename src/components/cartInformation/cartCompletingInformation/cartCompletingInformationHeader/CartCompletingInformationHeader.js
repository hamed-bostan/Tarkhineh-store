import React from "react";
import "./CartCompletingInformationHeader.scss";
import CartCompletingInformationHeaderMobile from "./cartCompletingInformationHeaderMobile/CartCompletingInformationHeaderMobile";
import CartCompletingInformationHeaderDesktop from "./cartCompletingInformationHeaderDesktop/CartCompletingInformationHeaderDesktop";

const CartCompletingInformationHeader = ({
  step,
  setStep,
  nextStep,
  previousStep,
}) => {
  return (
    <>
      <CartCompletingInformationHeaderMobile
        step={step}
        nextStep={nextStep}
        previousStep={previousStep}
      />
      <CartCompletingInformationHeaderDesktop step={step} setStep={setStep} />
    </>
  );
};

export default CartCompletingInformationHeader;
