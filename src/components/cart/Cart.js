import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
// Components
import Navbar from "../home/navbar/Navbar";
import CartCard from "./cartCard/CartCard";
import CartHeader from "./cartHeader/CartHeader";
import CartPayment from "./cartPayment/CartPayment";
import CartEmptyPage from "./cartEmptyPage/CartEmptyPage";
import CartCompletingInformationHeader from "./cartCompletingInformation/cartCompletingInformationHeader/CartCompletingInformationHeader";

const Cart = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
      <CartHeader />
      <div className="cart_information_main_container_with_header">
        <CartCompletingInformationHeader />
        {state.itemsCounter > 0 ? (
          <div className="cart_information_main_container">
            {/* card section */}
            <div className="cart_wrapper">
              {state.selectedItems.map((item) => {
                return <CartCard key={item.id} item={item} />;
              })}
            </div>
            {/* End of card section */}
            <CartPayment />
          </div>
        ) : (
          <CartEmptyPage />
        )}
      </div>
    </div>
  );
};

export default Cart;
