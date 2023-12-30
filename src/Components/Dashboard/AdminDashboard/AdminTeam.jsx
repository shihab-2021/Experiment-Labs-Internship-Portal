import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import Person from "../../../assets/Home/Person.png";
import cancelIcon from "../../../assets/Shared/cancel.svg";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { GoShieldLock } from "react-icons/go";
import { RiEditBoxLine } from "react-icons/ri";

import roundtask from "../../../assets/Shared/roundtask.svg";
import { Avatar, AvatarGroup } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../../../Contexts/AuthProvider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSubUserAction from "./AdminSubUserAction";
const AdminTeam = () => {
  const cardData = [
    {
      title: "Animation Task",
      taskNo: "Task no.1",
      taskDesc:
        "Make poster for advertising our company product and gain sales...",
      studentsImg: [
        {
          img: Person,
        },
        {
          img: Person,
        },
        {
          img: Person,
        },
        {
          img: Person,
        },
      ],
      progressBar: { current: 4, total: 12 },
      date: "29/Jan/2022",
      access: "Public",
      createdBy: "Anjali",
    },
    {
      title: "Animation Task",
      taskNo: "Task no.1",
      taskDesc:
        "Make poster for advertising our company product and gain sales...",
      studentsImg: [
        {
          img: Person,
        },
        {
          img: Person,
        },
        {
          img: Person,
        },
        {
          img: Person,
        },
      ],
      progressBar: { current: 4, total: 12 },
      date: "29/Jan/2022",
      access: "Private",
      createdBy: "Anjali",
    },
  ];
  const [toggle, setToggle] = useState("task");
  const navigate = useNavigate();
  const [addMember, setAddMember] = useState(false);
  const handleToggle = (event, type) => {
    event.preventDefault();
    if (type === "task") {
      setToggle("permission");
    } else {
      setToggle("task");
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [teamMembers, setTeamMembers] = useState([]);
  const { userInfo, signIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  useEffect(() => {
    if (userInfo?.organizations)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API
          }/api/v1/users/usersByOrganization/${userInfo?.organizations[0]?.organizationId
          }`
        )
        .then((org) => {
          setTeamMembers(org.data);
        })
        .catch((error) => console.error(error));
  }, [userInfo]);
  // let OrgId = ;
  console.log(teamMembers);
  const getInitials = () => {
    const firstNameInitial = userInfo?.firstName?.charAt(0)?.toUpperCase() || '';
    const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || '';
    return `${firstNameInitial}${lastNameInitial}`;
  };
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Generate a random background color if it hasn't been generated yet
    if (!backgroundColor) {
      setBackgroundColor(getRandomColor());
    }

    // Your existing useEffect logic...
  }, [userInfo, backgroundColor]);
  const register = async (event) => {
    event.preventDefault();
    const form = event?.target;
    const memberData = {
      name: form.memberName.value,
      role: form.memberDesignation.value,
      email: form.memberMail.value,
      phone: form.memberNumber.value,
      organizationId: userInfo?.organizations[0].organizationId,
    };
    console.log(memberData);
    const newMember = await axios.put(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/addMember`,
      memberData
    );
    console.log(newMember);
    form.reset();
  };
  const handleDeleteMember = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user);
        axios
          .put(
            `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/userId/${user._id
            }/organizationId/${user.organizations[0].organizationId}`
          )
          .then((response) => {
            console.log(response.data);
            Swal.fire(
              "Deleted!",
              `${user.firstName} has been deleted!`,
              "success"
            );
            navigate("/team");
          })
          .catch((error) => {
            console.error(error);
            // Handle the error as needed
          });
      }
    });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const form = e?.target;

    const userData = {
      email: form.email.value,
      password: form.password.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.memberNumber.value,
      organizations: [
        {
          role: form.memberDesignation.value,
          organizationId: userInfo?.organizations[0].organizationId,
        },
      ],
    };
    console.log(userData);

    createUser(userData.email, userData.password)
      .then(async (result) => {
        const user = result?.user;
        console.log(user);

        const newUser = await axios.post(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users`,
          userData
        );

        console.log(newUser);

        Swal.fire({
          icon: "success",
          title: "Member added!",
          // text: "Your task has been submitted!",
        });
        // setOpen2(false);

        updateUserProfile({
          displayName: user?.firstName,
        });
        setAddMember(false);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  const subUser = teamMembers?.filter((member) => member?.organizations[0]?.role  !== "Admin");
  console.log(subUser);
  return (
    <>
      {addMember === true ? (
        <div className="w-11/12 mx-auto mt-10">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-10">
                <div>
                  <h1 className="font-bold text-[30px]">Hello Aman</h1>
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
                    <BsPersonCircle className="text-[#4555BA] w-[35px] h-[35px]" />
                    <p className="text-[19px] font-medium">Aman Kumar</p>
                  </div>
                  <svg
                    className="-mr-1 h-6 w-6 text-black"
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
          <form onSubmit={handleAddMember} className="mt-3" autocomplete="on">
            <h1 className="font-semibold text-[18px] tracking-widest my-3">
              Add team member
            </h1>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="firstName" className="text-[17px] font-medium">
                Team member first name
              </label>
              <input
                placeholder="Write team member first name"
                type="text"
                name="firstName"
                id="firstName"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="lastName" className="text-[17px] font-medium">
                Team member last name
              </label>
              <input
                placeholder="Write team member last name"
                type="text"
                name="lastName"
                id="lastName"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="email" className="text-[17px] font-medium">
                Team member email id
              </label>
              <input
                placeholder="write team member email id"
                type="email"
                name="email"
                id="email"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="password" className="text-[17px] font-medium">
                Team member password
              </label>
              <input
                placeholder="write team member password"
                type="password"
                name="password"
                id="password"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label
                htmlFor="memberDesignation"
                className="text-[17px] font-medium"
              >
                Team member designation
              </label>
              <input
                placeholder="Ex. Product Manager"
                type="text"
                name="memberDesignation"
                id="memberDesignation"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="memberNumber" className="text-[17px] font-medium">
                Team member mobile number
              </label>
              <input
                placeholder="write team member mobile number"
                type="text"
                name="memberNumber"
                id="memberNumber"
                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mt-8 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
              >
                {" "}
                Add team member
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="w-11/12 mx-auto mt-10">
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
                      <div
                        className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                        style={{ backgroundColor }}
                      >
                        {getInitials()}
                      </div>
                      <p className="text-[19px] font-medium">
                        {userInfo?.firstName} {userInfo?.lastName}
                      </p>
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
            <div className=" mb-[22px] flex justify-between items-center border border-[#F0F0F0] rounded py-[13px] px-[7px]">
              <h1 className="font-semibold text-[24px] tracking-widest">
                Team Members
              </h1>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setAddMember(true)}
                  className=" bg-[#BEC9FF] rounded-[41px] py-[21px] px-[23px]"
                >
                  <FaPlus />
                </button>
                <button>
                  <CiMenuKebab className="w-[35px] h-[35px]" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead className="bg-[#F6F7FF] text-[17px] font-medium rounded">
                  <tr className="text-left">
                    <th className="p-2">Team member name</th>
                    <th className="p-2">Designation</th>
                    <th className="p-2">Member Profile</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {teamMembers?.map((member, index) => (
                    <tr className="border border-[#E2E2E2]" key={index}>
                      <td className="p-2 flex items-center gap-1 text-[15px] font-medium">
                        <IoPersonCircleOutline className="h-[29px] w-[29px]" />{" "}
                        {member?.firstName} {member?.lastName}
                      </td>
                      <td className="p-2 text-[15px] font-medium">
                        {member?.organizations?.map((org, j) => (
                          <div key={j}>
                            {userInfo?.organizations &&
                              userInfo.organizations[0]?.organizationId ===
                              org.organizationId
                              ? org.role
                              : ""}
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        <div className="flex gap-6 items-center">
                          <button
                            onClick={() => handleDeleteMember(member)}
                            className="text-[18px] bg-[#DD2025] w-24 text-[#FFF] rounded-3xl"
                          >
                            Delete
                          </button>
                          <Link
                            className="text-[18px] bg-[#6278FF] w-20 text-center text-[#FFF]  rounded-3xl"
                            to={`/editProfile/${member?._id}`}
                          >
                            Edit
                          </Link>
                          <button className="text-[#1976D2] font-bold tracking-wider text-[15px]">
                            More details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <Pagination className="grid justify-center mt-10" count={2} color="primary" /> */}
            </div>

            <div className="flex gap-[76px] mt-10 mb-3">
              <button
                onClick={() => handleToggle(event, "permission")}
                className="text-[#4555BA] text-[20px] font-bold tracking-wider"
              >
                Task Created
              </button>
              {/* <button
                onClick={() => handleToggle(event, "task")}
                className="text-[20px] font-medium tracking-wider"
              >
                Permissions
              </button> */}
            </div>
            {toggle === "task" ? (
              <>
                <div className="relative w-full">
                  <div className="w-[360px] bg-gray-200 rounded-lg h-2">
                    <div
                      className="bg-[#4555BA] h-2 rounded-lg"
                      // className="bg-cyan-600 h-2 rounded-sm"
                      style={{ width: `50%` }}
                    // style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                {
                  subUser?.map((subData, index) => (
                    <AdminSubUserAction key={index} subData={subData}></AdminSubUserAction>
                  ))
                }
              </>
            ) : (
              <>
                {/* <div className="relative w-full">
                  <div className="w-[360px] bg-gray-200 rounded-lg h-2 flex">
                    <div
                      className="bg-gray-200 h-2 rounded-lg"
                      style={{ width: `50%` }}
                    ></div>
                    <div
                      className="bg-[#4555BA] h-2 rounded-lg"
                      style={{ width: `50%` }}
                    ></div>
                  </div>
                </div>
                <form className="mt-9">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    Log in with company admin Account.
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="loginAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="loginAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="loginAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form>
                <form className="mt-6">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    Always takes permission to post tasks.
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="postTaskAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="postTaskAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="postTaskAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form>
                <form className="mt-6">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    Create tasks.
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="createTaskAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="createTaskAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="createTaskAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form>
                <form className="mt-6">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    Message.
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="messageAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="messageAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="messageAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form>
                <form className="mt-6">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    See dashboard
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="dashboardAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="dashboardAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="dashboardAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form>
                <form className="mt-6">
                  <legend className="text-[18px] text-[#0C0C20] font-medium tracking-wider">
                    Change tasks.
                  </legend>
                  <div className="flex gap-7 items-center  py-2">
                    <div>
                      <input
                        type="radio"
                        id="Choice1"
                        name="changeAccess"
                        value="accepted"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice1"
                      >
                        Give Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice2"
                        name="changeAccess"
                        value="none"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice2"
                      >
                        No Accesses
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Choice3"
                        name="changeAccess"
                        value="block"
                      />
                      <label
                        className="text-[#3F3F3F] px-[5px] text-[17px] tracking-widest font-medium"
                        for="Choice3"
                      >
                        Block
                      </label>
                    </div>
                  </div>
                </form> */}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AdminTeam;
