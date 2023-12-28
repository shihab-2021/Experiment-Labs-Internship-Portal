import React from 'react';

const MyTask = () => {
    return (
        <div className="shadow-lg bg-white flex min-h-[242px] max-w-[395px] min-w-[395px] flex-col rounded-md">
            <div className="text-black ml-8 mt-6 text-lg font-bold tracking-widest">
                My task (03)
            </div>
            <div className='ml-8 mt-6 flex flex-col gap-1'>
                <div className="justify-between items-center self-stretch flex max-w-[302px] gap-5 py-1.5 border-b-stone-300 border-b border-solid">
                    <div className="text-zinc-800 text-lg font-medium tracking-widest my-auto">
                        1.Marketing task
                    </div>
                    <div className="justify-center items-center border self-stretch flex aspect-square flex-col w-6 h-6 px-1.5 rounded-2xl border-solid border-zinc-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d35140efa1758254e3f977301c33b238506d35c4466c5b404310153203f103?"
                            className="aspect-[1.3] object-contain object-center w-full stroke-[2px] stroke-zinc-800 overflow-hidden"
                        />
                    </div>
                </div>
                <div className="justify-between items-center self-stretch flex max-w-[302px] gap-5 py-1.5 border-b-stone-300 border-b border-solid">
                    <div className="text-zinc-800 text-lg font-medium tracking-widest my-auto">
                        2.Marketing task
                    </div>
                    <div className="justify-center items-center border self-stretch flex aspect-square flex-col w-6 h-6 px-1.5 rounded-2xl border-solid border-zinc-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d35140efa1758254e3f977301c33b238506d35c4466c5b404310153203f103?"
                            className="aspect-[1.3] object-contain object-center w-full stroke-[2px] stroke-zinc-800 overflow-hidden"
                        />
                    </div>
                </div>
                <div className="justify-between items-center self-stretch flex max-w-[302px] gap-5 py-1.5 border-b-neutral-300 border-b border-solid">
                    <div className="text-stone-900 text-center text-lg font-medium tracking-widest my-auto">
                        3.Marketing task
                    </div>
                    <div className="justify-center items-center border bg-indigo-700 self-stretch flex aspect-square flex-col w-6 h-6 px-1.5 rounded-2xl border-solid border-stone-900">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8247045eb8f2b1e4c48a401f54a9fa5bf2c1a3b363cba9aa5c4e9d577004f21d?"
                            className="aspect-[1.3] object-contain object-center w-full stroke-[2px] stroke-white overflow-hidden"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyTask;