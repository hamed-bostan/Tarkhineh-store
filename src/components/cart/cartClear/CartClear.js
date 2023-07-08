import React from "react";
import "./CartClear.scss";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/cart/cartAction";

const CartClear = ({ close }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart_clear_background" onClick={close}></div>
      <div className="cart_clear_container">
        <div className="cart_clear_header_container">
          <span className="cart_clear_title">حذف محصولات</span>
          <img
            src="assets/images/icons/Close icon.png"
            alt=""
            className="cart_clear_close_icon"
            onClick={close}
          />
        </div>
        <div className="cart_clear_information_container">
          <p>همه محصولات سبد خرید شما حذف شود؟</p>
          <div className="cart_clear_button_container">
            <button className="cart_clear_back_button" onClick={close}>
              بازگشت
            </button>
            <button
              className="cart_clear_remove_button"
              onClick={() => {
                dispatch(clear());
                close();
              }}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartClear;
