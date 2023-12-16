import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import UserDashboardHeroSection from "../../Components/Dashboard/UserDashboard/UserDashboardHome/UserDashboardHeroSection";
import UserDashboardLeaderboard from "../../Components/Dashboard/UserDashboard/UserDashboardLeaderboard/UserDashboardLeaderboard";

const UserDashboardLeaderBoard = () => {
  return (
    <div>
      <DashboardLayout>
        <UserDashboardLeaderboard/>
      </DashboardLayout>
    </div>
  );
};

export default UserDashboardLeaderBoard;
