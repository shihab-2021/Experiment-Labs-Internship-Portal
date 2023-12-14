import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import UserDashboardHeroSection from "../../Components/Dashboard/UserDashboard/UserDashboardHome/UserDashboardHeroSection";

const UserDashboardHome = () => {
  return (
    <div>
      <DashboardLayout>
        <UserDashboardHeroSection></UserDashboardHeroSection>
      </DashboardLayout>
    </div>
  );
};

export default UserDashboardHome;
