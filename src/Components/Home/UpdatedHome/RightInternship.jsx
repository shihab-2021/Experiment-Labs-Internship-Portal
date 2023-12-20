import React from 'react';
import intern1 from "../../../assets/UpdatedHome/Frame 194.png"
const RightInternship = () => {
    return (
        <div className='bg-[#D3D3D3] my-10 h-[406px]'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[36px] font-bold pt-[48px]'>Find The Right Internship For You</h1>
                <p className='mt-[13px] text-[#505050] text-[23px]'>Apply to roles matching your skills from 500+ trending options
                </p>
                <div className='mt-[50px] flex justify-around'>
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