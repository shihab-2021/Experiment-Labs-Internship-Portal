//CDHomeMyTopHourStudents
import React, { useContext, useEffect, useState } from 'react';
import man1 from '../../../../assets/Dashboard/SuperAdminDashboard/man1.svg'
import man2 from '../../../../assets/Dashboard/SuperAdminDashboard/man2.svg'
import { AuthContext } from '../../../../Contexts/AuthProvider';
import axios from 'axios';
import Loading from '../../../Shared/Loading/Loading';

const CDHomeMyTopHourStudents = () => {
    const [topHoursStudents, setTopHoursStudents] = useState([]);

    const { userInfo } = useContext(AuthContext);


    useEffect(() => {
        // Show a loading spinner while the login process is in progress
        Loading();
        if (userInfo?.organizations) {
            axios
                .get(
                    `${import.meta.env.VITE_APP_SERVER_API
                    }/api/v1/taskSubmissions/leaderBoard/counsellorId/${userInfo?.organizations[0]?.counsellorId
                    }`
                )
                .then((tasks) => {
                    setTopHoursStudents(tasks?.data);
                })
                .catch((error) => console.error(error))
                .finally(() => {

                    Loading().close();
                });
        }
    }, [userInfo]);
    console.log(topHoursStudents)
    const getInitials = (stdName) => {
        const firstNameInitial =
            stdName?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial =
            stdName?.lastName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}${lastNameInitial}`;
    };
    const getRandomColor = (index) => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const [backgroundColors, setBackgroundColors] = useState([]);

    useEffect(() => {
        // Generate random background colors for each student
        const colors = getRandomColor();
        setBackgroundColors(colors);
    }, []);
    return (
        <div className='border shadow-lg bg-white flex min-w-[330px] w-[40%] flex-col rounded-2xl border-solid border-stone-300 px-5  h-[400px] pb-5'>
            <div className="text-[#3F3F3F] text-xl font-medium tracking-[2px] mb-3 pt-5">
                My top hours Students
            </div>
            <div className='flex justify-between items-center'>
                <div className=' w-[60%]'>
                    <h1 className='text-[16px] font-medium text-[#797979]'>Students name</h1>
                </div>
                <div className=' w-[40%] text-right'>
                    <h1 className='text-[16px] font-medium text-[#797979]'>Work hours</h1>
                </div>
            </div>
            {
                topHoursStudents && topHoursStudents.map((student, index) => (
                    <div
                        key={index}
                        style={{
                            borderRadius: "6px",
                            border: "1px solid #E8E8E8"
                        }}
                        className='flex justify-between items-center px-[6px] mt-2'>
                        <div

                            className='flex items-center gap-2  w-[60%]'>
                            <div
                                style={{ backgroundColor: getRandomColor(index) }}
                                className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                            >
                                <p className='grid object-center mt-[25%] justify-items-center text-red-100'>
                                    {getInitials(student)}
                                </p>
                            </div>
                            {/* <img src={man1} className='w-[52px] h-[52px] rounded-full' alt='profile' /> */}
                            <h1 className='text-[17px] font-semibold text-[#797979]'>{student?.firstName} {student?.lastName}</h1>
                        </div>
                        <div className=' w-[40%] text-right'>
                            <h1 className='text-[17px] font-semibold text-[#797979]'>{student?.hours || 0}hrs </h1>
                        </div>
                    </div>
                ))
            }



            {/*   <button className="text-sky-500 text-base font-medium tracking-widest text-center mt-auto pb-5">
                Show More
            </button> */}
        </div>
    );
};

export default CDHomeMyTopHourStudents;