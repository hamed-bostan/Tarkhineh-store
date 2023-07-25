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
import CartCardMobile from "./cartCard/cartCardMobile/CartCardMobile";
import CartCardDesktop from "./cartCard/cartCardDesktop/CartCardDesktop";

const Cart = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartCompletingInformationHeader />
      {state.itemsCounter > 0 ? (
        <div className="cart_information_main_container">
          {/* card section */}
          <div className="cart_wrapper">
            {state.selectedItems.map((item) => {
              return (
                <div key={item.id}>
                  <CartCardMobile item={item} />
                  <CartCardDesktop item={item} />
                </div>
              );
            })}
          </div>
          {/* End of card section */}
          <CartPayment />
        </div>
      ) : (
        <CartEmptyPage />
      )}
    </div>
  );
};

export default Cart;
