import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { FaMagnifyingGlass } from "react-icons/fa6";
import backgroundImg from "../../../../assets/Dashboard/UserDashboard/background.jpg";
import overlay1 from "../../../../assets/Dashboard/UserDashboard/overlay1.png";
import overlay2 from "../../../../assets/Dashboard/UserDashboard/overlay2.jpg";
import bitmap from "../../../../assets/Dashboard/UserDashboard/Bitmap.png";
import rectangle from "../../../../assets/Dashboard/UserDashboard/Rectangle 110.svg";
import ribbon from "../../../../assets/Dashboard/UserDashboard/ribbon.svg";
import gold from "../../../../assets/Dashboard/UserDashboard/gold.png";
import silver from "../../../../assets/Dashboard/UserDashboard/silver.png";
import bronze from "../../../../assets/Dashboard/UserDashboard/bronze.png";
import trophy from "../../../../assets/Dashboard/UserDashboard/noto_trophy.svg";
import axios from "axios";
const UserDashboardLeaderboard = () => {
  const { user, userInfo } = useContext(AuthContext);
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
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_SERVER_API
        }/api/v1/taskSubmissions/leaderBoard`
      )
      .then((taskSubmissions) => {
        setLeaderBoardData(taskSubmissions?.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(leaderBoardData);

  return (
    <div className="mt-10">
      <div className="w-11/12 mx-auto flex gap-10">
        <div>
          <h1 className="font-bold text-[30px]">Hello {userInfo?.firstName}</h1>
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
      <p className="w-full border-b border-[#CACACA]"></p>

      <div className="w-11/12 mx-auto">
        <h1 className="mt-8 text-2xl font-bold">Weekly scoreboard</h1>
        {/* leaderboard */}
        <div className="h-[907px] bg-contain bg-[#002642] rounded-2xl w-full bg-no-repeat my-5  bg-center">
          <div className="w-full flex justify-center relative">
            <div
              style={{
                borderRadius: "718.084px",
                background:
                  "linear-gradient(221deg, #002E50 15.94%, #052135 81.53%)",
                boxShadow:
                  "2.156px 6.469px 25.877px 0px rgba(255, 255, 255, 0.15) inset",
              }}
              className="w-[718px] h-[718px] mb-[-270px] z-20"
            >
              <div className="flex justify-center gap-3 mt-[80px]">
                <div className="mt-[50px] grid justify-items-center">
                  <div className="w-[69px] h-[69px] bg-[#B8F041] rounded-full pt-[11.5px] pr-[11.377px] pb-[11.502px] pl-[16.101px]">
                    <img src={bitmap} alt="" />
                  </div>
                  <p className="text-white text-[20px] font-bold">
                    {leaderBoardData && `${leaderBoardData[1]?.firstName}`}
                  </p>
                  <p className="mb-2 text-[19px] font-medium bg-[#FF557A] min-w-[100px] text-center py-[8.626px] rounded-3xl px-[28.443px]">
                    {leaderBoardData && `${leaderBoardData[1]?.hours}`} hrs
                  </p>
                  <img src={silver} alt="" />
                </div>
                <div className="mb-20 grid items-center justify-items-center">
                  <div className="w-[69px] h-[69px] bg-[#B8F041] rounded-full pt-[11.5px] pr-[11.377px] pb-[11.502px] pl-[16.101px]">
                    <img src={bitmap} alt="" />
                  </div>
                  <p className="text-white text-[20px] font-bold">
                    {leaderBoardData && `${leaderBoardData[0]?.firstName}`}
                  </p>
                  <p className="mb-2 text-[19px] font-medium bg-[#FF557A] min-w-[100px] text-center py-[8.626px] rounded-3xl px-[28.443px]">
                    {leaderBoardData && `${leaderBoardData[0]?.hours}`} hrs
                  </p>
                  <img src={gold} alt="" />
                </div>
                <div className="mt-[50px] grid items-center justify-items-center">
                  <div className="w-[69px] h-[69px] bg-[#B8F041] rounded-full pt-[11.5px] pr-[11.377px] pb-[11.502px] pl-[16.101px]">
                    <img src={bitmap} alt="" />
                  </div>
                  <p className="text-white text-[20px] font-bold">
                    {leaderBoardData && `${leaderBoardData[2]?.firstName}`}
                  </p>
                  <p className="mb-2 text-[19px] font-medium bg-[#FF557A] min-w-[100px] text-center py-[8.626px] rounded-3xl px-[28.443px]">
                    {leaderBoardData && `${leaderBoardData[2]?.hours}`} hrs
                  </p>
                  <img src={bronze} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-1/2 bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${overlay1})`, zIndex: 20 }}
          >
            <div className="w-11/12 mx-auto grid grid-cols-2 pt-12 gap-5">
              {leaderBoardData?.map((itemData, index) => {
                if (index > 2)
                  return (
                    <div
                      className={`${
                        itemData?.email === user?.email
                          ? "text-white bg-[#4656B7]"
                          : "bg-[#FFF]"
                      } text-[18px] font-medium flex justify-evenly items-center rounded-2xl py-[16.157px] px-[24.235px]`}
                    >
                      <p>{index + 1}.</p>
                      <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                        <img
                          className="w-[29px] h-[37px]"
                          src={bitmap}
                          alt=""
                        />
                      </div>
                      <p>{itemData?.firstName}</p>
                      <p>{itemData?.hours} hrs</p>
                      <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                        <img src={trophy} alt="" />
                      </div>
                    </div>
                  );
              })}
              {/* <div className="text-white text-[18px] font-medium flex justify-evenly bg-[#4656B7] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>4.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div>
              <div className="text-[18px] font-medium flex justify-evenly bg-[#FFF] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>5.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div>
              <div className="text-[18px] font-medium flex justify-evenly bg-[#FFF] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>6.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div>
              <div className="text-[18px] font-medium flex justify-evenly bg-[#FFF] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>7.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div>
              <div className="text-[18px] font-medium flex justify-evenly bg-[#FFF] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>8.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div>
              <div className="text-[18px] font-medium flex justify-evenly bg-[#FFF] items-center rounded-2xl py-[16.157px] px-[24.235px]">
                <p>9.</p>
                <div className="bg-[#B8F041] rounded-full py-[3.5px] px-[7.901px] ">
                  <img className="w-[29px] h-[37px]" src={bitmap} alt="" />
                </div>
                <p>Anjali</p>
                <p>4 hrs 12 min</p>
                <div className="bg-[#FF557A] rounded-full py-[8.886px] px-[17.336px] ">
                  <img src={trophy} alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLeaderboard;
