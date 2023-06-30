import React from "react";
import "./ContactUsCard.scss";

const ContactUsCard = ({ data }) => {
  const { title, image, address, phoneNumber, workTime } = data;

  return (
    <div className="ContactUs_card_container">
      <img src={image} alt="" className="ContactUs_card_image" />
      <div className="ContactUs_card_information_container">
        <span className="ContactUs_card_title">{title}</span>
        <div>
          <span>آدرس: </span>
          <span>{address}</span>
        </div>
        <div>
          <span>شماره تماس: </span>
          <span>{phoneNumber}</span>
        </div>
        <div>
          <span>ساعت کاری: </span>
          <span>{workTime}</span>
        </div>
        <div>
          <button>صفحه شعبه</button>
          <button>دیدن در نقشه</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
