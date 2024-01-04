import React, { useContext, useEffect, useState } from 'react';
import profileImg from '../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Profile = () => {
    const { userInfo } = useContext(AuthContext);
    // console.log(userInfo)
    const getInitials = () => {
        const firstNameInitial =
            userInfo?.firstName?.charAt(0)?.toUpperCase() || "";
        const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || "";
        return `${firstNameInitial}${lastNameInitial}`;
    };
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        // Generate a random background color if it hasn't been generated yet
        if (!backgroundColor) {
            setBackgroundColor(getRandomColor());
        }
        // Your existing useEffect logic...
    }, [userInfo, backgroundColor]);
    return (
        <div className="justify-center items-center border flex flex-col w-[197px] h-[197px] px-7 rounded-xl border-solid border-neutral-200 py-2">
            <div className="aspect-[1.09] object-contain object-center w-full overflow-hidden rounded-[80%]">
                <div
                    className="w-full h-full flex items-center text-red-50 justify-center text-5xl font-bold"
                    style={{ backgroundColor }}
                >
                    {getInitials()}
                </div>
            </div>
            <div className="text-zinc-800 text-xl font-medium tracking-[2px] self-stretch whitespace-nowrap mt-1.5 text-center">
                {userInfo?.firstName} {userInfo?.lastName}
            </div>
            <div className="text-zinc-800 text-base font-medium tracking-widest self-stretch whitespace-nowrap mt-2 text-center">
                Career Counsellor
            </div>
        </div>
    );
};

export default Profile;