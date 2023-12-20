import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminCreateTask from "../../Components/Dashboard/AdminDashboard/AdminCreateTask";
import { Helmet } from "react-helmet";

const CreateTask = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create task</title>
      </Helmet>
      <DashboardLayout>
        <AdminCreateTask></AdminCreateTask>
      </DashboardLayout>
    </div>
  );
};

export default CreateTask;
