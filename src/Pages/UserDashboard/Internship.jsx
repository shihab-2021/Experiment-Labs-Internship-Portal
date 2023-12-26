import React, { useContext, useEffect, useState } from "react";
import InternshipTaskCard from "../../Components/Dashboard/UserDashboard/Internship/InternshipTaskCard";
import DashboardLayout from "../../Components/Dashboard/Shared/DashboardLayout";
import { AuthContext } from "../../Contexts/AuthProvider";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Helmet } from "react-helmet";

const Internship = () => {
  const { userInfo } = useContext(AuthContext);
  const [adminApprovedTasks, setAdminApprovedTasks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/tasks/taskStatus/Processing`
      )
      .then((tasks) => {
        setAdminApprovedTasks(tasks?.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Internship</title>
      </Helmet>
      <DashboardLayout>
        <div className="px-4 pt-10">
          <div className="relative">
            <CiSearch className="w-[24px] h-[24px] absolute z-10 text-[#5E5E5E] top-2 left-2 " />
            <input
              className="relative py-2 pl-[38px] pr-2 border rounded-[6px] border-[#E3E3E3] w-full font-raleway "
              type="text"
              placeholder="Search Internship"
            />
          </div>
          <div className="inline-flex w-full mt-[18px] flex-col items-center gap-[27px] relative">
            <h1 className="relative w-fit font-raleway font-bold text-black text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
              Explore Internships
            </h1>
            <div className="items-start gap-[22px] inline-flex relative flex-[0_0_auto]">
              <button className="h-[39px] items-center justify-center gap-[10px] p-[10px] bg-[#deeeff] rounded-[25px] inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit font-bold text-neutral-500 text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
                  ALL
                </p>
              </button>
              <button className="h-[39px] items-center justify-center gap-[10px] p-[10px] rounded-[25px] inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit font-bold text-neutral-500 text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
                  Design
                </p>
              </button>
              <button className="h-[39px] items-center justify-center gap-[10px] p-[10px] rounded-[25px] inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit font-bold text-neutral-500 text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
                  Marketing
                </p>
              </button>
              <button className="h-[39px] items-center justify-center gap-[10px] p-[10px] rounded-[25px] inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit font-bold text-neutral-500 text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
                  Content writer
                </p>
              </button>
              <button className="h-[39px] items-center justify-center gap-[10px] p-[10px] rounded-[25px] inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit font-bold text-neutral-500 text-[16px] tracking-[1.60px] leading-[normal] whitespace-nowrap">
                  Research
                </p>
              </button>
            </div>
          </div>
          <div className=" mt-7 ">
            <div className="flex gap-5 flex-wrap">
              {adminApprovedTasks?.map((task) => (
                <InternshipTaskCard task={task} />
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Internship;
