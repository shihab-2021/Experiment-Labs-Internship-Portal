import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminMassage from "../../Components/Dashboard/AdminDashboard/AdminMassage";

const Message = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminMassage />
      </DashboardLayout>
    </div>
  );
};

export default Message;
