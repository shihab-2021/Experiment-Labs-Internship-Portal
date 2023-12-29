import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import TaskTracker from "../../Components/Dashboard/SuperAdminDashboard/SuperAdminTaskDetails/TaskTracker";

const SuperAdminDashboardTaskDetails = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Details</title>
      </Helmet>
      <DashboardLayout>
        <TaskTracker />
      </DashboardLayout>
    </div>
  );
};

export default SuperAdminDashboardTaskDetails;
