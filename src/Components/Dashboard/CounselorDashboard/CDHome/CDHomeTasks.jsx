//CDHomeTasks

import React, { useContext, useEffect, useState } from "react";

import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/magicPin.png";
import starbucks from "../../../../assets/Dashboard/SuperAdminDashboard/starbucks.png";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AuthContext } from "../../../../Contexts/AuthProvider";
import CDHomeTaskCard from "./CDHomeTaskCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CDHomeTasks = ({ allTasks, pending, selected, rejected, progress }) => {
    const [currentTab, setTab] = useState("In Progress");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 10;

    const filterTasks = (status) => {
        switch (status) {
            case "In Progress":
                setFilteredTasks(progress);
                break;
            case "Completed tasks":
                setFilteredTasks(selected);
                break;
            case "Pending Submission":
                setFilteredTasks(pending);
                break;
            case "Rejected in tasks":
                setFilteredTasks(rejected);
                break;
            default:
                setFilteredTasks(allTasks);
        }
    };

    const handleTab = (event, type) => {
        event.preventDefault();
        setTab(type);
        filterTasks(type);
        setCurrentPage(1); // Reset page when changing tabs
    };

    const [filteredTasks, setFilteredTasks] = useState([]);
    useEffect(() => {
        filterTasks(currentTab);
    }, [currentTab, allTasks]);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };

    const isActive = (type) => type === currentTab;
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-[20px] pb-2 font-bold tracking-widest text-[#3F3F3F] mt-9 border-b border-[#DBDBDB] ">
                Tasks <span
                    className="text-[#fff] rounded-full text-[15px]  font-medium p-1"
                    style={{
                        background: "var(--primary-color-4, #8064F0)",
                    }}
                >
                    {filteredTasks?.length}
                </span>
            </h1>
            <div className="flex gap-2 my-2">
                <button
                    onClick={(event) => handleTab(event, "In Progress")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("In Progress")
                            ? "text-white bg-[#0A98EA]"
                            : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    In Progress
                </button>
                <button
                    onClick={(event) => handleTab(event, "Completed tasks")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Completed tasks")
                            ? "text-white bg-[#20B15A]"
                            : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Completed tasks
                </button>
                <button
                    onClick={(event) => handleTab(event, "Pending Submission")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Pending Submission")
                            ? "text-white bg-[#F1511B]"
                            : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Pending Submission
                </button>
                <button
                    onClick={(event) => handleTab(event, "Rejected in tasks")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Rejected in tasks")
                            ? "text-white bg-[#DD2025]"
                            : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Rejected in tasks
                </button>
            </div>
            <div className="flex flex-col gap-1">
                {currentTasks.map((item, index) => (
                    <CDHomeTaskCard item={item} key={index} />
                ))}
            </div>
            <div className="flex items-center justify-between my-4">
                <div className="w-[50%] flex justify-end">
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(filteredTasks.length / tasksPerPage)}
                            page={currentPage}
                            onChange={paginate}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default CDHomeTasks;
