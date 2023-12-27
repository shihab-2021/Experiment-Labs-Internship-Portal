//SuperAdminDashboardSubmissionDetails

import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from '../../Components/Dashboard/Shared/DashboardLayout';
import SubmissionDetails from '../../Components/Dashboard/SuperAdminDashboard/SubmissionDetails/SubmissionDetails';


const SuperAdminDashboardSubmissionDetails = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Submission Details</title>
            </Helmet>
            <DashboardLayout>
                <SubmissionDetails/>
            </DashboardLayout>
        </div>
    );
};

export default SuperAdminDashboardSubmissionDetails;