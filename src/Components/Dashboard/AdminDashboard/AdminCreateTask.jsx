import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inputImg from "../../../assets/Shared/input.svg"
import roundtask from "../../../assets/Shared/roundtask.svg"
import { FaArrowRight } from "react-icons/fa";
const AdminCreateTask = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const handleImageChange = (event) => {
    // Get the selected image from the input
    const file = event.target.files[0];

    // Do something with the selected image, e.g., set it in state
    setSelectedImage(file);
  };
  const handleNext = (event) => {
    event.preventDefault();
    setPage(2);
  }
  const formatDate = () => {
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

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()]; // Get month name
    const year = currentDate.getFullYear();
    return `${day}/ ${month}/ ${year}`;
  };
  return (
    <>
      {
        page === 1 ? <div className="w-11/12 mx-auto mt-10">
          <div className="flex gap-10 justify-items-center">
            <div>
              <p className="text-[21px] font-medium tracking-wide">{formatDate()}</p>
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
              <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">1</p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">Company Information</p>
            </div>
            <p className="bg-[#D9D9D9] w-[50px] h-1"></p>
            <div className="flex items-center gap-2">
              <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">2</p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">Task Information</p>
            </div>
          </div>
          <form>
            <h1 className="text-[18px] font-medium tracking-wide text-center mt-[45px]">Upload Company image</h1>
            <div className="grid justify-center ">
              <div className="border border-[#4555BA] w-[242px] h-[114px]">
                <img src={inputImg} className="" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName" className="text-[17px] font-medium">Company name</label>
              <input placeholder="write company name" type="text" name="companyName" id="companyName" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutCompany" className="text-[17px] font-medium">Write about company</label>
              <textarea maxLength={200} placeholder="ex,write about company what company does" type="text" name="aboutCompany" id="aboutCompany" className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]" />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">words limit/200</p>
            <button onClick={handleNext} className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl">next <FaArrowRight></FaArrowRight></button>
          </form>
        </div> : <div className="w-11/12 mx-auto mt-10">
          <div className="flex gap-10 justify-items-center">
            <div>
              <p className="text-[21px] font-medium tracking-wide">{formatDate()}</p>
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
              <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">1</p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">Company Information</p>
            </div>
            <p className="bg-[#4555BA] w-[50px] h-1"></p>
            <div className="flex items-center gap-2">
              <p className="bg-[#4555BA] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">2</p>
              <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">Task Information</p>
            </div>
          </div>
          <form className="mt-3" autocomplete="on">
            <div className="flex flex-col gap-2">
              <label htmlFor="taskName" className="text-[17px] font-medium">Task name</label>
              <input placeholder="ex. Marketing task" type="text" name="taskName" id="taskName" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutTask" className="text-[17px] font-medium">Write about task</label>
              <textarea maxLength={200} placeholder="Write about task what is the task" type="text" name="aboutTask" id="aboutTask" className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]" />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">words limit/200</p>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="aboutOutcome" className="text-[17px] font-medium">Write about outcome</label>
              <textarea maxLength={200} placeholder="Write about what students receive upon completing the task." type="text" name="aboutOutcome" id="aboutOutcome" className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]" />
            </div>
            <p className="text-end text-[#4555BA] text-[15px] font-medium">words limit/200</p>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="taskLink" className="text-[17px] font-medium">Task link</label>
              <input placeholder="url of your task" type="url" name="taskLink" id="taskLink" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            <label htmlFor="taskSubmissionTime" className="text-[18px] font-medium">Task submission time</label>
            <div className="flex mt-3 justify-between">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="taskTime" className="text-[16px] text-[#3F3F3F] font-medium">The duration for completing the task.</label>
              <input placeholder="time to do the task" type="time" name="taskTime" id="taskTime" className="w-[364px] bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="taskDeadline" className="text-[16px] text-[#3F3F3F] font-medium">Deadline</label>
              <input placeholder="month/date/year" type="date" name="taskDeadline" id="taskDeadline" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="taskLimit" className="text-[16px] text-[#3F3F3F] font-medium">Limit</label>
              <input placeholder="0" type="number" name="taskLimit" id="taskLimit" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow" />
            </div>
            </div>
            <button onClick={handleNext} className="flex gap-2 mt-5 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl">Task Create <img src={roundtask} alt="" /></button>
          </form>
        </div>
      }
    </>
  );
};

export default AdminCreateTask;