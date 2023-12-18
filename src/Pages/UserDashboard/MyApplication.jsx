import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import reviewIcon from "../../assets/Dashboard/AdminDashboard/reviewIcon.svg";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const SingleApplicationRow = ({ submission }) => {
  const { user } = useContext(AuthContext);
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
    <div className="flex justify-between items-center w-full border mt-1 h-[75px] px-3">
      <div className=" text-[15px] text-[#3F3F3F] font-semibold">
        <h1>{organizationInfo?.orgName}</h1>
      </div>
      <div className=" text-[15px] text-[#3F3F3F] font-semibold">
        <h1>{task?.taskName}</h1>
      </div>
      <div className=" text-[15px] text-[#3F3F3F] font-normal">
        {submission?.submissionDateTime ? (
          <h1>{new Date(submission?.submissionDateTime)?.toDateString()}</h1>
        ) : (
          <h1>-</h1>
        )}
      </div>
      <div className=" text-[15px] font-semibold">
        <h1>{task?.taskTime} hrs </h1>
      </div>
      <div className=" text-[15px] font-semibold">
        <h1
          className={`p-2 rounded-md w-[95px] text-center ${
            submission?.submissionStatus === "Processing"
              ? "text-[#4555BA] bg-[#F1F3FF]"
              : submission?.submissionStatus === "Selected"
              ? "text-[#D4A500] bg-[#FFF8E3]"
              : submission?.submissionStatus === "Reject"
              ? "text-[#DD2025] bg-[#FFF0F0]"
              : ""
          }`}
        >
          {submission?.submissionStatus}
        </h1>
      </div>
      <div className=" text-[15px] font-semibold">
        <Link to={`/internshipSubmission/${task?._id}`}>
          <img src={reviewIcon} alt="icon" />
        </Link>
      </div>
    </div>
  );
};

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const data = {
    myApplicationData: [
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Processing",
      },
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Selected",
      },
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Reject",
      },
    ],
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/taskSubmissions/submissions/${user?.email}`
      )
      .then((taskSubmissions) => {
        setSubmissions(taskSubmissions?.data);
      })
      .catch((error) => console.error(error));
  }, [user]);

  return (
    <div>
      <DashboardLayout>
        <div className="mx-[10px]">
          <h1 className="text-[21px] font-bold mt-[95px] mb-5 ">
            My Application
          </h1>

          <div className="flex justify-between items-center w-full bg-[#E8EBFB] h-[75px] px-3">
            <div className=" text-[18px] font-bold">
              <h1>Company</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1>Task</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1>Submitted on</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1>Hours</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1>Status</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1>Review</h1>
            </div>
          </div>
          {submissions?.map((item) => (
            <SingleApplicationRow submission={item} />
          ))}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default MyApplication;
