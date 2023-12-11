import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminTaskDetails from "../../Components/Dashboard/AdminDashboard/AdminTaskDetails";



const TaskDetails = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminTaskDetails/>
      
      </DashboardLayout>
    </div>
  );
};

export default TaskDetails;
