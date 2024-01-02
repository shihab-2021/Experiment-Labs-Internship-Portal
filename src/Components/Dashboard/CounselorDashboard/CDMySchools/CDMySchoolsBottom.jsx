import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import group from "../../../../assets/Dashboard/SuperAdminDashboard/Group 2275.svg";

const CDMySchoolsDashboardBottom = () => {
  const uData = [20, 40, 20, 100, 60, 80, 20];
  const xLabels = ["", "Jan", "Feb", "Mar", "Apr", "May", "June"];
  return (
    <div className="w-[100%] h-[533px] border-[#E8E8E8] border-2 shadow-sm rounded-md my-8">
      <div className="w-5/6 mx-auto flex justify-between items-center mt-[32px]">
        <div className="grid items-center">
          <p className="text-[#828282] text-[17.71px] font-semibold">
            School Performance
          </p>
          <p className="text-[#4F4F4F] text-[15.5px] ">Top hour schools</p>
        </div>
        <img src={group} alt="" />
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <LineChart
          series={[
            {
              data: uData,
              curve: "linear",
              label: "Top Schools",
              color: "#3E4DAC",
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ max: 120, min: 0 }]}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "bottom", horizontal: "middle" },
              padding: 0,
            },
          }}
          grid={{ x: true, y: true }}
        />
      </div>
      {/* <Pagination className="grid justify-center mt-10" count={2} color="primary" /> */}
    </div>
  );
};

export default CDMySchoolsDashboardBottom;
