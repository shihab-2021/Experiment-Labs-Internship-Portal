import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
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
import { FaRegCheckCircle } from "react-icons/fa";
import stdImg from "../../../assets/Dashboard/AdminDashboard/profile1.svg";
import { Link } from "react-router-dom";
const AdminDashboardBar = () => {
  const pieChartdata = [
    { statusInfo: "4 Considering solutions", value: 4 },
    { statusInfo: "10 Solution in progress", value: 10 },
    { statusInfo: "12 Solution selected", value: 12 },
    { statusInfo: "6 Solution rejected", value: 6 },
  ];
  const COLORS = ["#20B15A", "#2196F3", "#E8B912", "#DD2025"];
  const barChartData = [
    { task: "", tasks_done: 0 },
    { task: "", tasks_done: 0 },
    { task: "", tasks_done: 0 },
    { task: "logo design", tasks_done: 6 },
    { task: "Animation task", tasks_done: 4 },
  ];
  const myTasks = [
    {
      task: "Animation task",
      status: "pending",
    },
    {
      task: "Logo design",
      status: "pending",
    },
    {
      task: "UI & UX",
      status: "done",
    },
  ];
  const yTicks = [2, 4, 6, 8, 10, 12, 14];
  return (
    <div className="w-11/12 mx-auto mt-14">
      <h1 className="text-[20px] font-medium tracking-widest">Dashboard</h1>
      {/*top section*/}
      <div className="flex gap-[14px] mt-5">
        <div className="bg-[#8064F0] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-medium">New Task</h1>
            <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
          </div>
          <p className="text-[45px] font-bold">3</p>
        </div>
        <div className="bg-[#2196F3] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-medium">In Progress</h1>
            <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
          </div>
          <p className="text-[45px] font-bold">10</p>
        </div>
        <div className="bg-[#20B15A] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-medium">Completed</h1>
            <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
          </div>
          <p className="text-[45px] font-bold">22</p>
        </div>
        <div className="bg-[#DD2025] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-medium">Rejected</h1>
            <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
          </div>
          <p className="text-[45px] font-bold">6</p>
        </div>
        <div className="bg-[#E8B912] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-medium">Selected</h1>
            <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
          </div>
          <p className="text-[45px] font-bold">12</p>
        </div>
      </div>
      {/*statistics*/}
      <div className="mt-10 flex justify-between">
        <div className="bg-[#FFF] border shadow-md p-4 rounded-md w-[471px] h-[290px]">
          <div className="flex justify-between pb-4">
            <p className="text-[17px] tracking-widest font-medium">
              Incomplete task by section
            </p>
            <p className="flex items-center text-[17px] tracking-widest font-medium">
              1{" "}
              <button>
                <CiFilter></CiFilter>
              </button>
            </p>
          </div>
          <BarChart
            width={382}
            height={200}
            data={barChartData}
            margin={{
              top: -5,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="task" />
            <YAxis ticks={yTicks} />
            <Tooltip />

            <Bar
              type="monotone"
              dataKey="tasks_done"
              fill="#FF557F"
              activeDot={{ r: 8 }}
            />
          </BarChart>
        </div>

        <div className="mt-5">
          <h1 className="text-[17px] font-bold tracking-wide mb-3">
            Status of Solution
          </h1>
          <div className="flex items-center gap-3">
            <PieChart width={200} height={170}>
              <Tooltip></Tooltip>
              <Pie
                data={pieChartdata}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={-270}
                endAngle={-630}
                dataKey="value"
              >
                {pieChartdata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  className="text-[18px] text-black font-medium"
                  value="32 students"
                  position="center"
                />
              </Pie>
            </PieChart>
            <div>
              {pieChartdata.map((data, index) => (
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
        <div></div>
      </div>
      {/*bottom section */}
      <div className="flex justify-between mt-4 mb-8">
        <div className="border border-[#F0F0F0] shadow-md w-[395px] h-[242px]">
          <p className="w-5/6 mx-auto text-[18px] font-bold tracking-wide mt-[34px]">
            My tasks ({myTasks.length})
          </p>
          {myTasks.map((task, index) => (
            <div
              key={index}
              className="w-5/6 mx-auto border-b border-[#C7C7C7] pt-[17px] text-[16px] font-medium flex justify-between"
            >
              <p className="text-black text-[18px] font-medium tracking-wide">
                {index + 1}. {task?.task}{" "}
              </p>
              {task?.status === "pending" ? (
                <FaRegCheckCircle className=" w-6 h-6 opacity-70" />
              ) : (
                <FaRegCheckCircle className=" rounded-full fill-[#4555BA] w-6 h-6" />
              )}
            </div>
          ))}
        </div>
        <div className="border border-[#EEF0FF] rounded-md shadow-md w-[492px] h-[242px]">
          <p className="w-11/12 mx-auto text-[18px] font-bold tracking-wide mt-[16px] mb-4">
            Message
          </p>
          <div className="w-11/12 mx-auto flex items-center justify-between border-b border-[#D9D9D9]">
            <div className="flex items-center">
              <img src={stdImg} alt="" />
              <p>
                Anjali <span>10th class student</span>
              </p>
            </div>
            <Link to='/message' className="mb-1 py-[9px] px-[16px] text-[18px] text-white tracking-wider font-medium rounded-[26px] bg-[#17A1FA]">
              Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardBar;
