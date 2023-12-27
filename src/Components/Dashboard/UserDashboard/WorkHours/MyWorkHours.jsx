import React, { useContext, useEffect, useState } from "react";
import clock from "../../../../assets/Dashboard/StudentDashboard/clock.svg"
import magicPin from "../../../../assets/Dashboard/StudentDashboard/magicPin.svg"
import Starbucks from "../../../../assets/Dashboard/StudentDashboard/Starbucks.svg"
import Swiggy from "../../../../assets/Dashboard/StudentDashboard/Swiggy.svg"
import { BsPersonCircle } from "react-icons/bs";
import Graph from "./Graph";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import axios from "axios";


const MyWorkHours = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const data = {
        myWorkHoursData: [
            {
                logo: magicPin,
                company: "Magic pin",
                task: "UX and UI Designing task",
                duration: "4h 00m"
            },
            {
                logo: magicPin,
                company: "Magic pin",
                task: "UX and UI Designing task",
                duration: "4h 00m"
            },
            {
                logo: Starbucks,
                company: "Starbucks",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Starbucks,
                company: "Starbucks",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Swiggy,
                company: "Swiggy",
                task: "Marketing task",
                duration: "4h 00m"
            },
            {
                logo: Swiggy,
                company: "Swiggy",
                task: "Marketing task",
                duration: "4h 00m"
            },
        ]
    }



    return (
        <div>
          

            {/* graph */}
          
                    <div>
                    <Graph />
                    </div>
                
            
          

            {/* last part */}
           




        </div>
    );
};

export default MyWorkHours;
