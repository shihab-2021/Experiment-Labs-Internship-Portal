import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ExperimentLabsLogo from "../../../assets/Dashboard/Shared/ExperimentLabsLogo.png";
import HomeIconLight from "../../../assets/Dashboard/Shared/HomeIconLight.png";
import HomeIconDark from "../../../assets/Dashboard/Shared/HomeIconDark.png";
import CreateTaskIconLight from "../../../assets/Dashboard/Shared/CreateTaskIconLight.png";
import CreateTaskIconDark from "../../../assets/Dashboard/Shared/CreateTaskIconDark.png";
import DashboardIconLight from "../../../assets/Dashboard/Shared/DashboardIconLight.png";
import DashboardIconDark from "../../../assets/Dashboard/Shared/DashboardIconDark.png";
import TaskDetailsIconLight from "../../../assets/Dashboard/Shared/TaskDetailsIconLight.png";
import TaskDetailsIconDark from "../../../assets/Dashboard/Shared/TaskDetailsIconDark.png";
import TeamIconLight from "../../../assets/Dashboard/Shared/TeamIconLight.png";
import TeamIconDark from "../../../assets/Dashboard/Shared/TeamIconDark.png";
import MessageIconLight from "../../../assets/Dashboard/Shared/MessageIconLight.png";
import MessageIconDark from "../../../assets/Dashboard/Shared/MessageIconDark.png";
import InternshipIconLight from "../../../assets/Dashboard/Shared/InternshipIconLight.png";
import InternshipIconDark from "../../../assets/Dashboard/Shared/InternshipIconDark.png";
import MyApplicationIconLight from "../../../assets/Dashboard/Shared/MyApplicationIconLight.png";
import MyApplicationIconDark from "../../../assets/Dashboard/Shared/MyApplicationIconDark.png";
import WorkHoursIconLight from "../../../assets/Dashboard/Shared/WorkHoursIconLight.png";
import WorkHoursIconDark from "../../../assets/Dashboard/Shared/WorkHoursIconDark.png";
import LeaderBoardIconLight from "../../../assets/Dashboard/Shared/LeaderBoardIconLight.png";
import LeaderBoardIconDark from "../../../assets/Dashboard/Shared/LeaderBoardIconDark.png";
import TaskAccessIconLight from "../../../assets/Dashboard/Shared/TaskAccessIconLight.png";
import TaskAccessIconDark from "../../../assets/Dashboard/Shared/TaskAccessIconDark.png";
import StudentIconLight from "../../../assets/Dashboard/Shared/StudentIconLight.png";
import StudentIconDark from "../../../assets/Dashboard/Shared/StudentIconDark.png";
import SchoolIconLight from "../../../assets/Dashboard/Shared/SchoolIconLight.png";
import SchoolIconDark from "../../../assets/Dashboard/Shared/SchoolIconDark.png";
import { AuthContext } from "../../../Contexts/AuthProvider";
import axios from "axios";
import TawkToWidget from "./TawkToWidget";
const DashboardLayout = ({ children }) => {
  const { logOut, userInfo, user } = useContext(AuthContext);
  const [toggleButton, setToggleButton] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const orgId = localStorage.getItem("orgId");
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [isOpenStickyBar, setIsOpenStickyBar] = useState(true);
  const { id } = useParams();
  const orgLogo = localStorage.getItem("orgLogo");
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const countUnreadMessage = async () => {
      const chats = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/chats/userId/${
          userInfo?._id
        }`
      );
      const unreadMessagesCount = chats?.data?.userChats.filter(
        (chat) =>
          chat.latestMessage.senderId !== userInfo._id &&
          !chat?.latestMessage?.readBy?.includes(userInfo?._id) &&
          chat?.latestMessage?.senderId
      );
      setUnread(unreadMessagesCount.length);
      console.log(unreadMessagesCount);
    };

    countUnreadMessage();
  }, []);

  useEffect(() => {
    if (orgId && role === "Student")
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${orgId}`
        )
        .then((org) => {
          setOrganizationInfo(org?.data);
          if (org?.data?.orgLogo)
            localStorage.setItem("orgLogo", org?.data?.orgLogo);
          else localStorage.setItem("orgLogo", ExperimentLabsLogo);
        })
        .catch((error) => console.error(error));
    else {
      if (role === "Counsellor") {
        if (userInfo?.organizations)
          axios
            .get(
              `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
                userInfo?.organizations[0]?.counsellorId
              }`
            )
            .then((org) => {
              setOrganizationInfo(org?.data);
              if (org?.data?.orgLogo)
                localStorage.setItem("orgLogo", org?.data?.orgLogo);
              else localStorage.setItem("orgLogo", ExperimentLabsLogo);
            })
            .catch((error) => console.error(error));
      } else if (role === "Student") {
        if (userInfo?.counsellorId) {
          localStorage.setItem("orgId", userInfo?.counsellorId);
          axios
            .get(
              `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${
                userInfo?.counsellorId
              }`
            )
            .then((org) => {
              setOrganizationInfo(org?.data);
              if (org?.data?.orgLogo)
                localStorage.setItem("orgLogo", org?.data?.orgLogo);
              else localStorage.setItem("orgLogo", ExperimentLabsLogo);
            })
            .catch((error) => console.error(error));
        }
      } else localStorage.setItem("orgLogo", ExperimentLabsLogo);
    }
  }, [orgId, role, userInfo]);
  return (
    <div>
      <>
        <div>
          <div className="font-raleway">
            <div className="flex overflow-hidden">
              <aside
                id="sidebar"
                className={`fixed ${
                  toggleButton ? "hidden" : ""
                } z-20 h-full top-0 bg-[#141414] shadow-lg left-0 flex lg:flex flex-shrink-0 flex-col w-[280px] transition duration-500 ease-in-out delay-150`}
                aria-label="Sidebar"
              >
                <div className=" flex-1 flex flex-col min-h-0 pt-0">
                  <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                    <div className="flex-1 space-y-1">
                      <div className="py-2 border-b border-[#303031] flex items-center justify-between lg:justify-center">
                        <Link
                          className="hidden lg:block"
                          to={orgId ? `/organization/${orgId}` : "/"}
                        >
                          {/* {organizationInfo?.orgLogo ? (
                            <img
                              // className="h-6 lg:h-8"
                              className="my-5 max-w-[150px]"
                              src={organizationInfo?.orgLogo}
                              alt="icon"
                            />
                          ) : (
                            <img
                              // className="h-6 lg:h-8"
                              className="my-5 max-w-[150px]"
                              src={ExperimentLabsLogo}
                              alt="icon"
                            />
                          )} */}
                          <img
                            // className="h-6 lg:h-8"
                            className="my-5 max-w-[150px]"
                            src={orgLogo}
                            alt="icon"
                          />
                        </Link>
                        <p className="text-[#676767] ml-[27px] lg:hidden">
                          Menu
                        </p>
                        <button
                          id="toggleSidebarMobile"
                          ariaExpanded="true"
                          ariaControls="sidebar"
                          className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                          //   onClick={handleClick}
                        >
                          <img src="" alt="ArrowLeftIcon" />
                        </button>
                      </div>
                      <ul className="space-y-2 px-[22px] py-2 text-white">
                        {role === "Employer" && (
                          <>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/dashboard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/dashboard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/dashboard" ? (
                                  <img
                                    src={HomeIconLight}
                                    alt="HomeIconLight"
                                  />
                                ) : (
                                  <img src={HomeIconDark} alt="HomeIconDark" />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/dashboard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Home
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/createTask"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/createTask"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/createTask" ? (
                                  <img
                                    src={CreateTaskIconLight}
                                    alt="CreateTaskIconLight"
                                  />
                                ) : (
                                  <img
                                    src={CreateTaskIconDark}
                                    alt="CreateTaskIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/createTask"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Create Task
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/dashboardBar"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/dashboardBar"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/dashboardBar" ? (
                                  <img
                                    src={DashboardIconLight}
                                    alt="DashboardIconLight"
                                  />
                                ) : (
                                  <img
                                    src={DashboardIconDark}
                                    alt="DashboardIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/dashboardBar"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Dashboard
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/taskDetails" ||
                                  location.pathname ===
                                    `/completeShowMore/${id}` ||
                                  location.pathname === `/editTaskDetails/${id}`
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/taskDetails"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/taskDetails" ||
                                location.pathname ===
                                  `/completeShowMore/${id}` ||
                                location.pathname ===
                                  `/editTaskDetails/${id}` ? (
                                  <img
                                    src={TaskDetailsIconLight}
                                    alt="TaskDetailsIconLight"
                                  />
                                ) : (
                                  <img
                                    src={TaskDetailsIconDark}
                                    alt="TaskDetailsIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/taskDetails" ||
                                    location.pathname ===
                                      `/completeShowMore/${id}` ||
                                    location.pathname ===
                                      `/editTaskDetails/${id}`
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Task Details
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/team"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/team"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/team" ? (
                                  <img
                                    src={TeamIconLight}
                                    alt="TeamIconLight"
                                  />
                                ) : (
                                  <img src={TeamIconDark} alt="TeamIconDark" />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/team"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Team
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/message"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/message"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/message" ? (
                                  <img
                                    src={MessageIconLight}
                                    alt="MessageIconLight"
                                  />
                                ) : (
                                  <img
                                    src={MessageIconDark}
                                    alt="MessageIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/message"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Messages
                                  {unread > 0 && (
                                    <span className="ml-3 py-[0.5px] px-1 rounded-full bg-red-600">
                                      {unread}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          </>
                        )}
                        {role === "Student" && (
                          <>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/userDashboard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/userDashboard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/userDashboard" ? (
                                  <img
                                    src={HomeIconLight}
                                    alt="HomeIconLight"
                                  />
                                ) : (
                                  <img src={HomeIconDark} alt="HomeIconDark" />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/userDashboard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Home
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/internship"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/internship"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/internship" ? (
                                  <img
                                    src={InternshipIconLight}
                                    alt="InternshipIconLight"
                                  />
                                ) : (
                                  <img
                                    src={InternshipIconDark}
                                    alt="InternshipIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/internship"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Internships
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/myApplication"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/myApplication"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/myApplication" ? (
                                  <img
                                    src={MyApplicationIconLight}
                                    alt="MyApplicationIconLight"
                                  />
                                ) : (
                                  <img
                                    src={MyApplicationIconDark}
                                    alt="MyApplicationIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/myApplication"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  My Applications
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/workHours"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/workHours"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/workHours" ? (
                                  <img
                                    src={WorkHoursIconLight}
                                    alt="WorkHoursIconLight"
                                  />
                                ) : (
                                  <img
                                    src={WorkHoursIconDark}
                                    alt="WorkHoursIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/workHours"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Work Hours
                                </span>
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                style={
                                  location.pathname === "/leaderBoard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/leaderBoard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/leaderBoard" ? (
                                  <img
                                    src={LeaderBoardIconLight}
                                    alt="LeaderBoardIconLight"
                                  />
                                ) : (
                                  <img
                                    src={LeaderBoardIconDark}
                                    alt="LeaderBoardIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/leaderBoard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Leader Board
                                </span>
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                style={
                                  location.pathname === "/message"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/message"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/message" ? (
                                  <img
                                    src={MessageIconLight}
                                    alt="MessageIconLight"
                                  />
                                ) : (
                                  <img
                                    src={MessageIconDark}
                                    alt="MessageIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/message"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Messages{" "}
                                  {unread > 0 && (
                                    <span className="ml-3 py-[0.5px] px-1 rounded-full bg-red-600">
                                      {unread}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          </>
                        )}
                        {role === "SuperAdmin" && (
                          <>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/superAdminDashboardHome"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/superAdminDashboardHome"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/superAdminDashboardHome" ? (
                                  <img
                                    src={HomeIconLight}
                                    alt="HomeIconLight"
                                  />
                                ) : (
                                  <img src={HomeIconDark} alt="HomeIconDark" />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/superAdminDashboardHome"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Home
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/superAdminDashboard/createTask"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/superAdminDashboard/createTask"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/superAdminDashboard/createTask" ? (
                                  <img
                                    src={CreateTaskIconLight}
                                    alt="CreateTaskIconLight"
                                  />
                                ) : (
                                  <img
                                    src={CreateTaskIconDark}
                                    alt="CreateTaskIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/superAdminDashboard/createTask"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Create Task
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/superAdminDashboard/dashboard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/superAdminDashboard/dashboard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/superAdminDashboard/dashboard" ? (
                                  <img
                                    src={DashboardIconLight}
                                    alt="DashboardIconLight"
                                  />
                                ) : (
                                  <img
                                    src={DashboardIconDark}
                                    alt="DashboardIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/superAdminDashboard/dashboard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Dashboard
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/internship"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/internship"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/internship" ? (
                                  <img
                                    src={InternshipIconLight}
                                    alt="InternshipIconLight"
                                  />
                                ) : (
                                  <img
                                    src={InternshipIconDark}
                                    alt="InternshipIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/internship"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Internships
                                </span>
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/SuperAdminDashboard/taskAccess"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/SuperAdminDashboard/taskAccess"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/SuperAdminDashboard/taskAccess" ? (
                                  <img
                                    src={TaskAccessIconLight}
                                    alt="TaskAccessIconLight"
                                  />
                                ) : (
                                  <img
                                    src={TaskAccessIconDark}
                                    alt="TaskAccessIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/SuperAdminDashboard/taskAccess"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Task Access
                                </span>
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/SuperAdminSubmissionDetails"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/SuperAdminSubmissionDetails"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/SuperAdminSubmissionDetails" ? (
                                  <img
                                    src={TaskDetailsIconLight}
                                    alt="TaskDetailsIconLight"
                                  />
                                ) : (
                                  <img
                                    src={TaskDetailsIconDark}
                                    alt="TaskDetailsIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/SuperAdminSubmissionDetails"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Student Submission
                                </span>
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                style={
                                  location.pathname === "/team"
                                    ? {
                                      background:
                                        "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                    }
                                    : {}
                                }
                                to="/team"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/team" ? (
                                  <img
                                    src={TeamIconLight}
                                    alt="TeamIconLight"
                                  />
                                ) : (
                                  <img src={TeamIconDark} alt="TeamIconDark" />
                                )}
                                <span
                                  className={`${location.pathname === "/team"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                    } ml-3 text-[16px] font-[600]`}
                                >
                                  Team
                                </span>
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/superAdminDashboard/messages"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/superAdminDashboard/messages"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/superAdminDashboard/messages" ? (
                                  <img
                                    src={MessageIconLight}
                                    alt="MessageIconLight"
                                  />
                                ) : (
                                  <img
                                    src={MessageIconDark}
                                    alt="MessageIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/superAdminDashboard/messages"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Messages{" "}
                                  {unread > 0 && (
                                    <span className="ml-3 py-[0.5px] px-1 rounded-full bg-red-600">
                                      {unread}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          </>
                        )}
                        {role === "Counsellor" && (
                          <>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/counselorDashboard/Home"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/counselorDashboard/Home"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/counselorDashboard/Home" ? (
                                  <img
                                    src={HomeIconLight}
                                    alt="HomeIconLight"
                                  />
                                ) : (
                                  <img src={HomeIconDark} alt="HomeIconDark" />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/counselorDashboard/Home"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Home
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/counselorDashboard/MyStudents"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/counselorDashboard/MyStudents"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/counselorDashboard/MyStudents" ? (
                                  <img
                                    src={StudentIconLight}
                                    alt="StudentIconLight"
                                  />
                                ) : (
                                  <img
                                    src={StudentIconDark}
                                    alt="StudentIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/counselorDashboard/MyStudents"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  My Students
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/counselorDashboard/Dashboard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/counselorDashboard/Dashboard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/counselorDashboard/Dashboard" ? (
                                  <img
                                    src={DashboardIconLight}
                                    alt="DashboardIconLight"
                                  />
                                ) : (
                                  <img
                                    src={DashboardIconDark}
                                    alt="DashboardIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/counselorDashboard/Dashboard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Dashboard
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname === "/internship"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/internship"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname === "/internship" ? (
                                  <img
                                    src={InternshipIconLight}
                                    alt="InternshipIconLight"
                                  />
                                ) : (
                                  <img
                                    src={InternshipIconDark}
                                    alt="InternshipIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname === "/internship"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Internships
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/counselorDashboard/MySchools"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/counselorDashboard/MySchools"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/counselorDashboard/MySchools" ? (
                                  <img
                                    src={SchoolIconLight}
                                    alt="SchoolIconLight"
                                  />
                                ) : (
                                  <img
                                    src={SchoolIconDark}
                                    alt="SchoolIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/counselorDashboard/MySchools"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  My Schools
                                </span>
                              </Link>
                            </li>
                          </>
                        )}
                        {role === "SchoolAdmin" && (
                          <>
                            <li>
                              <Link
                                style={
                                  location.pathname ===
                                  "/schoolDashboard/dashboard"
                                    ? {
                                        background:
                                          "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                      }
                                    : {}
                                }
                                to="/schoolDashboard/dashboard"
                                className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                              >
                                {location.pathname ===
                                "/schoolDashboard/dashboard" ? (
                                  <img
                                    src={DashboardIconLight}
                                    alt="DashboardIconLight"
                                  />
                                ) : (
                                  <img
                                    src={DashboardIconDark}
                                    alt="DashboardIconDark"
                                  />
                                )}
                                <span
                                  className={`${
                                    location.pathname ===
                                    "/schoolDashboard/dashboard"
                                      ? "text-white "
                                      : "text-[#8F8F8F]"
                                  } ml-3 text-[16px] font-[600]`}
                                >
                                  Dashboard
                                </span>
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        logOut()
                          .then((res) => {
                            console.log(res);
                            const orgId = localStorage.getItem("orgId");
                            if (orgId) navigate(`/organization/${orgId}`);
                            else navigate(`/`);
                          })
                          .catch((error) => console.error(error));
                      }}
                      className={`text-white bg-blue-500 mx-4 text-center font-normal rounded-[15px]  py-[13px]`}
                    >
                      <span className={`text-white text-[16px] font-[600]`}>
                        Logout
                      </span>
                    </button>
                  </div>
                </div>
              </aside>
              <div
                className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
                id="sidebarBackdrop"
              ></div>
              <div
                id="main-content"
                className="h-full w-full relative lg:ml-[280px]"
              >
                <main className="min-h-[100vh]">
                  {isOpenStickyBar && (
                    <div className=" mb-2 bg-blue-500 w-full px-4 py-2 text-white font-semibold font-raleway flex items-center justify-evenly gap-3 ">
                      <div className="">
                        <p>
                          Welcome to the internships portal. There are 2 demo
                          tasks created. Please complete those in order to
                          understand the product.
                        </p>
                        <p>
                          Companies have started posting. We
                          will update you via email as soon as your favourite
                          companies are live.
                        </p>
                        <p>Happy interning!🎉</p>
                      </div>
                      <button
                        onClick={() => setIsOpenStickyBar(false)}
                        className="px-3 py-1 border-2 font-sans rounded-full "
                      >
                        Ok
                      </button>
                    </div>
                  )}
                  <div className="">{children}</div>
                  {role === "Student" && user && <TawkToWidget />}
                </main>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DashboardLayout;
