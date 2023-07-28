import React from "react";
import "./OrderTrackingStatus.scss";
import OrderTrackingStatusHeader from "./orderTrackingStatusHeader/OrderTrackingStatusHeader";
import OrderTrackingStatusInformation from "./orderTrackingStatusInformation/OrderTrackingStatusInformation";
import OrderTrackingStatusImages from "./orderTrackingStatusImages/OrderTrackingStatusImages";

const OrderTrackingStatus = () => {
  return (
    <div className="order_tracking_status_container">
      <OrderTrackingStatusHeader />
      <OrderTrackingStatusInformation />
      <OrderTrackingStatusImages />
    </div>
  );
};

export default OrderTrackingStatus;
