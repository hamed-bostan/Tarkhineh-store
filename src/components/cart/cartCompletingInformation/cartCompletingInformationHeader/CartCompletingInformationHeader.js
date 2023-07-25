import React from "react";
import "./CartCompletingInformationHeader.scss";
import CartCompletingInformationHeaderMobile from "./cartCompletingInformationHeaderMobile/CartCompletingInformationHeaderMobile";
import CartCompletingInformationHeaderDesktop from "./cartCompletingInformationHeaderDesktop/CartCompletingInformationHeaderDesktop";

const CartCompletingInformationHeader = () => {
  return (
    <>
      <CartCompletingInformationHeaderMobile />
      <CartCompletingInformationHeaderDesktop />
    </>
  );
};

export default CartCompletingInformationHeader;
