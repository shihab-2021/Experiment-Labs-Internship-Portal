import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import reviewIcon from "../../assets/Dashboard/AdminDashboard/reviewIcon.svg";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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

  console.log(organizationInfo);

  return (
    <div className="grid grid-cols-6 gap-[2px] w-full border mt-1 h-[75px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Applications</title>
      </Helmet>
      <div className="text-center flex items-center justify-center text-[15px] text-[#3F3F3F] font-semibold">
        <img
          className="max-w-[150px] max-h-[50px] "
          src={organizationInfo?.orgLogo}
          alt="orgLogo"
        />
      </div>
      <div className="text-center flex items-center justify-center text-[15px] text-[#3F3F3F] font-semibold">
        <h1>{task?.taskName}</h1>
      </div>
      <div className="text-center flex items-center justify-center text-[15px] text-[#3F3F3F] font-normal">
        {submission?.submissionDateTime ? (
          <h1 className=" font-sans ">
            {new Date(submission?.submissionDateTime)?.toDateString()}
          </h1>
        ) : (
          <h1 className="text-xl">-</h1>
        )}
      </div>
      <div className="text-center flex items-center justify-center text-[15px] font-semibold">
        <h1 className="font-sans">{task?.taskTime} hrs </h1>
      </div>
      <div className="text-center flex items-center justify-center text-[15px] font-semibold">
        <h1
          className={`p-2 rounded-md w-[95px] text-center ${
            submission?.submissionStatus === "Processing"
              ? "text-[#4555BA] bg-[#F1F3FF]"
              : submission?.submissionStatus === "Selected"
              ? "text-[#46dd20] bg-[#f3fff0]"
              : submission?.submissionStatus === "Rejected"
              ? "text-[#DD2025] bg-[#FFF0F0]"
              : submission?.submissionStatus === "Pending"
              ? "text-[#D4A500] bg-[#FFF8E3]"
              : submission?.submissionStatus === "SuperAdminApproved"
              ? "text-[#45ba83] bg-[#f1fff8]"
              : ""
          }`}
        >
          {submission?.submissionStatus === "SuperAdminApproved"
            ? "Processing"
            : submission?.submissionStatus}
        </h1>
      </div>
      <div className="text-center flex items-center justify-center text-[15px] font-semibold">
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

          <div className="grid grid-cols-6 gap-[2px] w-full bg-[#E8EBFB] h-[75px]">
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
              <h1>Company</h1>
            </div>
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
              <h1>Task</h1>
            </div>
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
              <h1>Submitted on</h1>
            </div>
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
              <h1>Hours</h1>
            </div>
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
              <h1>Status</h1>
            </div>
            <div className=" text-center flex items-center justify-center text-[18px] font-bold">
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
