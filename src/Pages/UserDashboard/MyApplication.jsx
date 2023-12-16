import React from "react";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import reviewIcon from "../../assets/Dashboard/AdminDashboard/reviewIcon.svg"

const MyApplication = () => {

  const data = {
    myApplicationData: [
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Processing",

      },
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Selected",

      },
      {
        company: " Magic pin",
        task: "UI AND UX",
        submittedDate: "1/feb/2022",
        hours: " 4:00",
        status: "Reject",

      },
    ]
  }


  return (
    <div>
      <DashboardLayout>
        <div className="mx-[10px]">
          <h1 className="text-[21px] font-bold mt-[95px] mb-5 ">
            My Application
          </h1>

          <div className="flex justify-between items-center w-full bg-[#E8EBFB] h-[75px] px-3">

            <div className=" text-[18px] font-bold">
              <h1 >Company</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1 >Task</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1 >Submitted on</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1 >Hours</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1 >Status</h1>
            </div>
            <div className=" text-[18px] font-bold">
              <h1 >Review</h1>
            </div>

          </div>
          {
            data.myApplicationData?.map((item) => (
              <div className="flex justify-between items-center w-full border mt-1 h-[75px] px-3">

                <div className=" text-[15px] text-[#3F3F3F] font-semibold">
                  <h1 >{item?.company}</h1>
                </div>
                <div className=" text-[15px] text-[#3F3F3F] font-semibold">
                  <h1 >{item?.task}</h1>
                </div>
                <div className=" text-[15px] text-[#3F3F3F] font-normal">
                  <h1 >{item?.submittedDate}</h1>
                </div>
                <div className=" text-[15px] font-semibold">
                  <h1 >{item?.hours} hrs </h1>
                </div>
                <div className=" text-[15px] font-semibold">
                  <h1 className={`p-2 rounded-md w-[95px] text-center ${item?.status === 'Processing' ? 'text-[#4555BA] bg-[#F1F3FF]' :
                      item?.status === 'Selected' ? 'text-[#D4A500] bg-[#FFF8E3]' :
                        item?.status === 'Reject' ? 'text-[#DD2025] bg-[#FFF0F0]' : ''
                    }`}>
                    {item?.status}
                  </h1>

                </div>
                <div className=" text-[15px] font-semibold">
                  <p>
                    <img src={reviewIcon} alt="icon" />
                  </p>
                </div>

              </div>
            ))

          }

        </div>

      </DashboardLayout>
    </div>
  );
};

export default MyApplication;
