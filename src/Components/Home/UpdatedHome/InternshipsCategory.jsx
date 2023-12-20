import React from 'react';
import xd from '../../../assets/UpdatedHome/basil_adobe-experince-design-outline.png';
import bxdata from '../../../assets/UpdatedHome/bx_data.png';
import marketing from '../../../assets/UpdatedHome/nimbus_marketing.png';
import finance from '../../../assets/UpdatedHome/material-symbols-light_finance-rounded.png';
import content from '../../../assets/UpdatedHome/material-symbols-light_content-paste.png';
const InternshipsCategory = () => {
    return (
        <div className='w-11/12 mx-auto mt-[70px]'>
            <h1 className='text-[30px] font-bold text-center'>Internships Category</h1>
            <div className='grid grid-cols-4  gap-7 mt-6 mx-auto'>
                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <img src={xd} alt="" />
                    <p className='text-[24px]'>Design</p>
                </div>

                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <img src={bxdata} alt="" />
                    <p className='text-[24px]'>Data analytics</p>
                </div>
                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <img src={marketing} alt="" />
                    <p className='text-[24px]'>Marketing</p>
                </div>
                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <img src={finance} alt="" />
                    <p className='text-[24px]'>Finance</p>
                </div>
            </div>
            <div className='flex justify-center  gap-10 mt-8'>
                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <img src={content} alt="" />
                    <p className='text-[24px]'>Content Writer</p>
                </div>
                <div className='flex items-center justify-center border border-[#D3D3D3] py-[12px] px-[58px] rounded-3xl'>
                    <p className='text-[24px] text-[#4250AC]'>Explore All</p>
                </div>
            </div>
        </div>
    );
};

export default InternshipsCategory;