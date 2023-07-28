import React from "react";
import "./OrderTracking.scss";
import Navbar from "../../home/navbar/Navbar";
import OrderTrackingStatusButton from "./orderTrackingStatusButton/OrderTrackingStatusButton";
import OrderTrackingStatus from "./orderTrackingStatus/OrderTrackingStatus";

const OrderTracking = () => {
  return (
    <div>
      <Navbar />
      <div className="order_tracking_main_container">
        <OrderTrackingStatusButton />
        <OrderTrackingStatus />
      </div>
    </div>
  );
};

export default OrderTracking;
