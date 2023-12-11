//AdminCompleteShowMore
import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

import { FaMagnifyingGlass } from "react-icons/fa6";
import driveImage from "../../../assets/Dashboard/AdminDashboard/driveImage.svg"
import locationIcon from "../../../assets/Dashboard/AdminDashboard/locationIcon.svg"
import profileImage from "../../../assets/Dashboard/AdminDashboard/profileImage.svg"
import timeIcon from "../../../assets/Dashboard/AdminDashboard/timeIcon.svg"
import totalSubmission from "../../../assets/Dashboard/AdminDashboard/totalSubmission.svg"
import submissionLimit from "../../../assets/Dashboard/AdminDashboard/submissionLimit.svg"
import selectIcon from "../../../assets/Dashboard/AdminDashboard/selectIcon.svg"
import rejectIcon from "../../../assets/Dashboard/AdminDashboard/rejectIcon.svg"
import filter from "../../../assets/Dashboard/AdminDashboard/filter.svg"
import reviewList from "../../../assets/Dashboard/AdminDashboard/reviewList.svg"
import arrowDown from "../../../assets/Dashboard/AdminDashboard/arrowDown.svg"
import driveIcon from "../../../assets/Dashboard/AdminDashboard/driveIcon.svg"
import arrowUp from "../../../assets/Dashboard/AdminDashboard/arrowUp.svg"
import arrowRight from "../../../assets/Dashboard/AdminDashboard/arrowRight.svg"
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const AdminCompleteShowMore = () => {

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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isDivVisible, setDivVisibility] = useState(false);
    const [details, setDetails] = useState('');

    const toggleDivVisibility = (detailsName) => {
        setDivVisibility(!isDivVisible);
        setDetails(detailsName)
    };
    console.log(details)
    console.log(isDivVisible)

    return (
        <div className="w-11/12 mx-auto mt-14">
            {/*nev section*/}
            <div className="flex justify-between">
                <div>
                    <div className="flex gap-10">
                        <div>
                            <h1 className="font-bold text-[30px]">Hello Aman</h1>
                            <p className="text-[21px] font-medium tracking-wide">{formatDate()}</p>
                        </div>
                        <div
                            style={{
                                borderRadius: "14px",
                                border: "1px solid #DDD",
                            }}
                            className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[440px] h-[48px] "
                        >
                            <FaMagnifyingGlass />
                            <input className="w-[90%]" placeholder="Search"></input>
                        </div>
                    </div>

                </div>

                <div className="relative inline-block text-left">
                    <div className="w-[275px] h-[52px] px-2"
                        style={{
                            borderRadius: "7px",
                            border: "1px solid #F0F0F0",
                            background: "#FFF",
                            boxShadow: "0px 4px 30px 0px #F2F4FF"
                        }}

                    >
                        <button
                            type="button"
                            className="inline-flex items-center w-full justify-center  hover:bg-gray-50 "
                            onClick={toggleDropdown}
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            <div className="w-5/6 mx-auto flex items-center gap-2 pt-[7px]">
                                <BsPersonCircle className="text-[#4555BA] w-[35px] h-[35px]" />
                                <p className="text-[19px] font-medium">Aman Kumar</p>
                            </div>
                            <svg
                                className="-mr-1 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isDropdownOpen ? "" : "hidden"
                            }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                    >
                        <div className="py-1" role="none">
                            <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
                                <p className="text-[#3F3F3F]">Animation</p>
                                <p className="text-[#6B6B6B]">task 1</p>
                            </div>
                            <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
                                <p className="text-[#3F3F3F]">logo design</p>
                                <p className="text-[#6B6B6B]">task 2</p>
                            </div>
                            <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between mb-3">
                                <p className="text-[#3F3F3F]">ui and ux </p>
                                <p className="text-[#6B6B6B]">task 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task details part */}
            <div className="flex gap-5">
                <div
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                    className="w-[60%] px-[10px] py-[15px]">
                    <p className="text-lg font-medium">Task Details</p>
                    <h1 className="text-xl font-bold mt-3">UI AND UX</h1>
                    <p className=" text-[16px] font-medium text-[#797979]">Task no.4</p>
                    <p className=" text-[16px] font-medium text-[#797979] mt-4">"Create our company landing page with an engaging interface that matches industry standards."</p>
                    <p className="text-base font-bold mt-4">Out come</p>
                    <p className=" text-[16px] font-medium text-[#797979] mt-4">Selected students have the chance to meet our team, and we also provide certificates."</p>
                    <p className="flex gap-2 items-center text-base font-normal text-[#4555BA] my-5">
                        <img src={driveImage} alt="image" />
                        <Link to=''>www.magicpingogledrivelink.com</Link>
                    </p>
                    <div className="flex justify-between">
                        <div>
                            <p className=" text-[16px] font-medium text-[#797979]">Company</p>
                            <p className=" text-base font-normal flex items-center gap-2">Magic pin <span><img src={locationIcon} alt="Icon" /></span></p>
                        </div>
                        <div>
                            <p className=" text-[16px] font-medium text-[#797979]">task posting</p>
                            <p className=" text-base font-normal flex items-center gap-2"> 24/jan/2022</p>
                        </div>
                        <div>
                            <p className=" text-[16px] font-medium text-[#797979]">Deadline</p>
                            <p className=" text-base font-normal flex items-center gap-2">26/jan/2022</p>
                        </div>
                    </div>
                    <p className="text-base font-normal mt-9">Task Created by</p>
                    <div className="flex items-center gap-2 mt-2">
                        <div><img src={profileImage} alt="ImageProfile" /></div>
                        <div>
                            <h1 className="text-base font-semibold">Arun kumar</h1>
                            <p className="text-[13px] font-normal text-[#797979]">Company admin</p>
                        </div>
                    </div>

                </div>
                <div
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                    className="w-[40%] p-3">
                    <h1 className="text-xl font-medium my-5">Task Status</h1>
                    <div
                        className="flex items-center justify-between px-2 py-4"
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #D1D1D1",
                            background: "#FFF"
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={timeIcon} alt="Icon" />
                            <p className="text-base font-medium text-[#3F3F3F]">Time remaining</p>

                        </div>
                        <div >
                            <p className="me-8 text-[#6278FF] text-base font-medium">1d</p>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-between px-2 py-4 mt-1"
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #D1D1D1",
                            background: "#FFF"
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={totalSubmission} alt="Icon" />
                            <p className="text-base font-medium text-[#3F3F3F]">Total Submission</p>

                        </div>
                        <div >
                            <p className="me-8 text-[#0A98EA] text-base font-medium">12</p>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-between px-2 py-4 mt-1"
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #D1D1D1",
                            background: "#FFF"
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={submissionLimit} alt="Icon" />
                            <p className="text-base font-medium text-[#3F3F3F]">Submission limit</p>

                        </div>
                        <div >
                            <p className="me-8 text-[#0A98EA] text-base font-medium">12</p>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-between px-2 py-4 mt-1"
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #D1D1D1",
                            background: "#FFF"
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={selectIcon} alt="Icon" />
                            <p className="text-base font-medium text-[#3F3F3F]">Selected Submission</p>

                        </div>
                        <div >
                            <p className="me-8 text-[#4CAF50] text-base font-medium">6</p>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-between px-2 py-4 mt-1"
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #D1D1D1",
                            background: "#FFF"
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={rejectIcon} alt="Icon" />
                            <p className="text-base font-medium text-[#3F3F3F]">Reject Submission</p>

                        </div>
                        <div >
                            <p className="me-8 text-[#DD2025] text-base font-medium">6</p>
                        </div>

                    </div>
                    <div className="flex justify-center w-full mt-10">
                        <div className=" w-[50%]">
                            <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                                <p>Completed</p>
                                <p className="text-[#3F3F3F]">12/12</p>
                            </div>
                            <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-lg h-2">
                                    <div
                                        className="bg-[#3E4DAC] h-2 w-[100%] rounded-lg"
                                    // className="bg-cyan-600 h-2 rounded-sm"

                                    // style={{ width: "20%" }}
                                    ></div>
                                </div>
                            </div>
                            <p className="text-[#3F3F3F] text-[14px] font-medium">
                                29/Jan/2022
                            </p>
                        </div >
                    </div>

                </div>
            </div>

            {/* Submission */}

            <div
                className=" flex items-center justify-between py-[14px] px-2 mt-8"
                style={{
                    borderRadius: "7px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 20px 0px #EFF1FF",
                }}
            >
                <h1 className="text-xl font-medium">Submission</h1>
                <img src={filter} alt="icon" />

            </div>
            <div
                className=" flex items-center justify-between py-[14px] px-2 "
                style={{
                    borderRadius: "7px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 20px 0px #EFF1FF",
                }}
            >
                <div className="flex items-center gap-2">
                    <div><img src={profileImage} alt="ImageProfile" /></div>
                    <div>
                        <h1 className="text-base font-semibold">Arun kumar</h1>
                        <p className="text-[13px] font-normal text-[#797979]">10th class student</p>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission time</h1>
                    <h1 className=" text-base font-medium text-[#737373]">12:00pm</h1>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission day</h1>
                    <h1 className=" text-base font-medium text-[#737373]">24/jan/2023</h1>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#439DF7"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Message</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Status</h1>
                    <div
                        style={{
                            borderRadius: "18px",
                            background: "#20B15A"
                        }}
                    >
                        <p className="text-[#fff] text-sm font-bold px-5 py-2">Select</p>
                    </div>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#DD2025"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Reject</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Solution</h1>
                    <div
                        style={{
                            borderRadius: "18px",

                        }}
                    >
                        <p className="text-sm font-bold px-5 py-2 flex">
                            <img src={reviewList} alt="icon" />
                            {!isDivVisible && (
                                <img onClick={() => toggleDivVisibility('solution1')} style={{ cursor: 'pointer' }} src={arrowDown} alt="icon" />
                            )


                            }
                            {isDivVisible && (
                                <img onClick={() => toggleDivVisibility('solution1')} style={{ cursor: 'pointer' }} src={arrowUp} alt="icon" />
                            )

                            }


                        </p>
                    </div>
                </div>

            </div>
            {isDivVisible && details === 'solution1' && (
                <div
                    className=" mb-2"
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                >
                    <div className="p-5">
                        <h1 className="text-xl font-medium mb-[20px]">Animation project</h1>
                        <Link
                            className="p-[10px] my-[15px]"
                            style={{
                                borderRadius: "40px",
                                border: "1px solid #4555BA"
                            }}
                        >
                            WWW.Animationproject.com
                        </Link>
                    </div>
                    <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
                        <img src={driveIcon} alt="Icon" />
                        <Link to=''>Http: internship project google drive link</Link>

                    </div>

                </div>
            )
            }



            <div
                className=" flex items-center justify-between py-[14px] px-2 "
                style={{
                    borderRadius: "7px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 20px 0px #EFF1FF",
                }}
            >
                <div className="flex items-center gap-2">
                    <div><img src={profileImage} alt="ImageProfile" /></div>
                    <div>
                        <h1 className="text-base font-semibold">Arun kumar</h1>
                        <p className="text-[13px] font-normal text-[#797979]">10th class student</p>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission time</h1>
                    <h1 className=" text-base font-medium text-[#737373]">12:00pm</h1>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission day</h1>
                    <h1 className=" text-base font-medium text-[#737373]">24/jan/2023</h1>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#439DF7"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Message</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Status</h1>
                    <div
                        style={{
                            borderRadius: "18px",
                            background: "#20B15A"
                        }}
                    >
                        <p className="text-[#fff] text-sm font-bold px-5 py-2">Select</p>
                    </div>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#DD2025"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Reject</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Solution</h1>
                    <div
                        style={{
                            borderRadius: "18px",

                        }}
                    >
                        <p className="text-sm font-bold px-5 py-2 flex">
                            <img src={reviewList} alt="icon" />
                            {!isDivVisible && (
                                <img onClick={() => toggleDivVisibility('solution2')} style={{ cursor: 'pointer' }} src={arrowDown} alt="icon" />
                            )


                            }
                            {isDivVisible && (
                                <img onClick={() => toggleDivVisibility('solution2')} style={{ cursor: 'pointer' }} src={arrowUp} alt="icon" />
                            )

                            }


                        </p>
                    </div>
                </div>

            </div>
            {isDivVisible && details === 'solution2' && (
                <div
                    className=" mb-2"
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                >
                    <div className="p-5">
                        <h1 className="text-xl font-medium mb-[20px]">Animation project</h1>
                        <Link
                            className="p-[10px] my-[15px]"
                            style={{
                                borderRadius: "40px",
                                border: "1px solid #4555BA"
                            }}
                        >
                            WWW.Animationproject.com
                        </Link>
                    </div>
                    <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
                        <img src={driveIcon} alt="Icon" />
                        <Link to=''>Http: internship project google drive link</Link>

                    </div>

                </div>
            )
            }


            <div
                className=" flex items-center justify-between py-[14px] px-2 "
                style={{
                    borderRadius: "7px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 20px 0px #EFF1FF",
                }}
            >
                <div className="flex items-center gap-2">
                    <div><img src={profileImage} alt="ImageProfile" /></div>
                    <div>
                        <h1 className="text-base font-semibold">Arun kumar</h1>
                        <p className="text-[13px] font-normal text-[#797979]">10th class student</p>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission time</h1>
                    <h1 className=" text-base font-medium text-[#737373]">12:00pm</h1>
                </div>
                <div className="text-center">
                    <h1 className=" text-base font-bold">Submission day</h1>
                    <h1 className=" text-base font-medium text-[#737373]">24/jan/2023</h1>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#439DF7"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Message</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Status</h1>
                    <div
                        style={{
                            borderRadius: "18px",
                            background: "#20B15A"
                        }}
                    >
                        <p className="text-[#fff] text-sm font-bold px-5 py-2">Select</p>
                    </div>
                </div>
                <div
                    className="mt-6"
                    style={{
                        borderRadius: "18px",
                        background: "#DD2025"
                    }}
                >
                    <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Reject</p>

                </div>
                <div className="text-center">
                    <h1 className="text-base font-bold">Solution</h1>
                    <div
                        style={{
                            borderRadius: "18px",

                        }}
                    >
                        <p className="text-sm font-bold px-5 py-2 flex">
                            <img src={reviewList} alt="icon" />
                            {!isDivVisible && (
                                <img onClick={() => toggleDivVisibility('solution3')} style={{ cursor: 'pointer' }} src={arrowDown} alt="icon" />
                            )


                            }
                            {isDivVisible && details === 'solution3' && (
                                <img onClick={() => toggleDivVisibility('solution3')} style={{ cursor: 'pointer' }} src={arrowUp} alt="icon" />
                            )

                            }


                        </p>
                    </div>
                </div>

            </div>
            {isDivVisible && details === 'solution3' && (
                <div
                    className=" mb-2"
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                >
                    <div className="p-5">
                        <h1 className="text-xl font-medium mb-[20px]">Animation project</h1>
                        <Link
                            className="p-[10px] my-[15px]"
                            style={{
                                borderRadius: "40px",
                                border: "1px solid #4555BA"
                            }}
                        >
                            WWW.Animationproject.com
                        </Link>
                    </div>
                    <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
                        <img src={driveIcon} alt="Icon" />
                        <Link to=''>Http: internship project google drive link</Link>

                    </div>

                </div>
            )
            }

            <div className="py-10 flex items-center justify-between">
                <div className="w-full flex justify-center">

                    <Stack spacing={2}>
                        
                        <Pagination count={2} color="primary" />
                       
                    </Stack>

                </div>
                <div className="">
                    <button
                        className="px-7 py-3 text-base font-medium text-[#fff] flex items-center gap-3"
                        style={{
                            borderRadius: "36px",
                            background: "var(--primary-coloe-2, #3E4DAC)",
                        }}
                    >Next

                        <img src={arrowRight} alt="arrowIcon" />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default AdminCompleteShowMore;
