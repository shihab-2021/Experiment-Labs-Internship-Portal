import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleMyStudent from './SingleMyStudent';

const MyStudents = ({ allTasks }) => {
    const { submissionStatusCounts
    } = allTasks;
    const [data, setData] = useState([]);
    useEffect(() => {
        // Merge inner arrays into a single array
        const mergedArray = submissionStatusCounts?.reduce((accumulator, currentObject) => {
            return accumulator.concat(currentObject.submissions);
        }, []);

        setData(mergedArray);
        // You can set the merged array to state if needed: setData(mergedArray);
    }, [submissionStatusCounts]);

    // console.log(data);
    // console.log(allTasks);
    const [startIndex, setStartIndex] = useState(0);
    const displayItems = () => {
        return data && data?.slice(startIndex, startIndex + 4)?.map((value, index) => (
            <SingleMyStudent key={index} value={value} />
        ));
    };

    const handleNext = () => {
        if (startIndex + 4 < data.length) {
            setStartIndex(startIndex + 4);
        }
    };

    const handlePrev = () => {
        if (startIndex >= 4) {
            setStartIndex(startIndex - 4);
        }
    };

    return (
        <div className='border shadow-lg bg-white flex justify-center py-5 min-w-[330px] w-full flex-col rounded-2xl border-solid border-stone-300 px-5'>
            <div className='flex justify-between'>
                <div className="text-black text-center text-lg font-medium tracking-widest">
                    My Students
                </div>
                <div className="items-center bg-white flex flex-col justify-center w-6 h-6">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04107d753084b5e6f681650400a26013e04ae54aa18202c4e8de20a815352f34?"
                        className="aspect-[1.5] object-contain object-center w-full fill-zinc-800 overflow-hidden"
                    />
                </div>
            </div>
            <div>
                {
                    displayItems()
                }

            </div>
            <div className='flex gap-6 justify-center'>
                <div onClick={handlePrev} className="text-sky-500 text-center text-lg font-medium tracking-widest my-1 cursor-pointer">
                    Prev
                </div>
                <div onClick={handleNext} className="text-sky-500 text-center text-lg font-medium tracking-widest my-1 cursor-pointer">
                    Next
                </div>
            </div>
        </div>
    );
};

export default MyStudents;