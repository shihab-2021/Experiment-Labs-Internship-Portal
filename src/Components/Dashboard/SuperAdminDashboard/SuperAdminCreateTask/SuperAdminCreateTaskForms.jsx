import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import CompanyInformation from "./CompanyInformation";
import TaskInformation from "./TaskInformation";

const SuperAdminCreateTaskForms = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [fileLoading, setFileLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [page, setPage] = useState(1);
  const [organizations, setOrganizations] = useState([]);
  const [orgName, setOrgName] = useState("");
  const [orgNameDropDown, setOrgNameDropDown] = useState(false);
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [orgLogo, setOrgLogo] = useState("");
  const [aboutTask, setAboutTask] = useState("");
  const [aboutOutcome, setAboutOutcome] = useState("");
  const [videoFileLoading, setVideoFileLoading] = useState(false);
  const [selectedVideoFile, setSelectedVideoFile] = useState("");
  const [video, setVideo] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryNameDropDown, setCategoryNameDropDown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [taskInfo, setTaskInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations`)
      .then((org) => {
        setOrganizations(org?.data);
      })
      .catch((error) => console.error(error));
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/categories`)
      .then((allCategory) => {
        setCategories(allCategory?.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (organizationInfo?.orgLogo) setOrgLogo(organizationInfo?.orgLogo);
  }, [organizationInfo]);

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

    if (organizationInfo?.orgName) {
      const id = organizationInfo._id;
      organizationInfo.orgName = form.companyName.value;
      organizationInfo.aboutOrg = form.aboutCompany.value;
      organizationInfo.orgLogo = orgLogo;
      delete organizationInfo._id;

      if (organizationInfo.orgName && organizationInfo.orgLogo) {
        const updateOrganization = await axios.put(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${id}`,
          organizationInfo
        );
        organizationInfo._id = id;
        form.reset();
        setPage(2);
      } else {
        Swal.fire({
          title: `Please Enter ${
            !organizationInfo.orgName && !organizationInfo.aboutOrg
              ? "Company Name & Company Logo"
              : !organizationInfo.orgName
              ? "Company Name"
              : "Company Logo"
          }!`,
          icon: "error",
        });
        form.reset();
      }
    } else {
      const companyData = {
        orgName: form.companyName.value,
        aboutOrg: form.aboutCompany.value,
        officialEmail: user?.email,
        orgLogo: orgLogo,
      };
      if (companyData.orgName && companyData.orgLogo) {
        const newOrganization = await axios.post(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations`,
          companyData
        );
        console.log(newOrganization);
        form.reset();
        setPage(2);
      } else {
        Swal.fire({
          title: `Please Enter ${
            !companyData.orgName && !companyData.aboutOrg
              ? "Company Name & Company Logo"
              : !companyData.orgName
              ? "Company Name"
              : "Company Logo"
          }!`,
          icon: "error",
        });
        form.reset();
      }
    }
    form.reset();
  };

  const handleVideoDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleVideoDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //setDragActive(false);
  };

  const handleVideoDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleVideoDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setVideoFileLoading(false);

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

      setVideo(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedVideoFile(file);
    setVideoFileLoading(true);
  };

  const handleVideoFileChange = async (e) => {
    setVideoFileLoading(true);
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

      setVideo(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedVideoFile(file);
    setVideoFileLoading(false);
  };

  const handleCreateTask = async (event) => {
    event.preventDefault();
    const form = event?.target;
    const taskData = {
      taskName: form.taskName.value,
      aboutTask: aboutTask,
      aboutOutcome: aboutOutcome,
      taskLink: form.taskLink.value,
      taskTime: form.taskTime.value,
      taskDeadline: form.taskDeadline.value,
      participantLimit: form.participantLimit.value,
      creator: {
        email: user?.email,
        organizationId: organizationInfo?._id,
        role: userInfo?.organizations[0]?.role,
      },
      superAdminDecisionInfo: {
        email: userInfo?.email,
        decisionDateTime: new Date(),
      },
      participants: [],
      taskStatus: "Processing",
      postingDateTime: new Date(),
    };
    setTaskInfo(taskData);

    setShowCategoryInput(true);
  };

  const createTask = async () => {
    // setTaskInfo({ ...taskInfo, taskCategory: categoryName });
    const newTask = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks`,
      { ...taskInfo, taskCategory: categoryName }
    );
    console.log(newTask);
    if (newTask) {
      Swal.fire({
        title: "New task created successfully!",
        icon: "success",
      });
      // const sendMail = await axios.post(
      //   `${import.meta.env.VITE_APP_BACKEND_API}/api/v1/sendMail`,
      //   {
      //     from: `${userInfo?.email}`,
      //     to: `naman.j@experimentlabs.in, gaurav@experimentlabs.in, shihab77023@gmail.com, rhrahi14@gmail.com`,
      //     subject: `Submission of ${taskInfo?.taskName}`,
      //     message: `${userInfo?.name} has Created a Task named ${taskInfo?.taskName}.Please review the Task.`,
      //   }
      // );
      // if (sendMail)
      navigate("/dashboard");
    }
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
        <CompanyInformation
          formatDate={formatDate}
          organizationInfo={organizationInfo}
          setOrganizationInfo={setOrganizationInfo}
          orgName={orgName}
          orgLogo={orgLogo}
          setOrgName={setOrgName}
          orgNameDropDown={orgNameDropDown}
          setOrgNameDropDown={setOrgNameDropDown}
          organizations={organizations}
          handleNext={handleNext}
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
          fileLoading={fileLoading}
          selectedFile={selectedFile}
        />
      ) : (
        <TaskInformation
          formatDate={formatDate}
          showCategoryInput={showCategoryInput}
          setShowCategoryInput={setShowCategoryInput}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          categoryNameDropDown={categoryNameDropDown}
          setCategoryNameDropDown={setCategoryNameDropDown}
          categories={categories}
          handleCreateTask={handleCreateTask}
          createTask={createTask}
          handleVideoDragOver={handleVideoDragOver}
          handleVideoDragEnter={handleVideoDragEnter}
          handleVideoDragLeave={handleVideoDragLeave}
          handleVideoDrop={handleVideoDrop}
          handleVideoFileChange={handleVideoFileChange}
          aboutTask={aboutTask}
          setAboutTask={setAboutTask}
          aboutOutcome={aboutOutcome}
          setAboutOutcome={setAboutOutcome}
          video={video}
          videoFileLoading={videoFileLoading}
          category={category}
          setCategory={setCategory}
        />
      )}
    </>
  );
};

export default SuperAdminCreateTaskForms;
