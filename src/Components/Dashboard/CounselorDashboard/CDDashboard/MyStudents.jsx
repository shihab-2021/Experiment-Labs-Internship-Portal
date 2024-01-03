import React from 'react';

const MyStudents = () => {
    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] w-full flex-col rounded-2xl border-solid border-stone-300 px-5'>
            <div className='flex justify-between'>
                <div className="text-black text-center text-lg font-medium tracking-widest">
                    My Students
                </div>
                <div className="items-center bg-white flex flex-col justify-center w-6 h-6">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04107d753084b5e6f681650400a26013e04ae54aa18202c4e8de20a815352f34?"
                        className="aspect-[1.5] object-contain object-center w-full fill-zinc-800 overflow-hidden"
                    />
                </div>
            </div>
            <div>
                <div className="border flex justify-between items-center gap-3 px-3 rounded-lg border-solid border-gray-200 my-2">
                    <div className="flex justify-between gap-2 mt-1 px-2.5">
                        <img
                            loading="lazy"
                            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GKbx3SeXAYyttHK-dNvdxQFUtp6qjRelFA&usqp=CAU"
                            className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                        />
                        <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
                            <div className="text-neutral-700 text-lg font-medium tracking-widest whitespace-nowrap">
                                Harshita verma
                            </div>
                            <div className="text-zinc-600 text-sm font-medium leading-5 tracking-widest whitespace-nowrap mt-1">
                                UI AND UX TASK
                            </div>
                        </div>
                    </div>
                    <div className="text-zinc-600 text-center text-sm font-medium leading-5 tracking-widest">
                        Magic pin
                    </div>
                    <div className="text-yellow-500 text-center text-sm font-medium leading-5 tracking-widest">
                        Selected
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56bf546aabf544dd19969f685a8a28f7c8c71dcea03ee8ff8d6f5816fc17a7b8?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </div>
                <div className="border flex justify-between items-center gap-3 px-3 rounded-lg border-solid border-gray-200 my-2">
                    <div className="flex justify-between gap-2 mt-1 px-2.5">
                        <img
                            loading="lazy"
                            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GKbx3SeXAYyttHK-dNvdxQFUtp6qjRelFA&usqp=CAU"
                            className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                        />
                        <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
                            <div className="text-neutral-700 text-lg font-medium tracking-widest whitespace-nowrap">
                                Harshita verma
                            </div>
                            <div className="text-zinc-600 text-sm font-medium leading-5 tracking-widest whitespace-nowrap mt-1">
                                UI AND UX TASK
                            </div>
                        </div>
                    </div>
                    <div className="text-zinc-600 text-center text-sm font-medium leading-5 tracking-widest">
                        Magic pin
                    </div>
                    <div className="text-red-500 text-center text-sm font-medium leading-5 tracking-widest">
                        Rejected
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56bf546aabf544dd19969f685a8a28f7c8c71dcea03ee8ff8d6f5816fc17a7b8?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </div>
            </div>
            <div className="text-sky-500 text-center text-lg font-medium tracking-widest my-1">
                Show more
            </div>
        </div>
    );
};

export default MyStudents;