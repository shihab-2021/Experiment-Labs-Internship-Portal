import React from 'react';
import List from './List';
import StudentOverview from './StudentOverview';
import SelectionRate from './SelectionRate';
import TotalTask from './TotalTask';
import MyStudents from './MyStudents';
import ParticipantInTask from './ParticipantInTask';


const CDDashboardMain = () => {
    
    return (
        <div className='py-10 flex flex-col px-5'>
            <div className="text-[#797979] text-xl font-semibold tracking-[2.4px] max-w-[140px] mb-4">
                Dashboard
            </div>
            <div className="text-neutral-700 text-xl font-medium tracking-widest mb-4">
                My Students Status
            </div>
            <List />
            <div className='my-8 flex gap-12 items-start'>
                <StudentOverview/>
                <SelectionRate/>
            </div>
            <TotalTask/>
            <div className='my-8 flex gap-12 items-start'>
                <MyStudents/>
                <ParticipantInTask/>
            </div>
        </div>
    );
};

export default CDDashboardMain;