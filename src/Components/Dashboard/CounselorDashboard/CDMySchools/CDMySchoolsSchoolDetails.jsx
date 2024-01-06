import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import image1 from "../../../../assets/UpdatedHome/image 1.png"
import edit from "../../../../assets/Dashboard/CounselorsDashboard/edit.svg"
import arrorRight from "../../../../assets/Dashboard/CounselorsDashboard/arrorRight.svg"
import arrowLeft from "../../../../assets/Dashboard/CounselorsDashboard/arrowLeft.svg"
import axios from "axios";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const CDMySchoolsSchoolDetails = () => {
    const { userInfo } = useContext(AuthContext)

    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 3));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex < images.length - 3 ? prevIndex + 1 : 0));
    };


    const images = [
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },
        { img: image1 },

    ];

    const [schoolDetails, setSchoolDetails] = useState([]);
    useEffect(() => {
        Loading();
        const counsellorId = userInfo?.organizations?.[0]?.counsellorId;

        if (counsellorId) {
            axios
                .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/getSchoolsWithTasksAndOrganizations/counsellorId/${counsellorId}`)
                .then((data) => {
                    setSchoolDetails(data?.data);
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    // Close the loading spinner when the data fetching is complete
                    // setLoading(false);
                    Loading().close();
                });
        } else {
            // Handle the case when userInfo or its properties are undefined
            console.error("userInfo or its properties are undefined");
            Loading().close();
        }
    }, [userInfo?.organizations?.[0]?.counsellorId]);

    console.log(schoolDetails)

    return (
        <div>
            <div className="App   flex items-center justify-center">

                <div className="swiper-container flex  justify-between gap-2">
                    <button className="btn" onClick={handlePrev}>
                        <img src={arrowLeft} alt=""/>
                    </button>
                    {schoolDetails && schoolDetails?.slice(startIndex, startIndex + 3).map((school, index) => (
                        <div
                            className="flex justify-between w-[300px] py-4 px-2"
                            style={{
                                borderRadius: "5.437px",
                                border: "0.906px solid #D9D9D9",
                                background: "#FFF",
                            }}
                        >
                            <div>
                                <img className="w-[84px] h-[84px] rounded-full" src={school?.school?.schoolLogo} alt="img" />
                            </div>
                            <div className="flex flex-col justify-between gap-5 w-[50%]">
                                <h1 className="text-[17px] font-bold">{school?.school?.schoolName}</h1>
                                <div>
                                    <p className="text-[#8064F0] font-medium">Students</p>
                                    <p>{school?.students?.length}</p>
                                </div>
                            </div>
                            <div>
                                <img className="w-6 h-6" src={edit} alt="img" />
                            </div>


                        </div>

                        // <img key={index} src={url} alt={`Slide ${startIndex + index + 1}`} className="max-w-full rounded-md mx-4" />
                    ))}
                    <button className="btn" onClick={handleNext}>
                        <img src={arrorRight}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CDMySchoolsSchoolDetails;
