import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import StudentSubmissionDetails from "./StudentSubmissionDetails";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../../Shared/Loading/Loading";

const SubmissionDetails = () => {
  const [states, setStates] = useState([
    "All Students",
    "Pending Decision",
    "Approved",
    "Rejected",
  ]);
  const [selectedSate, setSelectedSate] = useState(states[0]);
  const [loading, setLoading] = useState(true);

  const taskDetails = {
    participants: [
      {
        participantEmail: "ab@gmail.com",
        submissionId: "12121212",
        submissionDateTime: "1/2/2024",
      },
      {
        participantEmail: "ab@gmail.com",
        submissionId: "12121212",
        submissionDateTime: "1/2/2024",
      },
      {
        participantEmail: "ab@gmail.com",
        submissionId: "12121212",
        submissionDateTime: "1/2/2024",
      },
      {
        participantEmail: "ab@gmail.com",
        submissionId: "12121212",
        submissionDateTime: "1/2/2024",
      },
    ],
  };

  // submissionsDetails data
  const [submissionsDetails, setSubmissionsDetails] = useState();

  useEffect(() => {
    // Show a loading spinner while the login process is in progress
    Loading();
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions`)
      .then((submission) => {
        setSubmissionsDetails(submission?.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        // Close the loading spinner when the data fetching is complete
        //setLoading(false);
        Loading().close();
      });
  }, []);

  console.log(submissionsDetails);

  return (
    <div className="mx-[14px]">
      <h1 className="text-xl font-medium mt-[40px]">
        Students Submission details
      </h1>
      <div
        style={{
          borderRadius: "14px",
          border: "1px solid #DDD",
        }}
        className="mt-3 lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[35px] "
      >
        <FaMagnifyingGlass />
        <input className="w-[90%]" placeholder="Search"></input>
      </div>

      <div>
        <div className="flex flex-col items-stretch mt-[17px]">
          <div className="flex gap-5">
            {states?.map((state, i) => (
              <div
                key={i}
                onClick={() => setSelectedSate(state)}
                className={`text-neutral-700 text-base font-medium tracking-widest cursor-pointer relative overflow-hidden`}
                style={{ display: "inline-block" }}
              >
                <p
                  className={`${state === "All Students" ? "text-[#3E4DAC]" : ""
                    }
                                ${state === "Pending Decision"
                      ? "text-[#F1511B]"
                      : ""
                    }
                                ${state === "Approved" ? "text-[#20B15A]" : ""}
                                ${state === "Rejected" ? "text-[#DD2025]" : ""}
                                
                                `}
                >
                  {state}
                </p>

                {selectedSate === state && (
                  <hr className="h-1.5 bg-blue-800 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-[31px]">
          <div
            className=" flex  text-[#3F3F3F] items-center justify-between py-[14px] mb-2 "
            style={{
              borderRadius: "7px",
              border: "1px solid #EEE",
              background: "#F0F2FF",
              boxShadow: "0px 4px 20px 0px #EFF1FF",
            }}
          >
            <div className="text-center font-medium text-xl w-[220px]">
              <h1 className="">Students name</h1>
            </div>
            <div className="text-center w-[150px]">
              <h1 className=" text-xl font-medium">Company</h1>
            </div>
            <div className="flex justify-center text-center w-[220px]">
              <h1 className=" text-xl font-medium ">Submission time</h1>
            </div>
            <div className="text-center flex justify-center w-[100px]">
              <p className=" text-xl font-medium ">Decision</p>
            </div>
            <div className="text-center flex justify-center w-[150px] ">
              <h1 className="text-xl font-medium ">Task details</h1>
            </div>
            <div className="text-center flex justify-center w-[200px] ">
              <h1 className="text-xl font-medium">Submission details</h1>
            </div>
          </div>
          {selectedSate === "All Students" && (
            <>
              {submissionsDetails?.length ? (
                <div>
                  {submissionsDetails?.map((index , item) => (
                    <StudentSubmissionDetails key={index} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-xl font-semibold text-[red]">
                  Data not found
                </p>
              )}
            </>
          )}
          {selectedSate === "Pending Decision" && (
            <>
              {submissionsDetails?.length ? (
                <div>
                  {submissionsDetails
                    ?.filter((item) => item?.submissionStatus === "Processing")
                    .map((item) => (
                      <StudentSubmissionDetails
                        // key={item.id}  // Assuming each item has a unique id
                        item={item}
                      />
                    ))}
                </div>
              ) : (
                <p className="text-xl font-semibold text-[red]">
                  Data not found
                </p>
              )}
            </>
          )}

          {selectedSate === "Approved" && (
            <>
              {submissionsDetails?.length ? (
                <div>
                  {submissionsDetails
                    ?.filter((item) => item?.submissionStatus === "Selected")
                    .map((item) => (
                      <StudentSubmissionDetails
                        // key={item.id}  // Assuming each item has a unique id
                        item={item}
                      />
                    ))}
                </div>
              ) : (
                <p className="text-xl font-semibold text-[red]">
                  Data not found
                </p>
              )}
            </>
          )}
          {selectedSate === "Rejected" && (
            <>
              {submissionsDetails?.length ? (
                <div>
                  {submissionsDetails
                    ?.filter((item) => item?.submissionStatus === "Rejected")
                    .map((item) => (
                      <StudentSubmissionDetails
                        // key={item.id}  // Assuming each item has a unique id
                        item={item}
                      />
                    ))}
                </div>
              ) : (
                <p className="text-xl font-semibold text-[red]">
                  Data not found
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
