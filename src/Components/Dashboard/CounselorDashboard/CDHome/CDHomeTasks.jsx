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
  
    const { userInfo } = useContext(AuthContext);
    const [currentTab, setTab] = useState("In Progress");
    const [filteredTasks, setFilteredTasks] = useState(allTasks);
    const handleTab = (event, type) => {
        event.preventDefault();
        setTab(type);
    };
    const isActive = (type) => type === currentTab;
    //   const filteredCardData =
    //     currentTab === "In Progress"
    //       ? cardData
    //       : cardData?.filter((item) => item?.taskStatus === currentTab);
    console.log(allTasks)
    useEffect(() => {
        const filteredData =
            currentTab === "In Progress"
                ? allTasks
                : currentTab === "Completed tasks"
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
              {/*   <button
                    onClick={(event) => handleTab(event, "Selected Students")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Selected Students")
                        ? "text-white bg-[#E8B912]"
                        : "text-[#3F3F3F] bg-transparent"
                        }`}
                >
                    Selected Students
                </button> */}
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
