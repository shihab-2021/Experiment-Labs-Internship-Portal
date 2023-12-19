import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import AdminEditProfile from "../../Components/Dashboard/AdminDashboard/AdminEditProfile";
const EditProfile = () => {
  return (
    <div>
      <DashboardLayout>
      <AdminEditProfile></AdminEditProfile>
      </DashboardLayout>
    </div>
  );
};

export default EditProfile;
