import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import CDDashboardMain from '../../Components/Dashboard/CounselorDashboard/CDDashboard/CDDashboardMain';

const CDDashboard = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <DashboardLayout>
                <CDDashboardMain/>
            </DashboardLayout>
        </div>
    );
};

export default CDDashboard;