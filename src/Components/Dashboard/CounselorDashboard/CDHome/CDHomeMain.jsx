import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CDHomeTopSection from "./CDHomeTopSection";
import CDHomeTasks from "./CDHomeTasks";
import Swal from "sweetalert2";
import CDHomeBottomSection from "./CDHomeBottomSection";
import Loading from "../../../Shared/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { FaMagnifyingGlass } from "react-icons/fa6";

const CDHomeMain = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    // Show a loading spinner while the login process is in progress
    Loading();
    if (userInfo?.organizations) {
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API
          }/api/v1/taskSubmissions/getSubmissionStatusByCounsellorId/counsellorId/${userInfo?.organizations[0]?.counsellorId
          }`
        )
        .then((tasks) => {
          setAllTasks(tasks?.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          // Close the loading spinner when the data fetching is complete
          //   setLoading(false);
          Loading().close();
        });
    }
  }, [userInfo]);
  const progress = allTasks?.submissionStatusCounts?.find(
    (task) => task?.submissionStatus === "Processing"
  );
  const inProgress = progress?.submissions || [];
  const pending = allTasks?.submissionStatusCounts?.find(
    (task) => task?.submissionStatus === "Pending"
  );
  const inPending = pending?.submissions || [];
  const completed = allTasks?.submissionStatusCounts?.find(
    (task) => task?.submissionStatus === "Selected"
  );
  const inCompleted = completed?.submissions || [];
  const rejected = allTasks?.submissionStatusCounts?.find(
    (task) => task?.submissionStatus === "Rejected"
  );
  const inRejected = rejected?.submissions || [];
  console.log("All tasks", allTasks);
  return (
    <div>
      {/* <div className="w-11/12 mx-auto mt-7">
      <h1 className="text-[20px] text-[#3F3F3F] font-medium tracking-widest mb-3">
          Home Page
        </h1>
        <div
          style={{
            borderRadius: "14px",
            border: "1px solid #DDD",
          }}
          className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-9/12 h-[48px] "
        >
          <FaMagnifyingGlass />
          <input className="w-full" placeholder="Search"></input>
        </div>
        
      </div> */}
      <CDHomeTopSection
        allTasks={allTasks}
        progress={inProgress}
        pending={inPending}
        selected={inCompleted}
        rejected={inRejected}
      />
      {/* <TrendingTasks /> */}
      <CDHomeTasks
        allTasks={allTasks}
        progress={inProgress}
        pending={inPending}
        selected={inCompleted}
        rejected={inRejected}
      />
      <CDHomeBottomSection
        allTasks={allTasks}
        progress={inProgress}
        pending={inPending}
        selected={inCompleted}
        rejected={inRejected}
      />
    </div>
  );
};

export default CDHomeMain;
