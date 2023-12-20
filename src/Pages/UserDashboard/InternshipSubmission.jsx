import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import SubmissionTracker from "../../Components/Dashboard/UserDashboard/InternshipSubmission/SubmissionTracker";
import { Helmet } from "react-helmet";

const InternshipSubmission = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Internship Submission</title>
      </Helmet>
      <DashboardLayout>
        <SubmissionTracker />
      </DashboardLayout>
    </div>
  );
};

export default InternshipSubmission;
