import React from "react";
import "./OrderTrackingStatusImages.scss";
import { useSelector } from "react-redux";
import OrderTrackingStatusImagesCard from "./orderTrackingStatusImagesCard/OrderTrackingStatusImagesCard";

const OrderTrackingStatusImages = () => {
  const state = useSelector((state) => state.cartState);

  return (
    <>
      <div className="order_tracking_status_images_container">
        <div className="order_tracking_status_images_wrapper">
          {state.selectedItems.map((item) => {
            return <OrderTrackingStatusImagesCard key={item.id} item={item} />;
          })}
        </div>
        <span className="order_tracking_status_images_text">
          مشاهده همه سفارشات
        </span>
      </div>
      <div className="order_tracking_status_images_button_container">
        <button className="order_tracking_status_images_button">
          لغو سفارش
        </button>
      </div>
    </>
  );
};

export default OrderTrackingStatusImages;
