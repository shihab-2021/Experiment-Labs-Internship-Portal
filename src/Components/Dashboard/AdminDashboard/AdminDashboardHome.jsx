import React from "react";
import DashboardLayout from "../Shared/DashboardLayout";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import std1 from "../../../assets/Dashboard/AdminDashboard/student1.svg";
import std2 from "../../../assets/Dashboard/AdminDashboard/student2.svg";
import std3 from "../../../assets/Dashboard/AdminDashboard/student3.svg";
import std4 from "../../../assets/Dashboard/AdminDashboard/student4.svg";
import Person from "../../../assets/Home/Person.png";
const AdminDashboardHome = () => {
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
      <div className="flex justify-between">
        <div>
          <div className="flex gap-10">
            <div>
              <h1 className="font-bold text-[30px]">Hello Aman</h1>
              <p className="text-[21px] font-medium">{formatDate()}</p>
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
          </div>
        </div>
        <div className="border border-[#F0F0F0] shadow-md w-[275px] h-[200px]">
          <div className="w-5/6 mx-auto flex items-center gap-2 pt-[7px]">
            <BsPersonCircle className="text-[#4555BA] w-[35px] h-[35px]" />
            <p className="text-[19px] font-medium">Aman Kumar</p>
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
      <div className="mt-10">
        <div className="flex justify-between">
          <button className="font-medium text-[20px]">In Process Tasks</button>
          <button className="font-medium text-[16px]">View all</button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex mt-[17px] gap-[11px]">
            <div className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[17px]">Animation Task</h1>
                <HiDotsVertical />
              </div>
              <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                make an animation introduce our company vision....
              </p>
              <AvatarGroup className="grid justify-end mt-[14px]" total={16}>
                <Avatar alt="Remy Sharp" src={Person} />
                <Avatar alt="Travis Howard" src={Person} />
                <Avatar alt="Agnes Walker" src={Person} />
                <Avatar alt="Trevor Henderson" src={Person} />
              </AvatarGroup>
              <div>
                <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                  <p>Progress</p>
                  <p className="text-[#3F3F3F]">4/12</p>
                </div>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-lg h-2">
                    <div
                      className="bg-[#3E4DAC] h-2 rounded-lg"
                      // className="bg-cyan-600 h-2 rounded-sm"
                      style={{ width: `4%` }}
                      // style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <p className="text-[#3F3F3F] text-[14px] font-medium">
                  29/Jan/2022
                </p>
              </div>
            </div>
            <div className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[17px]">logo design</h1>
                <HiDotsVertical />
              </div>
              <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                make our company original logo wth introduce our......
              </p>
              <AvatarGroup className="grid justify-end mt-[14px]" total={16}>
                <Avatar alt="Remy Sharp" src={Person} />
                <Avatar alt="Travis Howard" src={Person} />
                <Avatar alt="Agnes Walker" src={Person} />
                <Avatar alt="Trevor Henderson" src={Person} />
              </AvatarGroup>
              <div>
                <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                  <p>Progress</p>
                  <p className="text-[#3F3F3F]">4/12</p>
                </div>
                <p className="text-[#3F3F3F] text-[14px] font-medium">
                  22/Jan/2022
                </p>
              </div>
            </div>
            <div className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[17px]">UI AND UX</h1>
                <HiDotsVertical />
              </div>
              <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                Make our company landing page who have enging.....
              </p>
              <AvatarGroup className="grid justify-end mt-[14px]" total={16}>
                <Avatar alt="Remy Sharp" src={Person} />
                <Avatar alt="Travis Howard" src={Person} />
                <Avatar alt="Agnes Walker" src={Person} />
                <Avatar alt="Trevor Henderson" src={Person} />
              </AvatarGroup>
              <div>
                <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                  <p>Progress</p>
                  <p className="text-[#3F3F3F]">4/12</p>
                </div>
                <p className="text-[#3F3F3F] text-[14px] font-medium">
                  25/Jan/2022
                </p>
              </div>
            </div>
            <button className="ml-14 p-2 w-[98px] justify-center items-center">
              <FaPlus className="text-[#AEAEAE] w-[25px] h-[25px] mx-auto mb-2 "></FaPlus>
              <span className="text-[#AEAEAE] font-bold text-[15px] w-[90px]">
                Add New Task
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
