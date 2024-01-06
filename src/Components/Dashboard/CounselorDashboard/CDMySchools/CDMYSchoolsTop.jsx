import React, { useContext, useEffect, useState } from "react";
import schoolImg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 240.svg";
import magicpin from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 241.svg";
import Mimg from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 242.svg";
import swiggy from "../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 243.svg";
import { PieChart } from "@mui/x-charts/PieChart";
import Person from "../../../../assets/Home/Person.png";
import { Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../../Shared/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider";
const CDMySchoolsDashboardTop = () => {
  const {userInfo} = useContext(AuthContext)
  const [schoolDetails, setSchoolDetails] = useState([]);
  useEffect(() => {
    Loading();
    const counsellorId = userInfo?.organizations?.[0]?.counsellorId;
  
    if (counsellorId) {
      axios
        .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/getSchoolsWithTasksAndOrganizations/counsellorId/${counsellorId}`)
        .then((data) => {
          setSchoolDetails(data?.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          // Close the loading spinner when the data fetching is complete
          // setLoading(false);
          Loading().close();
        });
    } else {
      // Handle the case when userInfo or its properties are undefined
      console.error("userInfo or its properties are undefined");
      Loading().close();
    }
  }, [userInfo?.organizations?.[0]?.counsellorId]);
  
  
  console.log(schoolDetails);
  
  const getInitials = () => {
    const firstNameInitial =
      userInfo?.firstName?.charAt(0)?.toUpperCase() || "";
    const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || "";
    return `${firstNameInitial}${lastNameInitial}`;
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const getRandomColorStudents = (index) => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Generate a random background color if it hasn't been generated yet
    if (!backgroundColor) {
      setBackgroundColor(getRandomColor());
    }

    // Your existing useEffect logic...
  }, [backgroundColor]);

  const data1 = [
    { label: "Inactive Companies", value: 3, color: "#DCEFFF" },
    { label: "Active Companies", value: 30, color: "#0A98EA" },
  ];

  const data2 = [
    { label: "Inactive Students", value: 50, color: "#DCEFFF" },
    { label: "Active Students", value: 500, color: "#8064F0" },
  ];
  return (
    <div className="flex justify-between gap-5 items-center">
      <div className="overflow-x-auto xl:w-8/12 2xl:w-3/5 mx-auto h-[533px] border-[#E8E8E8] border-2 shadow-sm rounded-md my-8">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-[#F6F7FF] text-[17px] font-medium rounded mt-4">
            <tr className="text-left">
              <th className="p-2">School Names</th>
              <th className="p-2">Tasks</th>
              <th className="p-2">Company</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              schoolDetails && schoolDetails?.map((school) => (
                <tr className="border border-[#E2E2E2] ">
                  <td className="px-2 flex items-center gap-2 text-[15px] font-medium py-2 ">
                    <img className="w-[56px] h-[56px] rounded-full" src={school?.school?.schoolLogo} alt="SchoolLogo" />
                    <div className="grid items-center">
                      <p className="text-[18px] font-medium">{school?.school?.schoolName}</p>
                      {school?.students && school?.students?.length > 0 ? (
                      <AvatarGroup
                        className="grid justify-end mt-[14px]"
                        // max={16}
                        total={
                          school?.students ? school?.students?.length : 0
                        }
                      >
                        {school?.students?.slice(0, 3)?.map((user, index) => (
                          <Avatar
                            key={index}
                            className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                            style={{ backgroundColor: getRandomColorStudents(index) }}
                            alt="Participant"
                          >
                            {user?.firstName?.charAt(0)?.toUpperCase()}
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    ) : (
                      ""
                    )}
                    
                    </div>
                  </td>
                  <td className="px-2 text-[18px] font-semibold tracking-wider">
                    <p>{school?.tasks?.length || 0}</p>
                  </td>
                  <td className="px-2">
                  {school?.organizations && school?.organizations?.length > 0 ? (
                      <AvatarGroup
                        className="grid justify-end mt-[14px]"
                       
                        total={
                          school?.organizations ? school?.organizations?.length : 0
                        }
                      >
                        {school?.organizations?.slice(0, 3)?.map((user, index) => (
                          
                          <Avatar
                            key={index}
                            className="rounded-full w-[35px] h-[35px] flex items-center text-red-50 justify-center"
                            style={{ backgroundColor: getRandomColorStudents(index) }}
                            alt="Participant"
                          >
                           <img className="w-[56px]  rounded-full " src={user?.orgLogo} alt="icon"/>
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    ) : (
                      ""
                    )}
                 
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
       {/*  <div className="text-center my-4 text-[18px] text-[#797979] font-semibold tracking-wide">
          <button>See all</button>
        </div> */}
        {/* <Pagination className="grid justify-center mt-10" count={2} color="primary" /> */}
      </div>
      <div className="border-[#EEE] border-2 shadow-sm h-[522px] rounded-md">
        <div className="grid items-center mt-24 align-middle justify-center justify-items-center">
          <PieChart
            series={[
              {
                innerRadius: 70,
                outerRadius: 80,
                data: data1,
              },
              {
                innerRadius: 100,
                outerRadius: 120,
                data: data2,
              },
            ]}
            width={522}
            height={300}
            slotProps={{
              legend: { hidden: true },
            }}
          />
          <div>
            <div className="flex gap-2">
              <p className={`w-[31.5px] h-[21px] bg-[${data2[1].color}]`}></p>
              <p className="text-[16px] font-medium tracking-wide">
                {data2[1]?.label} {data2[1]?.value}
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              <p className={`w-[31.5px] h-[21px] bg-[${data1[1].color}]`}></p>
              <p className="text-[16px] font-medium tracking-wide">
                {data1[1]?.label} {data1[1]?.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDMySchoolsDashboardTop;
