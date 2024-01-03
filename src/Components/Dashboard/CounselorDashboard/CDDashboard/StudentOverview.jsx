import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    Label,
    BarChart,
    Bar,
} from "recharts";

const StudentOverview = () => {
    const pieChartData = [
        { statusInfo: `40 In progress tasks`, value: 40 },
        { statusInfo: `15 Selected students`, value: 15 },
        { statusInfo: `15 Rejected students`, value: 15 },
        { statusInfo: `5 Pending submission`, value: 5 },
        { statusInfo: `15 Completed Tasks`, value: 15 },
    ];
    const COLORS = ["#0A98EA", "#E8B912", "#DD2025", "#F1511B", "#20B15A"];
    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] w-full flex-col rounded-2xl border-solid border-stone-300'>
            <div className="text-black text-xl font-medium tracking-[2px] mb-10 ml-5">
                Students overview
            </div>
            <div className="flex gap-3 items-center">
                <PieChart width={300} height={300}>
                    <Tooltip></Tooltip>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={100}
                        startAngle={-270}
                        endAngle={-630}
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
                <div>
                    {pieChartData.map((data, index) => (
                        <div className="flex items-center gap-3 py-1" key={index}>
                            <div
                                className="w-[33px] h-[21px] "
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <p className="text-[16px] tracking-wider font-medium font-Raleway">
                                {data.statusInfo}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentOverview;