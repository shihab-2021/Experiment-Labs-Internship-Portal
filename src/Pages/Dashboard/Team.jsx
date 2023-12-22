import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminTeam from "../../Components/Dashboard/AdminDashboard/AdminTeam";
import { Helmet } from "react-helmet";
const Team = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team</title>
      </Helmet>
      <DashboardLayout>
        <AdminTeam></AdminTeam>
      </DashboardLayout>
    </div>
  );
};

export default Team;
