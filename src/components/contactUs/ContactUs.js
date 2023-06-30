import React from "react";
import "./ContactUs.scss";
// Components
import Navbar from "../home/navbar/Navbar";
import HeaderContactUs from "./headerContactUs/HeaderContactUs";
import { branchesInformation } from "../../data";
import ContactUsCard from "./contactUsCard/ContactUsCard";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <HeaderContactUs />
      <div className="contactUs_card_main_container">
        {branchesInformation.map((item) => {
          return <ContactUsCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ContactUs;
