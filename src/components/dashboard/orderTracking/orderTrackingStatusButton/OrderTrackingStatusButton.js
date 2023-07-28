import React from 'react';
import "./OrderTrackingStatusButton.scss";
import { orderStatus } from '../../../../data';

const OrderTrackingStatusButton = () => {
    return (
        <div className="order_tracking_status_button_header_container">
        {orderStatus.map((item, index) => {
          const { status } = item;
          return (
            <div
              key={index}
              className="header_component_button_container"
            >
              <button className="header_component_button">{status}</button>
              <img
                src="assets/images/icons/arrow_left_grey.png"
                alt=""
                className="header_component_arrow_icon"
              />
            </div>
          );
        })}
      </div>
    );
};

export default OrderTrackingStatusButton;