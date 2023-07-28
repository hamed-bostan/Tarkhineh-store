import React from "react";
import "./Dashboard.scss";
import Profile from "./profile/Profile";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard_container">
        <Profile />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
