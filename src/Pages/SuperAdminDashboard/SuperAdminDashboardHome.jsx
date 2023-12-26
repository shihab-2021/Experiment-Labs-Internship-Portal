import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";

const SuperAdminDashboardHome = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <DashboardLayout>super admin dashboard home</DashboardLayout>
    </div>
  );
};

export default SuperAdminDashboardHome;
