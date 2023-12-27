

import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import StudentSubmissionDetails from './StudentSubmissionDetails';

const SubmissionDetails = () => {
    const [states, setStates] = useState([
        "All Students",
        "Pending Decision",
        "Approved",
        "Pending",
    ]);
    const [selectedSate, setSelectedSate] = useState(states[0]);

    const taskDetails = {
        participants: [
            {
                participantEmail: "ab@gmail.com",
                submissionId: "12121212",
                submissionDateTime: "1/2/2024",

            },
            {
                participantEmail: "ab@gmail.com",
                submissionId: "12121212",
                submissionDateTime: "1/2/2024",

            },
            {
                participantEmail: "ab@gmail.com",
                submissionId: "12121212",
                submissionDateTime: "1/2/2024",

            },
            {
                participantEmail: "ab@gmail.com",
                submissionId: "12121212",
                submissionDateTime: "1/2/2024",

            },
        ]
    }


    return (
        <div className='mx-[14px]'>
            <h1 className='text-xl font-medium mt-[40px]'>Students Submission details</h1>
            <div
                style={{
                    borderRadius: "14px",
                    border: "1px solid #DDD",
                }}
                className="mt-3 lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[35px] "
            >
                <FaMagnifyingGlass />
                <input className="w-[90%]" placeholder="Search"></input>
            </div>

            <div>

                <div className="flex flex-col items-stretch mt-[17px]">
                    <div className="flex gap-5">
                        {states?.map((state, i) =>
                            <div
                                key={i}
                                onClick={() => setSelectedSate(state)}
                                className={`text-neutral-700 text-base font-medium tracking-widest cursor-pointer relative overflow-hidden`}
                                style={{ display: 'inline-block' }}
                            >
                                <p className={`${state === 'All Students' ? 'text-[#3E4DAC]' : ''}
                                ${state === 'Pending Decision' ? 'text-[#F1511B]' : ''}
                                ${state === 'Approved' ? 'text-[#20B15A]' : ''}
                                ${state === 'Pending' ? 'text-[#DD2025]' : ''}
                                
                                `}>{state}</p>

                                {selectedSate === state && (
                                    <hr className="h-1.5 bg-blue-800 mt-1" />
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className=' mt-[31px]'>
                    {selectedSate === "All Students" && (<>
                        <div
                            className=" flex  text-[#3F3F3F] items-center justify-between py-[14px] mb-2 "
                            style={{
                                borderRadius: "7px",
                                border: "1px solid #EEE",
                                background: "#F0F2FF",
                                boxShadow: "0px 4px 20px 0px #EFF1FF",
                            }}
                        >
                            <div className="text-center font-medium text-xl">
                             <h1 className='ms-5'>Students name</h1>
                            </div>
                            <div className="text-center">
                                <h1 className=" text-xl font-medium w-[50%] ms-[90px]">Company</h1>
                                
                            </div>
                            <div className="flex justify-center text-center">
                                <h1 className=" text-xl font-medium w-[50%] ms-[40px]">Submission time</h1>
                                
                            </div>
                            <div className="text-center flex justify-center">
                                <p className=" text-xl font-medium w-[100%] ms-[40px]">Decision</p>
                            </div>
                            <div className="text-center flex justify-center  ms-[50px]">
                                <h1 className="text-xl font-medium w-[50%] ">Task details</h1>
                            
                            </div>
                            <div className="text-center flex justify-center ">
                                <h1 className="text-xl font-medium w-[50%]">Submission details</h1>
                               
                            </div>

                        </div>
                        <div>

                            {
                                taskDetails?.participants?.map((item) =>
                                    <StudentSubmissionDetails item={item} />
                                )
                            }
                        </div>
                    </>


                    )
                    }
                    {selectedSate === "Pending Decision" && <p>Pending Decision</p>}
                    {selectedSate === "Approved" && <p>Approved</p>}
                    {selectedSate === "Pending" && <p>Pending</p>}
                </div>
            </div>
        </div>
    );
};

export default SubmissionDetails;