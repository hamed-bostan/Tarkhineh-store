import React, { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";
import OrderTracking from "./orderTracking/OrderTracking";
import Favorites from "./favorites/Favorites";
import MyAddress from "./myAddress/MyAddress";
import ProfileLinksComponent from "./profile/profileLinksComponent/ProfileLinksComponent";
import MyProfile from "./profile/myProfile/MyProfile";
import DashboardHeaderMobile from "./dashboardHeaderMobile/DashboardHeaderMobile";

const Dashboard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const switchesFunction = (step) => {
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
      <DashboardHeaderMobile
        step={step}
        nextStep={nextStep}
        previousStep={previousStep}
      />
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
