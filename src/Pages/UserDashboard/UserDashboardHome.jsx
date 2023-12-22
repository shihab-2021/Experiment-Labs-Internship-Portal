import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import UserDashboardHeroSection from "../../Components/Dashboard/UserDashboard/UserDashboardHome/UserDashboardHeroSection";
import { Helmet } from "react-helmet";

const UserDashboardHome = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <DashboardLayout>
        <UserDashboardHeroSection></UserDashboardHeroSection>
      </DashboardLayout>
    </div>
  );
};

export default UserDashboardHome;
