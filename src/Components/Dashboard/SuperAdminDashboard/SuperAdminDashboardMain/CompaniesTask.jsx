import React from 'react';
import CompaniesPostTask from './CompaniesPostTask';
import CTOverview from './CTOverview';
import CategoriesTask from './CategoriesTask';
import CTMessage from './CTMessage';
import MyTaskDetails from './MyTaskDetails';
import MyTask from './MyTask';
import MessageBottom from './MessageBottom';

const CompaniesTask = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between items-start gap-16'>
                <CompaniesPostTask />
                <CTOverview />
            </div>
            <div className='flex justify-between items-start gap-16'> 
                <CategoriesTask/>
                <CTMessage/>
            </div>
            <MyTaskDetails/>
            <div className='flex justify-between items-start gap-16 pb-10'>
                <MyTask/>
                <MessageBottom/>
            </div>
        </div>
    );
};

export default CompaniesTask;