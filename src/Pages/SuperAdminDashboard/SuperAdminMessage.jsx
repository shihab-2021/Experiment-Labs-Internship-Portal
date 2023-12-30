//SuperAdminMessage
import React from "react";

import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SuperMessageHome from "../../Components/Dashboard/SuperAdminDashboard/SuperAdminMessageHome/SuperMessageHome";


const SuperAdminMessage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Message</title>
      </Helmet>
      <DashboardLayout>
        <SuperMessageHome/>
      </DashboardLayout>
    </div>
  );
};

export default SuperAdminMessage;
