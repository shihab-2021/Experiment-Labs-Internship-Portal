import React from "react";
import CDMySchoolsDashboardTop from "./CDMYSchoolsTop";
import CDMySchoolsDashboardMiddle from "./CDMySchoolsMiddle";
import CDMySchoolsDashboardBottom from "./CDMySchoolsBottom";
import Profile from "../../SuperAdminDashboard/SuperAdminDashboardMain/Profile";

const CDMySchoolsMain = () => {
  return (
    <div>
      <div className="py-10 flex justify-between pr-5">
        <div>
          <h1 className="text-[#3E4DAC] text-xl font-semibold tracking-[2.4px] max-w-[140px] mb-4 pl-4">
            School Dashboard
          </h1>
          <div className="pl-4 pt-4">
            <div className="flex gap-5">
              <div className="justify-center items-stretch shadow-sm bg-indigo-800 flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                  <div className="text-white text-sm font-medium tracking-widest">
                    Total Schools
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                  10
                </div>
              </div>
              <div className="justify-center items-stretch shadow-sm bg-[#8064F0] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                  <div className="text-white text-sm font-medium tracking-widest">
                    Total Students
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                  500
                </div>
              </div>
              <div className="justify-center items-stretch shadow-sm bg-[#0A98EA] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                  <div className="text-white text-sm font-medium tracking-widest">
                    Companies
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                  30
                </div>
              </div>
              <div className="justify-center items-stretch shadow-sm bg-[#6278FF] flex flex-col px-2 rounded-md py-4">
                <div className="justify-between items-stretch flex gap-5">
                  <div className="text-white text-sm font-medium tracking-widest">
                    Total Tasks
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db26dcaf06bcfb06dcf05364f8b5adebd0dae4e7fd89ad91201a634754a6cda5?"
                    className="aspect-[0.94] object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="text-white text-3xl font-bold tracking-[2.96px] whitespace-nowrap mt-3">
                  100
                </div>
              </div>
            </div>
          </div>
        </div>
        <Profile />
      </div>
      <CDMySchoolsDashboardTop />
      <CDMySchoolsDashboardMiddle />
      <CDMySchoolsDashboardBottom />
    </div>
  );
};

export default CDMySchoolsMain;
