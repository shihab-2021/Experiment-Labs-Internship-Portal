import React from 'react';
import man1 from '../../../../assets/Dashboard/SuperAdminDashboard/man1.svg';

const MessageBottom = () => {
    return (
        <div className="shadow-lg bg-white flex min-h-[242px] min-w-[555px] w-full flex-col rounded-md pt-6 px-8 gap-5">
            <div className="text-black text-lg font-bold tracking-widest">
                Message
            </div>
            <div>
                <div className="justify-between items-stretch flex w-full gap-5 border-b-zinc-300 border-b border-solid max-md:flex-wrap">
                    <div className="justify-between items-stretch flex gap-3">
                        <img
                            loading="lazy"
                            srcSet={man1}
                            className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                        />
                        <div className="items-stretch flex grow basis-[0%] flex-col pr-4 self-start">
                            <div className="text-stone-900 text-lg font-medium tracking-widest">
                                Anjali
                            </div>
                            <div className="text-neutral-500 text-base font-medium tracking-widest whitespace-nowrap mt-1">
                                Marketing task <span className="font-bold">My task</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-lg font-medium tracking-widest whitespace-nowrap justify-center items-stretch bg-sky-500 self-center my-auto px-4 py-2.5 rounded-3xl">
                        Message
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageBottom;