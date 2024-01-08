import React, { useEffect, useState } from "react";
import magicPin from "../../../../assets/Dashboard/AdminDashboard/magicpin.svg";
import { IoTodayOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDashboardInternshipTaskCard = ({ submission, key }) => {
  const [task, setTask] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});

  const formatDate = (date) => {
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

    const currentDate = new Date(date);
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()]; // Get month name
    const year = currentDate.getFullYear();
    return `${day}/ ${month}/ ${year}`;
  };

  const getInitials = (data) => {
    const firstNameInitial = data?.firstName?.charAt(0)?.toUpperCase() || "";
    const lastNameInitial = data?.lastName?.charAt(0)?.toUpperCase() || "";
    return `${firstNameInitial}${lastNameInitial}`;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
      <div className="inline-flex items-center justify-between w-full gap-[20px] relative mb-3">
        <div className="flex max-w-[200px] flex-col items-start gap-[6.56px] relative flex-[0_0_auto]">
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
      {/* <h2 className=" my-2 font-raleway font-medium text-neutral-500 text-[13.9px] tracking-[1px] break-all ">
        {task?.aboutTask?.slice(0, 88)}
        {task?.aboutTask?.length > 88 && "..."}
      </h2> */}
      <div className="flex justify-between">
        <div className=" text-black">
          <p>Deadline</p>
          <p className="flex items-center gap-1 text-[12px] px-2 py-1 font-sans bg-[#C1E0FF] rounded-2xl">
            <IoTodayOutline />
            {formatDate(task?.taskDeadline)}
          </p>
        </div>
        <div className=" text-black">
          <p>Duration</p>
          <p className="flex items-center gap-1 text-[12px] px-2 py-1 font-sans bg-[#C1E0FF] rounded-2xl">
            <IoMdTime />
            {task?.taskTime} hrs task
          </p>
        </div>
      </div>
      <div>
        <div className="mt-[14px] flex justify-between text-[14px] font-medium">
          <p>Progress</p>
          <p className="text-[#3F3F3F]">
            {task?.participants?.length || 0}/{task?.participantLimit}
          </p>
        </div>
        <div className="relative w-full">
          <div className="w-full bg-gray-200 rounded-lg h-2">
            <div
              className="bg-[#3E4DAC] h-2 rounded-lg"
              style={{
                width: `${
                  task?.participants?.length
                    ? (task?.participants?.length / task?.participantLimit) *
                      100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-[#3F3F3F] text-[14px] font-medium">
          {submission?.date}
        </p>
      </div>
      <div className=" w-full flex items-center justify-between  mt-[14px]">
        {task?.participants && task?.participants.length > 0 ? (
          <AvatarGroup
            className="grid justify-end"
            // max={16}
            total={task?.participants ? task?.participants?.length : 0}
          >
            {task?.participants?.slice(0, 3)?.map((user, index) => (
              <Avatar
                key={index}
                className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                style={() => getRandomColor()}
                alt="Participant"
              >
                <div
                  className="rounded-full w-[45px] h-[45px] flex items-center text-red-50 justify-center"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {user?.participantEmail?.charAt(0)?.toUpperCase()}
                </div>
              </Avatar>
            ))}
          </AvatarGroup>
        ) : (
          ""
        )}
        <Link
          to={`/internshipSubmission/${task?._id}`}
          className="text-[15px] text-white font-medium bg-[#4555BA] py-[5px] px-[10px] rounded-3xl"
        >
          Show details
        </Link>
      </div>
    </div>
  );
};

export default UserDashboardInternshipTaskCard;
