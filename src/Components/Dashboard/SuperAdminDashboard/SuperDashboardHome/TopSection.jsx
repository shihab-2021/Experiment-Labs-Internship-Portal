import React, { useContext, useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import profileImg from '../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthProvider';
const TopSection = () => {
    const [companiesTask, setCompaniesTask] = useState({});
    useEffect(() => {
        axios
            .get(
                `${import.meta.env.VITE_APP_SERVER_API
                }/api/v1/stats/companiesTask`
            )
            .then((data) => {
                setCompaniesTask(data?.data);
            })
            .catch((error) => console.error(error));
    }, []);
    const { userInfo } = useContext(AuthContext);
    // console.log(userInfo)
    const getInitials = () => {
        const firstNameInitial =
            userInfo?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}${lastNameInitial}`;
    };
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        // Generate a random background color if it hasn't been generated yet
        if (!backgroundColor) {
            setBackgroundColor(getRandomColor());
        }

        // Your existing useEffect logic...
    }, [userInfo, backgroundColor]);
    return (
        <div className="w-11/12 mx-auto mt-14">
            <div className='flex justify-between gap-2'>
                <div>
                    <div
                        style={{
                            borderRadius: "14px",
                            border: "1px solid #DDD",
                        }}
                        className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-9/12 h-[48px] "
                    >
                        <FaMagnifyingGlass />
                        <input className="w-full" placeholder="Search"></input>
                    </div>
                    <h1 className="text-[20px] font-semibold tracking-widest">Home</h1>
                    <div className='grid grid-cols-5 gap-2 mt-2'>
                        <div className="justify-center shadow-sm bg-indigo-800 flex flex-col px-2 rounded-md py-6">
                            <div className="justify-between flex">
                                <div className="text-white text-sm font-medium tracking-widest">
                                    Register Companies
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                                {companiesTask?.totalCompanies}
                            </div>
                        </div>
                        <div className="justify-center shadow-sm bg-[#8064F0] flex flex-col px-2 rounded-md py-6">
                            <div className="justify-between flex">
                                <div className="text-white text-sm font-medium tracking-widest">
                                    Total task post
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                                {companiesTask?.totalTaskPosts}
                            </div>
                        </div>
                        <div className="justify-center shadow-sm bg-[#F1511B] flex flex-col px-2 rounded-md py-6">
                            <div className="justify-between flex">
                                <div className="text-white text-sm font-medium tracking-widest">
                                    Decision pending
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                                {companiesTask?.Pending}
                            </div>
                        </div>
                        <div className="justify-center shadow-sm bg-[#20B15A] flex flex-col px-2 rounded-md py-6">
                            <div className="justify-between flex">
                                <div className="text-white text-sm font-medium tracking-widest">
                                    Approved tasks
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                                {companiesTask?.AdminApproved}
                            </div>
                        </div>
                        <div className="justify-center shadow-sm bg-[#DD2025] flex flex-col px-2 rounded-md py-6">
                            <div className="justify-between flex">
                                <div className="text-white text-sm font-medium tracking-widest">
                                    Rejected tasks
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                                {companiesTask?.Rejected || 0}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center border flex flex-col w-[197px] h-[197px] px-7 rounded-xl border-solid border-neutral-200 py-2">
                    <div className="aspect-[1.09] object-contain object-center w-full overflow-hidden rounded-[80%]">
                        <div
                            className="w-full h-full flex items-center text-red-50 justify-center text-5xl font-bold"
                            style={{ backgroundColor }}
                        >
                            {getInitials()}
                        </div>
                    </div>
                    <div className="text-zinc-800 text-xl font-medium tracking-[2px] self-stretch whitespace-nowrap mt-1.5 text-center">
                        {userInfo?.firstName} {userInfo?.lastName}
                    </div>
                    <div className="text-zinc-800 text-base font-medium tracking-widest self-stretch whitespace-nowrap mt-2 text-center">
                    Super Admin
                    </div>
                </div>
            </div>




        </div>
    );
};

export default TopSection;