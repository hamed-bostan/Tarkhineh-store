import React from "react";
import "./NavbarLinksImageFrame.scss";

const NavbarLinksImageFrame = ({ close }) => {
  return (
    <>
      <img
        onClick={close}
        className="navbar_icon close_icon"
        src="assets/images/icons/close_icon_02.png"
        alt=""
      />
      <img
        src="assets/images/bannerImages/top_frame.png"
        alt=""
        className="navbar_top_frame_image"
      />
    </>
  );
};

export default NavbarLinksImageFrame;
