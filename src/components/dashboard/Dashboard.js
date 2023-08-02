import React, { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";
import OrderTracking from "./orderTracking/OrderTracking";
import Favorites from "./favorites/Favorites";
import MyAddress from "./myAddress/MyAddress";
import ProfileLinksComponent from "./profile/profileLinksComponent/ProfileLinksComponent";
import MyProfile from "./profile/myProfile/MyProfile";

const Dashboard = () => {
  const [step, setStep] = useState(1);

  const switchesFunction = () => {
    switch (step) {
      case 1:
        return <MyProfile />;
      case 2:
        return <OrderTracking />;
      case 3:
        return <Favorites />;
      case 4:
        return <MyAddress />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard_all_data_container">
        <ProfileLinksComponent setStep={setStep} />
        {/* changeable section */}
        {switchesFunction(step)}
        {/* End of changeable section */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
