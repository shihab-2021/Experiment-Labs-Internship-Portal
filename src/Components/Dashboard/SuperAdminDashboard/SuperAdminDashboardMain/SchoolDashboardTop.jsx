import React from 'react';
import schoolImg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 240.svg"
import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 241.svg"
import Mimg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 242.svg"
import swiggy from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 243.svg"
import { PieChart } from "@mui/x-charts/PieChart";
import Person from "../../../../assets/Home/Person.png";
import { Avatar, AvatarGroup } from '@mui/material';
import { Link } from 'react-router-dom';
const SchoolDashboardTop = () => {
    const data1 = [
        { label: "Inactive Companies", value: 3,color: '#DCEFFF' },
        { label: "Active Companies", value: 30,color: '#0A98EA' },
    ];

    const data2 = [
        { label: "Inactive Students", value: 50,color: '#DCEFFF' },
        { label: "Active Students", value: 500,color: '#8064F0' },
    ];
    return (
        <div className='flex justify-between items-center'>
            <div className="overflow-x-auto w-3/5 h-[533px] border-[#E8E8E8] border-2 shadow-sm rounded-md my-8">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="bg-[#F6F7FF] text-[17px] font-medium rounded mt-4">
                        <tr className="text-left">
                            <th className="p-2">School Names</th>
                            <th className="p-2">Tasks</th>
                            <th className="p-2">Company</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr className="border border-[#E2E2E2]">
                            <td className="px-2 flex items-center gap-1 text-[15px] font-medium">
                                <img src={schoolImg} alt="" />
                                <div className='grid items-center'>
                                    <p className='text-[18px] font-medium'>Delhi public school</p>
                                    <AvatarGroup className="grid justify-end " max={5}>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </td>
                            <td className="px-2 text-[18px] font-semibold tracking-wider">
                                <p>10 tasks</p>
                            </td>
                            <td className="px-2">
                                <AvatarGroup className="grid justify-end " max={5}>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                </AvatarGroup>

                            </td>
                        </tr>
                        <tr className="border border-[#E2E2E2]">
                            <td className="px-2 flex items-center gap-1 text-[15px] font-medium">
                                <img src={schoolImg} alt="" />
                                <div className='grid items-center'>
                                    <p className='text-[18px] font-medium'>Delhi public school</p>
                                    <AvatarGroup className="grid justify-end " max={5}>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </td>
                            <td className="px-2 text-[18px] font-semibold tracking-wider">
                                <p>10 tasks</p>
                            </td>
                            <td className="px-2">
                                <AvatarGroup className="grid justify-end " max={5}>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                </AvatarGroup>

                            </td>
                        </tr>
                        <tr className="border border-[#E2E2E2]">
                            <td className="px-2 flex items-center gap-1 text-[15px] font-medium">
                                <img src={schoolImg} alt="" />
                                <div className='grid items-center'>
                                    <p className='text-[18px] font-medium'>Delhi public school</p>
                                    <AvatarGroup className="grid justify-end " max={5}>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </td>
                            <td className="px-2 text-[18px] font-semibold tracking-wider">
                                <p>10 tasks</p>
                            </td>
                            <td className="px-2">
                                <AvatarGroup className="grid justify-end " max={5}>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                </AvatarGroup>

                            </td>
                        </tr>
                        <tr className="border border-[#E2E2E2]">
                            <td className="px-2 flex items-center gap-1 text-[15px] font-medium">
                                <img src={schoolImg} alt="" />
                                <div className='grid items-center'>
                                    <p className='text-[18px] font-medium'>Delhi public school</p>
                                    <AvatarGroup className="grid justify-end " max={5}>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </td>
                            <td className="px-2 text-[18px] font-semibold tracking-wider">
                                <p>10 tasks</p>
                            </td>
                            <td className="px-2">
                                <AvatarGroup className="grid justify-end items-center" max={5}>
                                    <Avatar
                                        alt="Participant"
                                        sx={{ width: '36px', height: '36px' }}
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                </AvatarGroup>

                            </td>
                        </tr>
                        <tr className="border border-[#E2E2E2]">
                            <td className="px-2 flex items-center gap-1 text-[15px] font-medium">
                                <img src={schoolImg} alt="" />
                                <div className='grid items-center'>
                                    <p className='text-[18px] font-medium'>Delhi public school</p>
                                    <AvatarGroup className="grid justify-end " max={5}>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                        <Avatar
                                            className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                            alt="Participant"
                                            src={Person}
                                        >
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </td>
                            <td className="px-2 text-[18px] font-semibold tracking-wider">
                                <p>10 tasks</p>
                            </td>
                            <td className="px-2">
                                <AvatarGroup className="grid justify-end " max={5}>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                    <Avatar
                                        className="rounded-full w-[29px] h-[29px] flex items-center text-red-50 justify-center"
                                        alt="Participant"
                                        src={Person}
                                    >
                                    </Avatar>
                                </AvatarGroup>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center my-4 text-[18px] text-[#797979] font-semibold tracking-wide'>
                    <button>See all</button>
                </div>
                {/* <Pagination className="grid justify-center mt-10" count={2} color="primary" /> */}
            </div>
            <div className='border-[#EEE] border-2 shadow-sm h-[522px] rounded-md'>
                <div className='grid items-center mt-24 align-middle justify-center justify-items-center'>
                <PieChart
                    series={[
                        {
                            innerRadius: 70,
                            outerRadius: 80,
                            data: data1,
                        },
                        {
                            innerRadius: 100,
                            outerRadius: 120,
                            data: data2,
                        },
                    ]}
                    width={522}
                    height={300}
                    slotProps={{
                        legend: { hidden: true },
                    }}
                />
                <div>
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

export default SchoolDashboardTop;