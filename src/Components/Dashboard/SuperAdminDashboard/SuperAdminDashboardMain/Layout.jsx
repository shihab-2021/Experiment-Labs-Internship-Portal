import React, { useState } from 'react';
import CTList from './CTList';
import SSList from './SSList';
import SDList from './SDList';
import Profile from './Profile';
import CompaniesTask from './CompaniesTask';
import StudentSubmission from './StudentSubmission';
import SchoolDashboard from './SchoolDashboard';

const Layout = () => {
    const [states, setStates] = useState([
        "Companies task",
        "Students Submission",
        "School dashboard"
    ]);
    const [selectedSate, setSelectedSate] = useState(states[0]);

    return (
        <>
            <div className='py-10 flex justify-between pr-5'>
                <div>
                    <div className="text-zinc-800 text-2xl font-semibold tracking-[2.4px] max-w-[140px] mb-4 pl-4">
                        Dashboard
                    </div>
                    <div className="flex flex-col items-stretch pl-4">
                        <div className="flex gap-5">
                            {states?.map((state, i) =>
                                <div
                                    key={i}
                                    onClick={() => setSelectedSate(state)}
                                    className={`text-neutral-700 text-base font-medium tracking-widest cursor-pointer relative overflow-hidden`}
                                    style={{ display: 'inline-block' }}
                                >
                                    {state}
                                    {selectedSate === state && (
                                        <hr className="h-1.5 bg-blue-800 mt-1" />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='pl-4 pt-4'>
                        {selectedSate === "Companies task" && <CTList />}
                        {selectedSate === "Students Submission" && <SSList />}
                        {selectedSate === "School dashboard" && <SDList />}
                    </div>
                </div>
                <Profile />
            </div>
            <div className='pl-4 pr-5'>
                {selectedSate === "Companies task" && <CompaniesTask />}
                {selectedSate === "Students Submission" && <StudentSubmission />}
                {selectedSate === "School dashboard" && <SchoolDashboard />}
            </div>
        </>
    );
};

export default Layout;