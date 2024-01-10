
import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


import Person from "../../../../assets/Home/Person.png";


const SDDashboardMiddle = ({ topStudentsData, schoolName }) => {

    console.log(topStudentsData)

    const getInitials = (data) => {
        const firstNameInitial = data?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = data?.lastName?.charAt(0)?.toUpperCase() || "";
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
      }, [topStudentsData , backgroundColor]);

    const participant_in_tasks = [0];
    const select_in_tasks = [0];
    const reject_in_tasks = [0];
    return (
        <div className='flex justify-between items-center mb-5'>
            {/*   <div className="w-3/5 h-[533px] border-[#E8E8E8] border-2 shadow-sm rounded-md my-8">
                <div className='w-11/12 mx-auto my-2 font-medium tracking-wide flex justify-between mt-6'>
                    <p className=''>Students performance by tasks</p>
                    <select className=' border-[#E3E3E3] font-medium w-[180px] border-2 rounded-md py-[8px]' name="schools" id="schools">
                        <option className='' value="schools">Schools</option>
                    </select>
                </div>
                <div className='mt-10' style={{ width: '100%', height: '400px' }}>
                    
                    <BarChart
                        series={[
                            { data: participant_in_tasks, label: 'Participant in tasks', id: 'pvId', color: '#8064F0' },
                            { data: select_in_tasks, label: 'Select in tasks', id: 'svId', color: '#E8B912' },
                            { data: reject_in_tasks, label: 'Reject in tasks', id: 'rvId', color: '#DD2025' },
                        ]}
                        yAxis={[{ min: 10, max: 180  }]}
                        grid={{ x: true, y: false }} 
                    />
                </div>
           
            </div> */}
            <div className='border-[#EEE] w-[35%] border-2 shadow-sm h-[522px] rounded-md'>
                <p className='w-11/12 mx-auto my-2 font-medium tracking-wide'>Top Students</p>
                {/*    <div className='grid justify-center items-center font-medium border-[#E3E3E3] rounded-md'>
                    <select className=' border-[#E3E3E3] w-[180px] border-2 rounded-md py-[8px]' name="schools" id="schools">
                        <option className='' value="schools">Schools</option>
                    </select>
                </div> */}
                <div className="overflow-x-auto  my-8">
                    <table className="table w-full ">
                        {/* head */}
                        <thead className="bg-[#F6F7FF] text-[17px] font-medium rounded mt-4">
                            <tr className="text-left">
                                <th className="p-2">Students name</th>
                                <th className="p-2">Work Hours</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {
                                topStudentsData && topStudentsData.map((student) => (
                                    <tr className="border border-[#E2E2E2]">
                                        <td className="p-2 flex items-center gap-2 text-[15px] font-medium">
                                            {/*  <img className='w-[45px] h-[45px]' src={Person} alt="" /> */}
                                            <div
                                                className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                                                style={{ backgroundColor }}
                                            >
                                                {getInitials(student)}
                                            </div>
                                            <div className='grid items-center'>
                                                <p className='text-[18px] font-medium'>{student?.firstName} {student?.lastName}</p>
                                                <p className='text-[13px] font-medium'>{schoolName}</p>
                                            </div>
                                        </td>
                                        <td className="p-2 text-[16px] font-medium tracking-wider">
                                            <p>{student?.hours} hrs </p>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                    {/*     <div className='text-center my-4 text-[15.71px] text-[#0A98EA] font-medium tracking-wide'>
                        <button>See more</button>
                    </div> */}
                    {/* <Pagination className="grid justify-center mt-10" count={2} color="primary" /> */}
                </div>
            </div>
        </div>
    );
};

export default SDDashboardMiddle;