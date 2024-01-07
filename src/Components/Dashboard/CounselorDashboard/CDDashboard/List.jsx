import React from 'react';

const List = () => {
    return (
        <div className='flex gap-5'>
            <div className="justify-center items-stretch shadow-sm max-w-[170px] bg-indigo-800 flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                        My Students
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    5
                </div>
            </div>
            <div className="justify-center items-stretch shadow-sm max-w-[170px] min-w-[170px] bg-[#8064F0] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                        Total tasks
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    5
                </div>
            </div>
            <div className="justify-center items-stretch shadow-sm max-w-[170px] min-w-[170px] bg-[#0A98EA] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                        In Progress tasks
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    5
                </div>
            </div>
            <div className="justify-center items-stretch shadow-sm max-w-[170px] min-w-[170px] bg-[#F1511B] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                        Pending Submission
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    5
                </div>
            </div>
            <div className="justify-center items-stretch shadow-sm max-w-[170px] min-w-[170px] bg-[#20B15A] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-white text-sm font-medium tracking-widest">
                        Completed Tasks
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                    5
                </div>
            </div>
        </div>
    );
};

export default List;