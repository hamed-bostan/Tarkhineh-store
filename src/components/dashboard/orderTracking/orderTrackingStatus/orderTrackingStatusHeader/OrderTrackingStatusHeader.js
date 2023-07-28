import React from "react";
import "./OrderTrackingStatusHeader.scss";

const OrderTrackingStatusHeader = () => {
  return (
    <div className="order_tracking_status_header_container">
      <span className="order_tracking_status_branch_text">شعبه اقدسیه</span>
      <div className="order_tracking_status_header_giving">
        <span className="order_tracking_status_text order_tracking_status_text_black">
          تحویل حضوری
        </span>
        <span className="order_tracking_status_text order_tracking_status_text_yellow">
          جاری
        </span>
      </div>
    </div>
  );
};

export default OrderTrackingStatusHeader;
