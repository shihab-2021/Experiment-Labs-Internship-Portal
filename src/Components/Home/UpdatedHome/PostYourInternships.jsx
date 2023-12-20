import React from 'react';
import HomeImage from "../../../assets/UpdatedHome/HomeImage.png"

const PostYourInternships = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between'>
            <div>
                <h1 className='text-[45px] font-bold w-[50%]'>Post Your Internships</h1>
                <p className='text-xl font-medium text-[#696969] w-[90%]'>Find the right candidate from a diverse talentpool for your role.</p>
                <button
                className='text-xl font-semibold px-[30px] py-[14px] text-[#fff] mt-8'
                    style={{
                        borderRadius: "32px",
                        background: "#4250AC"
                    }}
                >Post Internship now</button>
            </div>
            <div>
                <img src={HomeImage} alt='Image' />
            </div>
        </div>
    );
};

export default PostYourInternships;