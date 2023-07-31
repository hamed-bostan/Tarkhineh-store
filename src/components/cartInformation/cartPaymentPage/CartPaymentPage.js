import React, { useState } from "react";
import "./CartPaymentPage.scss";
import CartPaymentPageDiscount from "./cartPaymentPageDiscount/CartPaymentPageDiscount";
import CartPaymentPageHowToPay from "./cartPaymentPageHowToPay/CartPaymentPageHowToPay";
import CartPaymentPagePaymentGateway from "./cartPaymentPagePaymentGateway/CartPaymentPagePaymentGateway";
import CartCompletingInformationAllPayment from "./cartPaymentPageAllPayment/CartCompletingInformationAllPayment";
import CartPaymentPagePayingInMyLocation from "./cartPaymentPagePayingInMyLocation/CartPaymentPagePayingInMyLocation";

const CartPaymentPage = () => {
  const [content, setContent] = useState("PayingOnline");

  const onOptionChange = (e) => {
    setContent(e.target.value);
  };


  return (
    <div className="cart_payment_page_main_wrapper">
      <div className="cart_payment_page_discount_howToPay_gateway_container">
        <CartPaymentPageDiscount />
        <CartPaymentPageHowToPay
         content={content}
          onOptionChange={onOptionChange}
          setContent={setContent}
         />
        {/* changeable section */}
        {content === "PayingOnline" && <CartPaymentPagePaymentGateway />}
        {content === "PayingInMyLocation" && <CartPaymentPagePayingInMyLocation />}

        {/* End of changeable section */}
      </div>
      <CartCompletingInformationAllPayment/>
    </div>
  );
};

export default CartPaymentPage;
