import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import axios from "axios";
import { RiEditBoxLine } from "react-icons/ri";
import { Avatar, AvatarGroup } from "@mui/material";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { GoShieldLock } from "react-icons/go";
import roundtask from "../../../assets/Shared/roundtask.svg";
import cancelIcon from "../../../assets/Shared/cancel.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AdminSubUserAction = ({ subData }) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const orgId = userInfo?.organizations[0]?.organizationId;
  const subuserEmail = subData?.email;
  // console.log(userInfo?.organizations[0]?.organizationId)
  // console.log( subData?.firstName)
  // console.log( subData?.organizations[0]?.organizationId)

  const [subTasksdetails, setSubTasksDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/tasks/organizationId/${orgId}/creatorEmail/${subuserEmail}`
      )
      .then((data) => {
        setSubTasksDetails(data?.data);
      })
      .catch((error) => console.error(error));
  }, [subData]);
  console.log(subTasksdetails);
  const updateSubmissionStatus = (status, taskId) => {
    let decisionInfo = {};
    if (status === "Rejected") {
      decisionInfo = {
        comment: "<p>Rejected By Admin!</p>",
        suggestion: "Rejected By Admin",
        adminDecisionInfo: {
          email: userInfo?.email,
          decisionDateTime: new Date(),
        },
      };
    } else {
      decisionInfo = {
        adminDecisionInfo: {
          email: userInfo?.email,
          decisionDateTime: new Date(),
        },
      };
    }
    const update = axios
      .put(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/tasks/taskId/${taskId}/taskStatus/${status}`,
        decisionInfo
      )
      .then((response) => {
        const successMessage = `Task status updated to ${status}`;

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: successMessage,
          confirmButtonText: "OK",
        });

        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1 className="text-[#1976D2] text-xl font-bold tracking-widest mt-9">
        Task created by {subData?.firstName}
      </h1>
      <div className="flex gap-5">
        {subTasksdetails?.map((item, index) =>
          item?.taskStatus === "Pending" ? (
            <div
              key={index}
              className="my-4 bg-[#FFF] border w-[315px] border-[#E7E7E7] shadow-md shadow-[#E7EAFF] px-[7px] py-[12px] rounded-md"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[20px]">{item?.taskName}</h1>
                <RiEditBoxLine
                  className="w-6 h-6"
                  style={{ color: "#3E4DAC" }}
                />
              </div>
              <p className="text-[16px] mt-[12px] font-medium text-[#797979] tracking-wide">
                {item?.taskNo}
              </p>
              <p className="text-[14px] mt-[12px] font-medium text-[#797979] tracking-wide">
                {item?.aboutTask}
              </p>
              {/* <AvatarGroup
                        className="grid justify-end mt-[14px]"
                        total={16}
                    >
                        {item?.studentsImg.map((each, index) => (
                            <Avatar key={index} alt="Remy Sharp" src={each.img} />
                        ))}
                    </AvatarGroup> */}
              <div>
                <div className="mt-[14px] flex justify-between text-[14px] font-medium">
                  <p>Progress</p>
                  <p className="text-[#3F3F3F]">
                    {item?.progressBar?.current || 0}/{item?.participantLimit}
                  </p>
                </div>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-lg h-2">
                    <div
                      className="bg-[#3E4DAC] h-2 rounded-lg"
                      style={{
                        width: `${
                          (item?.progressBar?.current ||
                            0 / item?.participantLimit) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-[#3F3F3F] text-[14px] font-medium">
                  {item?.taskDeadline}
                </p>
              </div>
              <div className="mt-3  grid gap-2 justify-center items-center">
                <div className="flex gap-4 items-center my-auto text-white">
                  <button
                    onClick={() =>
                      updateSubmissionStatus("AdminApproved", item?._id)
                    }
                    className="bg-[#20B15A] py-2 px-3 rounded-3xl"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() =>
                      updateSubmissionStatus("Rejected", item?._id)
                    }
                    className="bg-[#DD2025] py-2 px-3 rounded-3xl"
                  >
                    Reject
                  </button>
                </div>
                <p className="text-[#4555BA] text-[14px] font-medium tracking-widest">
                  Created by <span>{subData?.firstName}</span>
                </p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default AdminSubUserAction;
