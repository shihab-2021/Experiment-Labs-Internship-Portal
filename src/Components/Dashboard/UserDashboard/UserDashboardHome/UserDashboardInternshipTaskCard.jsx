import React, { useEffect, useState } from "react";
import magicPin from "../../../../assets/Dashboard/AdminDashboard/magicpin.svg";
import { IoTodayOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import axios from "axios";

const UserDashboardInternshipTaskCard = ({ submission, key }) => {
  const [task, setTask] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${
          submission?.taskId
        }`
      )
      .then((task) => {
        setTask(task?.data);
      })
      .catch((error) => console.error(error));
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
          submission?.organizationId
        }`
      )
      .then((org) => {
        setOrganizationInfo(org?.data);
      })
      .catch((error) => console.error(error));
  }, [submission]);
  return (
    <div
      key={key}
      className={`bg-[#FFF]  px-[7px] py-[12px] rounded-md ${
        submission.submissionStatus == "Processing"
          ? "border border-b-4 border-[#1976D2]"
          : submission.submissionStatus == "Completed"
          ? "border border-b-4 border-[#20B15A]"
          : submission.submissionStatus == "Selected"
          ? "border border-b-4 border-[#E8B912]"
          : submission.submissionStatus == "Rejected"
          ? "border border-b-4 border-[#DD2025]"
          : "border border-b-4 border-[#FF6B00]"
      }`}
    >
      <div className="inline-flex items-center justify-between w-full gap-[20px] relative">
        <div className="flex max-w-[165px] flex-col items-start gap-[6.56px] relative flex-[0_0_auto]">
          <h1 className="relative font-raleway font-bold text-[#3d3d3d] text-[18px]  leading-[normal]">
            {task?.taskName?.slice(0, 32)}
            {task?.taskName?.length > 32 && "..."}
          </h1>
        </div>
        <div className="border rounded-md p-1 flex items-center justify-center">
          <img
            className="relative max-w-[65px] "
            alt="Org Logo"
            src={organizationInfo?.orgLogo}
          />
        </div>
      </div>
      <h2 className=" font-raleway font-medium text-neutral-500 text-[15.9px] tracking-[1.59px]">
        {task?.aboutTask}
      </h2>
      <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
        {submission?.taskDesc}
      </p>
      <div className="flex justify-between">
        <div className=" text-black">
          <p>Deadline</p>
          <p className="flex submissions-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl">
            <IoTodayOutline />
            {submission?.deadline}
          </p>
        </div>
        <div className=" text-black">
          <p>Duration</p>
          <p className="flex submissions-center gap-1 text-[12px] px-1 bg-[#C1E0FF] rounded-2xl">
            <IoMdTime />
            {submission?.duration}
          </p>
        </div>
      </div>
      <div>
        <div className="mt-[14px] flex justify-between text-[14px] font-medium">
          <p>Progress</p>
          <p className="text-[#3F3F3F]">
            {submission?.progressBar?.current}/{submission?.progressBar?.total}
          </p>
        </div>
        <div className="relative w-full">
          <div className="w-full bg-gray-200 rounded-lg h-2">
            <div
              className="bg-[#3E4DAC] h-2 rounded-lg"
              style={{
                width: `${
                  (submission?.progressBar?.current /
                    submission?.progressBar?.total) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-[#3F3F3F] text-[14px] font-medium">
          {submission?.date}
        </p>
      </div>
      <div className="flex justify-between  mt-[14px]">
        <AvatarGroup className="grid justify-end" total={16}>
          {submission?.studentsImg?.map((each, index) => (
            <Avatar key={index} alt="Remy Sharp" src={each.img} />
          ))}
        </AvatarGroup>
        <button className="text-[15px] text-white font-medium bg-[#4555BA] py-[3px] px-[7px] rounded-3xl">
          Show details
        </button>
      </div>
    </div>
  );
};

export default UserDashboardInternshipTaskCard;
