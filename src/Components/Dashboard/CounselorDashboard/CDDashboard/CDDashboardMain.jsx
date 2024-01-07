import React, { useContext, useEffect, useState } from 'react';
import List from './List';
import StudentOverview from './StudentOverview';
import SelectionRate from './SelectionRate';
import TotalTask from './TotalTask';
import MyStudents from './MyStudents';
import ParticipantInTask from './ParticipantInTask';
import Loading from '../../../Shared/Loading/Loading';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import axios from 'axios';


const CDDashboardMain = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useContext(AuthContext);
    useEffect(() => {
        // Show a loading spinner while the login process is in progress
        Loading();
        if (userInfo?.organizations) {
            axios
                .get(
                    `${import.meta.env.VITE_APP_SERVER_API
                    }/api/v1/taskSubmissions/getSubmissionStatusByCounsellorId/counsellorId/${userInfo?.organizations[0]?.counsellorId
                    }`
                )
                .then((tasks) => {
                    setAllTasks(tasks?.data);
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    // Close the loading spinner when the data fetching is complete
                    //   setLoading(false);
                    Loading().close();
                });
        }
    }, [userInfo]);

    const progress = allTasks?.submissionStatusCounts?.find(
        (task) => task?.submissionStatus === "Processing"
    );
    const inProgress = progress?.submissions || [];
    const pending = allTasks?.submissionStatusCounts?.find(
        (task) => task?.submissionStatus === "Pending"
    );
    const inPending = pending?.submissions || [];
    const completed = allTasks?.submissionStatusCounts?.find(
        (task) => task?.submissionStatus === "Selected"
    );
    const inCompleted = completed?.submissions || [];
    const rejected = allTasks?.submissionStatusCounts?.find(
        (task) => task?.submissionStatus === "Rejected"
    );
    const inRejected = rejected?.submissions || [];

    return (
        <div className='py-10 flex flex-col px-5'>
            <div className="text-[#797979] text-xl font-semibold tracking-[2.4px] max-w-[140px] mb-4">
                Dashboard
            </div>
            <div className="text-neutral-700 text-xl font-medium tracking-widest mb-4">
                My Students Status
            </div>
            <List
                allTasks={allTasks}
                progress={inProgress}
                pending={inPending}
                selected={inCompleted}
                rejected={inRejected}
            />
            <div className='my-8 flex gap-12 items-start'>
                <StudentOverview
                    allTasks={allTasks}
                    progress={inProgress}
                    pending={inPending}
                    selected={inCompleted}
                    rejected={inRejected}
                />

                <SelectionRate
                    allTasks={allTasks}
                    progress={inProgress}
                    pending={inPending}
                    selected={inCompleted}
                    rejected={inRejected}
                />
            </div>
            <MyStudents
                allTasks={allTasks}
            />
            {/* <TotalTask/> */}
            {/* <div className='my-8 flex gap-12 items-start'>
                <MyStudents/>
                <ParticipantInTask/>
            </div> */}
        </div>
    );
};

export default CDDashboardMain;