//CDHomeTaskCard

import React, { useEffect, useState } from "react";
import pending from "../../../../assets/Dashboard/SuperAdminDashboard/mdi_account-pending-outline.svg";
import reject from "../../../../assets/Dashboard/SuperAdminDashboard/iconoir_cancel.svg";
import approve from "../../../../assets/Dashboard/SuperAdminDashboard/ic_round-done-all.svg";
import axios from "axios";
import profileImg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg";
import { Link } from "react-router-dom";
import reviewList from "../../../../assets/Dashboard/AdminDashboard/reviewList.svg";
import arrowDown from "../../../../assets/Dashboard/AdminDashboard/arrowDown.svg";
import driveIcon from "../../../../assets/Dashboard/AdminDashboard/driveIcon.svg";
import arrowUp from "../../../../assets/Dashboard/AdminDashboard/arrowUp.svg";

const CDHomeTaskCard = ({ item, index }) => {
  const [stdName, setStdName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [orgLogo, setOrgLogo] = useState("");
  console.log(item)
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${item?.participantEmail
        }`
      )
      .then((res) => {
        setStdName(res?.data?.firstName);
      }),
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${item?.taskId}`
        )
        .then((res) => {
          setTaskName(res?.data?.taskName);
        }),
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${item?.organizationId
          }`
        )
        .then((res) => {
          setOrgLogo(res?.data?.orgLogo);
        });
  }, [item]);
  const getInitials = () => {
    const firstNameInitial = stdName?.charAt(0)?.toUpperCase() || "";
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

  const [backgroundColor, setBackgroundColor] = useState("");
  const formatDate = (date) => {
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

    const currentDate = new Date(date);
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()]; // Get month name
    const year = currentDate.getFullYear();
    return `${day}/ ${month}/ ${year}`;
  };

  const formatTaskCreationDate = (date) => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    const diffInMilliseconds = currentDate - givenDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    } else if (diffInMonths === 1) {
      return "1 month ago";
    } else if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    } else if (diffInYears === 1) {
      return "1 year ago";
    } else {
      return `${diffInYears} years ago`;
    }
  };

  const [taskCreatorInfo, setTaskCreatorInfo] = useState({});
  const [organizationInfo, setOrganizationInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users?email=${item?.creator?.email
        }`
      )
      .then((user) => {
        setTaskCreatorInfo(user?.data);
      })
      .catch((error) => console.error(error));

    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${item?.creator?.organizationId
        }`
      )
      .then((org) => {
        setOrganizationInfo(org?.data);
      })
      .catch((error) => console.error(error));
  }, [item]);

  /*  const getSubmissionStatusClasses = () => {
     switch (item?.submissionStatus) {
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
   }; */
  const [isDivVisible, setDivVisibility] = useState(false);
  const [details, setDetails] = useState("");

  const toggleDivVisibility = (detailsName) => {
    setDivVisibility(!isDivVisible);
    setDetails(detailsName);
  };
  return (
    <>
      <Link
        // to={`/superAdminDashboard/taskDetails/${item?._id}`}
        key={index}
        className="border flex justify-between items-center gap-3 py-1 px-3 rounded-lg border-solid border-gray-300 my-2"
      >
        <div
          style={{ backgroundColor: getRandomColor(index) }}
          className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
        >
          <p className="grid object-center mt-[25%] justify-items-center text-red-100">
            {getInitials()}
          </p>
        </div>
        <p className="w-[20%]">{stdName}</p>
        <p className="w-[30%]">{taskName}</p>
        <img className="w-[15%]" src={orgLogo} alt="" />
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
        {/* <p className={`${getSubmissionStatusClasses()}`}>
        {item?.submissionStatus}
      </p> */}

      </Link>
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
                __html: item?.aboutSolution,
              }}
            />


          </div>
          <div className="bg-[#E7EBFF] flex items-center gap-5 mt-5 px-[15px] py-[10px]">
            <img src={driveIcon} alt="Icon" />
            <Link to="">
              {item?.fileLink
                ? item?.fileLink
                : "No file"}
            </Link>
          </div>
        </div>
      )}
    </>

  );
};

export default CDHomeTaskCard;
