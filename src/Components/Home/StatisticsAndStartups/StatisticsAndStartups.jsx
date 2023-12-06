import React from "react";
import Paytm from "../../../assets/Home/Paytm.png";
import Microsoft from "../../../assets/Home/Microsoft.png";
import Netflix from "../../../assets/Home/Netflix.png";
import Apple from "../../../assets/Home/Apple.png";
import Google from "../../../assets/Home/Google.png";
import Flipkart from "../../../assets/Home/Flipkart.png";

const StatisticsAndStartups = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-[50px]">
        <div>
          <h1 className="text-[30px] font-[700] tracking-wide ">
            we have talented Students
          </h1>
          <h3 className="text-[20px] font-[500] tracking-wide ">
            Post the task and receive the best solution that matches industry
            standards.
          </h3>
        </div>
        <div className="flex justify-between items-center mt-[45px]">
          <div className="w-[215px] text-[30px] font-[700] tracking-wider text-[#3E4DAC] text-center leading-8 ">
            <h1>70k</h1>
            <h1>Companies register</h1>
          </div>
          <div className="w-[215px] text-[30px] font-[700] tracking-wider text-[#3E4DAC] text-center leading-8 ">
            <h1>60k</h1>
            <h1>Project posting</h1>
          </div>
          <div className="w-[215px] text-[30px] font-[700] tracking-wider text-[#3E4DAC] text-center leading-8 ">
            <h1>50k</h1>
            <h1>Students</h1>
          </div>
          <div className="w-[215px] text-[30px] font-[700] tracking-wider text-[#3E4DAC] text-center leading-8 ">
            <h1>40k</h1>
            <h1>Project Solution</h1>
          </div>
        </div>
      </div>
      <div className="mt-[110px]">
        <h1 className="text-[30px] font-[700] tracking-wider text-center ">
          Trusted by 100k+ Startups, SMEs, & MNCs
        </h1>
        <div className="flex justify-around my-[60px] ">
          <img className="w-fit" src={Paytm} />
          <img className="w-fit" src={Microsoft} />
          <img className="w-fit" src={Netflix} />
          <img className="w-fit" src={Apple} />
          <img className="w-fit" src={Google} />
          <img className="w-fit" src={Flipkart} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsAndStartups;
