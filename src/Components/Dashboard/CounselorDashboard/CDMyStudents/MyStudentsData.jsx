import React, { useContext, useEffect, useState } from 'react';
import schoolImg from "../../../../assets/Dashboard/CounselorsDashboard/Ellipse 262.svg"
import menu from "../../../../assets/Dashboard/CounselorsDashboard/choose students menu bar.svg"
import clock from "../../../../assets/Dashboard/CounselorsDashboard/iconamoon_clock-thin.svg"
import select from "../../../../assets/Dashboard/CounselorsDashboard/fluent_select-all-on-20-regular.svg"
import reject from "../../../../assets/Dashboard/CounselorsDashboard/icon-park-outline_reject.svg"
import pending from "../../../../assets/Dashboard/CounselorsDashboard/mdi_account-pending-outline.svg"
import Pagination from '@mui/material/Pagination';
import plusicon from "../../../../assets/Dashboard/CounselorsDashboard/iconoir_plus.svg";
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
const MyStudentsData = ({ students }) => {


    const getInitials = (user) => {
        const firstNameInitial =
            user?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = user?.lastName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}${lastNameInitial}`;
    };
    const getRandomColor = (index) => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const [backgroundColors, setBackgroundColors] = useState([]);

    useEffect(() => {
        // Generate random background colors for each student
        const colors = students?.map(() => getRandomColor());
        setBackgroundColors(colors);
    }, []);

    const calculateTaskStatus = (taskSubmissions) => {
        const statusCount = {
            rejected: 0,
            selected: 0,
            pending: 0,
        };

        taskSubmissions.forEach((submission) => {
            switch (submission.submissionStatus) {
                case 'Rejected':
                    statusCount.rejected += 1;
                    break;
                case 'Selected':
                    statusCount.selected += 1;
                    break;
                case 'Processing':
                    statusCount.pending += 1;
                    break;
                // Add more cases as needed
                default:
                    break;
            }
        });
        return statusCount;
    };
    const studentsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);
    const [displayedStudents, setDisplayedStudents] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * studentsPerPage;
        const endIndex = startIndex + studentsPerPage;
        setDisplayedStudents(students.slice(startIndex, endIndex));
    }, [currentPage, students]);



    const [searchValue, setSearchValue] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        // Generate random background colors for each student
        const colors = students?.map(() => getRandomColor());
        setBackgroundColors(colors);
    }, [students]);

    useEffect(() => {
        // Filter students based on the search value
        setCurrentPage(1);
        const filtered = students.filter((student) =>
            `${student?.user?.firstName} ${student?.user?.lastName}`
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [searchValue, students]);

    useEffect(() => {
        // Update displayed students when pagination or filtering changes
        const startIndex = (currentPage - 1) * studentsPerPage;
        const endIndex = startIndex + studentsPerPage;
        setDisplayedStudents(filteredStudents.slice(startIndex, endIndex));
    }, [currentPage, studentsPerPage, filteredStudents]);

    // Update the total number of pages based on filtered students
    const totalFilteredPages = Math.ceil(filteredStudents.length / studentsPerPage);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div className='w-11/12 mx-auto mt-4'>
            <div className="my-3">

                <div className="flex justify-between items-center mt-10">
                    <div
                        style={{
                            borderRadius: "14px",
                            border: "1px solid #DDD",
                        }}
                        className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[440px] h-[48px] "
                    >
                        <FaMagnifyingGlass />
                        <input
                            className="w-[90%] focus:outline-none"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    <Link
                        to={"/counselorDashboard/AddStudent"}
                        className="bg-[#4555BA] px-[15px] py-[10px] rounded-3xl text-white flex gap-2 items-center"
                    >
                        <img src={plusicon} alt="" />
                        <p className="text-[18px] font-medium tracking-wider">
                            Add Student details
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between border-b border-[#ECECEC] pb-2">
                <p className="text-[19px] text-[#797979] font-medium mt-3">My students</p>
                <img src={menu} alt="" />
            </div>
            <div className='grid grid-cols-3 justify-between gap-3 my-3'>
                {
                    displayedStudents && displayedStudents?.map((student, index) => (
                        <div key={index} className='border-[#D9D9D9] border-2 rounded-md py-[11px] px-2'>
                            <div className='grid grid-flow-col justify-center gap-4'>
                                <div className="grid items-center w-[102.55px] h-[102.55px] rounded-full text-red-50 justify-center text-3xl font-semibold" style={{ backgroundColor: getRandomColor(index) }}>
                                    {getInitials(student?.user)}
                                </div>
                                <div className='font-medium '>
                                    <p className='text-[16.36px] font-medium tracking-wide'>{student?.user?.firstName} {student?.user?.lastName}</p>
                                    <p className='text-[#797979] text-[15.4px] font-medium tracking-wide'>{student?.user?.class}th Class</p>

                                    <p className='text-[15.4px] tracking-wide'>Section : <span className='text-[16.4px] text-[#797979]'>{student?.user?.section || "Not Available"}</span></p>
                                    <p className='text-[15.4px] tracking-wide'>Phone : <span className='text-[16.4px] text-[#797979]' style={{ fontFamily: 'Monospace-Font' }}>{student?.user?.phone}</span></p>

                                </div>
                            </div>
                            <p style={{ borderRadius: '3.84px', background: 'linear-gradient(90deg, #F4F6FF 4.11%, rgba(249, 250, 255, 0.00) 99.85%)' }} className='text-[#3E4DAC] text-[15.358px] font-bold tracking-wider text-center mt-3 py-[5.759px] px-[4.799px]'>
                                {student?.taskSubmissions?.length} tasks
                            </p>

                            <div className='flex justify-between my-2'>
                                {Object.entries(calculateTaskStatus(student?.taskSubmissions)).map(([status, count]) => (
                                    <div key={status} className='grid items-center justify-items-center'>
                                        <div className={`flex gap-[6px] items-center text-[${status === 'rejected' ? '#DD2025' : status === 'selected' ? '#E8B912' : '#F1511B'}] items-center text-[19.198px] font-bold tracking-wide`}>
                                            <img src={status === 'rejected' ? reject : status === 'selected' ? select : pending} alt="" />
                                            <p>{count}</p>
                                        </div>
                                        <p className='text-[#797979] font-medium text-[14.398px]'>
                                            {status.charAt(0).toUpperCase() + status.slice(1)} in tasks
                                        </p>
                                    </div>
                                ))}
                                {/* <div className='grid items-center justify-items-center'>
                                    <div className='flex text-[#DD2025] items-center text-[19.198px] font-bold tracking-wide'>
                                        <img src={reject} alt="" />
                                        <p>{taskStatus.rejected}</p>
                                    </div>
                                    <p className='text-[#797979] font-medium text-[14.398px]'>Rejected in tasks</p>
                                </div>
                                <div className='grid items-center justify-items-center'>
                                    <div className='flex text-[#E8B912] items-center text-[19.198px] font-bold tracking-wide'>
                                        <img src={select} alt="" />
                                        <p>{taskStatus.selected}</p>
                                    </div>
                                    <p className='text-[#797979] font-medium text-[14.398px]'>Selected in tasks</p>
                                </div>
                                <div className='grid items-center justify-items-center'>
                                    <div className='flex text-[#F1511B] items-center text-[19.198px] font-bold tracking-wide'>
                                        <img src={pending} alt="" />
                                        <p>{taskStatus.pending}</p>
                                    </div>
                                    <p className='text-[#797979] font-medium text-[14.398px]'>Pending solution</p>
                                </div>
                                <div className='grid items-center justify-items-center'>
                                    <div className='flex text-[#007BFF] items-center text-[19.198px] font-bold tracking-wide'>
                                        <p>{taskStatus.processing}</p>
                                    </div>
                                    <p className='text-[#797979] font-medium text-[14.398px]'>Processing</p>
                                </div> */}
                            </div>
                            <div className='grid justify-center  '>
                                <div className='bg-[#cedff4] flex gap-3 rounded-[3.24px] justify-center items-center  py-[4.68px] px-[11.2px]'>
                                    <img src={student?.schoolData?.schoolImg} alt="" />
                                    <p>{student?.schoolData?.schoolName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className='grid justify-center my-5'>
                <Stack spacing={2}>
                    <Pagination
                        count={totalFilteredPages} // Use totalFilteredPages instead of Math.ceil(students.length / studentsPerPage)
                        page={currentPage}
                        onChange={handlePageChange}
                        size="large"
                        color="primary"
                    />
                </Stack>
            </div>
        </div>
    );
};

export default MyStudentsData;