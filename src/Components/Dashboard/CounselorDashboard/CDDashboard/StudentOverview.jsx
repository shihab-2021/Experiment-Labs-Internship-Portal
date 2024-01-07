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

const StudentOverview = ({
    allTasks,
    pending,
    selected,
    rejected,
    progress,
}) => {
    const pieChartData = [
        { statusInfo: `${progress.length || 0} In progress tasks`, value: progress.length || 0 },
        { statusInfo: `${pending.length || 0} Pending submission`, value: pending.length || 0 },
        { statusInfo: `${selected.length || 0} Completed Tasks`, value: selected.length || 0 },
    ];
    const COLORS = ["#0A98EA", "#F1511B", "#20B15A"];
    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] w-full flex-col rounded-2xl border-solid border-stone-300'>
            <div className="text-black text-xl font-medium tracking-[2px] mb-5 ml-5">
                Students overview
            </div>
            <div className="flex gap-3 items-center">
                <PieChart width={270} height={230}>
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