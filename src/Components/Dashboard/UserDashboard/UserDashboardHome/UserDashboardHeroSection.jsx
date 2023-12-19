import React from "react";
import { FaAngleRight, FaMagnifyingGlass, FaStar } from "react-icons/fa6";
import userImg from "../../../../assets/Dashboard/UserDashboard/userImg.png";
import UserDashboardInternshipTasks from "./UserDashboardInternshipTasks";

import Person from "../../../../assets/Home/Person.png"
import UserDashboardStatistics from "./UserDashboardStatistics";
const UserDashboardHeroSection = () => {
  const cardData = [
    {
      title: "Animation Task",
      taskDesc: "Make an animation introduce our company vision.....",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 1, total: 2 },
      date: "29/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "In Progress",
    },
    {
      title: "Logo Design",
      taskDesc: "Make our company original logo wth introduce our......",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 1, total: 2 },
      date: "22/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "In Progress"
    },
    {
      title: "UI & UX",
      taskDesc: "Make our company landing page who have enging.....",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 1, total: 2 },
      date: "25/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "In Progress"
    },
    {
      title: "Animation Task",
      taskDesc: "Make an animation introduce our company vision.....",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 2, total: 2 },
      date: "29/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task"
      , status: "Completed",
    },
    {
      title: "Logo Design",
      taskDesc: "Make our company original logo wth introduce our......",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 2, total: 2 },
      date: "22/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "Selected"
    },
    {
      title: "UI & UX",
      taskDesc: "Make our company landing page who have enging.....",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 2, total: 2 },
      date: "25/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "Rejected",
    },
    {
      title: "UI & UX",
      taskDesc: "Make our company landing page who have enging.....",
      studentsImg: [
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },
        {
          img: Person
        },

      ],
      progressBar: { current: 1, total: 2 },
      date: "25/Jan/2022",
      deadline: "25/Jan/2022",
      duration: "4hrs task",
      status: "Pending"
    },

  ]
  return <div className="w-11/12 mx-auto mt-10">
    <div
      style={{
        borderRadius: "14px",
        border: "1px solid #DDD",
      }}
      className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-full h-[48px] "
    >
      <FaMagnifyingGlass />
      <input className="w-full" placeholder="Search"></input>
    </div>
    <div className="flex justify-between">
      <div className="mt-6">
        <h1><span className="font-bold text-[30px] tracking-widest border-b-4 border-[#FFDB70] ">Internships</span><span className="pl-3 font-semibold text-[24px] tracking-wider text-[#303031]">   that enhances your skills</span></h1>
        <button className="bg-[#4555BA] rounded-[31px] mt-9 text-xl text-[#FFF] font-semibold py-[17px] px-[29px]">Explore Internships</button>
        <div className="flex gap-[5px] mt-8">
          <div className="bg-[#8064F0] rounded-lg grid justify-between text-white w-[140px] py-[12px] px-[12px]">
            <div className="flex justify-between">
              <h1 className="text-[16px] font-medium">Total Internship</h1>
              <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
            </div>
            <p className="text-[45px] font-bold">7</p>
          </div>
          <div className="bg-[#2196F3] rounded-lg grid justify-between text-white w-[140px] py-[12px] px-[12px]">
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">In Progress</h1>
              <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
            </div>
            <p className="text-[45px] font-bold">4</p>
          </div>
          <div className="bg-[#20B15A] rounded-lg grid justify-between text-white w-[140px] py-[12px] px-[12px]">
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">Completed</h1>
              <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
            </div>
            <p className="text-[45px] font-bold">1</p>
          </div>
          <div className="bg-[#F1511B] rounded-lg grid justify-between text-white w-[140px] py-[12px] px-[12px]">
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">Task Pending</h1>
              <FaAngleRight className="w-[25px] h-[25px]"></FaAngleRight>
            </div>
            <p className="text-[45px] font-bold">1</p>
          </div>
        </div>
      </div>
      <div className="border-[#E9E9E9] shadow w-[324px] rounded-md">
        <div className="w-11/12 mx-auto mt-3">
          <div className="flex justify-between">
            <p className="text-[17px] font-bold tracking-wider">Profile</p>
            <p className="text-[14px] grid justify-items-center font-medium tracking-wide">Starting level <FaStar className="text-[#FFAC33] h-6 w-6" /></p>
          </div>
          <div className="grid justify-items-center">
            <img src={userImg} alt="user" className="rounded-full" />
            <p className="text-[#303031] font-bold text-[16px] tracking-wide mt-1">Good Morning Anjali</p>
            <p className="text-[#737373] font-normal text-[12px] mt-1 mb-2">"Continue to take on tasks and enhance your skills,"</p>
          </div>
        </div>
      </div>
    </div>
    <UserDashboardInternshipTasks cardData={cardData}></UserDashboardInternshipTasks>
    <UserDashboardStatistics></UserDashboardStatistics>
  </div>;
};

export default UserDashboardHeroSection;
