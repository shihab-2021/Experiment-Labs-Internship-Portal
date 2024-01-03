//CDHomeMyTopHourStudents
import React from 'react';
import man1 from '../../../../assets/Dashboard/SuperAdminDashboard/man1.svg'
import man2 from '../../../../assets/Dashboard/SuperAdminDashboard/man2.svg'

const CDHomeMyTopHourStudents = () => {
    return (
        <div className='border shadow-lg bg-white flex min-w-[330px] w-[40%] flex-col rounded-2xl border-solid border-stone-300 px-5 min-h-[380px]'>
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
            <div
              style={{
                borderRadius: "6px",
                border: "1px solid #E8E8E8"
            }}
            className='flex justify-between items-center px-[6px] mt-2'>
                <div
                  
                    className='flex items-center gap-2  w-[60%]'>
                    <img src={man1} className='w-[52px] h-[52px] rounded-full' alt='profile' />
                    <h1 className='text-[17px] font-semibold text-[#797979]'>Harshita verma</h1>
                </div>
                <div className=' w-[40%] text-right'>
                    <h1 className='text-[17px] font-semibold text-[#797979]'>10hrs 30m</h1>
                </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                border: "1px solid #E8E8E8"
            }}
            className='flex justify-between items-center px-[6px] mt-2'>
                <div
                  
                    className='flex items-center gap-2  w-[60%]'>
                    <img src={man1} className='w-[52px] h-[52px] rounded-full' alt='profile' />
                    <h1 className='text-[17px] font-semibold text-[#797979]'>Harshita verma</h1>
                </div>
                <div className=' w-[40%] text-right'>
                    <h1 className='text-[17px] font-semibold text-[#797979]'>10hrs 30m</h1>
                </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                border: "1px solid #E8E8E8"
            }}
            className='flex justify-between items-center px-[6px] mt-2'>
                <div
                  
                    className='flex items-center gap-2  w-[60%]'>
                    <img src={man1} className='w-[52px] h-[52px] rounded-full' alt='profile' />
                    <h1 className='text-[17px] font-semibold text-[#797979]'>Harshita verma</h1>
                </div>
                <div className=' w-[40%] text-right'>
                    <h1 className='text-[17px] font-semibold text-[#797979]'>10hrs 30m</h1>
                </div>
            </div>

            <button className="text-sky-500 text-base font-medium tracking-widest text-center mt-auto pb-5">
                Show More
            </button>
        </div>
    );
};

export default CDHomeMyTopHourStudents;