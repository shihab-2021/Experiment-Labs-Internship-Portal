import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AdminEditProfile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [addMember, setAddMember] = useState(false);
    const { id } = useParams();
    const [teamMembers, setTeamMembers] = useState({});
    const { userInfo } = useContext(AuthContext);
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
    const [member, setMember] = useState({});
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/${id}`)
            .then((user) => {
                setMember(user?.data);
                // const current = user?.data
                // current.organizations.map((org, j) => {
                //     if (userInfo?.organizations && userInfo.organizations[0]?.organizationId === org.organizationId) {
                //         org.role = "administrator";
                //     }
                // })
            })
            .catch((error) => console.error(error));
    }, [id]);
    console.log(member)
    // const [memberData, setMemberData] = useState({

    //     firstName: member?.firstName || '',
    //     email: member?.email || '',
    //     phone: member?.phone || '',

    //     // Add other fields you want to edit
    // });
    // console.log(memberData)
    const handleEditMember = async (event) => {
        event.preventDefault();

        const form = event?.target;
        const memberWithoutId = { ...member };
        delete memberWithoutId._id;

        // Update the role in the organizations array
        memberWithoutId.organizations.map((org) => {
            if (userInfo?.organizations && userInfo.organizations[0]?.organizationId === org.organizationId) {
                org.role = form.memberDesignation.value;
            }
        });

        // Update the phone number
        memberWithoutId.phone = form.memberNumber.value;
    

        console.log(memberWithoutId)
        console.log(form);
        try {
            const updatedMember = await axios.patch(
                `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/${id}`,
                memberWithoutId
            );
            console.log("User updated successfully:", updatedMember.data.user);
        } catch (error) {
            console.error("Error updating user:", error);
        }

        form.reset();
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
        <div className="w-11/12 mx-auto mt-10">
            <div className="flex justify-between">
                <div>
                    <div className="flex gap-10">
                        <div>
                            <h1 className="font-bold text-[30px]">Hello Aman</h1>
                            <p className="text-[21px] font-medium tracking-wide">{formatDate()}</p>
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
                    <div className="w-[275px] h-[52px] px-2"
                        style={{
                            borderRadius: "7px",
                            border: "1px solid #F0F0F0",
                            background: "#FFF",
                            boxShadow: "0px 4px 30px 0px #F2F4FF"
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
            <form onSubmit={handleEditMember} className="mt-3" autocomplete="on">
                <h1 className="font-semibold text-[18px] tracking-widest my-3">
                    Edit team member
                </h1>
                <div className="flex flex-col gap-2 my-4">
                    <label htmlFor="memberName" className="text-[17px] font-medium">
                        Team member name
                    </label>
                    <input
                        placeholder="write team member name"
                        value={member?.firstName}
                        type="text"
                        name="memberName"
                        id="memberName"
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
                    {member?.organizations?.map((org, j) => (
                        <>
                            {userInfo?.organizations && userInfo.organizations[0]?.organizationId === org.organizationId ?
                                <input
                                    placeholder="Ex. Product Manager"
                                    defaultValue={userInfo?.organizations && userInfo.organizations[0]?.organizationId === org.organizationId
                                        ? org.role
                                        : ""}
                                    type="text"
                                    name="memberDesignation"
                                    id="memberDesignation"
                                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" key={j} />
                                : ""
                            }
                        </>
                    ))}
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <label htmlFor="memberMail" className="text-[17px] font-medium">
                        Team member email id
                    </label>
                    <input
                        placeholder="write team member email id"
                        value={member?.email}
                        type="email"
                        name="memberMail"
                        id="memberMail"
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
                        defaultValue={member?.phone}
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
                        Edit team member
                    </button>
                </div>
            </form></div>
    );
};

export default AdminEditProfile;