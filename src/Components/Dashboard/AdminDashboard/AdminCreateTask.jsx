import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inputImg from "../../../assets/Shared/input.svg"
import { FaArrowRight } from "react-icons/fa";
const AdminCreateTask = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page,setPage] = useState("1");
  const handleImageChange = (event) => {
    // Get the selected image from the input
    const file = event.target.files[0];

    // Do something with the selected image, e.g., set it in state
    setSelectedImage(file);
  };
  
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
      page === "2" ?  <div className="w-11/12 mx-auto mt-14">
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
      <form>
      <h1 className="text-[18px] font-medium tracking-wide text-center mt-[45px]">Upload Company image</h1>
      <div className="grid justify-center ">
        <div className="border border-[#4555BA] w-[242px] h-[114px]">
        <img src={inputImg} className="" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
      <label htmlFor="companyName" className="text-[17px] font-medium">Company name</label>
      <input placeholder="write company name" type="text" name="companyName" id="companyName" className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"/>
      </div>
      <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="aboutCompany" className="text-[17px] font-medium">Write about company</label>
      <input maxLength={200} placeholder="ex,write about company what company does" type="text" name="aboutCompany" id="aboutCompany" className="text-start bg-[#EEF0FF] px-[10px] rounded-md shadow h-[100px]"/>
      </div>
      <p className="text-end text-[#4555BA] text-[15px] font-medium">words limit/200</p>
      <button onSelect={() => setPage("2")} className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-lg">next <FaArrowRight></FaArrowRight></button>
      </form>
    </div> : <div>
      <p>Second Page</p>
    </div>
    }
    </>
  );
};

export default AdminCreateTask;