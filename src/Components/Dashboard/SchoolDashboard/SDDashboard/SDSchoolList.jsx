//SDSchoolList
import React from 'react';

const SDSchoolList = ({lengthData}) => {
    return (
        <div className='flex gap-5'>
            <div className="w-[160px] justify-center items-stretch shadow-sm bg-[#8064F0] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                    Total Students
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    {lengthData?.totalStudentsCount || 0}
                </div>
            </div>
            <div className="w-[160px] justify-center items-stretch shadow-sm bg-[#6278FF] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                    Total Tasks
                    </div>
                    <img
                        alt="image"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    {lengthData?.uniqueTasksCount || 0}
                </div>
            </div>
            <div className="w-[160px] justify-center items-stretch shadow-sm bg-[#0A98EA] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                    Companies
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    {lengthData?.uniqueOrganizationsCount || 0}
                </div>
            </div>
            <div className="w-[160px] justify-center items-stretch shadow-sm bg-[#E8B912] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                    Selected
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    {lengthData?.selectedSubmissionCount || 0}
                </div>
            </div>
            <div className="w-[160px] justify-center items-stretch shadow-sm bg-[#DD2025] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                    Rejected
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                {lengthData?.rejectedSubmissionCount || 0}
                </div>
            </div>

          
        </div>
    );
};

export default SDSchoolList;