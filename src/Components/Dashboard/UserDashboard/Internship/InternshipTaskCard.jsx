import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import User from "../../../../assets/Shared/user.svg";
import DialogLayout from "../../../Shared/DialogLayout";
import OutCome from "../../../../assets/Dashboard/UserDashboard/OutCome.png";
import LinkIcon from "../../../../assets/Dashboard/UserDashboard/LinkIcon.png";
import WarningIcon from "../../../../assets/Shared/warningIcon.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Swal from "sweetalert2";

const InternshipTaskCard = ({ task }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showWarningForApply, setShowWarningForApply] = useState(false);
  const [showStartTask, setShowStartTask] = useState(false);

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

  const handleApplyTask = async () => {
    const participantData = {
      participantEmail: user?.email,
      applyDateTime: new Date(),
    };

    try {
      const apply = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/applyTask/${
          task?._id
        }`,
        participantData
      );
      if (apply.statusText) {
        navigate(`/internshipSubmission/${task?._id}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed To Apply",
          text: "Your can not apply this task!",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Failed To Apply",
        text: "Your can not apply this task!",
      });
    }
  };

  return (
    <div>
      {/* Show task details dialog start */}
      <DialogLayout
        width={800}
        setOpen={setShowTaskDetails}
        open={showTaskDetails}
      >
        <div className="w-full px-4 ">
          <h1 className="mt-10 font-[500] text-[18px] tracking-wider ">
            Task Details
          </h1>
          <div>
            <h1 className="mt-[12px] text-[20px] font-[700] tracking-wider ">
              {task?.taskName}
            </h1>
            <p>Task no. 4</p>
            <h1 className=" mt-4 font-raleway text-[16px] font-[500] text-[#1e1e1e]">
              {task?.taskLimit} Students
            </h1>
            <h1 className=" font-raleway font-bold text-[#007d00] text-[15px] tracking-[1.50px] px-[7px] w-fit py-[4px] bg-[#d6ffd6] rounded-[10px]">
              4 spot left
            </h1>
            <h2 className="relative w-fit font-raleway font-medium text-[#4555BA] text-[15.9px] tracking-[1.59px] my-4 leading-[normal] whitespace-nowrap">
              {task?.taskTime} hrs task
            </h2>
            <p className=" text-[#797979] text-[16px] tracking-wider ">
              "{task?.aboutTask}"
            </p>
          </div>
          <div className="bg-[#FFF7DF] p-2 rounded-md mt-4">
            <div className="bg-[#6278FF] text-white w-fit px-[10px] py-1 rounded-full flex items-center justify-center mx-auto gap-1 text-[16px] text-[600] ">
              <img src={OutCome} alt="OutCome" />
              Out Come
            </div>
            <p className="text-[#3F3F3F] text-[16px] tracking-wider w-11/12 mx-auto text-center mt-[15px] ">
              {task?.aboutOutcome}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-5 ">
            <img src={LinkIcon} alt="LinkIcon" />
            <p className="text-[#4555BA] text-[16px] font-[400] ">
              {task?.taskLink}
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="max-w-[220px] font-raleway">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Company
              </h1>
              <h1 className="text-[16px]">{organizationInfo?.orgName}</h1>
            </div>
            <div className="max-w-[220px]">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Task Posting
              </h1>
              <h1 className="text-[16px]">
                {formatDate(task?.postingDateTime)}
              </h1>
            </div>
            <div className="max-w-[220px]">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Deadline
              </h1>
              <h1 className="text-[16px]">{formatDate(task?.taskDeadline)}</h1>
            </div>
          </div>
          <div className=" my-6 flex items-center justify-between ">
            <div>
              <h1 className="text-[16px] mb-2">Task Created by</h1>
              <div className="flex items-center gap-1">
                <img
                  className="w-[47px] h-[47px] object-cover rounded-full border "
                  src={taskCreatorInfo?.image ? taskCreatorInfo?.image : User}
                  alt="taskCreatorInfoImage"
                />
                <div>
                  <h1 className="text-[16px] font-[600] tracking-wide">
                    {taskCreatorInfo?.fastName} {taskCreatorInfo?.lastName}
                  </h1>
                  <h1 className="text-[12px] text-[#797979] font-[400] ">
                    {task?.creator?.role}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setShowWarningForApply(true);
                  setShowTaskDetails(false);
                }}
                className="flex gap-1 items-center text-[16px] font-[500] text-white tracking-widest bg-[#4555BA] px-[26px] py-[10px] rounded-full "
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </DialogLayout>
      {/* Show task details dialog end */}
      {/* Show warning for apply dialog start */}
      <DialogLayout
        width={800}
        setOpen={setShowWarningForApply}
        open={showWarningForApply}
      >
        <div className="w-full px-4 pt-8 mb-2 ">
          <img className="px-4" src={WarningIcon} alt="WarningIcon" />
          <h1 className=" text-[#DD2025] text-[20px] font-[600] tracking-wide ">
            Important information
          </h1>
          <h1 className="text-[16px] font-[500] tracking-wider ">
            "Important information regarding submission: If you choose any task,
            make sure you complete it. If not completed, your access to this
            portal may be blocked. Thank you."
          </h1>
          <button
            onClick={() => {
              setShowWarningForApply(false);
              setShowStartTask(true);
            }}
            className="bg-[#4555BA] text-white rounded-full px-[20px] py-[10px] float-right mt-6 mb-2 "
          >
            Agree
          </button>
        </div>
      </DialogLayout>
      {/* Show warning for apply dialog start */}
      {/* Show task details dialog end */}
      <DialogLayout width={800} setOpen={setShowStartTask} open={showStartTask}>
        <div className="w-full px-4 ">
          <h1 className="mt-10 font-[500] text-[18px] tracking-wider ">
            Task Details
          </h1>
          <div>
            <h1 className="mt-[12px] text-[20px] font-[700] tracking-wider ">
              {task?.taskName}
            </h1>
            <p>Task no. 4</p>
            <p className=" text-[#797979] text-[16px] tracking-wider ">
              "You have 7 days to complete this task with a flexible work
              duration of 4 hours. Use your flexible hours to give your best
              effort and enhance your skills. Your assistance is appreciated."
            </p>
          </div>
          <div className="flex items-center gap-1 mt-5 ">
            <img src={LinkIcon} alt="LinkIcon" />
            <p className="text-[#4555BA] text-[16px] font-[400] ">
              {task?.taskLink}
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="max-w-[220px] font-raleway">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Company
              </h1>
              <h1 className="text-[16px]">{organizationInfo?.orgName}</h1>
            </div>
            <div className="max-w-[220px]">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Task Posting
              </h1>
              <h1 className="text-[16px]">
                {formatDate(task?.postingDateTime)}
              </h1>
            </div>
            <div className="max-w-[220px]">
              <h1 className="text-[#8F8F8F] text-[17px] font-[500] tracking-wide ">
                Deadline
              </h1>
              <h1 className="text-[16px]">{formatDate(task?.taskDeadline)}</h1>
            </div>
            <div className="max-w-[220px]">
              <h1 className=" text-center font-raleway text-[16px] font-[500] text-[#1e1e1e]">
                {task?.taskLimit} Students
              </h1>
              <h1 className=" font-raleway font-bold text-[#007d00] text-[15px] tracking-[1.50px] px-[7px] w-fit py-[4px] bg-[#d6ffd6] rounded-[10px]">
                4 spot left
              </h1>
            </div>
          </div>
          <div className=" my-6 flex items-center justify-between ">
            <div>
              <h1 className="text-[16px] mb-2">Task Created by</h1>
              <div className="flex items-center gap-1">
                <img
                  className="w-[47px] h-[47px] object-cover rounded-full border "
                  src={taskCreatorInfo?.image ? taskCreatorInfo?.image : User}
                  alt="taskCreatorInfoImage"
                />
                <div>
                  <h1 className="text-[16px] font-[600] tracking-wide">
                    {taskCreatorInfo?.fastName} {taskCreatorInfo?.lastName}
                  </h1>
                  <h1 className="text-[12px] text-[#797979] font-[400] ">
                    {task?.creator?.role}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleApplyTask}
                className=" text-[16px] font-[500] text-white tracking-widest bg-[#20B15A] px-[26px] py-[10px] rounded-full "
              >
                Start task
              </button>
            </div>
          </div>
        </div>
      </DialogLayout>
      {/* Show task details dialog end */}
      <div className="inline-flex flex-col items-start gap-[25px] px-[22px] py-[14.06px] relative bg-white rounded-[9.38px] border-[0.94px] border-solid border-[#e2e2e2]">
        <div className="inline-flex w-full flex-col items-start gap-[16px] relative">
          <div className="w-full flex items-center justify-between gap-[20px] relative ">
            <div className="inline-flex items-center justify-center gap-[5.63px] relative ">
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
          <div className="inline-flex items-center justify-between w-full gap-[20px] relative">
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
        <div className="flex items-start gap-[60px] self-stretch w-full relative">
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
          <button
            onClick={() => setShowTaskDetails(true)}
            className=" font-raleway font-bold text-white text-[15px] tracking-[1.50px] leading-[normal] whitespace-nowrap px-[29px] py-[7px] self-stretch w-full bg-[#3e4dac] rounded-[17px]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipTaskCard;
