//StudentSubmissionDetails

import React, { useContext, useEffect, useState } from "react";
import profileImage from "../../../../assets/Dashboard/AdminDashboard/profileImage.svg";
import reviewList from "../../../../assets/Dashboard/AdminDashboard/reviewList.svg";
import arrowDown from "../../../../assets/Dashboard/AdminDashboard/arrowDown.svg";
import driveIcon from "../../../../assets/Dashboard/AdminDashboard/driveIcon.svg";
import arrowUp from "../../../../assets/Dashboard/AdminDashboard/arrowUp.svg";
import taskIcon from "../../../../assets/Dashboard/AdminDashboard/taskIcon.svg";
import detailsIcon from "../../../../assets/Dashboard/AdminDashboard/details.svg";
import copyIcon from "../../../../assets/Dashboard/AdminDashboard/copyIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextEditor from "../../../Shared/TextEditor/TextEditor";
import axios from "axios";
import Swal from "sweetalert2";

const StudentSubmissionDetails = ({ item }) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [copySuccess, setCopySuccess] = useState("");
    const [rejectionSuggestion, setRejectionSuggestion] = useState("");
    const [submissionDetails, setSubmissionDetails] = useState(item);
    const [userDetails, setUserDetails] = useState();
    const [taskDetails, setTaskDetails] = useState();
    const [organizationDetails, setOrganizationDetails] = useState();
    const [isDivVisible, setDivVisibility] = useState(false);
    const [details, setDetails] = useState("");

    const handleRejectionSuggestion = (value) => {
        setRejectionSuggestion(value);
    };

    const rejectionSuggestionData = [
        {
            rejectionSuggestionName: "Inadequate Research or Citations",
        },
        {
            rejectionSuggestionName: "Failure to Follow Instructions",
        },
        {
            rejectionSuggestionName: "Insufficient Effort",
        },
        {
            rejectionSuggestionName: "Grammar and Language Issues",
        },
        {
            rejectionSuggestionName: "Poor Organization and Structure",
        },
        {
            rejectionSuggestionName: "Lack of Originality",
        },
        {
            rejectionSuggestionName: "Lack of Depth or Detail",
        },
        {
            rejectionSuggestionName: "Incorrect Understanding of the Task",
        },
    ];
    const getInitials = () => {
        // console.log(userDetails)
        const firstNameInitial =
            userDetails?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = userDetails?.lastName?.charAt(0)?.toUpperCase() || "";
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
    }, [backgroundColor]);
    const handleCopyClick = () => {
        const linkToCopy = item?.fileLink;

        // Create a temporary input element to copy the link
        const tempInput = document.createElement("input");
        tempInput.value = linkToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        setCopySuccess("Link copied!");
        // Automatically hide the success message after 20 seconds
        setTimeout(() => {
            setCopySuccess("");
        }, 5000);
    };

    //user details data
    useEffect(() => {
        if (item?.participantEmail)
            axios
                .get(
                    `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${item?.participantEmail
                    }`
                )
                .then((user) => {
                    setUserDetails(user?.data);
                })
                .catch((error) => console.error(error));
    }, [item?.participantEmail]);

    // task Details
    useEffect(() => {
        if (item?.taskId)
            axios
                .get(
                    `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${item?.taskId}`
                )
                .then((task) => {
                    setTaskDetails(task?.data);
                })
                .catch((error) => console.error(error));
    }, [item?.taskId]);

    //organization data
    useEffect(() => {
        if (item?.organizationId)
            axios
                .get(
                    `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${item?.organizationId
                    }`
                )
                .then((task) => {
                    setOrganizationDetails(task?.data);
                })
                .catch((error) => console.error(error));
    }, [item?.organizationId]);

    //console.log(submissionDetails);

    // handle select or reject
    const updateSubmissionStatus = (status, submissionId) => {
        //  const submissionData = { ...submissionDetails };

        axios
            .put(
                `${import.meta.env.VITE_APP_SERVER_API
                }/api/v1/taskSubmissions/submissionId/${submissionId}/submissionStatus/${status}`,
                {
                    comment: comment,
                    suggestion: rejectionSuggestion,
                }
            )
            .then((response) => {
                const successMessage = `Submission status updated to ${status}`;

                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: successMessage,
                    confirmButtonText: "OK",
                });

                navigate('/superAdminDashboardHome');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const toggleDivVisibility = (detailsName) => {
        setDivVisibility(!isDivVisible);
        setDetails(detailsName);
    };

    const dateTime = new Date(item?.submissionDateTime);

    // Format the date and time
    const formattedDateTime = dateTime.toLocaleString();
    return (
        <>
            <div
                className=" flex items-center justify-between py-[14px] px-2 "
                style={{
                    borderRadius: "7px",
                    border: "1px solid #EEE",
                    background: "#FFF",
                    boxShadow: "0px 4px 20px 0px #EFF1FF",
                }}
            >
                <div className="flex items-center gap-2  w-[220px]">
                    <div>
                        <div className="text-white rounded-full px-3 py-2" style={{ backgroundColor: backgroundColor }}>
                            {getInitials()}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[17px] font-medium text-[#3F3F3F]">
                            {userDetails?.firstName} {userDetails?.lastName}
                        </h1>
                        <p className="text-[13px] font-normal text-[#5E5E5E]">
                            {taskDetails?.taskName}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-[150px]">
                    <h1 className=" text-base font-medium text-[#737373]">
                        {organizationDetails?.orgName}
                    </h1>
                </div>
                <div className="flex justify-center w-[220px]">
                    <h1 className=" text-base font-medium text-[#737373]">
                        {formattedDateTime}
                    </h1>
                </div>

                <div className="flex justify-center w-[100px]">
                    {item?.submissionStatus === "Processing" && (
                        <p className="text-[#F1511B] text-sm font-medium">Pending</p>
                    )}
                    {item?.submissionStatus === "Rejected" && (
                        <p className="text-[#DD2025] text-sm font-medium ">Rejected</p>
                    )}
                    {item?.submissionStatus === "Selected" && (
                        <div>
                            <p className=" text-[#20B15A] text-sm font-medium ">Approved</p>
                        </div>
                    )}
                </div>

                <div className=" flex justify-center  w-[150px]">
                    <div className="flex items-center gap-1">
                        {taskDetails?.taskStatus === "Completed" ? (
                            <img
                                className="bg-[green]  rounded-full"
                                src={taskIcon}
                                alt="icon"
                            />
                        ) : (
                            <img
                                className="bg-[grey]  rounded-full"
                                src={taskIcon}
                                alt="icon"
                            />
                        )}

                        <p className="text-[] text-sm font-medium  ">Task</p>
                    </div>
                </div>

                <div className="flex justify-center w-[200px]">
                    <div
                        style={{
                            borderRadius: "18px",
                        }}
                    >
                        <p className="text-sm font-bold px-5 py-2 flex">
                            <img src={detailsIcon} alt="icon" />
                            {!isDivVisible && (
                                <img
                                    onClick={() => toggleDivVisibility("solution1")}
                                    style={{ cursor: "pointer" }}
                                    src={arrowDown}
                                    alt="icon"
                                />
                            )}
                            {isDivVisible && (
                                <img
                                    onClick={() => toggleDivVisibility("solution1")}
                                    style={{ cursor: "pointer" }}
                                    src={arrowUp}
                                    alt="icon"
                                />
                            )}
                        </p>
                    </div>
                </div>
            </div>
            {isDivVisible && details === "solution1" && (
                <div
                    className=" mb-2"
                    style={{
                        borderRadius: "7px",
                        border: "1px solid #EEE",
                        // background: "#FFF",
                        boxShadow: "0px 4px 20px 0px #EFF1FF",
                    }}
                >
                    <div className="p-5">
                        <h1
                            className="text-lg text-[#3E3E3E] font-medium mb-[5px]"
                            dangerouslySetInnerHTML={{ __html: item?.aboutSolution }}
                        />
                    </div>
                    <div className="flex items-center justify-between p-5 ">
                        <div className="flex items-center gap-2">
                            <Link
                                style={{
                                    borderRadius: "7px",
                                    border: "1px solid #D2D2D2",
                                }}
                                className="w-[685px] px-[7px] py-[10px]"
                                to={item?.fileLink}
                            >
                                {item?.fileLink ? item?.fileLink : "No file"}
                            </Link>
                            <img
                                src={copyIcon}
                                alt="Icon"
                                onClick={handleCopyClick}
                                style={{ cursor: "pointer" }}
                            />
                            {copySuccess && <p className="text-[blue]">{copySuccess}</p>}
                        </div>

                        {item?.submissionStatus === "Selected" ? (
                            <p
                                className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff] "
                                style={{
                                    borderRadius: "26px",
                                    background: "var(--Completed-color, #20B15A)",
                                }}
                            >
                                Approved
                            </p>
                        ) : (
                            <>
                                {item?.submissionStatus === "Rejected" ? (
                                    <p
                                        className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff] "
                                        style={{
                                            borderRadius: "26px",
                                            background: "red",
                                        }}
                                    >
                                        Rejected
                                    </p>
                                ) : (
                                    <button
                                        onClick={() =>
                                            updateSubmissionStatus("Selected", item?._id)
                                        }
                                        className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff]"
                                        style={{
                                            borderRadius: "26px",
                                            background: "var(--Completed-color, #20B15A)",
                                        }}
                                    >
                                        Approve
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    {item?.submissionStatus === "Processing" && (
                        <>
                            <h1 className="text-[#DD2025] p-3 text-lg font-medium">
                                Rejection Suggestions
                            </h1>

                            <div className=" grid grid-cols-3 gap-3 p-1 mb-5">
                                {rejectionSuggestionData?.map((suggestion) => (
                                    <Button
                                        key={suggestion.id} // Don't forget to provide a unique key for each item when mapping
                                        onClick={() =>
                                            handleRejectionSuggestion(
                                                suggestion.rejectionSuggestionName
                                            )
                                        }
                                        className={`text-[] p-10`}
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                            backgroundColor:
                                                suggestion.rejectionSuggestionName ===
                                                    rejectionSuggestion
                                                    ? "#3498db"
                                                    : "",
                                            color:
                                                suggestion.rejectionSuggestionName ===
                                                    rejectionSuggestion
                                                    ? "white"
                                                    : "",
                                            // Set the background color to blue if the suggestion is selected
                                        }}
                                    >
                                        {suggestion.rejectionSuggestionName}
                                    </Button>
                                ))}
                            </div>

                            <div className="min-h-[155px] flex-col justify-center items-end gap-[7px] flex p-3">
                                <div className="self-stretch min-h-[129px] border flex-col justify-start items-start gap-px flex">
                                    <div className="self-stretch px-2.5 bg-violet-50 border border-neutral-200 justify-start items-center gap-[90px] inline-flex">
                                        <div className="w-[802px] py-[7px] flex-col justify-center items-center gap-8 inline-flex">
                                            <div className="self-stretch text-black text-base font-medium font-raleway tracking-wider">
                                                {" "}
                                                Comment
                                            </div>
                                        </div>
                                    </div>
                                    {/* Text editor */}

                                    <div className="bg-white text-black w-full">
                                        <TextEditor setValue={setComment} />
                                    </div>
                                </div>
                                <div className="text-sky-600 text-base font-medium font-raleway tracking-wider">
                                    Words limit/200
                                </div>
                            </div>

                            <div className=" flex justify-end pb-5 me-2">
                                <button
                                    onClick={() => updateSubmissionStatus("Rejected", item?._id)}
                                    className="text-[#4555BA] text-[19px] font-medium hover:bg-[blue] hover:text-[#fff]"
                                    style={{
                                        borderRadius: "23px",
                                        border: "1px solid #4555BA",
                                        padding: "10px 15px",
                                    }}
                                >
                                    Submit the rejection
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default StudentSubmissionDetails;
