import React from "react";
import logo from "../../../assets/UpdatedHome/logo.png"


const FooterHome = () => {
  return (
    <div className="bg-[#4250AC] mt-[90px] pt-3 ">
      <div className="mt-2 mx-[300px]">
        <div className="flex justify-between">
        <h1 className="text-[#fff] text-2xl font-bold">Further Information</h1>
          <div className="flex items-center gap-2">
            <img src={logo} alt="icon" />
            <h1 className="text-base font-bold text-[#fff]">Experiment labs</h1>
          </div>
        </div>
       
        <ul className="mt-[39px]">
          <li className="flex items-center gap-3  text-xl font-normal text-[#fff]"><p className="bg-[#fff] h-[15px] w-[15px] rounded-full"></p> Contact us</li>
          <li className="mt-5 flex items-center gap-3  text-xl font-normal text-[#fff]"><p className="bg-[#fff] h-[15px] w-[15px] rounded-full"></p> Term and Condition</li>
          <li className="mt-5 flex items-center gap-3  text-xl font-normal text-[#fff]"><p className="bg-[#fff] h-[15px] w-[15px] rounded-full"></p>Cookie and privacy policy</li>
          <li className="mt-5 flex items-center gap-3  text-xl font-normal text-[#fff]"><p className="bg-[#fff] h-[15px] w-[15px] rounded-full"></p>Refund policy</li>

        </ul>
      </div>
      <div className="text-center text-xl font-normal text-[#fff] mt-16 pb-3">
        <p>© 2023 Experiment Labs. All rights reserved.</p>
      </div>

    </div>
  );
};

export default FooterHome;


