import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ExperimentLabsLogo from "../../../assets/Shared/experiment_labs_logo.png";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
const DashboardLayout = ({ children }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const location = useLocation();
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
                            className="w-[100px]"
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
                              <GoHome></GoHome>
                            ) : (
                              <GoHomeFill></GoHomeFill>
                            )}

                            <span
                              className={`${
                                location.pathname === "/dashboard"
                                  ? "text-white "
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Home
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
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
