import React from "react";
import "./OrderTrackingStatusImagesCard.scss";

const OrderTrackingStatusImagesCard = ({ item }) => {
  return (
    <div className="order_tracking_status_images_card_container">
      <div className="order_tracking_status_images_card_image_container">
        <img
          src={item.image}
          alt=""
          className="order_tracking_status_images_card_image"
        />
        <span className="order_tracking_status_images_card_quantity">
          x{item.quantity}
        </span>
      </div>
      <div className="order_tracking_status_images_card_information_container">
        <span className="order_tracking_status_images_card_text">
          {item.title}
        </span>
        <span className="order_tracking_status_images_card_text">
          {item.finalPrice}
        </span>
      </div>
    </div>
  );
};

export default OrderTrackingStatusImagesCard;
