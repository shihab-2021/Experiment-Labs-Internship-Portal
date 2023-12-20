import React from "react";
import intern1 from "../../../assets/UpdatedHome/Frame 194.png";
const RightInternship = () => {
    return (
        <div className='bg-[#D3D3D3] bg-opacity-70 my-10 h-auto md:h-[406px] w-screen'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[36px] font-bold pt-[48px]'>Find The Right Internship For You</h1>
                <p className='sm:mt-2 md:mt-[13px] text-[#505050] text-[23px]'>Apply to roles matching your skills from 500+ trending options
                </p>
                <div className='sm:mt-11 md:mt-[50px] grid justify-items-center md:flex md:justify-between pb-3'>
                <img className='' src={intern1} alt="" />
                <img className='' src={intern1} alt="" />
                <img className='' src={intern1} alt="" />
                <img className='' src={intern1} alt="" />
                </div>
            </div>
    </div>
  );
};

export default RightInternship;
