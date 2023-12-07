import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminDashboardHome from "../../Components/Dashboard/AdminDashboard/AdminDashboardHome";

const DashboardHome = () => {
  return (
    <div>
      <DashboardLayout>
      <AdminDashboardHome></AdminDashboardHome>
      </DashboardLayout>
    </div>
  );
};

export default DashboardHome;
