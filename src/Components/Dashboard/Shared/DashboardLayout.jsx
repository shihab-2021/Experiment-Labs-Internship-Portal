import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { AuthContext } from "../../../Contexts/AuthProvider";
const DashboardLayout = ({ children }) => {
  const { logOut } = useContext(AuthContext);
  const [toggleButton, setToggleButton] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
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
                        <Link className="hidden lg:block" to={"/"}>
                          <img
                            // className="h-6 lg:h-8"
                            className="my-5"
                            src={ExperimentLabsLogo}
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
                              <img src={HomeIconLight} alt="HomeIconLight" />
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
                              location.pathname === "/taskDetails"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/taskDetails"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/taskDetails" ? (
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
                                location.pathname === "/taskDetails"
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
                              <img src={TeamIconLight} alt="TeamIconLight" />
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
                              Message
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        logOut()
                          .then((res) => {
                            console.log(res);
                            navigate(`/`);
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
                  <div className="">{children}</div>
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
