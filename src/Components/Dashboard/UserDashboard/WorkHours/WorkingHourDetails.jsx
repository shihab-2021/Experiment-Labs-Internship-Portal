import React, { useState, useEffect } from 'react';

import axios from 'axios';



const WorkingHourDetails = ({ item, taskDateTime, setTaskDateTime }) => {

    const [task, setTask] = useState({});
    const [organizationInfo, setOrganizationInfo] = useState({});
    // const [taskDateTime, setTaskDateTime] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${item?.taskId
                }`
            )
            .then((task) => {

                setTask(task?.data);
                const taskItem = {
                    time: task?.data?.taskTime,
                    date: item?.submissionDateTime,


                };

                // Check if the task with the same _id already exists in the array
                const isTaskExist = taskDateTime.some(existingTask => existingTask._id === task?.data?._id);

                if (!isTaskExist) {
                    // If the task doesn't exist, add it to the array
                    setTaskDateTime(prevTaskDateTime => [...prevTaskDateTime, { ...taskItem, _id: task?.data?._id }]);
                }

            })
            .catch((error) => console.error(error));
        axios
            .get(
                `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${item?.organizationId
                }`
            )
            .then((org) => {
                setOrganizationInfo(org?.data);
            })
            .catch((error) => console.error(error));
    }, [item]);

    // console.log(organizationInfo);
   // console.log(item);





    //console.log(taskDateTime);






    return (
        <div>
            <div className="mt-[30px]">

                <div className="flex items-center justify-between border-b border-[#DADADA] mb-10 pb-2">
                    <div className="flex gap-8 items-center">
                        <img
                            className='h-[40px]'
                            src={organizationInfo?.orgLogo}
                            alt="icon" />
                        <div>
                            <h1 className="text-2xl font-semibold">{task?.taskName}</h1>
                            <p className="text-xl font-medium text-[#797979]">{organizationInfo?.orgName}</p>
                        </div>
                    </div>
                    <p
                        className="px-[21px] py-[9px] text-xl font-medium "
                        style={{
                            borderRadius: "17px",
                            background: "#F6F6F6",
                        }}>{task?.taskTime} hrs

                    </p>
              {/*       <p
                        className="px-[21px] py-[9px] text-xl font-medium"
                        style={{
                            borderRadius: "17px",
                            background: "#F6F6F6",
                        }}>{item?.submissionDateTime} 

                    </p> */}
                </div>

                {/*   <div className="bg-[#E9F6FF] text-center mt-5 mb-10">
                    <button className="text-[20px] font-medium py-[15px]">Show more</button>
                </div> */}


            </div>
        </div>
    );
};

export default WorkingHourDetails;
