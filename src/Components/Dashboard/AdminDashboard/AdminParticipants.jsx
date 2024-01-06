import React, { useContext, useEffect, useState } from "react";
import profileImage from "../../../assets/Dashboard/AdminDashboard/profileImage.svg";
import reviewList from "../../../assets/Dashboard/AdminDashboard/reviewList.svg";
import arrowDown from "../../../assets/Dashboard/AdminDashboard/arrowDown.svg";
import driveIcon from "../../../assets/Dashboard/AdminDashboard/driveIcon.svg";
import arrowUp from "../../../assets/Dashboard/AdminDashboard/arrowUp.svg";

import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminParticipants = ({ item }) => {
  // console.log(item)

  //user details data

  const [userDetails, setUserDetails] = useState();
  const [submissionDetails, setSubmissionDetails] = useState({});

  const getInitials = (data) => {
    const firstNameInitial = data?.firstName?.charAt(0)?.toUpperCase() || "";
    const lastNameInitial = data?.lastName?.charAt(0)?.toUpperCase() || "";
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
  }, [userDetails, backgroundColor]);

  useEffect(() => {
    if (item?.participantEmail)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${
            item?.participantEmail
          }`
        )
        .then((user) => {
          setUserDetails(user?.data);
        })
        .catch((error) => console.error(error));
  }, [item?.participantEmail]);

  //console.log(userDetails)

  //submission details data

  useEffect(() => {
    if (item?.submissionId)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/${
            item?.submissionId
          }`
        )
        .then((user) => {
          setSubmissionDetails(user?.data);
        })
        .catch((error) => console.error(error));
  }, [item?.submissionId]);

  //console.log(submissionDetails)

  // handle select or reject

  const updateSubmissionStatus = (status, submissionId) => {
    const submissionData = { ...submissionDetails };

    if (!submissionId) {
      console.log("Submission ID is missing.");
      return;
    }

    axios
      .put(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/taskSubmissions/submissionId/${submissionId}/submissionStatus/${status}`
      )
      .then((response) => {
        const successMessage = `Submission status updated to ${status}`;

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: successMessage,
          confirmButtonText: "OK",
        });
        submissionData.submissionStatus = status;
        setSubmissionDetails(submissionData);
      })
      .catch((error) => {
        console.error(error);
        // Handle error, show an error message to the user
      });
  };

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
            <div
              className="rounded-full w-[45px] h-[45px] flex items-center text-red-50 justify-center"
              style={{ backgroundColor }}
            >
              {getInitials(userDetails)}
            </div>
          </div>
          <div>
            <h1 className="text-base font-semibold">
              {userDetails?.firstName} {userDetails?.lastName}
            </h1>
            <p className="text-[13px] font-normal text-[#797979]">
              10th class student
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className=" text-base font-bold">Submission time</h1>
          <h1 className=" text-base font-medium text-[#737373]">
            {item?.submissionDateTime
              ? new Date(item.submissionDateTime).toLocaleTimeString()
              : ""}
          </h1>
        </div>
        <div className="text-center">
          <h1 className=" text-base font-bold">Submission day</h1>
          <h1 className=" text-base font-medium text-[#737373]">
            {item?.submissionDateTime
              ? new Date(item.submissionDateTime).toLocaleDateString()
              : ""}
          </h1>
        </div>
        <Link
          to="/message"
          className=""
          style={{
            borderRadius: "18px",
            background: "#439DF7",
          }}
        >
          <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Message</p>
        </Link>
        <div className="text-center">
          <h1 className="text-base font-bold">Status</h1>
          {submissionDetails?.submissionStatus === "Processing" && (
            <button
              onClick={() =>
                updateSubmissionStatus("AdminApproved", submissionDetails?._id)
              }
              style={{
                borderRadius: "18px",
                background: "#20B15A",
              }}
            >
              <p className="text-[#fff] text-sm font-bold px-5 py-2">Select</p>
            </button>
          )}
          {submissionDetails?.submissionStatus === "Rejected" && (
            <p
              className=""
              style={{
                borderRadius: "18px",
                background: "#DD2025",
              }}
            >
              <p className="text-[#fff] text-sm font-bold px-3 py-2 ">
                Rejected
              </p>
            </p>
          )}
          {submissionDetails?.submissionStatus === "Selected" && (
            <div>
              <p className=" rounded-2xl text-[#D4A500] bg-[#FFF8E3] text-sm font-bold px-5 py-2">
                Selected
              </p>
            </div>
          )}
          {submissionDetails?.submissionStatus === "Pending" && (
            <div>
              <p className=" rounded-2xl text-[#d47f00] bg-[#fff2e3] text-sm font-bold px-5 py-2">
                Submission Pending
              </p>
            </div>
          )}
          {submissionDetails?.submissionStatus === "AdminApproved" && (
            <div>
              <p className=" rounded-2xl text-[#66d400] bg-[#f0ffe3] text-sm font-bold px-5 py-2">
                Approval Pending
              </p>
            </div>
          )}
        </div>
        {submissionDetails?.submissionStatus === "Processing" && (
          <button
            className="mt-6"
            onClick={() =>
              updateSubmissionStatus("Rejected", submissionDetails?._id)
            }
            style={{
              borderRadius: "18px",
              background: "#DD2025",
            }}
          >
            <p className="text-[#fff] text-sm font-bold px-3 py-2 ">Reject</p>
          </button>
        )}

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
            <h1
              className="text-xl font-medium mb-[20px]"
              dangerouslySetInnerHTML={{
                __html: submissionDetails?.aboutSolution,
              }}
            />

            {/*  <Link
              className="p-[10px] my-[15px]"
              style={{
                borderRadius: "40px",
                border: "1px solid #4555BA",
              }}
            >
              WWW.Animationproject.com
            </Link> */}
          </div>
          <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
            <img src={driveIcon} alt="Icon" />
            <Link to="">
              {submissionDetails?.fileLink
                ? submissionDetails?.fileLink
                : "No file"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminParticipants;
