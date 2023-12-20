import React from 'react';
import guidance from "../../../assets/UpdatedHome/guidance.png"

const Guidance = () => {
    return (
        <div
            style={{
                borderRadius: "12px",
                border: "1px solid #D9D9D9",
                background: "linear-gradient(91deg, #4A56A9 11.84%, #4250AC 78.46%)"
            }}
            className='w-11/12 mx-auto flex items-center justify-between mt-[120px] mb-[50px] ps-[40px] pt-[40px]'>
            <div>
                <p className='bg-[#C8CFFC] h-[200px] w-[200px] rounded-full'></p>
                <img className='mt-[-225px]' src={guidance} alt='image' />
            </div>
            <div className='me-[250px] mb-[40px]'>
                <p className='text-[#E9E9E9] text-[27px] font-normal mt-[]'>NEED Guidance ?</p>
                <p className='text-[#E9E9E9] text-[27px] font-normal mt-[6px]'>Get winning tips from top <span className='font-bold'>Mentors</span></p>
            </div>
        </div>
    );
};

export default Guidance;