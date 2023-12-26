import React from 'react';
import CompaniesPostTask from './CompaniesPostTask';
import CTOverview from './CTOverview';
import CategoriesTask from './CategoriesTask';
import CTMessage from './CTMessage';

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
        </div>
    );
};

export default CompaniesTask;