

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

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

        { img: "https://businessinspection.com.bd/wp-content/uploads/2022/01/10MIN-NEWS-FEA-1.jpg" },
        { img: "https://new-media.dhakatribune.com/en/uploads/2022/01/22/shikho-logo.jpeg" },
        { img: "https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStZZaGIyMZVdodNgNB9oUhlqtnQLWp2FnUBKe9byI4x3GLtJzRzH9kuqXHC0NE7qHbVA&usqp=CAU" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVldg16515Ds3cm2wEUBpTvwkm5tahp3D6fdYsWeHEj3eJyy9wfiCiuKdGUd3qslGw7xE&usqp=CAU" },
        { img: "https://i.ytimg.com/vi/1Xnl58WLzw8/maxresdefault.jpg" },
        { img: "https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/lvjpyc2vvwgfy11zvkt7" },
        { img: "https://media.licdn.com/dms/image/C510BAQFxP5fk_8BTPQ/company-logo_200_200/0/1577948015347?e=2147483647&v=beta&t=JqG-y6a4FAbR1_wVe5W1tgCq-GIQ9t_aPeJL7-4dUD0" },
    ];
    return (
        <div className="w-11/12 mx-auto">
            <div className='mt-16 md:mt-36 flex items-center h-[90px]'>
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