import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
// Components
import CartCardMobile from "./cartCard/cartCardMobile/CartCardMobile";
import CartCardDesktop from "./cartCard/cartCardDesktop/CartCardDesktop";
import CartPayment from "./cartPayment/CartPayment";
import CartEmptyPage from "./cartEmptyPage/CartEmptyPage";

const Cart = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <div className="cart_all_data_main_container">
      {state.itemsCounter > 0 ? (
        <div className="cart_information_main_container">
          {/* card section */}
          <div className="cart_wrapper">
            {state.selectedItems.map((item) => {
              return (
                <div key={item.id} className="zebra_style">
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
