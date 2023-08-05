import React from "react";
import "./CartPaymentPageHowToPayBottom.scss";
import CartDeliveryOptionBottomIconFilled from "../../../cartCompletingInformation/cartCompletingInformationDeliveryOption/cartCompletingInformationDeliveryOptionBottom/cartCompletingInformationDeliveryOptionBottomIcon/CartDeliveryOptionBottomIconFilled";
import CartDeliveryOptionBottomIconVoid from "../../../cartCompletingInformation/cartCompletingInformationDeliveryOption/cartCompletingInformationDeliveryOptionBottom/cartCompletingInformationDeliveryOptionBottomIcon/CartDeliveryOptionBottomIconVoid";

const CartPaymentPageHowToPayBottom = ({
  content,
  onOptionChange,
  setContent,
}) => {
  return (
    <div className="cart_completing_information_delivery_bottom_container">
      <div
        onClick={() => setContent("PayingOnline")}
        className="cart_completing_information_delivery_bottom_wrapper"
      >
        <input
          type="radio"
          name="content"
          value="PayingOnline"
          checked={content === "PayingOnline"}
          onChange={onOptionChange}
          className="cart_completing_information_delivery_bottom_button"
        />
        {content === "PayingOnline" ? (
          <CartDeliveryOptionBottomIconFilled />
        ) : (
          <CartDeliveryOptionBottomIconVoid />
        )}
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label cart_completing_information_delivery_bottom_button"
          >
            پرداخت اینترنتی
          </label>
          <span className="cart_completing_information_delivery_details">
            به صورت اینترنتی پرداخت میکنم.
          </span>
        </div>
        <img
          src="assets/images/icons/card_pos.png"
          alt=""
          className="cart_completing_information_icons"
        />
      </div>
      <div
        onClick={() => setContent("PayingInMyLocation")}
        className="cart_completing_information_delivery_bottom_wrapper"
      >
        <input
          type="radio"
          value="PayingInMyLocation"
          checked={content === "PayingInMyLocation"}
          onChange={onOptionChange}
          className="cart_completing_information_delivery_bottom_button"
        />
        {content === "PayingInMyLocation" ? (
          <CartDeliveryOptionBottomIconFilled />
        ) : (
          <CartDeliveryOptionBottomIconVoid />
        )}
        <div>
          <label
            htmlFor=""
            className="cart_completing_information_delivery_label cart_completing_information_delivery_bottom_button"
          >
            پرداخت در محل
          </label>
          <span className="cart_completing_information_delivery_details">
            در محل پرداخت میکنم.
          </span>
        </div>
        <img
          src="assets/images/icons/wallet_2.png"
          alt=""
          className="cart_completing_information_icons"
        />
      </div>
    </div>
  );
};

export default CartPaymentPageHowToPayBottom;
