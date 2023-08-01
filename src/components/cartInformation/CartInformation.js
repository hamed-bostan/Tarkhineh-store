import React, { useState } from "react";
import "./CartInformation.scss";
import Cart from "./cart/Cart";
import CartCompletingInformation from "./cartCompletingInformation/CartCompletingInformation";
import CartPaymentPage from "./cartPaymentPage/CartPaymentPage";
import CartCompletingInformationHeader from "./cartCompletingInformation/cartCompletingInformationHeader/CartCompletingInformationHeader";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";

const CartInformation = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const switchFunction = (step) => {
    switch (step) {
      case 1:
        return <Cart />;
      case 2:
        return <CartCompletingInformation />;
      case 3:
        return <CartPaymentPage />;
    }
  };

  return (
    <div>
      <Navbar />
      <CartCompletingInformationHeader
        step={step}
        setStep={setStep}
        nextStep={nextStep}
        previousStep={previousStep}
      />
      {switchFunction(step)}
      <Footer />
    </div>
  );
};

export default CartInformation;
