import React from 'react';
import profileImg from '../../../../assets/Dashboard/SuperAdminDashboard/Ellipse 24.svg';

const Profile = () => {
    return (
        <div className="justify-center items-center border flex flex-col w-[197px] h-[197px] px-7 rounded-xl border-solid border-neutral-200 py-2">
            <img
                loading="lazy"
                src={profileImg}
                className="aspect-[1.09] object-contain object-center w-full overflow-hidden rounded-[50%]"
            />
            <div className="text-zinc-800 text-xl font-medium tracking-[2px] self-stretch whitespace-nowrap mt-1.5 text-center">
                harsh kumar
            </div>
            <div className="text-zinc-800 text-base font-medium tracking-widest self-stretch whitespace-nowrap mt-2 text-center">
                Panel admin
            </div>
        </div>
    );
};

export default Profile;