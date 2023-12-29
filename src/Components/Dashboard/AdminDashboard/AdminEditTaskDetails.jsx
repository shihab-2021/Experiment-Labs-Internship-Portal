import React, { useContext, useEffect, useState } from "react";
import roundtask from "../../../assets/Shared/roundtask.svg";
import axios from "axios";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useParams } from "react-router-dom";




const AdminEditTaskDetails = () => {
    const { id } = useParams()
    const { user, userInfo } = useContext(AuthContext);

      // taskDetails data
  const [taskDetails, setTaskDetails] = useState();

  useEffect(() => {
    if (id)
      axios
        .get(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/tasks/${id}`
        )
        .then((task) => {
          setTaskDetails(task?.data);
        })
        .catch((error) => console.error(error));
  }, [id]);

  console.log(taskDetails);


    return (
        <>
            <form className="mt-3 w-11/12 mx-auto" autocomplete="on">
                <h1 className="text-2xl font-semibold my-10">Edit Task Details</h1>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="taskName" className="text-[17px] font-medium">
                     Task name
                    </label>
                    <input
                        placeholder="ex. Marketing task"
                        defaultValue={taskDetails?.taskName}
                        type="text"
                        name="taskName"
                        id="taskName"
                        className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="aboutTask" className="text-[17px] font-medium">
                     Write about task
                    </label>
                    <textarea
                        maxLength={200}
                        defaultValue={taskDetails?.aboutTask}
                        placeholder="Write about task what is the task"
                        type="text"
                        name="aboutTask"
                        id="aboutTask"
                        className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
                    />
                </div>
                <p className="text-end text-[#4555BA] text-[15px] font-medium">
                    words limit/200
                </p>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="aboutOutcome" className="text-[17px] font-medium">
                        Write about outcome
                    </label>
                    <textarea
                        maxLength={200}
                        defaultValue={taskDetails?.aboutOutcome}
                        placeholder="Write about what students receive upon completing the task."
                        type="text"
                        name="aboutOutcome"
                        id="aboutOutcome"
                        className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
                    />
                </div>
                <p className="text-end text-[#4555BA] text-[15px] font-medium">
                    words limit/200
                </p>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="taskLink" className="text-[17px] font-medium">
                        Task link
                    </label>
                    <input
                        placeholder="url of your task"
                        defaultValue={taskDetails?.taskLink}
                        type="url"
                        name="taskLink"
                        id="taskLink"
                        className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                    />
                </div>
                <label
                    htmlFor="taskSubmissionTime"
                    className="text-[18px] font-medium"
                >
                    Task submission time
                </label>
                <div className="flex mt-3 justify-between">
                    <div className="flex flex-col gap-2 ">
                        <label
                            htmlFor="taskTime"
                            className="text-[16px] text-[#3F3F3F] font-medium"
                        >
                            The duration for completing the task.
                        </label>
                        <input
                            placeholder="time to do the task"
                            defaultValue={taskDetails?.taskTime}
                            type="number"
                            name="taskTime"
                            id="taskTime"
                            className="w-[364px] bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="taskDeadline"
                            className="text-[16px] text-[#3F3F3F] font-medium"
                        >
                            Deadline
                        </label>
                        <input
                            placeholder="month/date/year"
                            defaultValue={taskDetails?.taskDeadline}
                            type="datetime-local"
                            name="taskDeadline"
                            id="taskDeadline"
                            className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="participantLimit"
                            className="text-[16px] text-[#3F3F3F] font-medium"
                        >
                            Limit
                        </label>
                        <input
                            placeholder="0"
                            defaultValue={taskDetails?.participantLimit}
                            type="number"
                            name="participantLimit"
                            id="participantLimit"
                            className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="flex gap-2 my-5 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
                >
                    Edit Task <img src={roundtask} alt="" />
                </button>
            </form>

        </>
    );
};

export default AdminEditTaskDetails;
