import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminCreateTask from "../../Components/Dashboard/AdminDashboard/AdminCreateTask";

const CreateTask = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminCreateTask></AdminCreateTask>
      </DashboardLayout>
    </div>
  );
};

export default CreateTask;
