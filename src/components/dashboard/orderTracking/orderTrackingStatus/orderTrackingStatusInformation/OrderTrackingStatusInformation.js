import React from "react";
import "./OrderTrackingStatusInformation.scss";

const OrderTrackingStatusInformation = () => {
  return (
    <div className="order_tracking_status_information_container">
      {/* first row */}
      <div className="order_tracking_status_first_row_wrapper">
        <div className="order_tracking_status_information_wrapper">
          <img
            src="assets/images/icons/calendar.png"
            alt=""
            className="order_tracking_status_icons"
          />
          <span className="order_tracking_status_text">
            شنبه، ۸ مرداد، ساعت ۱۸:۵۳
          </span>
        </div>
        <div className="order_tracking_status_information_wrapper">
          <img
            src="assets/images/icons/clock_gray.png"
            alt=""
            className="order_tracking_status_clock_icon"
          />
          <span className="order_tracking_status_text">آماده تحویل تا</span>
          <span className="order_tracking_status_text order_tracking_status_time_green">
            ۲۵:۳۳
          </span>
        </div>
      </div>
      {/* End of first row */}
      {/* second row */}
      <div className="order_tracking_status_information_wrapper">
        <img
          src="assets/images/icons/location_gray.png"
          alt=""
          className="order_tracking_status_icons"
        />
        <span className="order_tracking_status_text">
          تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
        </span>
      </div>
      {/* End of second row */}
      {/* third row */}
      <div className="order_tracking_status_information_wrapper">
        <img
          src="assets/images/icons/wallet_2.png"
          alt=""
          className="order_tracking_status_icons"
        />
        <span className="order_tracking_status_text">مبلغ:</span>
        <span className="order_tracking_status_text">۲۲۸٬۵۰۰ تومان</span>
        <span className="order_tracking_status_text">تخفیف:</span>
        <span className="order_tracking_status_text">۲۸٬۵۰۰ تومان</span>
      </div>
      {/* End of third row */}
    </div>
  );
};

export default OrderTrackingStatusInformation;
