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
          <div className="text-zinc-800 text-2xl font-semibold tracking-[2.4px] max-w-[140px] mb-4 pl-4">
            School Dashboard
          </div>
          <div className="flex flex-col items-stretch pl-4">
            <div className="flex gap-5">
              {/* {states?.map((state, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedSate(state)}
                  className={`text-neutral-700 text-base font-medium tracking-widest cursor-pointer relative overflow-hidden`}
                  style={{ display: "inline-block" }}
                >
                  {state}
                  {selectedSate === state && (
                    <hr className="h-1.5 bg-blue-800 mt-1" />
                  )}
                </div>
              ))} */}
            </div>
          </div>
          <div className="pl-4 pt-4">
            {/* {selectedSate === "Companies task" && <CTList />}
            {selectedSate === "Students Submission" && <SSList />}
            {selectedSate === "School dashboard" && <SDList />} */}
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
