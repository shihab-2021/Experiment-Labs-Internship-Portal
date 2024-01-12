import React from "react";
import TextEditor from "../../../Shared/TextEditor/TextEditor";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DialogLayout from "../../../Shared/DialogLayout";
import roundtask from "../../../../assets/Shared/roundtask.svg";
import UploadIcon from "../../../../assets/Dashboard/UserDashboard/UploadIcon.png";
import { Link } from "react-router-dom";

const TaskInformation = ({
  formatDate,
  showCategoryInput,
  setShowCategoryInput,
  categoryName,
  setCategoryName,
  categoryNameDropDown,
  setCategoryNameDropDown,
  categories,
  handleCreateTask,
  createTask,
  handleVideoDragOver,
  handleVideoDragEnter,
  handleVideoDragLeave,
  handleVideoDrop,
  handleVideoFileChange,
  aboutTask,
  setAboutTask,
  aboutOutcome,
  setAboutOutcome,
  video,
  videoFileLoading,
  category,
  setCategory,
}) => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex gap-10 justify-items-center">
        <div>
          <p className="text-[21px] font-medium tracking-wide">
            {formatDate()}
          </p>
        </div>
        <div
          style={{
            borderRadius: "14px",
            border: "1px solid #DDD",
          }}
          className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
        >
          <FaMagnifyingGlass />
          <input className="w-full" placeholder="Search"></input>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-2">
          <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">
            1
          </p>
          <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
            Company Information
          </p>
        </div>
        <p className="bg-[#4555BA] w-[50px] h-1"></p>
        <div className="flex items-center gap-2">
          <p className="bg-[#4555BA] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">
            2
          </p>
          <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
            Task Information
          </p>
        </div>
      </div>
      {/* select category dialog start */}
      <DialogLayout
        width={500}
        setOpen={setShowCategoryInput}
        open={showCategoryInput}
      >
        <div className="w-full p-4">
          <h1 className="text-xl mt-10">Please add a category</h1>
          <div className="flex flex-col gap-2 mt-4 relative">
            <label htmlFor="companyName" className="text-[17px] font-medium">
              Category Name
            </label>
            <div className="relative w-full">
              <input
                className="bg-[#EEF0FF] w-full focus:outline-none px-[10px] py-1 rounded-md shadow"
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                onFocus={() => setCategoryNameDropDown(true)}
                onBlur={() => {
                  setCategoryName(categoryName);
                  setCategoryNameDropDown(false);
                }}
                placeholder="Type organization name..."
              />
              {categoryNameDropDown && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg max-h-[130px] overflow-y-auto">
                  {categories
                    ?.filter((cat) =>
                      cat?.categoryName
                        ?.toLowerCase()
                        ?.includes(categoryName?.toLowerCase())
                    )
                    .map((cat, index) => (
                      <div
                        key={index}
                        className={` px-4 py-2 cursor-pointer hover:bg-gray-100`}
                        onMouseDown={() => {
                          setCategoryName(cat?.categoryName);
                          setCategory(cat);
                          setCategoryNameDropDown(false);
                        }}
                      >
                        {cat?.categoryName}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={async () => {
              if (categoryName === category.categoryName) {
                setShowCategoryInput(false);
                createTask();
              } else {
                axios
                  .post(
                    `${import.meta.env.VITE_APP_SERVER_API}/api/v1/categories`,
                    { categoryName: categoryName }
                  )
                  .then(async (response) => {
                    if (response?.data?.acknowledged) {
                      setShowCategoryInput(false);
                      createTask();
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }
            }}
            className=" mt-14 mb-10 px-4 py-2 bg-blue-400 text-white font-bold rounded-full"
          >
            Select Category
          </button>
        </div>
      </DialogLayout>
      {/* select category dialog end */}
      <form onSubmit={handleCreateTask} className="mt-3" autocomplete="on">
        <div className="flex flex-col gap-2">
          <label htmlFor="taskName" className="text-[17px] font-bold">
            Task name
          </label>
          <input
            placeholder="ex. Marketing task"
            type="text"
            name="taskName"
            id="taskName"
            className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="aboutTask" className="text-[17px] font-bold">
            Task Details
          </label>
          <TextEditor setValue={setAboutTask} value={aboutTask} />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="aboutOutcome" className="text-[17px] font-bold">
            Outcomes/Deliverables
          </label>
          <TextEditor setValue={setAboutOutcome} value={aboutOutcome} />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="taskLink" className="text-[17px] font-bold">
            Task Explainer Video Link
          </label>
          <div className="flex items-center">
            <input
              placeholder="Upload a video/screen-recording explaining the methodology for the task "
              type="url"
              defaultValue={video}
              name="taskLink"
              id="taskLink"
              className="bg-[#EEF0FF] px-[10px] h-9 py-1 rounded-l-md w-full shadow"
            />
            <label>
              <div
                className="h-full "
                onDragOver={handleVideoDragOver}
                onDragEnter={handleVideoDragEnter}
                onDragLeave={handleVideoDragLeave}
                onDrop={handleVideoDrop}
              >
                {videoFileLoading && (
                  <div className="border-2 rounded-r-md px-3 h-9 flex items-center justify-center">
                    <img
                      src={UploadIcon}
                      className=" animate-ping w-[30px] "
                      alt="inputImg"
                    />
                  </div>
                )}
                {!videoFileLoading && (
                  <div className="border-2 rounded-r-md px-3 h-9 flex items-center justify-center">
                    <img
                      src={UploadIcon}
                      className=" w-[30px]"
                      alt="inputImg"
                    />
                  </div>
                )}
              </div>
              <input
                className="hidden"
                type="file"
                name="file"
                placeholder="upload"
                onChange={handleVideoFileChange}
              />
            </label>
            <span className="text-[18px] font-semibold mx-5">or</span>
            <Link
              target="_blank"
              to="https://www.loom.com/"
              className="px-4 py-2 bg-blue-500 text-white w-[180px] text-center rounded-lg"
            >
              Record Video
            </Link>
          </div>
        </div>
        <label htmlFor="taskSubmissionTime" className="text-[18px] font-bold">
          Task submission time
        </label>
        <div className="flex mt-3 justify-between">
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="taskTime"
              className="text-[16px] text-[#3F3F3F] font-bold"
            >
              Man hours to complete the task
            </label>
            <input
              placeholder="In hours "
              type="number"
              name="taskTime"
              id="taskTime"
              className="w-[364px] bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="taskDeadline"
              className="text-[16px] text-[#3F3F3F] font-bold"
            >
              Deadline To Complete The Task
            </label>
            <input
              placeholder="month/date/year"
              type="datetime-local"
              name="taskDeadline"
              id="taskDeadline"
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="participantLimit"
              className="text-[16px] text-[#3F3F3F] font-bold"
            >
              Maximum Number Of Applying Candidates
            </label>
            <input
              placeholder="0"
              type="number"
              name="participantLimit"
              id="participantLimit"
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex gap-2 mt-5 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
        >
          Create Task <img src={roundtask} alt="" />
        </button>
      </form>
    </div>
  );
};

export default TaskInformation;
