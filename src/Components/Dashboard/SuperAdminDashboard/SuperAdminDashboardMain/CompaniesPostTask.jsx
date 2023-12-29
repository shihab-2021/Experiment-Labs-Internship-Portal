import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CompaniesPostTask = () => {
    const [companiesPost, setCompaniesPost] = useState();

    useEffect(() => {
        axios
            .get(
                `${import.meta.env.VITE_APP_SERVER_API}/api/v1/stats/companiesPostedTask`
            )
            .then((task) => {
                setCompaniesPost(task?.data);
            })
            .catch((error) => console.error(error));
    }, []);
    console.log(companiesPost)
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
            {companiesPost?.map((company, i) => (
                <div key={i} className="justify-between items-center flex  mt-4 max-md:max-w-full">
                    <div className="items-center flex gap-10 justify-between  max-md:max-w-full max-md:flex-wrap">
                        {/* <div className="w-[110px] text-black text-base font-medium tracking-widest">
                        {company?.orgName}
                    </div> */}
                        <img className='w-[45px] h-[45px]' src={company?.organization?.orgLogo} alt="" />
                        <div className="bg-inherit w-[40vw] shrink-0 max-w-full h-7 rounded-2xl" >
                            <div
                            className='bg-indigo-200 h-7 rounded-2xl'
                                style={{
                                    width: `${(company?.totalTasks /
                                    companiesTask?.totalTaskPosts) *
                                        100
                                        }%`,
                                }}
                            ></div>

                        </div>
                    </div>
                    <div className="text-black text-lg font-medium tracking-widest ">
                        {company?.totalTasks}
                    </div>
                </div>
            ))}
            <div className="text-black text-xl font-medium tracking-[2px] whitespace-nowrap text-center items-center bg-slate-50 mt-2.5 px-16 py-2.5 max-md:max-w-full max-md:px-5">
                show more
            </div>
        </div>
    );
};

export default CompaniesPostTask;