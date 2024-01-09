import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleMyStudent = ({ value, index }) => {
    const [stdName, setStdName] = useState("");
    const [taskName, setTaskName] = useState("");
    const [orgLogo, setOrgLogo] = useState("");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${value?.participantEmail}`).then((res) => {
            setStdName(res?.data?.firstName)
        }),
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${value?.taskId}`).then((res) => {
                setTaskName(res?.data?.taskName)
            }),
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${value?.organizationId}`).then((res) => {
                setOrgLogo(res?.data?.orgLogo)
            })
    }, [value]);

    const getInitials = () => {
        const firstNameInitial =
            stdName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}`;
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
        const colors = getRandomColor();
        setBackgroundColors(colors);
    }, [index]);

    const getSubmissionStatusClasses = () => {
        switch (value?.submissionStatus) {
            case "Processing":
                return "text-[#0A98EA]"; // Adjust classes for Processing status
            case "Pending":
                return "text-[#F1511B]"; // Adjust classes for Pending status
            case "Selected":
                return "text-[#20B15A]"; // Adjust classes for Selected status
            case "Rejected":
                return "text-[#DD2025]"; // Adjust classes for Rejected status
            default:
                return "text-gray-500"; // Default or other cases
        }
    };


    return (
        <div key={index} className="border flex justify-between items-center gap-3 py-1 px-3 rounded-lg border-solid border-gray-300 my-2"
        >
            <div
                style={{ backgroundColor: getRandomColor(value) }}
                className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
            >
                <p className='grid object-center mt-[25%] justify-items-center text-red-100'>
                    {getInitials()}
                </p>
            </div>
            <p className="w-[20%]">{stdName}</p>
            <p className="w-[30%]">{taskName}</p>
            <img className="w-[15%]" src={orgLogo} alt="" />
            <p className={`${getSubmissionStatusClasses()}`}>{value?.submissionStatus}</p>
            {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56bf546aabf544dd19969f685a8a28f7c8c71dcea03ee8ff8d6f5816fc17a7b8?"
                className="aspect-square object-contain object-center w-6 overflow-hidden"
            /> */}
        </div>
    );
};

export default SingleMyStudent;