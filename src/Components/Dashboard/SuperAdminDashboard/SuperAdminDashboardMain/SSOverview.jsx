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

const SSOverview = () => {
    const pieChartData = [
        { statusInfo: `20 Decision pending`, value: 20 },
        { statusInfo: `70 Approved  task`, value: 70 },
        { statusInfo: `10 Rejected task`, value: 10 },
    ];
    const COLORS = ["#F1511B", "#2196F3", "#DD2025"];
    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] max-w-[330px] flex-col rounded-2xl border-solid border-stone-300'>
            <div className="text-black text-xl font-medium tracking-[2px] max-w-[101px] mb-10 ml-5">
                Overview
            </div>
            <div className="flex flex-col gap-3 items-center">
                <PieChart width={200} height={170}>
                    <Tooltip></Tooltip>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
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
                            className="text-[18px] text-black font-medium"
                            value={`${70 + 20 + 10} Tasks`}
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

export default SSOverview;