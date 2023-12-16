import React, { useState } from "react";
import clock from "../../../../assets/Dashboard/StudentDashboard/clock.svg"
import magicPin from "../../../../assets/Dashboard/StudentDashboard/magicPin.svg"
import Starbucks from "../../../../assets/Dashboard/StudentDashboard/Starbucks.svg"
import Swiggy from "../../../../assets/Dashboard/StudentDashboard/Swiggy.svg"
import { BsPersonCircle } from "react-icons/bs";
import Graph from "./Graph";


const MyWorkHours = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const data = {
        myWorkHoursData: [
            {
                logo: magicPin,
                company: "Magic pin",
                task: "UX and UI Designing task",
                duration: "4h 00m"
            },
            {
                logo: magicPin,
                company: "Magic pin",
                task: "UX and UI Designing task",
                duration: "4h 00m"
            },
            {
                logo: Starbucks,
                company: "Starbucks",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Starbucks,
                company: "Starbucks",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Swiggy,
                company: "Swiggy",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Swiggy,
                company: "Swiggy",
                task: "Marketing task",
                duration: "4h 00m"
            },
        ]
    }



    return (
        <div>
          

            {/* graph */}
            <div>
            <Graph/>
            </div>

            {/* last part */}
            <div className="mt-[30px]">
                {
                    data?.myWorkHoursData?.map((item) => (
                        <div className="flex items-center justify-between border-b border-[#DADADA] mb-2 pb-2">
                            <div className="flex gap-3 items-center">
                                <img src={item?.logo} alt="icon" />
                                <div>
                                    <h1 className="text-2xl font-semibold">{item?.task}</h1>
                                    <p className="text-xl font-medium text-[#797979]">{item?.company}</p>
                                </div>
                            </div>
                            <p
                                className="px-[21px] py-[9px] text-xl font-medium"
                                style={{
                                    borderRadius: "17px",
                                    background: "#F6F6F6",
                                }}>{item?.duration}</p>
                        </div>
                    ))
                }
                <div className="bg-[#E9F6FF] text-center mt-5 mb-10">
                    <button className="text-[20px] font-medium py-[15px]">Show more</button>
                </div>


            </div>




        </div>
    );
};

export default MyWorkHours;
