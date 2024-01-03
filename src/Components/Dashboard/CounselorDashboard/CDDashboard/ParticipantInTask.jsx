import React from 'react';
import { LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ParticipantInTask = () => {
    return (
        <div className='border shadow-lg bg-white flex justify-center min-w-[430px] max-w-[430px] flex-col rounded-2xl border-solid border-stone-300 py-5 px-5'>

            <div className='w-full flex justify-between'>
                <div className="text-zinc-500 text-lg font-semibold">
                    Participation in tasks
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58ef8da7c43f44a5aa9f831c8e36a538122ebd243a636a216db72657c15a173?"
                    className="aspect-square object-contain object-center w-full overflow-hidden max-w-[26px]"
                />
            </div>
            <div className="text-blue-950 text-5xl font-medium tracking-tighter mb-2">
                50 Students
            </div>
            <div className="text-neutral-600 text-base">
                "In which month had the most student participation in the task”
            </div>
            <div className='flex w-full justify-center'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </div>
        </div>
    );
};

export default ParticipantInTask;