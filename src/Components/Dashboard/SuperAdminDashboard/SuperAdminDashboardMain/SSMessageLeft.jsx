import React, { useContext, useEffect, useState } from 'react';
import man1 from '../../../../assets/Dashboard/SuperAdminDashboard/man1.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const SSMessageLeft = () => {
    const navigate = useNavigate();
    const { userInfo } = useContext(AuthContext);
    console.log(userInfo)
    const [leaderBoard, setLeaderBoard] = useState([]);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/leaderBoard`)
            .then((tasks) => {
                setLeaderBoard(tasks?.data);
            })
            .catch((error) => console.error(error));
    }, [setLeaderBoard]);
    console.log(leaderBoard)
    const handleMessage = (studentId) => {
        axios.post(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/chats`, {
            "chatName": "",
            "isGroupChat": false,
            "users": [
                {
                    "_id": userInfo?._id,
                },
                {
                    "_id": studentId
                }
            ],
            "latestMessage": {},
            "groupAdmin": ""
        })
            .then((response) => {
                if (response.data.success) {
                    navigate('/message')
                }
                // console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
    const getInitials = (studentInfo) => {
        console.log(studentInfo)
        const firstNameInitial =
            studentInfo?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = studentInfo?.lastName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}${lastNameInitial}`;
    };
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        // Generate a random background color if it hasn't been generated yet
        if (!backgroundColor) {
            setBackgroundColor(getRandomColor());
        }
        // Your existing useEffect logic...
    }, [backgroundColor]);
    return (
        <div className="shadow-lg bg-white flex min-w-[555px] w-full flex-col rounded-md pt-6 px-8 gap-5 min-h-[380px] p-8">
            <div className='flex justify-between items-center'>
                <div className="text-black text-lg font-bold tracking-widest">
                    Top leader board Students
                </div>
                <select name="" id="" className='px-3 border bg-white rounded-md'>
                    <option value="Decision">Decision</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    leaderBoard?.map((student, index) => (
                        <div key={index} className="flex min-w-[593px] w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="items-center flex justify-between gap-3 px-5">
                                <div className="text-neutral-800 text-xl font-medium tracking-[2px] whitespace-nowrap my-auto">
                                    {index + 1}.
                                </div>
                                <div className="items-stretch self-stretch flex justify-between gap-2 px-1">
                                    <div
                                        style={{ backgroundColor: backgroundColor }}
                                        className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%] text-white"
                                    >
                                        <p className='grid object-center mt-[25%] justify-items-center'>
                                            {getInitials(student)}
                                        </p>
                                    </div>
                                    <div className="text-neutral-700 text-lg font-medium tracking-widest self-center whitespace-nowrap my-auto">
                                        {student?.firstName}
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-stretch self-center flex  flex-col my-auto ">
                                <div className="text-neutral-700 text-lg font-medium tracking-widest whitespace-nowrap">
                                    Total work Hours
                                </div>
                                <div className="text-zinc-600 text-center text-sm font-medium leading-5 tracking-widest mt-1">
                                    {student?.hours}
                                </div>
                            </div>
                            <button onClick={() => handleMessage(student?._id)} className="text-white text-lg font-medium tracking-widest whitespace-nowrap bg-sky-500 self-center justify-center my-auto px-4 py-1.5 rounded-2xl">
                                Message
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SSMessageLeft;