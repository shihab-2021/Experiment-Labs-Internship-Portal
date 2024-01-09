import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from '../../Components/Dashboard/Shared/DashboardLayout';
import SDSchoolEdit from '../../Components/Dashboard/SchoolDashboard/SDDashboard/SDSchoolEdit';

const SDDashboardSchoolEdit = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>School Edit</title>
            </Helmet>
            <DashboardLayout>
            <SDSchoolEdit/>
            </DashboardLayout>
        </div>
    );
};

export default SDDashboardSchoolEdit;