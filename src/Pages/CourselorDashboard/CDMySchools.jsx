import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import CDMySchoolsMain from '../../Components/Dashboard/CounselorDashboard/CDMySchools/CDMySchoolsMain';

const CDMySchools = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Schools</title>
            </Helmet>
            <DashboardLayout>
                <CDMySchoolsMain/>
            </DashboardLayout>
        </div>
    );
};

export default CDMySchools;