import React, { useContext, useEffect, useState } from "react";
import profileImage from "../../../assets/Dashboard/AdminDashboard/profileImage.svg";
import reviewList from "../../../assets/Dashboard/AdminDashboard/reviewList.svg";
import arrowDown from "../../../assets/Dashboard/AdminDashboard/arrowDown.svg";
import driveIcon from "../../../assets/Dashboard/AdminDashboard/driveIcon.svg";
import arrowUp from "../../../assets/Dashboard/AdminDashboard/arrowUp.svg";


import axios from "axios";
import { Link } from "react-router-dom";

const AdminParticipants = ({item}) => {
 
  console.log(item)
 
  //user details data

  const [userDetails, setUserDetails] = useState();
 
  useEffect(() => {
    if (item?.participantEmail)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${item?.participantEmail}`
        )
        .then((user) => {
          setUserDetails(user?.data);
        })
        .catch((error) => console.error(error));
  }, [item?.participantEmail]);

  //submission details data

  const [submissionDetails, setSubmissionDetails] = useState();
 
  useEffect(() => {
    if (item?.submissionId)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/${item?.submissionId}`
        )
        .then((user) => {
          setSubmissionDetails(user?.data);
        })
        .catch((error) => console.error(error));
  }, [item?.submissionId]);

  console.log(submissionDetails)

 

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
      <div className="flex items-center gap-2">
        <div>
          <img src={profileImage} alt="ImageProfile" />
        </div>
        <div>
          <h1 className="text-base font-semibold">{userDetails?.firstName} {userDetails?.lastName}</h1>
          <p className="text-[13px] font-normal text-[#797979]">
            10th class student
          </p>
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-base font-bold">Submission time</h1>
        <h1 className=" text-base font-medium text-[#737373]">{item?.submissionDateTime ? new Date(item.submissionDateTime).toLocaleTimeString() : ''}</h1>

      </div>
      <div className="text-center">
        <h1 className=" text-base font-bold">Submission day</h1>
        <h1 className=" text-base font-medium text-[#737373]">{item?.submissionDateTime ? new Date(item.submissionDateTime).toLocaleDateString() : ''}</h1>

      </div>
      <div
        className="mt-6"
        style={{
          borderRadius: "18px",
          background: "#439DF7",
        }}
      >
        <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Message</p>
      </div>
      <div className="text-center">
        <h1 className="text-base font-bold">Status</h1>
        <div
          style={{
            borderRadius: "18px",
            background: "#20B15A",
          }}
        >
          <p className="text-[#fff] text-sm font-bold px-5 py-2">Select</p>
        </div>
      </div>
      <div
        className="mt-6"
        style={{
          borderRadius: "18px",
          background: "#DD2025",
        }}
      >
        <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Reject</p>
      </div>
      <div className="text-center">
        <h1 className="text-base font-bold">Solution</h1>
        <div
          style={{
            borderRadius: "18px",
          }}
        >
          <p className="text-sm font-bold px-5 py-2 flex">
            <img src={reviewList} alt="icon" />
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
          background: "#FFF",
          boxShadow: "0px 4px 20px 0px #EFF1FF",
        }}
      >
        <div className="p-5">
          <h1 className="text-xl font-medium mb-[20px]">Animation project</h1>
          <Link
            className="p-[10px] my-[15px]"
            style={{
              borderRadius: "40px",
              border: "1px solid #4555BA",
            }}
          >
            WWW.Animationproject.com
          </Link>
        </div>
        <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
          <img src={driveIcon} alt="Icon" />
          <Link to="">Http: internship project google drive link</Link>
        </div>
      </div>
    )}
  </>
  );
};

export default AdminParticipants;
