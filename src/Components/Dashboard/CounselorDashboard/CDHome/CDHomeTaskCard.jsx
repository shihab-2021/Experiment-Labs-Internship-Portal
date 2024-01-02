//CDHomeTaskCard

import React, { useEffect, useState } from "react";
import pending from "../../../../assets/Dashboard/SuperAdminDashboard/mdi_account-pending-outline.svg";
import reject from "../../../../assets/Dashboard/SuperAdminDashboard/iconoir_cancel.svg";
import approve from "../../../../assets/Dashboard/SuperAdminDashboard/ic_round-done-all.svg";
import axios from "axios";
import profileImg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg";
import { Link } from "react-router-dom";

const CDHomeTaskCard = ({ item, index }) => {
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

  const formatTaskCreationDate = (date) => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    const diffInMilliseconds = currentDate - givenDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    } else if (diffInMonths === 1) {
      return "1 month ago";
    } else if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    } else if (diffInYears === 1) {
      return "1 year ago";
    } else {
      return `${diffInYears} years ago`;
    }
  };

  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${
          item?.creator?.email
        }`
      )
      .then((user) => {
        setTaskCreatorInfo(user?.data);
      })
      .catch((error) => console.error(error));

    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
          item?.creator?.organizationId
        }`
      )
      .then((org) => {
        setOrganizationInfo(org?.data);
      })
      .catch((error) => console.error(error));
  }, [item]);

  return (
    <Link
      to={`/superAdminDashboard/taskDetails/${item?._id}`}
      key={index}
      className="bg-[#FFF] border border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[17px] w-[100%] py-[19px] rounded-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-[28px] h-[28px]"
            src={taskCreatorInfo?.image ? taskCreatorInfo?.image : profileImg}
            alt="profileImg"
          />
          <p>
            {taskCreatorInfo?.firstName} {taskCreatorInfo?.lastName}
          </p>
        </div>
        <p>{formatTaskCreationDate(item?.postingDateTime)}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h1 className="font-bold tracking-wider text-[18px]">
            {item?.taskName?.slice(0, 32)}
            {item?.taskName?.length > 32 && "..."}
          </h1>
          <p className="text-[#737373] text-[15px]">
            {item?.taskTime} hrs task
          </p>
        </div>
        <img
          className="relative max-w-[65px] "
          alt="Org Logo"
          src={organizationInfo?.orgLogo}
        />
      </div>
      <>
        {item?.taskStatus == "Rejected" ? (
          <button className="flex gap-2 text-[16px] font-bold mt-4 text-[#DD2025] ">
            <span>Reject Task</span>
            <img src={reject} alt="" />
          </button>
        ) : item?.taskStatus == "AdminApproved" ? (
          <button className="flex gap-2 text-[16px] font-bold mt-4  text-[#F1511B]">
            <span>Decision Pending</span>
            <img src={pending} alt="" />
          </button>
        ) : item?.taskStatus == "Processing" ? (
          <button className="flex gap-2 text-[16px] font-bold mt-4  text-[#20B15A]">
            <span>Approved</span>
            <img src={approve} alt="" />
          </button>
        ) : (
          ""
        )}
      </>
      <div className="flex justify-between items-center">
        <div className="grid items-center mt-2">
          <p>Deadline</p>
          <p className="bg-[#E9ECFF] rounded-3xl mt-2 py-[6.563px] px-[17.814px] text-[14px] font-medium">
            {formatDate(item?.taskDeadline)}
          </p>
        </div>
        <div className="grid items-center mt-2">
          <p className="font-medium text-[16px] text-[#1E1E1E]">
            {item?.participants?.length || 0} students
          </p>
          <p className="text-[#007D00] text-[15px] font-bold bg-[#E9ECFF]  mt-2 py-[7px] px-[4px] rounded-[10px]">
            {item?.participants
              ? parseInt(item?.participantLimit) - item?.participants?.length
              : parseInt(item?.participantLimit)}{" "}
            spot left
          </p>
        </div>
      </div>
      <div>
        <div className="mt-[14px] flex justify-between text-[14px] font-medium">
          <p>
            {item?.taskStatus == "Rejected"
              ? "Rejected"
              : item?.taskStatus == "AdminApproved"
              ? "Decision Pending"
              : "In Progress"}
          </p>
          <p className="text-[#3F3F3F]">
            {item?.participants?.length || 0}/{item?.participantLimit}
          </p>
        </div>
        <div className="relative w-full">
          <div className="w-full bg-gray-200 rounded-lg h-2">
            <div
              className={`${
                item?.taskStatus == "Rejected"
                  ? "bg-[#DD2025]"
                  : item?.taskStatus == "Processing"
                  ? "bg-[#9F9F9F]"
                  : "bg-[#6278FF]"
              }  h-2 rounded-lg`}
              style={{
                width: `${
                  item?.participants?.length
                    ? (item?.participants?.length / item?.participantLimit) *
                      100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        {/* <p className="text-[#3F3F3F] text-[14px] font-medium">{formatDate()}</p> */}
      </div>
    </Link>
  );
};

export default CDHomeTaskCard;
