import React, { useEffect, useState } from 'react';
import person from '../../../../assets/Dashboard/SuperAdminDashboard/man2.svg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const StudentsTable = () => {
    // const [approvedDetails, setApprovedDetails] = useState({});
    // const [rejectedDetails, setRejectedDetails] = useState({});
    // const [pendingDetails, setPendingDetails] = useState({});
    const [studentDetails, setStudentDetails] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(
                `${import.meta.env.VITE_APP_SERVER_API}/api/v1/stats/studentSubmissionTable`
            )
            .then((data) => {
                setStudentDetails(data?.data);
            })
            .catch((error) => console.error(error));
    }, []);


    const allapprovedStudents = studentDetails?.filter((student) => student?.submissionStatus === "Selected");
    const allrejectedStudents = studentDetails?.filter((student) => student?.submissionStatus === "Rejected");
    const allpendingStudents = studentDetails?.filter((student) => student?.submissionStatus === "Processing" && student?.submissionDateTime !== "");
    const approvedStudents = allapprovedStudents.slice(0, 5);
    const rejectedStudents = allrejectedStudents.slice(0, 5);
    const pendingStudents = allpendingStudents.slice(0, 5);

    const [currentoption, setOption] = useState("Approved");
    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const formatDateTime = (dateTimeString) => {
        const optionsDate = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };

        const optionsTime = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', optionsDate);
        const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', optionsTime);

        return `${formattedTime} ${formattedDate}`;
    };
    const updateSubmissionStatus = (status, submissionId) => {

        //  const submissionData = { ...submissionDetails };
console.log(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/submissionId/${submissionId}/submissionStatus/${status}`);
        axios.put(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/submissionId/${submissionId}/submissionStatus/${status}`, {
            comment: "",
            suggestion: "Rejected by super-admin",
        })
            .then(response => {
                const successMessage = `Submission status updated to ${status}`;
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: successMessage,
                    confirmButtonText: 'OK'
                });
                navigate('/superAdminDashboard/dashboard');
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <>
            {
                currentoption === "Approved" ? <div className="border shadow-lg bg-white flex max-h-[452px] min-w-[665px] w-full flex-col rounded-lg border-solid border-zinc-300 p-4">
                    <div className='flex justify-between'>
                        <div className="text-neutral-900 text-lg tracking-widest font-bold">
                            Students
                        </div>
                        <select name="" id="" className='px-3 border font-semibold bg-white rounded-md' onChange={handleOptionChange} value={currentoption}>
                            <option className='text-[#20B15A] font-semibold' value="Approved">Approved</option>
                            <option className='text-[#DD2025] font-semibold' value="Rejected">Rejected</option>
                            <option className='text-yellow-500 font-semibold' value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className='my-6'>
                        <div className='flex flex-col gap-1'>
                            {
                                approvedStudents?.map((student, index) => (
                                    <div key={index} className="justify-between items-start self-stretch border flex gap-5 rounded-sm border-solid border-neutral-200 max-md:flex-wrap px-1">
                                        <div className="w-[20%] items-center flex gap-2 px-1">
                                            <img
                                                loading="lazy"
                                                srcSet={person}
                                                className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                            />
                                            <div className=" self-center flex grow basis-[0%] flex-col my-auto">
                                                <div className="text-neutral-700 text-lg font-medium whitespace-nowrap">
                                                    {student?.userData?.firstName} {student?.userData?.lastName}
                                                </div>
                                                <div className=" text-zinc-600 text-sm font-medium leading-2 whitespace-nowrap mt-1">
                                                    {student?.taskData?.taskName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest self-center my-auto">
                                            {student?.organization?.orgName}
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest my-auto">
                                            {formatDateTime(student?.submissionDateTime)}
                                        </div>
                                        <div className="text-green-500 text-center text-[15px] font-semibold leading-5 tracking-widest self-center whitespace-nowrap my-auto">
                                            Approved
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> : currentoption === "Rejected" ? <div className="border shadow-lg bg-white flex max-h-[452px] min-w-[665px] w-full flex-col rounded-lg border-solid border-zinc-300 p-4">
                    <div className='flex justify-between'>
                        <div className="text-neutral-900 text-lg tracking-widest font-bold">
                            Students
                        </div>
                        <select name="" id="" className='px-3 border font-semibold bg-white rounded-md' onChange={handleOptionChange} value={currentoption}>
                            <option className='text-[#20B15A] font-semibold' value="Approved">Approved</option>
                            <option className='text-[#DD2025] font-semibold' value="Rejected">Rejected</option>
                            <option className='text-yellow-500 font-semibold' value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className='my-6'>
                        <div className='flex flex-col gap-1'>
                            {
                                rejectedStudents?.map((student, index) => (
                                    <div key={index} className="justify-between items-start self-stretch border flex gap-5 rounded-sm border-solid border-neutral-200 max-md:flex-wrap px-1">
                                        <div className="w-[20%] items-center flex gap-2 px-1">
                                            <img
                                                loading="lazy"
                                                srcSet={person}
                                                className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                            />
                                            <div className=" self-center flex grow basis-[0%] flex-col my-auto">
                                                <div className="text-neutral-700 text-lg font-medium whitespace-nowrap">
                                                    {student?.userData?.firstName} {student?.userData?.lastName}
                                                </div>
                                                <div className=" text-zinc-600 text-sm font-medium leading-2 whitespace-nowrap mt-1">
                                                    {student?.taskData?.taskName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest self-center my-auto">
                                            {student?.organization?.orgName}
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest my-auto">
                                            {student?.submissionDateTime ? formatDateTime(student?.submissionDateTime) : "No date-time"}
                                        </div>
                                        <div className="text-[#DD2025] text-center text-[15px] font-semibold leading-5 tracking-widest self-center whitespace-nowrap my-auto">
                                            Rejected
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> : <div className="border shadow-lg bg-white flex max-h-[452px] min-w-[665px] w-full flex-col rounded-lg border-solid border-zinc-300 p-4">
                    <div className='flex justify-between'>
                        <div className="text-neutral-900 text-lg tracking-widest font-bold">
                            Students
                        </div>
                        <select name="" id="" className='px-3 border font-semibold bg-white rounded-md' onChange={handleOptionChange} value={currentoption}>
                            <option className='text-[#20B15A] font-semibold' value="Approved">Approved</option>
                            <option className='text-[#DD2025] font-semibold' value="Rejected">Rejected</option>
                            <option className='text-yellow-500 font-semibold' value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className='my-6'>
                        <div className='flex flex-col gap-1'>
                            {
                                pendingStudents?.map((student, index) => (
                                    <div key={index} className="justify-between items-start self-stretch border flex gap-5 rounded-sm border-solid border-neutral-200 max-md:flex-wrap px-1">
                                        <div className="w-[20%] items-center flex gap-2 px-1">
                                            <img
                                                loading="lazy"
                                                srcSet={person}
                                                className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                            />
                                            <div className=" self-center flex grow basis-[0%] flex-col my-auto">
                                                <div className="text-neutral-700 text-lg font-medium whitespace-nowrap">
                                                    {student?.userData?.firstName} {student?.userData?.lastName}
                                                </div>
                                                <div className=" text-zinc-600 text-sm font-medium leading-2 whitespace-nowrap mt-1">
                                                    {student?.taskData?.taskName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest self-center my-auto">
                                            {student?.organization?.orgName}
                                        </div>
                                        <div className="text-zinc-600 text-center w-[20%] text-sm font-medium leading-5 tracking-widest my-auto">
                                            {formatDateTime(student?.submissionDateTime)}
                                        </div>
                                        <div className="flex gap-4 items-center my-auto text-white">
                                            <button onClick={() => updateSubmissionStatus('Selected', student?._id)} className='bg-[#20B15A] py-2 px-3 rounded-3xl'>Approve</button>
                                            <button onClick={() => updateSubmissionStatus('Rejected', student?._id)} className='bg-[#DD2025] py-2 px-3 rounded-3xl'>Reject</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default StudentsTable;
