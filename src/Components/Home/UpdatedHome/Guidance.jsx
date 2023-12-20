import React from 'react';
import guidance from "../../../assets/UpdatedHome/guidance.png"
import guidancess from "../../../assets/UpdatedHome/guidancess.png"

const Guidance = () => {
    return (
        <div
            style={{
                borderRadius: "12px",
                border: "1px solid #D9D9D9",
                background: "linear-gradient(91deg, #4A56A9 11.84%, #4250AC 78.46%)"
            }}
            className=' lg:flex items-center justify-between mt-[120px] mb-[50px] lg:ps-[40px] pt-[40px]'>
            <div className=''>
                <div className='lg:ms-10 flex items-center justify-center'>
                    <img src={guidancess} alt='image'/>
                  {/*   <p className='bg-[#C8CFFC] h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] rounded-full'></p>
                    <img className='lg:mt-[-225px] mt-[-195px]' src={guidance} alt='image' /> */}
                </div>

            </div>

            <div className='lg:me-[100px] mb-[40px] mt-5 lg:mt-0'>
                <p className='text-[#E9E9E9] text-[25px] lg:text-[40px] font-normal text-center mt-[]'>NEED Guidance ?</p>
                <p className='text-[#E9E9E9] text-[25px] lg:text-[40px] text-center font-normal mt-[6px]'>Get winning tips from top <span className='font-bold'>Mentors</span></p>
            </div>
        </div>
    );
};

export default Guidance;