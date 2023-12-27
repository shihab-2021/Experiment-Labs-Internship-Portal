import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SuperAdminCreateTaskForms from "../../Components/Dashboard/SuperAdminDashboard/SuperAdminCreateTask/SuperAdminCreateTaskForms";

const SuperAdminDashboardCreateTask = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Task</title>
      </Helmet>
      <DashboardLayout>
        <SuperAdminCreateTaskForms />
      </DashboardLayout>
    </div>
  );
};

export default SuperAdminDashboardCreateTask;
