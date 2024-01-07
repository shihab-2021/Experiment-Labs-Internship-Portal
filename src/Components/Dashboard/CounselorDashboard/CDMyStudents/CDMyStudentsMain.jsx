import React, { useContext, useEffect, useState } from 'react';
import MyStudentsTop from './MyStudentsTop';
import MyStudentsData from './MyStudentsData';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import axios from 'axios';
import Loading from '../../../Shared/Loading/Loading';

const CDMyStudentsMain = () => {
    const [myStudents, setmyStudents] = useState([]);
    const {userInfo} = useContext(AuthContext);
    // console.log(userInfo)
    useEffect(()=>{
        Loading();
        if(userInfo?.organizations){
            axios
            .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/taskSubmissions/counsellorId/${userInfo?.organizations[0]?.counsellorId}`)
            .then((students) => {
                
              setmyStudents(students?.data);
              
            })
            .catch((error) => console.error(error))
            .finally(()=>{
                Loading().close();
            })
            
        }
        
    },[userInfo])
    
    return (
        <div>
            <MyStudentsTop></MyStudentsTop>
            <MyStudentsData students={myStudents}></MyStudentsData>
        </div>
    );
};

export default CDMyStudentsMain;