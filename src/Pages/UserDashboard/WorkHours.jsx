import React, { useState } from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import { FaAngleRight, FaMagnifyingGlass } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import MyWorkHours from "../../Components/Dashboard/UserDashboard/WorkHours/MyWorkHours";

const WorkHours = () => {
  // Function to format the date as day/month/year
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

  const [selectedButton, setSelectedButton] = useState('MyWorkHours');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };


  return (
    <div>
      <DashboardLayout>
        <div >
          {/*top section*/}
          <div className="flex justify-between mt-[20px] mx-[18px] ">
            <div>
              <div className="flex gap-10">
                <div>
                  <h1 className="font-bold text-[30px]">Hello Aman</h1>
                  <p className="text-[21px] font-medium tracking-wide">
                    {formatDate()}
                  </p>
                </div>
                <div
                  style={{
                    borderRadius: "14px",
                    border: "1px solid #DDD",
                  }}
                  className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[440px] h-[48px] "
                >
                  <FaMagnifyingGlass />
                  <input className="w-[90%]" placeholder="Search"></input>
                </div>
              </div>
            </div>


          </div>
        <p className="border-b border-[#CACACA] "></p>

          <div className="mt-9 flex gap-6 mx-[18px]">
            <button
              className={`text-base font-semibold px-[47px] py-[23px] ${selectedButton === 'MyWorkHours' ? 'bg-[#3E4DAC] text-[#fff]' : 'bg-none border-solid border-[1px] border-black text-[#1E1E1E]'
                }`}
              style={{
                borderRadius: '16px',
                border: '1px solid #000'
              }}
              onClick={() => handleButtonClick('MyWorkHours')}
            >
              My work hours
            </button>
            <button
              className={`text-base font-semibold px-[47px] py-[23px] ${selectedButton === 'helpSupport' ? 'bg-[#3E4DAC] text-[#fff]' : 'bg-none border-solid border-[1px] border-black text-[#1E1E1E]'
                }`}
              style={{
                borderRadius: '16px',
                border: '1px solid #000'
              }}
              onClick={() => handleButtonClick('helpSupport')}
            >
              Help & support
            </button>
          </div>

          <div className="mx-[18px] mt-[26px]">
            {selectedButton === 'MyWorkHours' && (
             <MyWorkHours/>
            )}

            {selectedButton === 'helpSupport' && (
              <div>
                <p>help</p>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default WorkHours;
