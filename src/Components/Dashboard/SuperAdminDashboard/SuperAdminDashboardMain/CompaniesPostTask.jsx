import React from 'react';

const CompaniesPostTask = () => {
    return (
        <div className="items-stretch border shadow-lg bg-white flex min-w-[653px] flex-col px-3 py-2.5 rounded-2xl border-solid border-neutral-200 w-full">
            <div className="items-center flex justify-between gap-5 px-px py-1 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-medium tracking-widest shrink basis-auto my-auto">
                    Companies that post task
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b1dc969d351a4d46b96fa8f42d7a0bf7a21daa864c7931f96a3f63b4411492?"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-4 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-2 max-md:max-w-full max-md:flex-wrap">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Flipkart
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[100px] shrink-0 max-w-full h-7 flex-col rounded-2xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    20
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Star bucks
                    </div>
                    <div className="bg-indigo-200 flex w-[408px] shrink-0 max-w-full h-7 flex-col my-auto rounded-2xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    18
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Noddle
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[371px] shrink-0 max-w-full h-7 flex-col rounded-3xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    16
                </div>
            </div>
            <div className="items-stretch flex justify-between gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Swiggy
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[100px] shrink-0 max-w-full h-7 flex-col rounded-2xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    14
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Arena
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[285px] shrink-0 max-w-full h-7 flex-col rounded-3xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    10
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Zomato
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[279px] shrink-0 max-w-full h-7 flex-col rounded-3xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    8
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex justify-between pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        Magic pin
                    </div>
                    <div className="bg-indigo-200 self-stretch flex w-[251px] shrink-0 max-w-full h-7 flex-col rounded-3xl" />
                </div>
                <div className="text-black text-lg font-medium tracking-widest whitespace-nowrap my-auto">
                    6
                </div>
            </div>
            <div className="text-black text-xl font-medium tracking-[2px] whitespace-nowrap text-center items-center bg-slate-50 mt-2.5 px-16 py-2.5 max-md:max-w-full max-md:px-5">
                show more
            </div>
        </div>
    );
};

export default CompaniesPostTask;