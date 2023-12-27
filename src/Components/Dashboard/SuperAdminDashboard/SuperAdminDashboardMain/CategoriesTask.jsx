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

const CategoriesTask = () => {
    const pieChartData = [
        { statusInfo: `20 Marketing task`, value: 20 },
        { statusInfo: `10 UI AND UX`, value: 10 },
        { statusInfo: `5 Video editing`, value: 5 },
        { statusInfo: `5 Content writer`, value: 5 },
        { statusInfo: `4 Sales`, value: 4 },
        { statusInfo: `4 Finance`, value: 4 },
        { statusInfo: `4 Typing`, value: 4 },
        { statusInfo: `28 other`, value: 28 }
    ];
    const COLORS = ["#FF557F","#FFDB70","#9747FF","#9CAAFF","#38C0C9","#2196F3","#F08323","#20B15A"];
    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] w-full flex-col rounded-2xl border-solid border-stone-300'>
            <div className="text-black text-xl font-medium tracking-[2px] mb-10 ml-5">
                Categories of task
            </div>
            <div className="flex flex-row gap-3 items-center">
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
                            value={`${70} task Categories`}
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

export default CategoriesTask;