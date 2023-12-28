import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React, { useState } from 'react';
import { IoTodayOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

import profileImg from '../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg';
import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/magicPin.png";
import starbucks from "../../../../assets/Dashboard/SuperAdminDashboard/starbucks.png";
import pending from "../../../../assets/Dashboard/SuperAdminDashboard/mdi_account-pending-outline.svg";
import reject from "../../../../assets/Dashboard/SuperAdminDashboard/iconoir_cancel.svg";
import approve from "../../../../assets/Dashboard/SuperAdminDashboard/ic_round-done-all.svg"
const Tasks = () => {
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
            taskStatus: "approved",
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
        {
            taskName: "Animation Task",
            taskDesc: "Make an animation introduce our company vision.....",
            taskStatus: "mytask",
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
        {
            taskName: "Animation Task",
            taskDesc: "Make an animation introduce our company vision.....",
            taskStatus: "mytask",
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
    const [currentTab, setTab] = useState("All Tasks")
    const handleTab = (event, type) => {
        event.preventDefault();
        setTab(type);
    };
    const isActive = (type) => type === currentTab;
    const filteredCardData = currentTab === "All Tasks"
        ? cardData
        : cardData?.filter(item => item?.taskStatus === currentTab);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-[20px]  font-bold tracking-widest text-[#3F3F3F] mt-9 border-b border-[#DBDBDB] ">Tasks</h1>
            <div className='flex gap-2 mt-2'>
                <button
                    onClick={(event) => handleTab(event, "All Tasks")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("All Tasks") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    All Task
                </button>
                <button
                    onClick={(event) => handleTab(event, "mytask")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("mytask") ? 'text-white bg-[#1976D2]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    My task
                </button>
                <button
                    onClick={(event) => handleTab(event, "approved")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("approved") ? 'text-white bg-[#20B15A]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Approve
                </button>
                <button
                    onClick={(event) => handleTab(event, "rejected")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("rejected") ? 'text-white bg-[#DD2025]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Reject
                </button>
                <button
                    onClick={(event) => handleTab(event, "pending")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("pending") ? 'text-white bg-[#E8B912]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Decision Pending
                </button>
            </div>
            <div className="grid grid-cols-3  gap-5 my-[17px]">
                {filteredCardData?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[17px] w-[100%] py-[19px] rounded-md"
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
                        </button> : item?.taskStatus == 'approved' ? <button className='flex gap-2 text-[16px] font-bold mt-4  text-[#20B15A]'>
                            <span>Approved</span>
                            <img src={approve} alt="" />
                        </button>: <button className='flex gap-2 text-[16px] font-bold mt-4  text-[#3E4DAC]'>
                            <span>My task</span>         
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
                                <p>{item?.taskStatus == "rejected" ? "Reject" : item?.taskStatus == "pending" ? "Decision Pending" : "In Progress"}</p>
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
                    // <div key={index} className={`bg-[#FFF]  px-[7px] py-[12px] rounded-md ${item.status == 'In Progress' ? 'border border-b-4 border-[#1976D2]' : item.status == "Completed" ? 'border border-b-4 border-[#20B15A]' : item.status == "Selected" ? 'border border-b-4 border-[#E8B912]' : item.status == "Rejected" ? 'border border-b-4 border-[#DD2025]' : 'border border-b-4 border-[#FF6B00]'}`}>
                    //     <div className="flex justify-between items-center">
                    //         <h1 className="font-bold text-[17px]">{item?.title}</h1>
                    //         <div className="flex gap-1 items-center">
                    //             <p className="text-[13px]">Magic Pin</p>
                    //             <img className="w-[21px] h-[21px]" src={magicpin} alt="" />
                    //         </div>
                    //     </div>
                    //     <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                    //         {item?.taskDesc}
                    //     </p>
                    //     <div className="flex justify-between">
                    //         <div className=" text-black">
                    //             <p>Deadline</p>
                    //             <p className="flex items-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl"><IoTodayOutline/>{item?.deadline}</p>
                    //         </div>
                    //         <div className=" text-black">
                    //             <p>Duration</p>
                    //             <p className="flex items-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl"><IoMdTime/>{item?.duration}</p>
                    //         </div>
                    //     </div>
                    //     <div>
                    //         <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                    //             <p>Progress</p>
                    //             <p className="text-[#3F3F3F]">{item?.progressBar?.current}/{item?.progressBar?.total}</p>
                    //         </div>
                    //         <div className="relative w-full">
                    //             <div className="w-full bg-gray-200 rounded-lg h-2">
                    //                 <div
                    //                     className="bg-[#3E4DAC] h-2 rounded-lg"
                    //                     style={{ width: `${(item?.progressBar?.current / item?.progressBar?.total) * 100}%` }}
                    //                 ></div>
                    //             </div>
                    //         </div>
                    //         <p className="text-[#3F3F3F] text-[14px] font-medium">
                    //             {item?.date}
                    //         </p>
                    //     </div>
                    //     <div className="flex justify-between  mt-[14px]">
                    //     <AvatarGroup className="grid justify-end" total={16}>
                    //         {item?.studentsImg.map((each, index) => (
                    //             <Avatar key={index} alt="Remy Sharp" src={each.img} />
                    //         ))}
                    //     </AvatarGroup>
                    //     <button className="text-[15px] text-white font-medium bg-[#4555BA] py-[3px] px-[7px] rounded-3xl">Show details</button>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;