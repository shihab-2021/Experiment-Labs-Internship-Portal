import React from 'react';
import TopSection from './TopSection';
import TrendingTasks from './TrendingTasks';
import Tasks from './Tasks';

const SuperHome = () => {
    return (
        <div>
            <TopSection/>
            <TrendingTasks/>
            <Tasks></Tasks>
        </div>
    );
};

export default SuperHome;