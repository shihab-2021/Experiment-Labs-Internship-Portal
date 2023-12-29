import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";

import { Helmet } from "react-helmet";
import AdminEditTaskDetails from "../../Components/Dashboard/AdminDashboard/AdminEditTaskDetails";

const EditTaskDetails = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Task Details</title>
      </Helmet>
      <DashboardLayout>
       <AdminEditTaskDetails/>
      </DashboardLayout>
    </div>
  );
};

export default EditTaskDetails;
