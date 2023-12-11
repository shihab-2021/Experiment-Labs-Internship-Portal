import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminTeam from "../../Components/Dashboard/AdminDashboard/AdminTeam";
const Team = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminTeam></AdminTeam>
      </DashboardLayout>
    </div>
  );
};

export default Team;
