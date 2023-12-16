import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React, { useState } from 'react';
import { IoTodayOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import magicPin from "../../../../assets/Dashboard/AdminDashboard/magicpin.svg"
const UserDashboardInternshipTasks = ({ cardData }) => {
    const [currentTab, setTab] = useState("All Tasks")
    const handleTab = (event, type) => {
        event.preventDefault();
        setTab(type);
    };
    const isActive = (type) => type === currentTab;
    const filteredCardData = currentTab === "All Tasks"
        ? cardData
        : cardData.filter(item => item.status === currentTab);
    return (
        <div>
            <h1 className="text-[20px] font-bold tracking-widest text-[#3F3F3F] mt-6 border-b border-[#DBDBDB] w-1/2">Internship</h1>
            <div className='flex gap-2 mt-2'>
                <button
                    onClick={(event) => handleTab(event, "All Tasks")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("All Tasks") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    All Task
                </button>
                <button
                    onClick={(event) => handleTab(event, "In Progress")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("In Progress") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    In Progress
                </button>
                <button
                    onClick={(event) => handleTab(event, "Completed")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Completed") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Completed
                </button>
                <button
                    onClick={(event) => handleTab(event, "Selected")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Selected") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Selected
                </button>
                <button
                    onClick={(event) => handleTab(event, "Rejected")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Rejected") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Rejected
                </button>
                <button
                    onClick={(event) => handleTab(event, "Pending")}
                    className={`text-[18px] font-medium py-[6px] px-[25px] rounded-3xl ${isActive("Pending") ? 'text-white bg-[#8064F0]' : 'text-[#3F3F3F] bg-transparent'}`}
                >
                    Pending
                </button>
            </div>
            <div className="grid grid-cols-3 my-[17px] gap-[11px]">
                {filteredCardData.map((item, index) => (
                    <div key={index} className={`bg-[#FFF]  px-[7px] py-[12px] rounded-md ${item.status == 'In Progress' ? 'border border-b-4 border-[#1976D2]' : item.status == "Completed" ? 'border border-b-4 border-[#20B15A]' : item.status == "Selected" ? 'border border-b-4 border-[#E8B912]' : item.status == "Rejected" ? 'border border-b-4 border-[#DD2025]' : 'border border-b-4 border-[#FF6B00]'}`}>
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-[17px]">{item?.title}</h1>
                            <div className="flex gap-1 items-center">
                                <p className="text-[13px]">Magic Pin</p>
                                <img className="w-[21px] h-[21px]" src={magicPin} alt="" />
                            </div>
                        </div>
                        <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                            {item?.taskDesc}
                        </p>
                        <div className="flex justify-between">
                            <div className=" text-black">
                                <p>Deadline</p>
                                <p className="flex items-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl"><IoTodayOutline/>{item?.deadline}</p>
                            </div>
                            <div className=" text-black">
                                <p>Duration</p>
                                <p className="flex items-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl"><IoMdTime/>{item?.duration}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                                <p>Progress</p>
                                <p className="text-[#3F3F3F]">{item?.progressBar?.current}/{item?.progressBar?.total}</p>
                            </div>
                            <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-lg h-2">
                                    <div
                                        className="bg-[#3E4DAC] h-2 rounded-lg"
                                        style={{ width: `${(item?.progressBar?.current / item?.progressBar?.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            <p className="text-[#3F3F3F] text-[14px] font-medium">
                                {item?.date}
                            </p>
                        </div>
                        <div className="flex justify-between  mt-[14px]">
                        <AvatarGroup className="grid justify-end" total={16}>
                            {item?.studentsImg.map((each, index) => (
                                <Avatar key={index} alt="Remy Sharp" src={each.img} />
                            ))}
                        </AvatarGroup>
                        <button className="text-[15px] text-white font-medium bg-[#4555BA] py-[3px] px-[7px] rounded-3xl">Show details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboardInternshipTasks;