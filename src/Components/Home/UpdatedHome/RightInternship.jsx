import React from 'react';
import intern1 from "../../../assets/UpdatedHome/Frame 194.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-flip';
import "swiper/swiper-bundle.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
const RightInternship = () => {
    const swiperOptions = {
        grabCursor: true,
        pagination: true,
        navigation: true,
        modules: [EffectFlip, Pagination, Navigation],
        
        breakpoints: {
            768: {
                slidesPerView: 4,
                centeredSlides: false, // Centering is handled by slidesPerView
            },
            576: {
                slidesPerView: 1,
                
                centeredSlides: true, // Center the single slide
            },
        },
    };
    return (
        <div className='bg-[#E6E9FF] my-10 h-auto md:h-[406px]'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[28px] md:text-[36px] font-bold pt-[48px]'>Find The Right Internship For You</h1>
                <p className='sm:mt-2 md:mt-[13px] text-[#505050] text-[20px] md:text-[23px]'>Apply to roles matching your skills from 500+ trending options
                </p>
                <div className='mt-5 md:mt-[50px] grid-flow-col justify-center items-center'>
                    <Swiper {...swiperOptions} className="mySwiper">
                        <SwiperSlide className="flex justify-center items-center">
                            <img src={intern1} alt="Intern Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center">
                            <img src={intern1} alt="Intern Slide 2" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center">
                            <img src={intern1} alt="Intern Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center">
                            <img src={intern1} alt="Intern Slide 2" />
                        </SwiperSlide>
                        {/* ... Add more slides ... */}
                    </Swiper>
                </div>
            </div>
    </div>
  );
};

export default RightInternship;
