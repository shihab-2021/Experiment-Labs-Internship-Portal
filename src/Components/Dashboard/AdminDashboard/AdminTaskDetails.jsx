import React, { useContext, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleRight, FaMagnifyingGlass } from "react-icons/fa6";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Person from "../../../assets/Home/Person.png";
import deadLineImage from "../../../assets/Dashboard/AdminDashboard/deadLineImage.svg";
import clock from "../../../assets/Dashboard/AdminDashboard/clock.svg";
import { FaEdit, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import axios from "axios";

const AdminTaskDetails = () => {
  // Function to format the date as day/month/year
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const { userInfo } = useContext(AuthContext);

  const [adminApprovedTasks, setAdminApprovedTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const getInitials = () => {
    const firstNameInitial =
      userInfo?.firstName?.charAt(0)?.toUpperCase() || "";
    const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || "";
    return `${firstNameInitial}${lastNameInitial}`;
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Generate a random background color if it hasn't been generated yet
    if (!backgroundColor) {
      setBackgroundColor(getRandomColor());
    }

    // Your existing useEffect logic...
  }, [userInfo, backgroundColor]);

  useEffect(() => {
    if (userInfo?.organizations && userInfo.organizations?.length > 0) {
      const organizationId = userInfo.organizations[0].organizationId;

      // Fetching tasks with status 'Processing' and updating state
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/organizationId/${organizationId}/taskStatus/Processing`
        )
        .then((tasks) => {
          setAdminApprovedTasks(tasks?.data);
        })
        .catch((error) => console.error(error));

      // Fetching tasks with status 'Pending' and updating state
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/organizationId/${organizationId}/taskStatus/Pending`
        )
        .then((tasks) => {
          setNewTasks(tasks?.data);
        })
        .catch((error) => console.error(error));

      // Fetching tasks with status 'Completed' and updating state
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/organizationId/${organizationId}/taskStatus/Completed`
        )
        .then((tasks) => {
          setCompletedTasks(tasks?.data);
        })
        .catch((error) => console.error(error));
    }
  }, [userInfo]);


  console.log(completedTasks);

  return (
    <div className="w-11/12 mx-auto mt-14">
      {/*top section*/}
      <div className="flex justify-between">
        <div>
          <div className="flex gap-10">
            <div>
              <h1 className="font-bold text-[30px]">Hello {userInfo?.firstName}</h1>
              <p className="text-[21px] font-medium tracking-wide">
                {formatDate()}
              </p>
            </div>
            <div
              style={{
                borderRadius: "14px",
                border: "1px solid #DDD",
              }}
              className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[440px] h-[48px] "
            >
              <FaMagnifyingGlass />
              <input className="w-[90%]" placeholder="Search"></input>
            </div>
          </div>
        </div>

        <div className="relative inline-block text-left">
          <div
            className="w-[275px] h-[52px] px-2"
            style={{
              borderRadius: "7px",
              border: "1px solid #F0F0F0",
              background: "#FFF",
              boxShadow: "0px 4px 30px 0px #F2F4FF",
            }}
          >
            <button
              type="button"
              className="inline-flex items-center w-full justify-center  hover:bg-gray-50 "
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <div className="w-5/6 mx-auto flex items-center gap-2 pt-[7px]">
                {/* <BsPersonCircle className="text-[#4555BA] w-[35px] h-[35px]" /> */}
                <div
                  className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                  style={{ backgroundColor }}
                >
                  {getInitials()}
                </div>
                <p className="text-[19px] font-medium">{userInfo?.firstName} {userInfo?.lastName}</p>
              </div>
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isDropdownOpen ? "" : "hidden"
              }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
                <p className="text-[#3F3F3F]">Animation</p>
                <p className="text-[#6B6B6B]">task 1</p>
              </div>
              <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between">
                <p className="text-[#3F3F3F]">logo design</p>
                <p className="text-[#6B6B6B]">task 2</p>
              </div>
              <div className="w-5/6 mx-auto border-b border-[#4555BA] pt-[17px] text-[16px] font-medium flex justify-between mb-3">
                <p className="text-[#3F3F3F]">ui and ux </p>
                <p className="text-[#6B6B6B]">task 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Task */}
      <div className="mt-6">
        <h1 className="text-2xl font-semibold">Task </h1>
        <h1 className="text-[20px] font-bold mt-8 text-[#8064F0]">New </h1>

        <div className="flex justify-between items-center">
          <div className="flex mt-[17px] gap-[11px] w-full">
            {
              (newTasks?.length) ? <>{
                newTasks?.map((item) => (
                  <div className="bg-[#FFF] border border-[#E7E7E7] w-[50%] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-[17px]">{item?.taskName}</h1>
                      <Link to={`/editTaskDetails/${item?._id}`} className="" ><FaEdit style={{ color: '#3E4DAC' }} /></Link>
                      
                    </div>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.aboutTask}
                    </p>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.description}
                    </p>
                    {item?.participants && item?.participants?.length > 0 ? (
                      <AvatarGroup
                        className="grid justify-end mt-[14px]"
                        // max={16}
                        total={
                          item?.participants ? item?.participants?.length : 0
                        }
                      >
                        {item?.participants?.slice(0, 3)?.map((user, index) => (
                          <Avatar
                            key={index}
                            className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                            style={{ getRandomColor }}
                            alt="Participant"
                          >
                            {user?.participantEmail?.charAt(0)?.toUpperCase()}
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    ) : (
                      ""
                    )}

                    <div>
                      <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                        <p>Progress</p>
                        <p className="text-[#3F3F3F]">{(item?.participants?.length) ? item?.participants?.length : '0'}/{item?.participantLimit}</p>
                      </div>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-lg h-2">
                          <div
                            className="bg-[#3E4DAC] h-2 rounded-lg"
                            style={{
                              width: `${(item?.participants?.length /
                                item?.participantLimit) *
                                100
                                }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-[#3F3F3F] text-[14px] font-medium">

                        {item?.taskDeadline ? new Date(item?.taskDeadline).toLocaleDateString() : ''}
                      </p>
                    </div >
                    <div className="mt-3">
                      <Link to={`/completeShowMore/${item?._id}`} className="text-[#0D47A1] text-[13px] font-medium " >Show details</Link>

                    </div>


                  </div>
                ))


              }</> : <p className="text-xl font-medium text-[red]"> No New tasks Created</p>

            }


          </div>
        </div>
      </div>

      {/* In Progress */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-bold mt-8 text-[#1976D2]">
            In Progress
          </h1>
         {/*  <p>
            <FaEllipsisV style={{ color: "#3E4DAC" }} />{" "}
          </p> */}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex w-full mt-[17px] gap-[11px]">
            {
              (adminApprovedTasks?.length) ? <>{
                adminApprovedTasks?.map((item) => (
                  <div className="bg-[#FFF] border w-[50%] border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-[17px]">{item?.taskName}</h1>
                      <Link to={`/editTaskDetails/${item?._id}`} className="" ><FaEdit style={{ color: '#3E4DAC' }} /></Link>
                    </div>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.subtitle}
                    </p>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.aboutTask}
                    </p>
                    {item?.participants && item?.participants?.length > 0 ? (
                      <AvatarGroup
                        className="grid justify-end mt-[14px]"
                        // max={16}
                        total={
                          item?.participants ? item?.participants?.length : 0
                        }
                      >
                        {item?.participants?.slice(0, 3)?.map((user, index) => (
                          <Avatar
                            key={index}
                            className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                            style={{ getRandomColor }}
                            alt="Participant"
                          >
                            {user?.participantEmail?.charAt(0)?.toUpperCase()}
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    ) : (
                      ""
                    )}
                    <div>
                      <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                        <p>Progress</p>
                        <p className="text-[#3F3F3F]">{(item?.participants?.length) ? item?.participants?.length : '0'}/{item?.participantLimit}</p>
                      </div>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-lg h-2">
                          <div
                            className="bg-[#3E4DAC] h-2 rounded-lg"


                            // style={{ width: `${(item?.complete?.length ? item?.participantLimit : "0"/ '0') * 100 || 0}%` }}
                            style={{
                              width: `${(item?.participants?.length /
                                item?.participantLimit) *
                                100
                                }%`,
                            }}

                          ></div>
                        </div>
                      </div>
                      <p className="text-[#3F3F3F] text-[14px] font-medium">
                        {item?.taskDeadline ? new Date(item?.taskDeadline).toLocaleDateString() : ''}
                      </p>
                    </div >
                    <div className="mt-3">
                      <Link to={`/completeShowMore/${item?._id}`} className="text-[#0D47A1] text-[13px] font-medium " >Show details</Link>

                    </div>
                  </div>
                ))

              }</> : <p className="text-xl font-medium text-[red]">No In Progress Tasks</p>

            }

          </div>
        </div>
      </div>

      {/*  Completed */}
      <div className="my-6">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-bold mt-8 text-[#20B15A]">
            {" "}
            Completed
          </h1>
       {/*    <p>
            <FaEllipsisV style={{ color: "#3E4DAC" }} />{" "}
          </p> */}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-6 mt-[17px] w-full">

            {
              (completedTasks?.length) ? <>{
                completedTasks?.map((item) => (
                  <div className="bg-[#FFF] border w-[50%] border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-[17px]">{item?.taskName}</h1>
                      <Link to={`/editTaskDetails/${item?._id}`} className="" ><FaEdit style={{ color: '#3E4DAC' }} /></Link>
                    </div>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.aboutTask}
                    </p>
                    <p className="text-[13px] w-[228px] mt-[12px] font-medium text-[#2D2D2D]">
                      {item?.description}
                    </p>
                    {item?.participants && item?.participants?.length > 0 ? (
                      <AvatarGroup
                        className="grid justify-end mt-[14px]"
                        // max={16}
                        total={
                          item?.participants ? item?.participants?.length : 0
                        }
                      >
                        {item?.participants?.slice(0, 3)?.map((user, index) => (
                          <Avatar
                            key={index}
                            className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                            style={{ getRandomColor }}
                            alt="Participant"
                          >
                            {user?.participantEmail?.charAt(0)?.toUpperCase()}
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    ) : (
                      ""
                    )}
                    <div>
                      <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                        <p>Progress</p>
                        <p className="text-[#3F3F3F]">{(item?.participants?.length) ? item?.participants?.length : '0'}/{item?.participantLimit}</p>
                      </div>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-lg h-2">
                          <div
                            className="bg-[#3E4DAC] h-2 rounded-lg"

                            style={{
                              width: `${(item?.participants?.length /
                                item?.participantLimit) *
                                100
                                }%`,
                            }}

                          ></div>
                        </div>
                      </div>
                      <p className="text-[#3F3F3F] text-[14px] font-medium">
                        {item?.taskDeadline ? new Date(item?.taskDeadline).toLocaleDateString() : ''}
                      </p>
                    </div >
                    <div className=" flex gap-4 items-center mt-6">
                      <div className="flex gap-2 items-center">
                        <img src={deadLineImage} alt="Icon" />
                        <p>deadline {item?.deadline}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img src={clock} alt="Icon" />
                        <p>Task time duration {item?.duration}</p>
                      </div>

                    </div>
                    <div className="mt-3 text-center">
                      <Link to={`/completeShowMore/${item?._id}`} className="text-[#0D47A1] text-[13px] font-bold " >Show more deatails</Link>

                    </div>

                  </div>
                ))

              }</> : <p className="text-xl font-medium text-[red]">No Complete tasks Yet</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskDetails;
