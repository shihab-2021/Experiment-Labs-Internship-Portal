import React from 'react';
import man1 from '../../../../assets/Dashboard/SuperAdminDashboard/man1.svg'
import man2 from '../../../../assets/Dashboard/SuperAdminDashboard/man2.svg'

const SSMessageRight = () => {
    return (
        <div className='border shadow-lg bg-white flex min-w-[330px] max-w-[330px] flex-col rounded-2xl border-solid border-stone-300 px-5 min-h-[380px]'>
            <div className="text-black text-xl font-medium tracking-[2px] mb-3 pt-5">
                Message
            </div>
            <div className="items-stretch flex justify-between gap-5 border-b-stone-300 border-b border-solid mb-2">
                <div className="flex justify-between gap-4 mt-1.5 px-1 py-1 items-start">
                    <img
                        loading="lazy"
                        srcSet={man1}
                        className="aspect-square object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                        <div className="text-black text-xl font-medium tracking-widest">
                            Abhinav
                        </div>
                        <div className="text-neutral-500 text-base font-medium tracking-widest mt-1">
                            Swiggy admin
                        </div>
                        <div className="text-black text-base font-medium tracking-widest whitespace-nowrap mt-2.5">
                            hii harsh kumar....{" "}
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a09530d450dd09be1d6adf3c7b6983385c730984c9d7195b2642796faa5aefc?"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
            <div className="items-stretch flex justify-between gap-5 border-b-stone-300 border-b border-solid">
                <div className="flex justify-between gap-4 mt-1.5 px-1 py-1 items-start">
                    <img
                        loading="lazy"
                        srcSet={man2}
                        className="aspect-square object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                        <div className="text-black text-xl font-medium tracking-widest">
                            Abhinav
                        </div>
                        <div className="text-neutral-500 text-base font-medium tracking-widest mt-1">
                            Swiggy admin
                        </div>
                        <div className="text-black text-base font-medium tracking-widest whitespace-nowrap mt-2.5">
                            hii harsh kumar....{" "}
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a09530d450dd09be1d6adf3c7b6983385c730984c9d7195b2642796faa5aefc?"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
            <button className="text-sky-500 text-base font-medium tracking-widest text-center mt-auto pb-5">
                Show More
            </button>
        </div>
    );
};

export default SSMessageRight;