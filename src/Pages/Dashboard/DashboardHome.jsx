import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminDashboardHome from "../../Components/Dashboard/AdminDashboard/AdminDashboardHome";
import { Helmet } from "react-helmet";
const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <DashboardLayout>
        <AdminDashboardHome></AdminDashboardHome>
      </DashboardLayout>
    </div>
  );
};

export default DashboardHome;
