//CDHomeTasks

import React, { useContext, useEffect, useState } from "react";

import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/magicPin.png";
import starbucks from "../../../../assets/Dashboard/SuperAdminDashboard/starbucks.png";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AuthContext } from "../../../../Contexts/AuthProvider";
import CDHomeTaskCard from "./CDHomeTaskCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CDHomeTasks = ({ allTasks }) => {
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
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
                {
                    participantEmail: "user@gmail.com",
                    applyDateTime: "2023-12-19T03:24:01.412Z",
                    submissionId: "65810cd13fe1b13a11e1c318",
                    submissionDateTime: "2023-12-19T09:35:47.866Z",
                },
                {
                    participantEmail: "user3@gmail.com",
                    applyDateTime: "2023-12-26T02:18:43.984Z",
                    submissionId: "658a38046b24c37a5a1aeb6b",
                    submissionDateTime: "2023-12-26T02:19:04.081Z",
                },
            ],
            creator: {
                email: "test5@gmail.com",
                organizationId: "65791b33ce593847b03704e8",
                role: "Admin",
            },
            taskDeadline: "2024-01-14",
            orgImg: starbucks,
        },
    ];
    const { userInfo } = useContext(AuthContext);
    const [currentTab, setTab] = useState("All Tasks");
    const [filteredTasks, setFilteredTasks] = useState(allTasks);
    const handleTab = (event, type) => {
        event.preventDefault();
        setTab(type);
    };
    const isActive = (type) => type === currentTab;
    //   const filteredCardData =
    //     currentTab === "All Tasks"
    //       ? cardData
    //       : cardData?.filter((item) => item?.taskStatus === currentTab);

    useEffect(() => {
        const filteredData =
            currentTab === "All Tasks"
                ? allTasks
                : currentTab === "MyTask"
                    ? allTasks?.filter((item) => item?.creator?.email === userInfo?.email)
                    : allTasks?.filter((item) => item?.taskStatus === currentTab);
        setFilteredTasks(filteredData);
    }, [currentTab, allTasks]);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-[20px] pb-2 font-bold tracking-widest text-[#3F3F3F] mt-9 border-b border-[#DBDBDB] ">
                Tasks <span
                    className="text-[#fff] rounded-full text-[15px]  font-medium p-1"
                    style={{

                        background: "var(--primary-color-4, #8064F0)"
                    }}>{filteredTasks?.length}</span>
            </h1>
            <div className="flex gap-2 mt-2">
                <button
                    onClick={(event) => handleTab(event, "All Tasks")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("All Tasks")
                        ? "text-white bg-[#0A98EA]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    In Progress
                </button>
                <button
                    onClick={(event) => handleTab(event, "MyTask")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("MyTask")
                        ? "text-white bg-[#20B15A]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Completed tasks
                </button>
                <button
                    onClick={(event) => handleTab(event, "Processing")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Processing")
                        ? "text-white bg-[#F1511B]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Pending Submission
                </button>
                <button
                    onClick={(event) => handleTab(event, "Rejected")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Rejected")
                        ? "text-white bg-[#E8B912]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Selected Students
                </button>
                <button
                    onClick={(event) => handleTab(event, "AdminApproved")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("AdminApproved")
                        ? "text-white bg-[#DD2025]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Rejected in tasks
                </button>
            </div>
            <div className="grid grid-cols-3  gap-5 my-[17px]">
                {filteredTasks?.map((item, index) => (
                    <CDHomeTaskCard item={item} key={index} />

                ))}
            </div>
            <div className="flex items-center justify-between">
                <div className="w-[50%] flex justify-end">
                    <Stack spacing={2}>
                        <Pagination count={3} />
                      
                    </Stack>
                </div>
                <div className="w-[50%] flex justify-end">
                    <h1
                        style={{
                            borderRadius: "36px",
                            background: "var(--primary-color-4, #8064F0)"
                        }}
                        className="w-[124px] h-[44px] flex justify-center gap-2 items-center text-[#fff]">Next <ArrowForwardIcon/></h1>
                </div>
            </div>
        </div>
    );
};

export default CDHomeTasks;
