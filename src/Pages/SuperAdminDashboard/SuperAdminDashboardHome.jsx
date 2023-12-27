import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SuperHome from "../../Components/Dashboard/SuperAdminDashboard/SuperDashboardHome/SuperHome";

const SuperAdminDashboardHome = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <DashboardLayout>
        <SuperHome />
      </DashboardLayout>
    </div>
  );
};

export default SuperAdminDashboardHome;
