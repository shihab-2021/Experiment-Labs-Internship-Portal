import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminEditProfile from "../../Components/Dashboard/AdminDashboard/AdminEditProfile";
import { Helmet } from "react-helmet";
const EditProfile = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Profile</title>
      </Helmet>
      <DashboardLayout>
        <AdminEditProfile></AdminEditProfile>
      </DashboardLayout>
    </div>
  );
};

export default EditProfile;
