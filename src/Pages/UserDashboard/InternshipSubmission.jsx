import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SubmissionTracker from "../../Components/Dashboard/UserDashboard/InternshipSubmission/SubmissionTracker";

const InternshipSubmission = () => {
  return (
    <div>
      <DashboardLayout>
        <SubmissionTracker />
      </DashboardLayout>
    </div>
  );
};

export default InternshipSubmission;
