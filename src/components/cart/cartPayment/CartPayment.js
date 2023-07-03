import React, { useState } from "react";
import "./CartPayment.scss";
import { useSelector } from "react-redux";
import CartClear from "../cartClear/CartClear";

const CartPayment = () => {
  const state = useSelector((state) => state.cartState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart_payment_container">
      <div className="cart_payment_quantity_container">
        <span>سبد خرید ({state.itemsCounter})</span>
        <img
          src="assets/images/icons/trash.png"
          alt=""
          className="cart_payment_trash_icon"
          onClick={() => setIsOpen(true)}
        />
      </div>
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
          src="assets/images/icons/warning-2.png"
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
        <span className="cart_payment_total_price">
          {state.totalPrice} تومان
        </span>
      </div>
      <div className="cart_payment_logging_button_container">
        <img
          src="assets/images/icons/user_02.png"
          alt=""
          className="cart_payment_logging_user_icon"
        />
        <button className="cart_payment_logging_button">ورود/ثبت‌نام</button>
      </div>
      {isOpen && <CartClear close={() => setIsOpen(false)} />}
    </div>
  );
};

export default CartPayment;
