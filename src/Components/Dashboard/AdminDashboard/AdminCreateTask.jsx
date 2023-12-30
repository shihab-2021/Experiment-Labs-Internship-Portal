import React, { useContext, useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inputImg from "../../../assets/Shared/input.svg";
import roundtask from "../../../assets/Shared/roundtask.svg";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdminCreateTask = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [fileLoading, setFileLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [page, setPage] = useState(1);
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [orgLogo, setOrgLogo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo?.organizations)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
            userInfo?.organizations[0]?.organizationId
          }`
        )
        .then((org) => {
          setOrganizationInfo(org?.data);
          if (org?.data?.orgName && org?.data?.orgName && org?.data?.orgLogo)
            setPage(2);
          if (org?.data?.orgLogo) setOrgLogo(org?.data?.orgLogo);
        })
        .catch((error) => console.error(error));
  }, [userInfo]);

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

      setOrgLogo(response.data.fileUrl);
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

      setOrgLogo(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedFile(file);
    setFileLoading(false);
  };

  const handleNext = async (event) => {
    event.preventDefault();
    const form = event?.target;

    if (organizationInfo) {
      organizationInfo.orgName = form.companyName.value;
      organizationInfo.aboutOrg = form.aboutCompany.value;
      organizationInfo.orgLogo = orgLogo;
      delete organizationInfo._id;

      const updateOrganization = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
          userInfo?.organizations[0]?.organizationId
        }`,
        organizationInfo
      );
      console.log(updateOrganization);
    } else {
      const companyData = {
        orgName: form.companyName.value,
        aboutOrg: form.aboutCompany.value,
        officialEmail: user?.email,
        orgLogo: orgLogo,
      };
      console.log(companyData);
      const newOrganization = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations`,
        companyData
      );
      console.log(newOrganization);
    }
    setPage(2);
    form.reset();
  };

  const handleCreateTask = async (event) => {
    event.preventDefault();
    const form = event?.target;
    const taskData = {
      taskName: form.taskName.value,
      aboutTask: form.aboutTask.value,
      aboutOutcome: form.aboutOutcome.value,
      taskLink: form.taskLink.value,
      taskTime: form.taskTime.value,
      taskDeadline: form.taskDeadline.value,
      participantLimit: form.participantLimit.value,
      creator: {
        email: user?.email,
        organizationId: organizationInfo?._id,
        role: userInfo?.organizations[0]?.role,
      },
      taskStatus:
        userInfo?.organizations[0]?.role === "Admin"
          ? "AdminApproved"
          : "Pending",
      postingDateTime: new Date(),
    };
    console.log(taskData);
    const newTask = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks`,
      taskData
    );
    console.log(newTask);
    if (newTask) {
      Swal.fire({
        title: "New task created successfully!",
        icon: "success",
      });
      navigate("/dashboard");
    }
    form.reset();
  };

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

  return (
    <>
      {page === 1 ? (
        <div className="w-11/12 mx-auto mt-10">
          <div className="flex gap-10 justify-items-center">
            <div>
              <p className="text-[21px] font-medium tracking-wide">
                {formatDate()}
              </p>
            </div>
            <div
              style={{
                borderRadius: "14px",
                border: "1px solid #DDD",
              }}
              className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
            >
              <FaMagnifyingGlass />
              <input className="w-full" placeholder="Search"></input>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-2">
              <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">
                1
              </p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
                Company Information
              </p>
            </div>
            <p className="bg-[#D9D9D9] w-[50px] h-1"></p>
            <div className="flex items-center gap-2">
              <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">
                2
              </p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
                Task Information
              </p>
            </div>
          </div>
          <form onSubmit={handleNext}>
            <h1 className="text-[18px] font-medium tracking-wide text-center mt-[45px]">
              Upload Company image
            </h1>
            <label>
              <div
                className="grid justify-center w-fit mx-auto "
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {fileLoading && (
                  <div className="border border-[#4555BA] min-w-[242px] min-h-[114px]">
                    <img
                      src={inputImg}
                      className="mx-auto mt-2 animate-ping"
                      alt="inputImg"
                    />
                  </div>
                )}
                {!fileLoading && (
                  <div className="border border-[#4555BA] min-w-[242px] min-h-[114px]">
                    <img
                      src={inputImg}
                      className="mx-auto mt-2"
                      alt="inputImg"
                    />
                    {selectedFile && (
                      <p className="text-[18px] font-[700] m-[5px] ">
                        File:{" "}
                        <span className="font-[500]">{selectedFile?.name}</span>
                      </p>
                    )}
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
            {orgLogo && (
              <img src={orgLogo} className="mx-auto my-4" alt="orgLogo" />
            )}
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName" className="text-[17px] font-medium">
                Company name
              </label>
              <input
                defaultValue={organizationInfo?.orgName}
                placeholder="write company name"
                type="text"
                name="companyName"
                id="companyName"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutCompany" className="text-[17px] font-medium">
                Write about company
              </label>
              <textarea
                defaultValue={organizationInfo?.aboutOrg}
                maxLength={200}
                placeholder="ex,write about company what company does"
                type="text"
                name="aboutCompany"
                id="aboutCompany"
                className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
              />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">
              words limit/200
            </p>
            <button
              type="submit"
              className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
            >
              Next <FaArrowRight></FaArrowRight>
            </button>
          </form>
        </div>
      ) : (
        <div className="w-11/12 mx-auto mt-10">
          <div className="flex gap-10 justify-items-center">
            <div>
              <p className="text-[21px] font-medium tracking-wide">
                {formatDate()}
              </p>
            </div>
            <div
              style={{
                borderRadius: "14px",
                border: "1px solid #DDD",
              }}
              className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
            >
              <FaMagnifyingGlass />
              <input className="w-full" placeholder="Search"></input>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-2">
              <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">
                1
              </p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
                Company Information
              </p>
            </div>
            <p className="bg-[#4555BA] w-[50px] h-1"></p>
            <div className="flex items-center gap-2">
              <p className="bg-[#4555BA] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">
                2
              </p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
                Task Information
              </p>
            </div>
          </div>
          <form onSubmit={handleCreateTask} className="mt-3" autocomplete="on">
            <div className="flex flex-col gap-2">
              <label htmlFor="taskName" className="text-[17px] font-medium">
                Task name
              </label>
              <input
                placeholder="ex. Marketing task"
                type="text"
                name="taskName"
                id="taskName"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutTask" className="text-[17px] font-medium">
                Write about task
              </label>
              <textarea
                maxLength={200}
                placeholder="Write about task what is the task"
                type="text"
                name="aboutTask"
                id="aboutTask"
                className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
              />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">
              words limit/200
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutOutcome" className="text-[17px] font-medium">
                Write about outcome
              </label>
              <textarea
                maxLength={200}
                placeholder="Write about what students receive upon completing the task."
                type="text"
                name="aboutOutcome"
                id="aboutOutcome"
                className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
              />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">
              words limit/200
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="taskLink" className="text-[17px] font-medium">
                Task link
              </label>
              <input
                placeholder="url of your task"
                type="url"
                name="taskLink"
                id="taskLink"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <label
              htmlFor="taskSubmissionTime"
              className="text-[18px] font-medium"
            >
              Task submission time
            </label>
            <div className="flex mt-3 justify-between">
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="taskTime"
                  className="text-[16px] text-[#3F3F3F] font-medium"
                >
                  The duration for completing the task.
                </label>
                <input
                  placeholder="time to do the task"
                  type="number"
                  name="taskTime"
                  id="taskTime"
                  className="w-[364px] bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="taskDeadline"
                  className="text-[16px] text-[#3F3F3F] font-medium"
                >
                  Deadline
                </label>
                <input
                  placeholder="month/date/year"
                  type="datetime-local"
                  name="taskDeadline"
                  id="taskDeadline"
                  className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="participantLimit"
                  className="text-[16px] text-[#3F3F3F] font-medium"
                >
                  Limit
                </label>
                <input
                  placeholder="0"
                  type="number"
                  name="participantLimit"
                  id="participantLimit"
                  className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex gap-2 mt-5 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
            >
              Task Create <img src={roundtask} alt="" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminCreateTask;
