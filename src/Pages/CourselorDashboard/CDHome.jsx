import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import CDHomeMain from '../../Components/Dashboard/CounselorDashboard/CDHome/CDHomeMain';

const CDHome = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <DashboardLayout>
                <CDHomeMain/>
            </DashboardLayout>
        </div>
    );
};

export default CDHome;