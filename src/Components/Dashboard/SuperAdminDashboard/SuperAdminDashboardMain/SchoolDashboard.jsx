import React from 'react';
import SchoolDashboardTop from './SchoolDashboardTop';
import SchoolDashboardMiddle from './SchoolDashboardMiddle';
import SchoolDashboardBottom from './SchoolDashboardBottom';

const SchoolDashboard = () => {
    return (
        <div>
            <SchoolDashboardTop/>
            <SchoolDashboardMiddle/>
            <SchoolDashboardBottom/>
        </div>
    );
};

export default SchoolDashboard;