import React from "react";
import "./ContactUsCard.scss";

const ContactUsCard = ({ data }) => {
  const { title, image, address, phoneNumber, workTime } = data;

  return (
    <div className="ContactUs_card_container">
      <div className="ContactUs_card_image_container">
        <img src={image} alt="" className="ContactUs_card_image" />
        <div className="ContactUs_card_image_overlay"></div>
        <img
          src="assets/images/icons/gallery.png"
          alt=""
          className="ContactUs_card_gallery_icon"
        />
      </div>
      <div className="ContactUs_card_information_container">
        <span className="ContactUs_card_title">{title}</span>
        <div className="ContactUs_card_address_container">
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
        <div className="ContactUs_card_button_container">
          <button className="ContactUs_card_brach_button">صفحه شعبه</button>
          <button className="ContactUs_card_map_button">دیدن در نقشه</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
