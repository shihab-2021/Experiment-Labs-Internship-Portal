

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import image1 from "../../../assets/UpdatedHome/image 1.png";
import image2 from "../../../assets/UpdatedHome/image 2.png";

import image4 from "../../../assets/UpdatedHome/image 4.png";
import image6 from "../../../assets/UpdatedHome/image 6.png";
import image7 from "../../../assets/UpdatedHome/image 7.png";
import image8 from "../../../assets/UpdatedHome/image 8.png";
import image9 from "../../../assets/UpdatedHome/image 9.png";
import image10 from "../../../assets/UpdatedHome/image 10.png";
import image11 from "../../../assets/UpdatedHome/image 11.png"
import { Autoplay, FreeMode } from 'swiper/modules';

const Community = () => {
    const swiperOptions = {

        speed: 5000,
        loop: true,
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
            },
        },
        spaceBetween: 20,
        freeMode: true,
        autoplay: {
            delay: 1, // Set the delay between slides in milliseconds
            disableOnInteraction: false, // Allow autoplay to continue even on user interaction
        },
        modules: [Autoplay, FreeMode],
    };

    const sliderElement = [

        { img: image1 },
        { img: image2 },
        { img: image4 },
        { img: image6 },
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
    ];
    return (
        <div className="bg-[#F0F5FF] md:py-2 mt-16 md:mt-[80px]">
            <div className="w-11/12 mx-auto ">
                <div className=' flex items-center h-[80px] md:h-[90px] gap-2'>
                    <h2 className='text-center text-[14px] md:text-[16px] font-bold'>Internships with <span className="text-[#4250AC] text-[17px] md:text-[20px]">Dream companies.</span></h2>
                    <Swiper {...swiperOptions}>
                        {sliderElement.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-flow-row items-center">
                                    <img className="h-[50px]  md:h-[60px]" src={item.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Community;