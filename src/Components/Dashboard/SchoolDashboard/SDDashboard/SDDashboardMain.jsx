import React, { useContext, useEffect, useState } from 'react';
import Ellipse from '../../../../assets/Dashboard/SchoolDashboard/Ellipse.svg';
import edit from '../../../../assets/Dashboard/SchoolDashboard/edit.svg';
import SDSchoolDashboard from './SDSchoolDashboard';
import SDSchoolList from './SDSchoolList';
import SDDashboardMiddle from './SDDashboardMiddle';
import SDDashboardBottom from './SDDashboardBottom';
import { Link } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthProvider';


const SDDashboardMain = () => {
    const { userInfo } = useContext(AuthContext);

    const [schoolData, setSchoolData] = useState({});
    const [schoolTasks, setSchoolTasks] = useState({});
    const [counsellorData, setCounsellorData] = useState({});
    const [topStudentsData, setTopStudentsData] = useState([]);
    useEffect(() => {
        Loading();
        if (userInfo?.organizations) {
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/schools/schoolId/${userInfo?.organizations[0]?.schoolId}`)
                .then((school) => {
                    setSchoolData(school?.data);
                })
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${userInfo?.organizations[0]?.counsellorId}`)
                .then((counsellor) => {
                    setCounsellorData(counsellor?.data);
                })
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/leaderBoard/schoolId/${schoolData?._id}`)
                .then((res) => {
                    setTopStudentsData(res?.data);
                })
            axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/schools/statisticalData/schoolId/${userInfo?.organizations[0]?.schoolId}`)
                .then((tasks) => { setSchoolTasks(tasks.data) })
                .catch((error) => console.error(error))
                .finally(() => {
                    Loading().close();
                })
        }
    }, [userInfo])
   // console.log(topStudentsData)
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold mt-12 mb-5'>Dashboard</h1>
            <div
                style={{
                    borderRadius: "5.437px",
                    border: "0.906px solid #D9D9D9",
                    background: "#FFF"
                }}
                className='flex justify-between w-full px-2 py-4'>
                <div className='flex gap-16'>
                    <div className='px-3'>
                        <img className='w-[92px] h-[92px] rounded-full' src={Ellipse} alt='icon' />
                    </div>
                    <div>
                        <h1 className='my-1 text-[21px] font-semibold'>{schoolData?.schoolName}</h1>
                        <p className='my-1 text-[17px]  font-medium'>Address : <span className='text-[#9F9F9F]'>{schoolData?.schoolAddress || "Not Available"}</span></p>
                        <p className='my-1 text-[17px]  font-medium'>Counsellor : <span className='text-[#9F9F9F]'>{counsellorData?.orgName || "Not Available"}</span></p>
                        {/* <p className='text-[17px]  font-medium'>Phone Number</p>
                    <p className='text-[17px] text-[#9F9F9F] font-medium'>+9 8162152151</p> */}
                        <p className='text-[17px] text-[#8064F0] font-medium mt-6'>Students</p>
                        <p className='text-[17px] text-[#9F9F9F] font-medium mb-6'>{schoolTasks?.totalStudentsCount || 0}</p>
                    </div>
                </div>
                <Link to='/schoolDashboard/schoolEdit'>
                    <img src={edit} alt='editIcon' />
                </Link>
            </div>
            <h1 className='text-[17px] font-medium text-[#3E4DAC] mt-7 mb-2'>School dashboard </h1>
            <SDSchoolList lengthData={schoolTasks} />
            <SDSchoolDashboard lengthData={schoolTasks} />
            <SDDashboardMiddle topStudentsData={topStudentsData} schoolName={schoolData?.schoolName} />
            {/* <SDDashboardBottom /> */}
        </div>
    );
};

export default SDDashboardMain;