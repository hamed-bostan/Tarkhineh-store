import React from "react";
import "./OrderTracking.scss";
import OrderTrackingStatusButton from "./orderTrackingStatusButton/OrderTrackingStatusButton";
import OrderTrackingStatus from "./orderTrackingStatus/OrderTrackingStatus";
import OrderTrackingTitle from "./orderTrackingTitle/OrderTrackingTitle";

const OrderTracking = () => {
  return (
    <div className="order_tracking_main_container">
      <OrderTrackingTitle />
      <hr className="order_tracking_horizontal_line" />
      <OrderTrackingStatusButton />
      <OrderTrackingStatus />
    </div>
  );
};

export default OrderTracking;
