import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminMassage from "../../Components/Dashboard/AdminDashboard/AdminMassage";
import { Helmet } from "react-helmet";

const Message = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Message</title>
      </Helmet>
      <DashboardLayout>
        <AdminMassage />
      </DashboardLayout>
    </div>
  );
};

export default Message;
