import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Content writer',
        ts: 40,
        as: 24,
        pd: 24,
        rs: 70
    },
    {
        name: 'Finance task',
        ts: 30,
        as: 13,
        pd: 22,
        rs: 74
    },
    {
        name: 'Animation task',
        ts: 20,
        as: 98,
        pd: 22,
        rs: 67
    },
    {
        name: 'Graphic task',
        ts: 27,
        as: 39,
        pd: 20,
        rs: 79
    },
    {
        name: 'Marketing task',
        ts: 80,
        as: 38,
        pd: 20,
        rs: 90
    }
];


const COLORS = [
    {
        label: "Total Submission",
        value: "#3E4DAC"
    },
    {
        label: "Approved Submission",
        value: "#20B15A"
    },
    {
        label: "Pending Decision",
        value: "#F1511B"
    },
    {
        label: "Rejected Submission",
        value: "#DD2025"
    }
];

const SSCompanyTask = () => {


    return (
        <div className="border shadow-lg bg-white flex justify-around items-center min-h-[521px] w-full rounded-lg border-solid border-stone-300 p-8">
            <div>
                <div>
                    <div className="text-black text-xl font-bold tracking-[2px] mb-5 ml-12">
                        Company tasks
                    </div>
                </div>
                <div>
                    <BarChart
                        width={700}
                        height={450}
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
                        <Legend />
                        <Bar dataKey="ts" fill={COLORS[0].value} />
                        <Bar dataKey="as" fill={COLORS[1].value} />
                        <Bar dataKey="pd" fill={COLORS[2].value} />
                        <Bar dataKey="rs" fill={COLORS[3].value} />
                    </BarChart>
                </div>
            </div>
            <div>
                {COLORS.map((data, index) => (
                    <div className="flex items-center gap-3 py-1" key={index}>
                        <div
                            className="w-[33px] h-[21px] "
                            style={{ backgroundColor: data.value }}
                        ></div>
                        <p className="text-[16px] tracking-wider font-medium font-Raleway">
                            {data.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SSCompanyTask;

