import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
// Components
import Navbar from "../home/navbar/Navbar";
import CartCard from "./cartCard/CartCard";
import CartHeader from "./cartHeader/CartHeader";
import CartPayment from "./cartPayment/CartPayment";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
      <CartHeader />
      {/* information section */}
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
      {/* End of information section */}
    </div>
  );
};

export default Cart;
