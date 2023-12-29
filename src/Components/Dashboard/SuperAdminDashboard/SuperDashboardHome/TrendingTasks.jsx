import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import profileImg from '../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg';
import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/magicPin.png";
import starbucks from "../../../../assets/Dashboard/SuperAdminDashboard/starbucks.png";
import pending from "../../../../assets/Dashboard/SuperAdminDashboard/mdi_account-pending-outline.svg";
import reject from "../../../../assets/Dashboard/SuperAdminDashboard/iconoir_cancel.svg";
import approve from "../../../../assets/Dashboard/SuperAdminDashboard/ic_round-done-all.svg"
const TrendingTasks = () => {
    const formatDate = () => {
        const monthNames = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = monthNames[currentDate.getMonth()]; // Get month name
        const year = currentDate.getFullYear();
        return `${day}/ ${month}/ ${year}`;
      };
    const cardData = [
        {
            taskName: "Animation Task",
            taskDesc: "Make an animation introduce our company vision.....",
            taskStatus: "pending",
            postingDateTime: "2022-11-10T05:13:57.865Z",
            taskTime: "4",
            participantLimit: "8",
            participants: [
                { participantEmail: 'user@gmail.com', applyDateTime: '2023-12-19T03:24:01.412Z', submissionId: '65810cd13fe1b13a11e1c318', submissionDateTime: '2023-12-19T09:35:47.866Z' },
                { participantEmail: 'user3@gmail.com', applyDateTime: '2023-12-26T02:18:43.984Z', submissionId: '658a38046b24c37a5a1aeb6b', submissionDateTime: '2023-12-26T02:19:04.081Z' }
            ],
            creator: { email: 'test5@gmail.com', organizationId: '65791b33ce593847b03704e8', role: 'Admin' },
            taskDeadline: "2024-01-14",
            orgImg: magicpin,
        },
        {
            taskName: "Animation Task",
            taskDesc: "Make an animation introduce our company vision.....",
            taskStatus: "rejected",
            postingDateTime: "2022-11-10T05:13:57.865Z",
            taskTime: "4",
            participantLimit: "8",
            participants: [
                { participantEmail: 'user@gmail.com', applyDateTime: '2023-12-19T03:24:01.412Z', submissionId: '65810cd13fe1b13a11e1c318', submissionDateTime: '2023-12-19T09:35:47.866Z' },
                { participantEmail: 'user3@gmail.com', applyDateTime: '2023-12-26T02:18:43.984Z', submissionId: '658a38046b24c37a5a1aeb6b', submissionDateTime: '2023-12-26T02:19:04.081Z' }
            ],
            creator: { email: 'test5@gmail.com', organizationId: '65791b33ce593847b03704e8', role: 'Admin' },
            taskDeadline: "2024-01-14",
            orgImg: starbucks,
        },

    ];
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="flex justify-between">
                <button className="font-medium text-[20px]">Trending Tasks</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex mt-[17px] gap-[11px]">
                    {cardData.length === 0 ? <p className="font-semibold text-orange-500 text-[20px] text-center mt-5">No Processing task found</p> :
                        <>{
                            cardData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[17px] w-[320px] py-[19px] rounded-md"
                                >
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-2 items-center'>
                                            <img className='w-[28px] h-[28px]' src={profileImg} alt="" />
                                            <p>Abhinav</p>
                                        </div>
                                        <p>3 days ago</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <h1 className="font-bold tracking-wider text-[18px]">{item?.taskName}</h1>
                                            <p className='text-[#737373] text-[15px]'>{item?.taskTime} hrs task</p>
                                        </div>
                                        <img src={item?.orgImg} alt="" />
                                    </div>
                                    {item?.taskStatus == "rejected" ? <button className='flex gap-2 text-[16px] font-bold mt-4 text-[#DD2025] '>
                                        <span>Reject Task</span>
                                        <img src={reject} alt="" />
                                    </button> : item?.taskStatus == 'pending' ? <button className='flex gap-2 text-[16px] font-bold mt-4  text-[#F1511B]'>
                                        <span>Decision Pending</span>
                                        <img src={pending} alt="" />
                                    </button>:<button className='flex gap-2 text-[16px] font-bold mt-4  text-[#20B15A]'>
                                        <span>Approved</span>
                                        <img src={approve} alt="" />
                                    </button>
                                    }
                                    <div className='flex justify-between items-center'>
                                        <div className='grid items-center mt-2'> 
                                            <p>Deadline</p>
                                            <p className="bg-[#E9ECFF] rounded-3xl mt-2 py-[6.563px] px-[17.814px] text-[14px] font-medium">
                                                {item?.taskDeadline}
                                            </p>
                                        </div>
                                        <div className='grid items-center mt-2'> 
                                            <p className='font-medium text-[16px] text-[#1E1E1E]'>{item?.participants?.length} students</p>
                                                <p className="text-[#007D00] text-[15px] font-bold bg-[#E9ECFF]  mt-2 py-[7px] px-[4px] rounded-[10px]">
                                                {item?.participantLimit} spot left
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                                            <p>{item?.taskStatus == "rejected" ? "Reject" : "Decision Pending"}</p>
                                            <p className="text-[#3F3F3F]">
                                                {item?.participants?.length || 0}/{item?.participantLimit}
                                            </p>
                                        </div>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-lg h-2">
                                                <div
                                                    className={`${item?.taskStatus == "rejected" ? "bg-[#DD2025]" : item?.taskStatus == "pending" ? "bg-[#9F9F9F]" : "bg-[#6278FF]"}  h-2 rounded-lg`}
                                                    style={{
                                                        width: `${(item?.participants?.length /
                                                            item?.participantLimit) *
                                                            100
                                                            }%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p className="text-[#3F3F3F] text-[14px] font-medium">
                                            {formatDate()}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }</>}
                    <Link to='/superAdminDashboard/createTask'>
                        <div className="ml-14 p-2  shadow-sm shadow-slate-300 justify-center  items-center">
                            <FaPlus className="text-[#AEAEAE] w-[25px] h-[25px] mx-auto mb-2 "></FaPlus>
                            <span className="text-[#AEAEAE] font-bold text-[15px] self-center w-[90px] text-center">
                                Add New Task
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingTasks;