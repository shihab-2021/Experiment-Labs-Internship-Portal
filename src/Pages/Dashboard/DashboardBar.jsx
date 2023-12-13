import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminDashboardBar from "../../Components/Dashboard/AdminDashboard/AdminDashboardBar";
const DashboardBar = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminDashboardBar></AdminDashboardBar>
      </DashboardLayout>
    </div>
  );
};

export default DashboardBar;
