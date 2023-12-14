import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../../../../assets/Shared/user.svg";

const InternshipTaskCard = ({ task }) => {
  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${
          task?.creator?.email
        }`
      )
      .then((user) => {
        setTaskCreatorInfo(user?.data);
      })
      .catch((error) => console.error(error));
  }, [task]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
          task?.creator?.organizationId
        }`
      )
      .then((org) => {
        setOrganizationInfo(org?.data);
      })
      .catch((error) => console.error(error));
  }, [task]);

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

  return (
    <div>
      <div className="inline-flex flex-col items-start gap-[25px] px-[22px] py-[14.06px] relative bg-white rounded-[9.38px] border-[0.94px] border-solid border-[#e2e2e2]">
        <div className="inline-flex w-full flex-col items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="w-full flex items-center justify-between gap-[20px] relative ">
            <div className="inline-flex items-center justify-center gap-[5.63px] relative flex-[0_0_auto]">
              <img
                className="relative w-[30px] h-[30px] border rounded-full "
                alt="Ellipse"
                src={taskCreatorInfo?.image ? taskCreatorInfo?.image : User}
              />
              <h1 className="relative w-fit font-raleway font-bold text-[#797979] text-[14px] tracking-[1.31px] leading-[normal] whitespace-nowrap">
                {taskCreatorInfo?.fastName} {taskCreatorInfo?.lastName}
              </h1>
            </div>
            <h2 className="relative w-fit font-raleway font-medium text-[#3d3d3d] text-[15px] tracking-[1.50px] leading-[normal] whitespace-nowrap">
              {formatTaskCreationDate(task?.postingDateTime)}
            </h2>
          </div>
          <div className="inline-flex items-center justify-between w-full gap-[20px] relative flex-[0_0_auto]">
            <div className="inline-flex max-w-[165px] flex-col items-start gap-[6.56px] relative flex-[0_0_auto]">
              <h1 className="relative font-raleway font-bold text-[#3d3d3d] text-[18px]  leading-[normal]">
                {task?.taskName}
              </h1>
              <h2 className="relative w-fit font-raleway font-medium text-neutral-500 text-[15.9px] tracking-[1.59px] leading-[normal] whitespace-nowrap">
                {task?.taskTime} hrs task
              </h2>
            </div>
            <div className="border rounded-md p-1 flex items-center justify-center">
              <img
                className="relative max-w-[65px] "
                alt="Org Logo"
                src={organizationInfo?.orgLogo}
              />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[60px] self-stretch w-full relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center gap-[8.44px] relative flex-[0_0_auto]">
            <h1 className="relative self-stretch font-raleway font-medium text-[#3d3d3d] text-[15px] tracking-[1.50px] leading-[normal]">
              Deadline
            </h1>
            <h1 className="relative w-fit font-raleway font-medium text-[#3d3d3d] text-[12.2px] tracking-[1.22px] leading-[normal] whitespace-nowrap px-[17.81px] py-[6.56px] bg-[#e8ebff] rounded-[27.19px]">
              {task?.taskDeadline}
            </h1>
          </div>
          <div className="inline-flex flex-col items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <h1 className=" font-raleway text-[#1e1e1e] relative w-fit whitespace-nowrap">
              {task?.taskLimit} Students
            </h1>
            <h1 className=" font-raleway font-bold text-[#007d00] text-[15px] tracking-[1.50px] relative w-fit leading-[normal] whitespace-nowrap px-[7px] py-[4px] bg-[#d6ffd6] rounded-[10px]">
              4 spot left
            </h1>
          </div>
        </div>
        <div className="w-full">
          <button className=" font-raleway font-bold text-white text-[15px] tracking-[1.50px] leading-[normal] whitespace-nowrap px-[29px] py-[7px] self-stretch w-full bg-[#3e4dac] rounded-[17px]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipTaskCard;
