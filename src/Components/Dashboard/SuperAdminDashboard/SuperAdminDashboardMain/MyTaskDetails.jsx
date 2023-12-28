import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const MyTaskDetails = () => {
    const customColors = ['#3E4DAC', '#2196F3', '#20B15A', '#DD2025', '#E8B912'];
    const dataSet = [
        { data: [1], stack: 'A', label: 'My task 3 ' },
        { data: [1], stack: 'B', label: 'In progress 22 ' },
        { data: [6], stack: 'C', label: 'Completed 14' },
        { data: [6], stack: 'C', label: 'Rejected 6' },
        { data: [6], stack: 'C', label: 'My task 3' },
    ]
    return (
        <div className='border shadow-lg bg-white flex min-h-[372px] max-w-full flex-col rounded-md border-solid border-neutral-200'>
            <div className='flex items-center justify-around py-10'>
                <div className=''>
                    <div className="text-indigo-800 text-xl font-bold tracking-[1.95px] ml-12">
                        My task Details
                    </div>
                    <BarChart
                        yAxis={[{
                            scaleType: 'band',
                            data: ['A', 'B', 'C'],
                            categoryGapRatio: 0.5,
                            barGapRatio: 0.6
                        }]}
                        // series={[
                        //     { data: [1], stack: 'A', color: customColors[0] },
                        //     { data: [0], stack: 'empty', color: 'transparent' },
                        //     { data: [1], stack: 'B', color: customColors[0] },
                        //     { data: [0], stack: 'empty2', color: 'transparent' },
                        //     { data: [6], stack: 'C', color: customColors[3] },
                        //     { data: [6], stack: 'C', color: customColors[4] }
                        // ]}
                        series={[
                            { data: [1, 0, 0], stack: 'A', color: customColors[0] },
                            { data: [11, 0, 0], stack: 'A', color: "#E0E5FF" },
                            { data: [0, 1, 0], stack: 'A', color: customColors[0] },
                            { data: [0, 11, 0], stack: 'A', color: "#E0E5FF" },
                            { data: [0, 0, 6], stack: 'A', color: customColors[3] },
                            { data: [0, 0, 6], stack: 'A', color: customColors[4] }]}
                        width={600}
                        height={350}
                        layout='horizontal'
                        barWidth={1}
                    />
                </div>
                <div>
                    <div className="text-black tracking-widest mb-3 font-bold">
                        Students solution
                    </div>

                    {dataSet.map((data, index) => (
                        <div className="flex items-center gap-3 py-1" key={index}>
                            <div
                                className="w-[33px] h-[21px] "
                                style={{ backgroundColor: customColors[index % customColors.length] }}
                            ></div>
                            <p className="text-[16px] tracking-wider font-medium font-Raleway">
                                {data.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyTaskDetails;