import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SuperAdminTaskAccessForm from "../../Components/Dashboard/SuperAdminDashboard/SuperAdminTaskAccess/SuperAdminTaskAccessForm";

const SuperAdminDashboardTaskAccess = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Access</title>
      </Helmet>
      <DashboardLayout>
        <SuperAdminTaskAccessForm />
      </DashboardLayout>
    </div>
  );
};

export default SuperAdminDashboardTaskAccess;
