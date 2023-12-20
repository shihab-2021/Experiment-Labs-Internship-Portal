import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminTaskDetails from "../../Components/Dashboard/AdminDashboard/AdminTaskDetails";
import { Helmet } from "react-helmet";

const TaskDetails = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task details</title>
      </Helmet>
      <DashboardLayout>
        <AdminTaskDetails />
      </DashboardLayout>
    </div>
  );
};

export default TaskDetails;
