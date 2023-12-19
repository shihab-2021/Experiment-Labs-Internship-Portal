import React, { useContext } from "react";
import DashboardLayout from "../Shared/DashboardLayout";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Paytm from "../../../assets/Dashboard/AdminDashboard/paytm.svg";
import Microsoft from "../../../assets/Dashboard/AdminDashboard/microsoft.svg";
import Netflix from "../../../assets/Dashboard/AdminDashboard/netflix.svg";
import Apple from "../../../assets/Dashboard/AdminDashboard/apple.svg";
import Google from "../../../assets/Dashboard/AdminDashboard/google.svg";
import Flipkart from "../../../assets/Dashboard/AdminDashboard/flipkart.svg";
import Magicpin from "../../../assets/Dashboard/AdminDashboard/magicpin.svg";
import Airtel from "../../../assets/Dashboard/AdminDashboard/airtel.svg";
import Bigbasket from "../../../assets/Dashboard/AdminDashboard/bigbasket.svg";
import Bookmyshow from "../../../assets/Dashboard/AdminDashboard/bookmyshow.svg";
import Swiggy from "../../../assets/Dashboard/AdminDashboard/swiggy.svg";
import Myntra from "../../../assets/Dashboard/AdminDashboard/myntra.svg";
import std1 from "../../../assets/Dashboard/AdminDashboard/student1.svg";
import std2 from "../../../assets/Dashboard/AdminDashboard/student2.svg";
import std3 from "../../../assets/Dashboard/AdminDashboard/student3.svg";
import std4 from "../../../assets/Dashboard/AdminDashboard/student4.svg";
import Person from "../../../assets/Home/Person.png";
import groupIcon from "../../../assets/Dashboard/AdminDashboard/Group_icon.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const AdminDashboardHome = () => {
  const cardData = [
    // {
    //   title: "Animation Task",
    //   taskDesc: "Make an animation introduce our company vision.....",
    //   studentsImg: [
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //   ],
    //   progressBar: { current: 4, total: 12 },
    //   date: "29/Jan/2022",
    // },
    // {
    //   title: "Logo Design",
    //   taskDesc: "Make our company original logo wth introduce our......",
    //   studentsImg: [
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //   ],
    //   progressBar: { current: 6, total: 10 },
    //   date: "22/Jan/2022",
    // },
    // {
    //   title: "UI & UX",
    //   taskDesc: "Make our company landing page who have enging.....",
    //   studentsImg: [
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //     {
    //       img: Person,
    //     },
    //   ],
    //   progressBar: { current: 12, total: 12 },
    //   date: "25/Jan/2022",
    // },
  ];
  const { userInfo } = useContext(AuthContext);
  const pieChartdata = [
    { name: "Reject", value: 0 },
    { name: "Select", value: 0 },
  ];
  const COLORS = ["#DD2025", "#1976D2"];
  const lineChartdata = [
    { day: "Mon", tasks_done: 0 },
    { day: "Tues", tasks_done: 5 },
    { day: "Wed", tasks_done: 0 },
    { day: "Thur", tasks_done: 5 },
    { day: "Fri", tasks_done: 0 },
    { day: "Sat", tasks_done: 5 },
    { day: "Sun", tasks_done: 0 },
  ];

  const yTicks = [5, 10, 25, 50, 75, 100, 125, 150];

  // Function to format the date as day/month/year
  const formatDate = () => {
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()]; // Get month name
    const year = currentDate.getFullYear();
    return `${day}/ ${month}/ ${year}`;
  };

  return (
    <div className="w-11/12 mx-auto mt-14">
      {/*top section*/}
      <div className="flex justify-between">
        <div>
          <div className="flex gap-10">
            <div>
              <h1 className="font-bold text-[30px]">
                Hello {userInfo?.firstName}
              </h1>
              <p className="text-[21px] font-medium tracking-wide">
                {formatDate()}
              </p>
            </div>
            <div
              style={{
                borderRadius: "14px",
                border: "1px solid #DDD",
              }}
              className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
            >
              <FaMagnifyingGlass />
              <input className="w-full" placeholder="Search"></input>
            </div>
          </div>
          <div className="flex gap-[14px] mt-8">
            <div className="bg-[#8064F0] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-medium">New Task</h1>
                <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
              </div>
              <p className="text-[45px] font-bold">0</p>
            </div>
            <div className="bg-[#2196F3] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-medium">In Progress</h1>
                <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
              </div>
              <p className="text-[45px] font-bold">0</p>
            </div>
            <div className="bg-[#20B15A] rounded-lg text-white w-[185px] py-[12px] px-[12px] h-[125px]">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-medium">Completed</h1>
                <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
              </div>
              <p className="text-[45px] font-bold">0</p>
            </div>
          </div>
        </div>
        <div className="border border-[#F0F0F0] shadow-md w-[275px] h-[200px]">
          <div className="w-5/6 mx-auto flex items-center gap-2 pt-[7px]">
            <BsPersonCircle className="text-[#4555BA] w-[35px] h-[35px]" />
            <p className="text-[19px] font-medium">
              {userInfo?.firstName} {userInfo?.lastName}
            </p>
          </div>
          <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
            <p className="text-[#3F3F3F]">Animation</p>
            <p className="text-[#6B6B6B]">task 1</p>
          </div>
          <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
            <p className="text-[#3F3F3F]">logo design</p>
            <p className="text-[#6B6B6B]">task 2</p>
          </div>
          <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
            <p className="text-[#3F3F3F]">ui and ux </p>
            <p className="text-[#6B6B6B]">task 3</p>
          </div>
        </div>
      </div>
      {/* In process task*/}
      <div className="mt-10">
        <div className="flex justify-between">
          <button className="font-medium text-[20px]">In Process Tasks</button>
          <button className="font-medium text-[16px]">View all</button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex mt-[17px] gap-[11px]">
            {cardData.length === 0 ? <p  className="font-semibold text-orange-500 text-[20px] text-center mt-5">No Processing task found</p> : 
            <>{
              cardData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[17px]">{item?.title}</h1>
                    <HiDotsVertical />
                  </div>
                  <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                    {item?.taskDesc}
                  </p>
                  <AvatarGroup className="grid justify-end mt-[14px]" total={16}>
                    {item?.studentsImg.map((each, index) => (
                      <Avatar key={index} alt="Remy Sharp" src={each.img} />
                    ))}
                  </AvatarGroup>
                  <div>
                    <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                      <p>Progress</p>
                      <p className="text-[#3F3F3F]">
                        {item?.progressBar?.current}/{item?.progressBar?.total}
                      </p>
                    </div>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-lg h-2">
                        <div
                          className="bg-[#3E4DAC] h-2 rounded-lg"
                          style={{
                            width: `${(item?.progressBar?.current /
                                item?.progressBar?.total) *
                              100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-[#3F3F3F] text-[14px] font-medium">
                      {item?.date}
                    </p>
                  </div>
                </div>
              ))
            }</>}
            <Link to='/createTask'>
            <div className="ml-14 p-2 w-[98px] justify-center  items-center">
              <FaPlus className="text-[#AEAEAE] w-[25px] h-[25px] mx-auto mb-2 "></FaPlus>
              <span className="text-[#AEAEAE] font-bold text-[15px] w-[90px] text-center">
                Add New Task
              </span>
            </div>
            </Link>
          </div>
        </div>
      </div>
      {/* statistics */}
      <div className="mt-10 flex justify-between">
        <div className="bg-[#FFF] border border-[#E8E8E8] p-4 rounded-md w-[471px] h-[290px]">
          <div className="flex justify-between pb-4">
            <p className="flex flex-col">
              <span>Weekly Task Report</span>
              <span>{formatDate()}</span>
            </p>
            <p>Animation Task</p>
          </div>
          <LineChart
            width={382}
            height={200}
            data={lineChartdata}
            margin={{
              top: -5,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 0" />
            <XAxis dataKey="day" />
            <YAxis ticks={yTicks} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tasks_done"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="bg-[#FFF] w-[325px] h-[301.624px] shadow-md rounded-md">
          <div className="px-4 flex justify-between items-start">
            <div>
              <p className="text-[16px] font-semibold text-[#828282]">
                Total Submission
              </p>
              <p className="text-[40px] font-medium">0</p>
              <p className="text-[14px] ">Students application chart</p>
            </div>
            <img src={groupIcon} alt="" />
          </div>
          <p className="w-full border-b border-[#ECECEC] mt-4"></p>
          <PieChart width={200} height={170}>
            <Tooltip></Tooltip>
            <Legend align="right"></Legend>
            <Pie
              data={pieChartdata}
              cx="65%"
              cy="50%"
              labelLine={false}
              outerRadius={60}
              fill="#DD2025"
              dataKey="value"
            >
              {pieChartdata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div></div>
      </div>
      {/*companies */}
      <div className="mt-[60px]">
        <h1 className="text-[19px] font-[600]  tracking-wider text-center ">
          CAMPANIES THAT CREATE TASKS
        </h1>
        <div className="flex justify-around mt-[30px]">
          <img className="w-fit" src={Paytm} />
          <img className="w-fit" src={Microsoft} />
          <img className="w-fit" src={Netflix} />
          <img className="w-fit" src={Apple} />
          <img className="w-fit" src={Google} />
          <img className="w-fit" src={Flipkart} />
        </div>
        <div className="flex justify-around mt-[25px] mb-10">
          <div className="grid gap-2 justify-items-center">
            <img src={Magicpin} />
            <p className="text-sm font-medium">Magic pin</p>
          </div>
          <div className="grid gap-2 justify-items-center">
            <img src={Bigbasket} />
            <p className="text-sm font-medium">Big basket</p>
          </div>
          <div className="grid gap-2 justify-items-center">
            <img src={Myntra} />
            <p className="text-sm font-medium">Myntra</p>
          </div>
          <div className="grid gap-2 justify-items-center">
            <img src={Swiggy} />
            <p className="text-sm font-medium">Swiggy</p>
          </div>
          <div className="grid gap-2 justify-items-center">
            <img src={Bookmyshow} />
            <p className="text-sm font-medium">Book My Show</p>
          </div>
          <div className="grid gap-2 justify-items-center">
            <img src={Airtel} />
            <p className="text-sm font-medium">Airtel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
