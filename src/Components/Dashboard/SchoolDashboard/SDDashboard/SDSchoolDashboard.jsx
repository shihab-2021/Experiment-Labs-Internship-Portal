import React from 'react';
import schoolImg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 240.svg"
import MOBIKWIK from "../../../../assets/Dashboard/SchoolDashboard/MOBIKWIK.svg"

import { PieChart } from "@mui/x-charts/PieChart";
import Person from "../../../../assets/Home/Person.png";
import { Avatar, AvatarGroup } from '@mui/material';
import { Link } from 'react-router-dom';
const SDSchoolDashboard = ({ lengthData }) => {
    const data1 = [
        { label: "Inactive Companies", value: 0, color: '#DCEFFF' },
        { label: "Active Companies", value: lengthData?.uniqueOrganizationsCount, color: '#0A98EA' },
    ];

    const data2 = [
        { label: "Inactive Students", value: 0, color: '#DCEFFF' },
        { label: "Active Students", value: lengthData?.totalStudentsCount, color: '#8064F0' },
    ];
    return (
        <div className='flex my-8 justify-between gap-5 items-center w-full'>
            {/* <div className=" h-[552px] w-[70%] border-[#E8E8E8] border-2 shadow-sm rounded-md my-8 p-1">
                <div className=" w-full ">
                    <div
                        style={{
                            borderRadius: "4px",
                            border: "1px solid #F1F1F1",
                            background: "#F7F8FF"
                        }}
                        className=" flex justify-between">
                        <h1 className="p-2 w-[50%] text-center">Trending tasks</h1>
                        <h1 className="p-2 w-[20%] text-center">Students</h1>
                        <h1 className="p-2 w-[30%] text-center">Selected </h1>
                    </div>
                    <div
                        style={{
                            borderRadius: "5px",
                            border: "1px solid #F1F1F1",
                        }}
                        className=" flex justify-between items-center mt-1">

                        <div className=" w-[50%] px-2 flex items-center  gap-1 text-[15px] font-medium">

                            <img className='w-[56px] h-[56px] rounded-full' src={MOBIKWIK} alt="" />
                            <div className='grid items-center'>
                                <p className='text-[18px] font-medium'>MOBIKWIKl</p>
                                <p className='text-[16px] font-medium text-[#797979]'>Marketing task</p>
                            </div>

                        </div>
                        <div className=" w-[20%] text-center text-[18px] font-semibold tracking-wider">

                            <p>50 students</p>

                        </div>
                        <div className="text-center w-[30%]">

                            <p className='text-[#E8B912] text-lg font-medium'> 12 Students</p>



                        </div>

                    </div>
                    <div
                        style={{
                            borderRadius: "5px",
                            border: "1px solid #F1F1F1",
                        }}
                        className=" flex justify-between items-center mt-1">
                        <div className=" w-[50%] px-2 flex items-center  gap-1 text-[15px] font-medium">
                            <img className='w-[56px] h-[56px] rounded-full' src={MOBIKWIK} alt="" />
                            <div className='grid items-center'>
                                <p className='text-[18px] font-medium'>MOBIKWIKl</p>
                                <p className='text-[16px] font-medium text-[#797979]'>Marketing task</p>
                            </div>
                        </div>
                        <div className=" w-[20%] text-center text-[18px] font-semibold tracking-wider">
                            <p>50 students</p>
                        </div>
                        <div className="text-center w-[30%]">
                            <p className='text-[#E8B912] text-lg font-medium'> 12 Students</p>
                        </div>
                    </div>

                </div>
                <div className='text-center my-4 text-[18px] text-[#797979] font-semibold tracking-wide'>
                    <button>See all</button>
                </div>
            </div> */}
            <div
                style={{
                    borderRadius: "6px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 10px 0px #F6F6F6"
                }}
                className=' w-[30%] h-[552px]'>
                <div className=' w-full '>
                    <div className='flex justify-items-center'>
                        <PieChart
                            series={[
                                {
                                    innerRadius: 60,
                                    outerRadius: 80,
                                    data: data1,
                                },
                                {
                                    innerRadius: 100,
                                    outerRadius: 120,
                                    data: data2,
                                },
                            ]}
                            width={10}
                            height={300}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                        />
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2'>
                            <p className={`w-[31.5px] h-[21px] bg-[${data2[1].color}]`}></p>
                            <p className='text-[16px] font-medium tracking-wide'>{data2[1]?.label} {data2[1]?.value}</p>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <p className={`w-[31.5px] h-[21px] bg-[${data1[1].color}]`}></p>
                            <p className='text-[16px] font-medium tracking-wide'>{data1[1]?.label} {data1[1]?.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SDSchoolDashboard;