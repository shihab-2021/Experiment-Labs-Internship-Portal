import React from 'react';
import topBanner from "../../../assets/UpdatedHome/topBanner.png";
import buildingSvg from "../../../assets/UpdatedHome/ep_office-building.svg";
import taskSvg from "../../../assets/UpdatedHome/material-symbols-light_task-outline.svg";
import bag from "../../../assets/UpdatedHome/uit_bag.png";
const TopBanner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='mt-[160px] w-1/2'>
                    <h1 className='text-[45px] font-bold leading-10'>Connecting talent with recruiters.</h1>
                    <p className='mt-[17px] text-[#797979] text-[19px] leading-6 font-bold'>Explore opportunities from across the globe to learn, showcase skills, gain CV points.</p>
                    <button className='text-white bg-[#4250AC] py-[13px] px-[28px] text-[18px] mt-[18px] rounded-3xl'>Apply now</button>
                </div>
                <div className='flex '>
                    <div className='ml-28 border border-[#EFEFEF] flex items-center rounded-md gap-2 py-[5px] px-[18px] w-[135px] h-[40px] mt-20'>
                        <img src={taskSvg} alt="" />
                        <p className='text-[12px]'>Tasks</p>
                    </div>
                    <img className='mt-[82px]' src={topBanner} alt="" />
                    <div>
                    <div className='border border-[#EFEFEF] flex items-center rounded-md gap-2 py-[5px] px-[18px] w-[135px] h-[40px] mt-20'>
                        <img src={bag} alt="" />
                        <p className='text-[12px]'>Intenship</p>
                    </div><div className='border border-[#EFEFEF] flex items-center rounded-md gap-2 py-[5px] px-[18px] w-[135px] h-[40px] mt-36'>
                        <img src={buildingSvg} alt="" />
                        <p className='text-[12px]'>Companies</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBanner;