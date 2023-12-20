

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
import { Autoplay, FreeMode } from 'swiper/modules';

const Community = () => {
    const swiperOptions = {

        speed: 5000,
        loop: true,
        slidesPerView: 4,
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
    ];
    return (
        <div className="w-11/12 mx-auto">
            <div className='mt-16 md:mt-[80px] flex items-center h-[90px]'>
                <h2 className='text-center text-[16px] font-bold'>Internships with <span className="text-[#4250AC] text-[20px]">Dream companies.</span></h2>
                <Swiper {...swiperOptions}>
                    {sliderElement.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-flow-row">
                                <img src={item.img} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Community;