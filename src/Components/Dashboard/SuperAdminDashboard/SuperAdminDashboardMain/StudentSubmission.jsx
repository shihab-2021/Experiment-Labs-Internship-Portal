import React from 'react';
import StudentsTable from './StudentsTable';
import SSOverview from './SSOverview';
import SSCompanyTask from './SSCompanyTask';
import SSMessageLeft from './SSMessageLeft';
import SSMessageRight from './SSMessageRight';

const StudentSubmission = () => {
    return (
        <div className='flex flex-col gap-10 pb-10'>
            <div className='flex justify-between items-start gap-16'>
                <StudentsTable/>
                <SSOverview/>
            </div>
            <SSCompanyTask/>
            <div className='flex justify-between items-start gap-16'>
                <SSMessageLeft/>
                <SSMessageRight/>
            </div>
        </div>
    );
};

export default StudentSubmission;