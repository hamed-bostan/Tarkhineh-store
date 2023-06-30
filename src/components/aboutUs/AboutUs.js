import React from "react";
import Navbar from "../home/navbar/Navbar";
import HeaderAboutUs from "./headerAboutUs/HeaderAboutUs";
import InformationAboutUs from "./informationAboutUs/InformationAboutUs";
import FooterAboutUs from "./footerAboutUs/FooterAboutUs";
import Footer from "../home/footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeaderAboutUs />
      <InformationAboutUs />
      <FooterAboutUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
