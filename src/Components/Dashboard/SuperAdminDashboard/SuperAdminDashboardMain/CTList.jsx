import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CTList = () => {
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
      
    return (
        <div className='flex gap-5'>
            <div className="justify-center items-stretch shadow-sm bg-indigo-800 flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
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
            <div className="justify-center items-stretch shadow-sm bg-[#8064F0] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
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
            <div className="justify-center items-stretch shadow-sm bg-[#F1511B] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
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
            <div className="justify-center items-stretch shadow-sm bg-[#20B15A] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
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
            <div className="justify-center items-stretch shadow-sm bg-[#DD2025] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
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
    );
};

export default CTList;