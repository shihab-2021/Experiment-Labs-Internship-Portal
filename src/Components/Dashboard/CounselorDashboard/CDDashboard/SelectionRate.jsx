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

const SelectionRate = (
    {
        allTasks,
        pending,
        selected,
        rejected,
        progress,
    }
) => {
    const pieChartData = [
        { statusInfo: `${allTasks.totalStudents || 0} Student`, value: allTasks.totalStudents || 0 },
        { statusInfo: `${progress.length + pending.length + selected.length || 0} Tasks Submission`, value: progress.length + pending.length + selected.length || 0 },
        { statusInfo: `${selected.length || 0} Completed Tasks`, value: selected.length || 0 },
    ];
    const COLORS = ["#8064F0", "#20B15A", "#E8B912"];
    return (
        <div className='border shadow-lg bg-white flex justify-center min-w-[430px] max-w-[430px] flex-col rounded-2xl border-solid border-stone-300 py-5 px-5'>
            <div className="flex gap-3 items-center">
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
                    </Pie>
                </PieChart>
                <div>
                    {pieChartData.map((data, index) => (
                        <div className="flex items-center gap-3 py-1" key={index}>
                            <div
                                className="max-w-[33px] min-w-[33px] max-h-[21px] min-h-[21px]"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <p className="text-[16px] font-medium font-Raleway">
                                {data.statusInfo}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="text-black text-center font-medium tracking-[2px] mb-10 ml-5 mt-5">
                Students selection rate is {((selected.length*100)/(progress.length + pending.length + selected.length)).toFixed(2)}%
            </div> */}
        </div>
    );
};

export default SelectionRate;