import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from '../../Components/Dashboard/Shared/DashboardLayout';
import SDDashboardMain from '../../Components/Dashboard/SchoolDashboard/SDDashboard/SDDashboardMain';

const SDDashboard = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>School Dashboard</title>
            </Helmet>
            <DashboardLayout>
                <SDDashboardMain/>
            </DashboardLayout>
        </div>
    );
};

export default SDDashboard;