//CDHomeMyStudentStatus

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

const CDHomeMyStudentStatus = () => {
    const pieChartData = [
        { statusInfo: `50 My Students`, value: 20 },
        { statusInfo: `10 Selected Students in task`, value: 10 },
        { statusInfo: `40 In progress tasks`, value: 5 },
        { statusInfo: `15 Completed tasks`, value: 5 },
        { statusInfo: `5 pending submission`, value: 4 },
        { statusInfo: `5 Rejected in  tasks`, value: 4 },
       
    ];
    const COLORS = ["#3E4DAC","#E8B912","#0A98EA","#20B15A","#F1511B","#DD2025"];
    return (
        <div className='border shadow-lg bg-white flex py-8 w-[60%] pe-4 flex-col rounded-2xl border-solid border-stone-300'>
            <div className="text-black text-base font-medium tracking-[2px] mb-10 ml-24">
            My Students Status in tasks
            </div>
            <div className="flex justify-between items-center">
                <PieChart width={300} height={270}>
                    <Tooltip></Tooltip>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={120}
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
                        <Label
                            className="text-[18px] text-black font-bold w-[80px]"
                            value={`${70} My Students `}
                            position="center"
                        />
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

export default CDHomeMyStudentStatus;