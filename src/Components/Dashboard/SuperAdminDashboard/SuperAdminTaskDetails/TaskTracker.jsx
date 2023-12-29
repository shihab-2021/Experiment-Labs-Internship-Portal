import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import LinkIcon from "../../../../assets/Dashboard/UserDashboard/LinkIcon.png";
import User from "../../../../assets/Shared/user.svg";
import SubmissionDetailsIcon from "../../../../assets/Dashboard/SuperAdminDashboard/SubmissionDetailsIcon.png";

const TaskTracker = () => {
  const { userInfo, user } = useContext(AuthContext);
  const { id } = useParams();

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

  const [task, setTask] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${id}`)
      .then((task) => {
        setTask(task?.data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  console.log(task);

  useEffect(() => {
    if (task?.creator?.email) {
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
    }
    if (task?.creator?.organizationId) {
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
    }
  }, [task]);
  return (
    <div className="p-4">
      <div className=" flex items-center justify-between ">
        <h1 className="font-bold text-[20px] text-[#F1511B]">
          Decision Pending
        </h1>
        <button className="flex items-center gap-1 py-2 px-3 text-[16px] font-medium rounded-full bg-[#828282] text-white">
          <img src={SubmissionDetailsIcon} alt="SubmissionDetailsIcon" />{" "}
          Submission Details
        </button>
      </div>
      <div className="py-4">
        <div className="border rounded-md">
          <div className="flex gap-5">
            <div className=" p-4 mb-2">
              <h1 className=" text-[17px] font-[700] tracking-wider ">
                Task Tracker
              </h1>
              <h2 className=" text-[#3F3F3F] text-[16px] font-[500] ">
                Created by {taskCreatorInfo?.firstName}{" "}
                {taskCreatorInfo?.lastName}
              </h2>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <div className=" grid grid-cols-3 w-3/4 mx-auto h-1 mb-[-20px]">
                <div
                  className={`${
                    task?.submissionDateTime ? "bg-[#4555BA]" : "bg-[#D9D9D9]"
                  } `}
                ></div>
                <div
                  className={`${
                    task?.selectedDateTime ? "bg-[#4555BA]" : "bg-[#D9D9D9]"
                  } `}
                ></div>
                <div
                  className={`${
                    task?.prizeDateTime ? "bg-[#4555BA]" : "bg-[#D9D9D9]"
                  } `}
                ></div>
              </div>
            </div>
            <div className=" grid grid-cols-4 gap-[10px]">
              <div className="flex items-center flex-col ">
                <p className="bg-[#4555BA] rounded-full flex items-center justify-center w-[40px] h-[40px] text-[16px] font-medium text-white text-center">
                  1
                </p>
                <div className="text-center">
                  <p className="text-[16px] font-[500] font-raleway ">
                    Create task
                  </p>
                  {task?.postingDateTime && (
                    <>
                      <p className=" text-[#737373] text-[13px] font-[500] font-sans ">
                        {new Date(task?.postingDateTime)?.toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                      <p className=" text-[13px] font-[400] font-sans">
                        {new Date(task?.postingDateTime)?.toDateString()}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center flex-col">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  2
                </p>
                <p>Decision pending</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  3
                </p>
                <p>Share submission</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  4
                </p>
                <p>Completed task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 grid grid-cols-12 items-center gap-3 ">
        <div className=" border p-4 col-span-8 rounded-md ">
          <h1 className=" font-[500] text-[18px] tracking-wider ">
            Task Details
          </h1>
          <div>
            <h1 className="mt-[12px] text-[20px] font-[700] tracking-wider ">
              {task?.taskName}
            </h1>
            <h2 className="relative w-fit font-raleway font-medium text-[#4555BA] text-[15.9px] tracking-[1.59px] my-4 leading-[normal] whitespace-nowrap">
              {task?.taskTime} hrs task
            </h2>
            <p className=" text-[#797979] text-[16px] tracking-wider ">
              "{task?.aboutTask}"
            </p>
            <h1 className=" mt-4 text-[16px] font-[700] tracking-wider ">
              Out come
            </h1>
            <p className=" text-[#797979] text-[16px] tracking-wider ">
              {task?.aboutOutcome}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-5 ">
            <img src={LinkIcon} alt="LinkIcon" />
            <p className="text-[#4555BA] text-[16px] font-[400] ">
              {task?.taskLink}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-4">
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
            <div className="max-w-[220px] flex flex-col items-center">
              <h1 className=" font-raleway text-[16px] font-[500] text-[#1e1e1e]">
                {task?.participantLimit} Students
              </h1>
              <h1 className=" font-raleway font-bold text-[#007d00] text-[15px] tracking-[1.50px] px-[7px] w-fit py-[4px] bg-[#d6ffd6] rounded-[10px]">
                {task?.participants
                  ? parseInt(task?.participantLimit) -
                    task?.participants?.length
                  : parseInt(task?.participantLimit)}{" "}
                spot left
              </h1>
            </div>
          </div>
          <div className=" mt-6 w-full flex items-center justify-between ">
            <div className="w-full">
              <h1 className="text-[16px] ">Task Created by</h1>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1">
                  <img
                    className="w-[47px] h-[47px] object-cover rounded-full border "
                    src={taskCreatorInfo?.image ? taskCreatorInfo?.image : User}
                    alt="taskCreatorInfoImage"
                  />
                  <div>
                    <h1 className="text-[16px] font-[600] tracking-wide">
                      {taskCreatorInfo?.firstName} {taskCreatorInfo?.lastName}
                    </h1>
                    <h1 className="text-[12px] text-[#797979] font-[400] ">
                      {task?.creator?.role}
                    </h1>
                  </div>
                </div>
                <button className="w-[136px] h-9 px-[26px] py-2.5 bg-white rounded-[26px] border border-sky-500 justify-center items-center gap-2.5 inline-flex text-sky-500 text-xl font-normal font-raleway leading-[15.08px]">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[96%] border p-4 col-span-4 rounded-md flex flex-col gap-2 items-center justify-center ">
          <img src={organizationInfo?.orgLogo} alt="orgLogo" />
          <h1 className=" text-[15px] font-[700] tracking-wider ">
            {organizationInfo?.orgName}
          </h1>
          <p className=" w-11/12 mx-auto text-[13px] text-center">
            <span className=" font-[700] ">Headquarter: </span>Plot 379/380 Near
            IFFCO Chowk Metro Station, Sector 29, Gurugram, Haryana 122001
          </p>
        </div>
      </div>
      {/* <div className="p-4">
        <div className=" flex-col justify-start items-start gap-[5px] inline-flex">
          <h1 className="w-[146px] text-red-600 text-[17px] font-medium font-raleway tracking-widest">
            Important information{" "}
          </h1>
          <p className="self-stretch text-neutral-700 text-base font-medium font-raleway tracking-wider">
            "Important information regarding submission: If you choose any task,
            make sure you complete it. If not completed, your access to this
            portal may be blocked. Thank you."
          </p>
        </div>
        <div className=" mt-4 w-full px-[5px] py-[7px] bg-white rounded-[10px] border border-zinc-300 flex-col justify-center items-center gap-[18px] inline-flex">
          <div className="flex-col w-full gap-6 flex">
            <div className="flex-col justify-start  items-start gap-[15px] flex">
              <div className=" px-[3px] justify-start items-center gap-[3px] inline-flex">
                <img
                  className="w-[30px] h-[30px] relative"
                  src={SolutionSubmissionIcon}
                  alt="SolutionSubmissionIcon"
                />
                <h1 className="text-neutral-700 text-base font-bold font-raleway tracking-wider">
                  Solution Submission
                </h1>
              </div>
              <div className=" px-2 flex-col justify-start items-start gap-[13px] flex">
                <div className=" text-black text-[17px] font-medium font-raleway tracking-widest">
                  {task?.taskName}
                </div>
                <div className="self-stretch text-neutral-500 text-base font-medium font-raleway tracking-wider">
                  "{task?.aboutTask}"
                </div>
              </div>
            </div>
            {!participationInfo?.submissionDateTime && (
              <div className="min-h-[155px] flex-col justify-center items-end gap-[7px] flex">
                <div className="self-stretch min-h-[129px] border flex-col justify-start items-start gap-px flex">
                  <div className="self-stretch px-2.5 bg-violet-50 border border-neutral-200 justify-start items-center gap-[90px] inline-flex">
                    <div className="w-[802px] py-[7px] flex-col justify-center items-center gap-8 inline-flex">
                      <div className="self-stretch text-black text-base font-medium font-raleway tracking-wider">
                        {" "}
                        Write about Solution
                      </div>
                    </div>
                  </div>

                  <div className="bg-white text-black w-full">
                    <TextEditor setValue={setAboutSolution} />
                  </div>
                </div>
                <div className="text-sky-600 text-base font-medium font-raleway tracking-wider">
                  Words limit/200
                </div>
              </div>
            )}
          </div>
          {!participationInfo?.submissionDateTime && (
            <div className="w-full min-h-[98px] border border-zinc-300 flex-col justify-center items-center gap-3 flex">
              <div className="self-stretch py-[5px] bg-violet-50 justify-center items-start gap-2.5 inline-flex">
                <h1 className="grow shrink basis-0 self-stretch text-black text-base font-medium font-raleway tracking-wider ml-4">
                  Upload Task link
                </h1>
              </div>
              <label>
                <div
                  className="grid justify-center w-fit mx-auto "
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {fileLoading && (
                    <div>
                      <img
                        src={UploadIcon}
                        className=" animate-ping h-[49px] px-[7px] justify-center items-center inline-flex mb-4"
                        alt="inputImg"
                      />
                    </div>
                  )}
                  {!fileLoading && (
                    <div>
                      <img
                        src={UploadIcon}
                        className="h-[49px] px-[7px] justify-center items-center inline-flex mb-4"
                        alt="inputImg"
                      />
                    </div>
                  )}
                </div>
                <input
                  className="hidden"
                  type="file"
                  name="file"
                  placeholder="upload"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
          {selectedFile && (
            <div className="w-full h-8 px-[5px] py-2.5 bg-violet-100 justify-start items-center gap-[9px] inline-flex">
              <img
                className="w-[29.07px] h-[26px] m-1 relative"
                src={GoogleDriveLogo}
                alt="GoogleDriveLogo"
              />
              <h1 className="text-zinc-500 text-base font-medium font-raleway tracking-wider">
                {selectedFile?.name}
              </h1>
            </div>
          )}
          <div className="px-2.5 w-full bg-white justify-center items-center gap-[498px] inline-flex">
            <div className=" min-h-[52px] p-2.5 justify-center items-center gap-2.5 flex">
              <img src={Thumbs} alt="Thumbs" />
              {!participationInfo?.submissionDateTime && (
                <p className="text-neutral-700 text-[15px] font-bold font-raleway tracking-wider">
                  "You are ready to submit task”
                </p>
              )}
              {participationInfo?.submissionDateTime && (
                <p className="text-neutral-700 text-[15px] font-bold font-raleway tracking-wider">
                  "Your solution has been submitted successfully."
                </p>
              )}
            </div>
            {participationInfo?.submissionDateTime ? (
              <Link
                to="/myApplication"
                className="flex w-fit gap-2 justify-end min-w-[200px]"
              >
                <img
                  className=" w-[18px] h-[24px] "
                  src={SeeApplicationIcon}
                  alt="SeeApplicationIcon"
                />
                <span className="text-sky-600 text-base font-bold font-raleway tracking-wider w-fit">
                  See Application
                </span>
              </Link>
            ) : (
              <button
                onClick={() => handleSubmitTask()}
                className="text-white text-base font-medium font-raleway tracking-wider px-[21px] py-2.5 bg-indigo-700 rounded-[19px] justify-center items-center gap-2.5 flex"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TaskTracker;
