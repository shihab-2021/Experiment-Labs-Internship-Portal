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


import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextEditor from "../../../Shared/TextEditor/TextEditor";


const StudentSubmissionDetails = ({ item }) => {
    const [aboutSolution, setAboutSolution] = useState("");
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyClick = () => {
        const linkToCopy = submissionDetails?.fileLink;

        // Create a temporary input element to copy the link
        const tempInput = document.createElement('input');
        tempInput.value = linkToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setCopySuccess('Link copied!');
        // Automatically hide the success message after 20 seconds
        setTimeout(() => {
            setCopySuccess('');
        }, 5000);
    };

    const userDetails = {
        lastName: "ab",
        firstName: "as",
        organizationName: "Magic pin"

    }

    const submissionDetails = {
        submissionStatus: "Rejected",
        _id: "12121212",
        fileLink: "www.google.com",
        aboutSolution: "Hi! I am excited about this internship project. I've sent the Figma link, and I hope you like it. Please provide feedback for my improvement.",
        taskName: "UI AND UX TASK"


    }

    // console.log(item)

    //user details data

    //const [userDetails, setUserDetails] = useState();

    /*   useEffect(() => {
        if (item?.participantEmail)
          axios
            .get(
              `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${item?.participantEmail}`
            )
            .then((user) => {
              setUserDetails(user?.data);
            })
            .catch((error) => console.error(error));
      }, [item?.participantEmail]); */


    //console.log(userDetails)

    //submission details data

    //const [submissionDetails, setSubmissionDetails] = useState();

    /*   useEffect(() => {
        if (item?.submissionId)
          axios
            .get(
              `${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/${item?.submissionId}`
            )
            .then((user) => {
              setSubmissionDetails(user?.data);
            })
            .catch((error) => console.error(error));
    
            
      }, [item?.submissionId]); */

    //console.log(submissionDetails)


    // handle select or reject


    /* const updateSubmissionStatus = (status,submissionId) => {
      
      const submissionData= {...submissionDetails};
  
      if (!submissionId) {
        console.log('Submission ID is missing.');
        return;
      }
  
      axios.put(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/submissionId/${submissionId}/submissionStatus/${status}`)
        .then(response => {
        
          const successMessage = `Submission status updated to ${status}`;
  
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: successMessage,
            confirmButtonText: 'OK'
          });
          submissionData.submissionStatus = status;
          setSubmissionDetails(submissionData)
        
        })
        .catch(error => {
          console.error(error);
         
        });
  
        
    }; */

    const [isDivVisible, setDivVisibility] = useState(false);
    const [details, setDetails] = useState("");

    const toggleDivVisibility = (detailsName) => {
        setDivVisibility(!isDivVisible);
        setDetails(detailsName);
    };
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
                <div className="flex items-center gap-2 ">
                    <div>
                        <img src={profileImage} alt="ImageProfile" />
                    </div>
                    <div>
                        <h1 className="text-[17px] font-medium text-[#3F3F3F]">{userDetails?.firstName} {userDetails?.lastName}</h1>
                        <p className="text-[13px] font-normal text-[#5E5E5E]">
                            {submissionDetails?.taskName}
                        </p>
                    </div>
                </div>
                <div className="text-center">

                    <h1 className=" text-base font-medium text-[#737373]">{userDetails?.organizationName}</h1>

                </div>
                <div className="text-center">

                    <h1 className=" text-base font-medium text-[#737373]">{item?.submissionDateTime}</h1>

                </div>

                <div className="text-center">

                    {
                        (submissionDetails?.submissionStatus === "Processing") &&

                        <p className="text-[#F1511B] text-sm font-medium">Pending</p>

                    }
                    {
                        (submissionDetails?.submissionStatus === "Rejected") &&

                        <p className="text-[#DD2025] text-sm font-medium ">Rejected</p>


                    }
                    {
                        (submissionDetails?.submissionStatus === "Selected") &&
                        <div

                        >
                            <p className=" text-[#20B15A] text-sm font-medium ">Approved</p>
                        </div>
                    }


                </div>

                <div
                    className=" flex items-center gap-1"

                >
                    <img src={taskIcon} alt="icon" />
                    <p className="text-[] text-sm font-medium  ">Task</p>
                </div>


                <div className="text-center">

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
                        <h1 className="text-lg text-[#3E3E3E] font-medium mb-[5px]" dangerouslySetInnerHTML={{ __html: submissionDetails?.aboutSolution }} />


                    </div>
                    <div className="flex items-center justify-between p-5 ">
                        <div className="flex items-center gap-2">
                            <Link
                                style={{
                                    borderRadius: "7px",
                                    border: "1px solid #D2D2D2"
                                }}
                                className="w-[685px] px-[7px] py-[10px]" to={submissionDetails?.fileLink}>{submissionDetails?.fileLink ? submissionDetails?.fileLink : "No file"}</Link>
                            <img
                                src={copyIcon}
                                alt="Icon"
                                onClick={handleCopyClick}
                                style={{ cursor: 'pointer' }}
                            />
                            {copySuccess && <p className="text-[blue]">{copySuccess}</p>}
                        </div>

                        {
                            (submissionDetails?.submissionStatus === "Selected") ?
                                <p
                                    className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff] "
                                    style={{
                                        borderRadius: "26px",
                                        background: "var(--Completed-color, #20B15A)"
                                    }}
                                >


                                    Approved</p>
                                :
                                <>
                                    {
                                        (submissionDetails?.submissionStatus === "Rejected") ? <p
                                            className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff] "
                                            style={{
                                                borderRadius: "26px",
                                                background: "red"
                                            }}
                                        >


                                            Rejected</p>
                                            :
                                            <button
                                                className="text-[19px] font-medium px-[29px] py-[8px] text-[#fff]"
                                                style={{
                                                    borderRadius: "26px",
                                                    background: "var(--Completed-color, #20B15A)"
                                                }}
                                            >Approve</button>
                                    }

                                </>


                        }


                    </div>
                    {
                        submissionDetails?.submissionStatus === "Processing" && (
                            <>
                                <h1 className="text-[#DD2025] p-3 text-lg font-medium">Rejection Suggestions</h1>

                                <div className=" grid grid-cols-3 gap-3 p-1 mb-5">
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Incorrect Understanding of the Task
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Lack of Depth or Detail
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Lack of Originality
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Poor Organization and Structure
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Grammar and Language Issues
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Insufficient Effort
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Failure to Follow Instructions
                                    </Button>
                                    <Button
                                        className=" text-[#ECECEC] p-10"
                                        style={{
                                            borderRadius: "34px",
                                            border: "1px solid #C6C6C6",
                                            padding: "10px 10px",
                                        }}
                                    >Inadequate Research or Citations
                                    </Button>

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
                                            <TextEditor setValue={setAboutSolution} />
                                        </div>
                                    </div>
                                    <div className="text-sky-600 text-base font-medium font-raleway tracking-wider">
                                        Words limit/200
                                    </div>
                                </div>

                                <div className=" flex justify-end pb-5 me-2">
                                    <button
                                        className="text-[#4555BA] text-[19px] font-medium"
                                        style={{
                                            borderRadius: "23px",
                                            border: "1px solid #4555BA",
                                            padding: "10px 15px"
                                        }}
                                    >Submit the rejection</button>

                                </div>

                            </>)
                    }

                </div>
            )}
        </>
    );
};

export default StudentSubmissionDetails;
