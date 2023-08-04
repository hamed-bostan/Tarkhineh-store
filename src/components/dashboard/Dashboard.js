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
import DashboardLogout from "./dashboardLogout/DashboardLogout";

const Dashboard = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // const switchesFunction = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <MyProfile />;
  //     case 2:
  //       return <OrderTracking />;
  //     case 3:
  //       return <Favorites />;
  //     case 4:
  //       return <MyAddress />;
  //       case 5:
  //         return <DashboardLogout />;
  //   }
  // };

  const switchesFunction = (step) => {
    switch (step) {
      case 0:
        return <MyProfile />;
      case 1:
        return <OrderTracking />;
      case 2:
        return <Favorites />;
      case 3:
        return <MyAddress />;
      case 4:
        return <DashboardLogout />;
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
        <ProfileLinksComponent step={step} setStep={setStep} />
        {/* changeable section */}
        {switchesFunction(step)}
        {/* End of changeable section */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
