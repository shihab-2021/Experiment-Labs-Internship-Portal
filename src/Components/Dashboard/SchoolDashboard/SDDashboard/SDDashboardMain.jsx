import React from 'react';
import Ellipse from '../../../../assets/Dashboard/SchoolDashboard/Ellipse.svg';
import edit from '../../../../assets/Dashboard/SchoolDashboard/edit.svg';
import SDSchoolDashboard from './SDSchoolDashboard';
import SDSchoolList from './SDSchoolList';
import SDDashboardMiddle from './SDDashboardMiddle';
import SDDashboardBottom from './SDDashboardBottom';


const SDDashboardMain = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold mt-12 mb-8'>Dashboard</h1>
            <div
                style={{
                    borderRadius: "5.437px",
                    border: "0.906px solid #D9D9D9",
                    background: "#FFF"
                }}
                className='flex justify-between w-full px-2 py-5'>
                <div>
                    <img className='w-[92px] h-[92px] rounded-full' src={Ellipse} alt='icon' />
                </div>
                <div>
                    <h1 className='text-[21px] font-semibold'>Delhi public school</h1>
                    <p className='w-[70%] text-[17px] text-[#9F9F9F] font-medium'>Postal Address. The Delhi Public School Society F-Block, East of Kailash New Delhi 110065, India. </p>
                    <p className='text-[17px]  font-medium'>Phone Number</p>
                    <p className='text-[17px] text-[#9F9F9F] font-medium'>+9 8162152151</p>
                    <p className='text-[17px] text-[#8064F0] font-medium mt-6'>Students1</p>
                    <p className='text-[17px] text-[#9F9F9F] font-medium mb-6'>50</p>
                </div>
                <div>
                    <img src={edit} alt='editIcon' />
                </div>
            </div>
            <h1 className='text-base font-medium text-[#3E4DAC] my-6'>School dashboard </h1>
            <SDSchoolList/>
            <SDSchoolDashboard/>
            <SDDashboardMiddle/>
            <SDDashboardBottom/>
        </div>
    );
};

export default SDDashboardMain;