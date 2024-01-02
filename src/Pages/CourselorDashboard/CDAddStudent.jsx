import React from 'react';
import { Helmet } from "react-helmet";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import MyStudentAddDetails from '../../Components/Dashboard/CounselorDashboard/CDMyStudents/MyStudentAddDetails';

const CDAddStudent = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Student</title>
            </Helmet>
            <DashboardLayout>
                <MyStudentAddDetails />
            </DashboardLayout>
        </div>
    );
};

export default CDAddStudent;