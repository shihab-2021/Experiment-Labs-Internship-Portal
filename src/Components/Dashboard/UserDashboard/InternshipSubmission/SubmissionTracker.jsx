import React, { useContext, useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { useParams } from "react-router-dom";
import LinkIcon from "../../../../assets/Dashboard/UserDashboard/LinkIcon.png";
import User from "../../../../assets/Shared/user.svg";
import SolutionSubmissionIcon from "../../../../assets/Dashboard/UserDashboard/SolutionSubmissionIcon.png";
import Thumbs from "../../../../assets/Dashboard/UserDashboard/Thumbs.png";
import UploadIcon from "../../../../assets/Dashboard/UserDashboard/UploadIcon.png";
import GoogleDriveLogo from "../../../../assets/Dashboard/UserDashboard/googleDriveLogo.png";
import axios from "axios";
import TextEditor from "../../../Shared/TextEditor/TextEditor";
import Swal from "sweetalert2";

const SubmissionTracker = () => {
  const { userInfo, user } = useContext(AuthContext);
  const { id } = useParams();

  const [fileLoading, setFileLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [fileLink, setFileLink] = useState("");

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

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setFileLoading(false);

    const file = e.dataTransfer.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/uploadFile/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFileLink(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedFile(file);
    setFileLoading(true);
  };

  const handleFileChange = async (e) => {
    setFileLoading(true);
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/uploadFile/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFileLink(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedFile(file);
    setFileLoading(false);
  };

  const [task, setTask] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});
  const [aboutSolution, setAboutSolution] = useState("");
  const [participationInfo, setParticipationInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${id}`)
      .then((task) => {
        setTask(task?.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

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

  useEffect(() => {
    setParticipationInfo(
      task?.participants?.find(
        (participant) => participant?.participantEmail === user?.email
      )
    );
  }, [task]);

  console.log(participationInfo);

  const handleSubmitTask = async () => {
    const submitData = {
      aboutSolution: aboutSolution,
      fileLink: fileLink,
      participantEmail: user?.email,
      taskId: task?._id,
      organizationId: organizationInfo?._id,
      submissionDateTime: new Date(),
    };
    console.log(submitData);
    const newSubmission = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/submitTask`,
      submitData
    );
    if (newSubmission.statusText === "OK") {
      Swal.fire({
        icon: "success",
        title: "Task Submitted",
        text: "Your task has been submitted!",
      });
    }
  };

  return (
    <div>
      <div className=" border-b ">
        <div className="flex px-4 gap-10 mt-10 mb-2 items-center">
          <div>
            <h1 className="font-bold text-[30px]">
              Hello {userInfo?.fastName}
            </h1>
            <p className="text-[21px] font-medium tracking-wide">
              {formatDate()}
            </p>
          </div>
          <div
            style={{
              borderRadius: "14px",
              border: "1px solid #DDD",
            }}
            className=" lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
          >
            <FaMagnifyingGlass />
            <input className="w-full" placeholder="Search"></input>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="border rounded-md">
          <div className=" p-4 mb-2">
            <h1 className=" text-[17px] font-[700] tracking-wider ">
              Application Tracker
            </h1>
            <h2 className=" text-[#3F3F3F] text-[16px] font-[500] ">
              Track your solution
            </h2>
          </div>
          <div className="mb-4">
            <div>
              <div className=" grid grid-cols-3 w-3/4 mx-auto h-1 mb-[-20px]">
                <div className="bg-[#D9D9D9]"></div>
                <div className="bg-[#D9D9D9]"></div>
                <div className="bg-[#D9D9D9]"></div>
              </div>
            </div>
            <div className=" grid grid-cols-4 gap-[10px]">
              <div className="flex items-center flex-col gap-2">
                <p className="bg-[#4555BA] rounded-full flex items-center justify-center w-[40px] h-[40px] text-[16px] font-medium text-white text-center">
                  1
                </p>
                <p>Start task</p>
                <p>12:00pm</p>
                <p>24/jan/2022</p>
              </div>
              {/* <p className="bg-[#D9D9D9] w-[50px] h-1"></p> */}
              <div className="flex items-center flex-col gap-2">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  2
                </p>
                <p>Submit task</p>
              </div>
              <div className="flex items-center flex-col gap-2">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  3
                </p>
                <p>Selected by company</p>
              </div>
              <div className="flex items-center flex-col gap-2">
                <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[40px] h-[40px] text-white text-[16px] font-medium text-center">
                  4
                </p>
                <p>Receive prize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 grid grid-cols-12 items-center gap-3 ">
        <div className=" border p-4 col-span-8 rounded-md ">
          <h1 className=" font-[500] text-[18px] tracking-wider ">
            Task Details
          </h1>
          <div>
            <h1 className="mt-[12px] text-[20px] font-[700] tracking-wider ">
              {task?.taskName}
            </h1>
            <p>Task no. 4</p>
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
                {task?.taskLimit} Students
              </h1>
              <h1 className=" font-raleway font-bold text-[#007d00] text-[15px] tracking-[1.50px] px-[7px] w-fit py-[4px] bg-[#d6ffd6] rounded-[10px]">
                4 spot left
              </h1>
            </div>
          </div>
          <div className=" mt-6 flex items-center justify-between ">
            <div>
              <h1 className="text-[16px] ">Task Created by</h1>
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
      <div className="p-4">
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
            <div className="min-h-[155px] flex-col justify-center items-end gap-[7px] flex">
              <div className="self-stretch min-h-[129px] border flex-col justify-start items-start gap-px flex">
                <div className="self-stretch px-2.5 bg-violet-50 border border-neutral-200 justify-start items-center gap-[90px] inline-flex">
                  <div className="w-[802px] py-[7px] flex-col justify-center items-center gap-8 inline-flex">
                    <div className="self-stretch text-black text-base font-medium font-['Raleway'] tracking-wider">
                      {" "}
                      Write about Solution
                    </div>
                  </div>
                </div>
                {/* Text editor */}
                <div className="bg-white text-black w-full">
                  <TextEditor setValue={setAboutSolution} />
                </div>
              </div>
              <div className="text-sky-600 text-base font-medium font-['Raleway'] tracking-wider">
                Words limit/200
              </div>
            </div>
          </div>
          <div className="w-full min-h-[98px] border border-zinc-300 flex-col justify-center items-center gap-3 flex">
            <div className="self-stretch py-[5px] bg-violet-50 justify-center items-start gap-2.5 inline-flex">
              <h1 className="grow shrink basis-0 self-stretch text-black text-base font-medium font-['Raleway'] tracking-wider ml-4">
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
          {selectedFile && (
            <div className="w-full h-8 px-[5px] py-2.5 bg-violet-100 justify-start items-center gap-[9px] inline-flex">
              <img
                className="w-[29.07px] h-[26px] m-1 relative"
                src={GoogleDriveLogo}
                alt="GoogleDriveLogo"
              />
              <h1 className="text-zinc-500 text-base font-medium font-['Raleway'] tracking-wider">
                {selectedFile?.name}
              </h1>
            </div>
          )}
          <div className="px-2.5 w-full bg-white justify-center items-center gap-[498px] inline-flex">
            <div className=" min-h-[52px] p-2.5 justify-center items-center gap-2.5 flex">
              <img src={Thumbs} alt="Thumbs" />
              <div className="text-neutral-700 text-[15px] font-bold font-['Raleway'] tracking-wider">
                "You are ready to submit task”
              </div>
            </div>
            <div className="px-[21px] py-2.5 bg-indigo-700 rounded-[19px] justify-center items-center gap-2.5 flex">
              <button
                onClick={() => handleSubmitTask()}
                className="text-white text-base font-medium font-['Raleway'] tracking-wider"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionTracker;
