import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import Layout from '../../Components/Dashboard/SuperAdminDashboard/SuperAdminDashboardMain/Layout';

const SuperAdminDashboardMain = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <DashboardLayout>
                <Layout/>
            </DashboardLayout>
        </div>
    );
};

export default SuperAdminDashboardMain;