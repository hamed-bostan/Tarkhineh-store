import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
// Components
import Navbar from "../home/navbar/Navbar";
import CartCard from "./cartCard/CartCard";
import CartHeader from "./cartHeader/CartHeader";

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
        <div className="cart_payment_container">
          <hr className="cart_horizontal_line" />
          <div className="cart_payment_discount">
            <span>تخفیف محصولات</span>
            <span className="cart_payment_price">۶۳٬۰۰۰ تومان</span>
          </div>
          <hr className="cart_horizontal_line" />
          <div className="cart_payment_delivery">
            <span>هزینه ارسال</span>
            <span className="cart_payment_price">0 تومان</span>
          </div>
          <div className="cart_payment_warning">
            <img
              src="assets/images/icons/warning-2.png
      "
              alt=""
              className="cart_payment_warning_icon"
            />
            <p className="cart_payment_warning_text">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>
          <hr className="cart_horizontal_line" />
          <div className="cart_payment_total">
            <span>مبلغ قابل پرداخت</span>
            <span className="cart_payment_total_price">۵۴۲٬۰۰۰ تومان</span>
          </div>
          <div className="cart_payment_logging_button_container">
            <img src="assets/images/icons/user_02.png" alt="" 
className="cart_payment_logging_user_icon"

            />
            <button className="cart_payment_logging_button">
              ورود/ثبت‌نام
            </button>
          </div>
        </div>
      </div>
      {/* End of information section */}
    </div>
  );
};

export default Cart;
