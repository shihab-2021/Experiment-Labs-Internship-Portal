import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import CDMyStudentsMain from '../../Components/Dashboard/CounselorDashboard/CDMyStudents/CDMyStudentsMain';

const CDMyStudents = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Students</title>
            </Helmet>
            <DashboardLayout>
                <CDMyStudentsMain />
            </DashboardLayout>
        </div>
    );
};

export default CDMyStudents;