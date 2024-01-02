//CDHomeBottomSection

import React from 'react';
import CDHomeMyStudentStatus from './CDHomeMyStudentStatus';
import CDHomeMyTopHourStudents from './CDHomeMyTopHourStudents';


const CDHomeBottomSection = () => {
    return (
        
            <div className='w-11/12 mx-auto flex justify-between items-start gap-5 mt-10 mb-20'> 
               <CDHomeMyStudentStatus/>
               <CDHomeMyTopHourStudents/>
            </div>
           
     
    );
};

export default CDHomeBottomSection;