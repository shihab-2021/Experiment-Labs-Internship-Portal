import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import UserDashboardHeroSection from "../../Components/Dashboard/UserDashboard/UserDashboardHome/UserDashboardHeroSection";
import UserDashboardLeaderboard from "../../Components/Dashboard/UserDashboard/UserDashboardLeaderboard/UserDashboardLeaderboard";
import { Helmet } from "react-helmet";

const UserDashboardLeaderBoard = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leader Board</title>
      </Helmet>
      <DashboardLayout>
        <UserDashboardLeaderboard />
      </DashboardLayout>
    </div>
  );
};

export default UserDashboardLeaderBoard;
