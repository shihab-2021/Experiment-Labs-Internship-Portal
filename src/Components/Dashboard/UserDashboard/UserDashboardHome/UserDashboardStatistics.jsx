import { Tooltip } from "@mui/material";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const UserDashboardStatistics = () => {
    const barChartData = [
        { task: "Week 1", tasks_done: 5 },
        { task: "Week 2", tasks_done: 10 },
        { task: "Week 3", tasks_done: 5 },
        { task: "Week 4", tasks_done: 3 },
        { task: "Week 5", tasks_done: 10 },
    ];
    const yTicks = [1, 5, 10, 15, 20];
    return (
        <div className="my-6 flex justify-between items-center">
            <div className="bg-[#F5F4FF] rounded-2xl shadow-md w-[507px] h-[310px]">
                <div className="w-11/12 mx-auto">
                    <h1 className="text-[21px] font-bold tracking-widest mt-2 mb-6">Task</h1>
                    <BarChart
                        width={382}
                        height={220}
                        data={barChartData}
                        margin={{
                            top: -5,
                            right: 10,
                            left: 20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} horizontal={false} />
                        <XAxis dataKey="task" />
                        <YAxis ticks={yTicks} />
                        <Tooltip />

                        <Bar
                            type="monotone"
                            dataKey="tasks_done"
                            fill="#BEC9FF"
                            activeDot={{ r: 8 }}
                        />
                    </BarChart>
                </div>
            </div>
            <div className="bg-[#F5F4FF] rounded-2xl shadow-md w-[400px] h-[275px]">
                <div className="w-11/12 mx-auto">
                    <h1 className="text-[21px] font-bold tracking-widest mt-2 mb-4">Task Submission</h1>
                    <div>
                    <div className="flex items-center">
                        <h1 className="text-sm">UI AND UX</h1>
                        <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-lg h-2">
                                    <div
                                        className="bg-[#3E4DAC] h-2 rounded-lg"
                                        style={{ width: `100%` }}
                                    ></div>
                                </div>
                            </div>
                    </div>
                    <p className="text-end">Completed</p>
                    </div>
                    <div>
                    <div className="flex items-center">
                        <h1 className="text-sm">Logo Design</h1>
                        <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-lg h-2">
                                    <div
                                        className="bg-[#3E4DAC] h-2 rounded-lg"
                                        style={{ width: `30%` }}
                                    ></div>
                                </div>
                            </div>
                    </div>
                    <p className="text-end">In Progress</p>
                    </div>
                    <div>
                    <div className="flex items-center">
                        <h1 className="text-sm">Graphic Design</h1>
                        <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-lg h-2">
                                    <div
                                        className="bg-[#3E4DAC] h-2 rounded-lg"
                                        style={{ width: `60%` }}
                                    ></div>
                                </div>
                            </div>
                    </div>
                    <p className="text-end">In Progress</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardStatistics;