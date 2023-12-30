import React from "react";
import driveImage from "../../../../assets/Dashboard/AdminDashboard/driveImage.svg";
import { Link, useParams } from "react-router-dom";
import profileImage from "../../../../assets/Dashboard/AdminDashboard/profileImage.svg";
import timeIcon from "../../../../assets/Dashboard/AdminDashboard/timeIcon.svg";
import totalSubmission from "../../../../assets/Dashboard/AdminDashboard/totalSubmission.svg";
import submissionLimit from "../../../../assets/Dashboard/AdminDashboard/submissionLimit.svg";
import selectIcon from "../../../../assets/Dashboard/AdminDashboard/selectIcon.svg";
import rejectIcon from "../../../../assets/Dashboard/AdminDashboard/rejectIcon.svg";
import filter from "../../../../assets/Dashboard/AdminDashboard/filter.svg";
import arrowRight from "../../../../assets/Dashboard/AdminDashboard/arrowRight.svg";
import AdminParticipants from "../../AdminDashboard/AdminParticipants";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

const SubmissionDetails = ({ task, organizationDetails, creatorDetails }) => {
  const deadline = task?.taskDeadline;
  const targetDate = new Date(deadline);

  // Current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = targetDate - currentDate;
  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div>
      {/* Task details part */}
      <div className="flex gap-5">
        <div
          style={{
            borderRadius: "7px",
            border: "1px solid #EEE",
            background: "#FFF",
            boxShadow: "0px 4px 20px 0px #EFF1FF",
          }}
          className="w-[60%] px-[10px] py-[15px]"
        >
          <p className="text-lg font-medium">Task Details</p>
          <h1 className="text-xl font-bold mt-3">{task.taskName}</h1>
          {/* <p className=" text-[16px] font-medium text-[#797979]">Task no.4</p> */}
          <p className=" text-[16px] font-medium text-[#797979] mt-4">
            {task.aboutTask}
          </p>
          <p className="text-base font-bold mt-4">Out come</p>
          <p className=" text-[16px] font-medium text-[#797979] mt-4">
            {task.aboutOutcome}
          </p>
          <p className="flex gap-2 items-center text-base font-normal text-[#4555BA] my-5">
            <img src={driveImage} alt="image" />
            <Link to={task.taskLink}>{task.taskLink}</Link>
          </p>
          <div className="flex justify-between">
            <div>
              <p className=" text-[16px] font-medium text-[#797979]">Company</p>
              <p className=" text-base font-normal flex items-center gap-5 mt-2">
                {organizationDetails?.orgName}{" "}
                <span>
                  <img
                    className="h-[30px]"
                    src={organizationDetails?.orgLogo}
                    alt="Icon"
                  />
                </span>
              </p>
            </div>
            <div>
              <p className=" text-[16px] font-medium text-[#797979]">
                task posting
              </p>
              <p className=" text-base font-normal flex items-center gap-2 mt-2">
                {" "}
                {task.postingDateTime
                  ? new Date(task.postingDateTime).toLocaleDateString()
                  : ""}
              </p>
            </div>
            <div>
              <p className=" text-[16px] font-medium text-[#797979]">
                Deadline
              </p>
              <p className=" text-base font-normal flex items-center gap-2 mt-2">
                {task.taskDeadline
                  ? new Date(task.taskDeadline).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
          <p className="text-base font-normal mt-9">Task Created by</p>
          <div className="flex items-center gap-2 mt-2">
            <div>
              <img src={profileImage} alt="ImageProfile" />
            </div>
            <div>
              <h1 className="text-base font-semibold">
                {creatorDetails?.firstName} {creatorDetails?.lastName}
              </h1>
              <p className="text-[13px] font-normal text-[#797979]">
                {task.creator?.role}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "7px",
            border: "1px solid #EEE",
            background: "#FFF",
            boxShadow: "0px 4px 20px 0px #EFF1FF",
          }}
          className="w-[40%] p-3"
        >
          <h1 className="text-xl font-medium my-5">Task Status</h1>
          <div
            className="flex items-center justify-between px-2 py-4"
            style={{
              borderRadius: "6px",
              border: "1px solid #D1D1D1",
              background: "#FFF",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={timeIcon} alt="Icon" />
              <p className="text-base font-medium text-[#3F3F3F]">
                Time remaining
              </p>
            </div>
            <div>
              <p className="me-8 text-[#6278FF] text-base font-medium">
                {daysRemaining}d
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-2 py-4 mt-1"
            style={{
              borderRadius: "6px",
              border: "1px solid #D1D1D1",
              background: "#FFF",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={totalSubmission} alt="Icon" />
              <p className="text-base font-medium text-[#3F3F3F]">
                Total Submission
              </p>
            </div>
            <div>
              <p className="me-8 text-[#0A98EA] text-base font-medium">
                {task.participants?.length}
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-2 py-4 mt-1"
            style={{
              borderRadius: "6px",
              border: "1px solid #D1D1D1",
              background: "#FFF",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={submissionLimit} alt="Icon" />
              <p className="text-base font-medium text-[#3F3F3F]">
                Submission limit
              </p>
            </div>
            <div>
              <p className="me-8 text-[#0A98EA] text-base font-medium">
                {task.participantLimit}
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-2 py-4 mt-1"
            style={{
              borderRadius: "6px",
              border: "1px solid #D1D1D1",
              background: "#FFF",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={selectIcon} alt="Icon" />
              <p className="text-base font-medium text-[#3F3F3F]">
                Selected Submission
              </p>
            </div>
            <div>
              <p className="me-8 text-[#4CAF50] text-base font-medium">6</p>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-2 py-4 mt-1"
            style={{
              borderRadius: "6px",
              border: "1px solid #D1D1D1",
              background: "#FFF",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={rejectIcon} alt="Icon" />
              <p className="text-base font-medium text-[#3F3F3F]">
                Reject Submission
              </p>
            </div>
            <div>
              <p className="me-8 text-[#DD2025] text-base font-medium">6</p>
            </div>
          </div>
          <div className="flex justify-center w-full mt-10">
            <div className=" w-[50%]">
              <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                <p>Completed</p>

                <p className="text-[#3F3F3F]">
                  {task.participants?.length ? task.participants?.length : "0"}/
                  {task.participantLimit}
                </p>
              </div>
              <div className="relative w-full">
                <div className="w-full bg-gray-200 rounded-lg h-2">
                  <div
                    className="bg-[#3E4DAC] h-2  rounded-lg"
                    style={{
                      width: `${
                        (task.participants?.length / task.participantLimit) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-[#3F3F3F] text-[14px] font-medium">
                {task.taskDeadline
                  ? new Date(task.taskDeadline).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submission */}

      <div
        className=" flex items-center justify-between py-[14px] px-2 mt-8"
        style={{
          borderRadius: "7px",
          border: "1px solid #EEE",
          background: "#FFF",
          boxShadow: "0px 4px 20px 0px #EFF1FF",
        }}
      >
        <h1 className="text-xl font-medium">Submission</h1>
        <img src={filter} alt="icon" />
      </div>
      {task?.participants?.map((item) => (
        <AdminParticipants item={item} />
      ))}

      <div className="py-10 flex items-center justify-between">
        <div className="w-full flex justify-center">
          <Stack spacing={2}>
            <Pagination count={2} color="primary" />
          </Stack>
        </div>
        <div className="">
          <button
            className="px-7 py-3 text-base font-medium text-[#fff] flex items-center gap-3"
            style={{
              borderRadius: "36px",
              background: "var(--primary-coloe-2, #3E4DAC)",
            }}
          >
            Next
            <img src={arrowRight} alt="arrowIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
