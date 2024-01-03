import React from 'react';
import backicon from "../../../../assets/Dashboard/CounselorsDashboard/fluent-mdl2_back.svg";
import imgImg from "../../../../assets/Dashboard/CounselorsDashboard/material-symbols_image-outline.svg";
import { useNavigate } from 'react-router-dom';
const MyStudentAddDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/counselorDashboard/MyStudents");
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-flow-col mt-10 border-b border-[#D9D9D9] pb-2'>
            <button><img onClick={handleBack} src={backicon} alt="" /></button>
                <p className=' text-left text-[20px] text-[#3F3F3F] font-medium tracking-wider'>Add Student</p>
            </div>
            <div className='my-4'>
                <form>

                    {/* <label>
              <div
                className="grid justify-center w-fit mx-auto "
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {fileLoading && (
                  <div className="border border-[#4555BA] min-w-[242px] min-h-[114px]">
                    <img
                      src={inputImg}
                      className="mx-auto mt-2 animate-ping"
                      alt="inputImg"
                    />
                  </div>
                )}
                {!fileLoading && (
                  <div className="border border-[#4555BA] min-w-[242px] min-h-[114px]">
                    <img
                      src={inputImg}
                      className="mx-auto mt-2"
                      alt="inputImg"
                    />
                    {selectedFile && (
                      <p className="text-[18px] font-[700] m-[5px] ">
                        File:{" "}
                        <span className="font-[500]">{selectedFile?.name}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
              <input
                className="hidden"
                type="file"
                name="file"
                placeholder="upload"
                onChange={handleFileChange}
              />
            </label>
            {orgLogo && (
              <img src={orgLogo} className="mx-auto my-4" alt="orgLogo" />
            )} */}
                    <div className='flex justify-between my-4'>
                        <div className="flex flex-col gap-2  w-[40%]">
                            <label htmlFor="studentName" className="text-[17px] font-medium">
                                Student Name
                            </label>
                            <input
                                placeholder="write student name"
                                type="text"
                                name="studentName"
                                id="studentName"
                                className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                            />
                        </div>
                        <div className="flex flex-col gap-2 relative w-[40%]">
                            <label htmlFor="SchoolName" className="text-[17px] font-medium">
                                Student School Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <img
                                        src={imgImg}
                                        alt="Placeholder Image"
                                        className="h-5 w-5"
                                    />
                                </div>
                                <input
                                    placeholder="ex, delhi public school"
                                    type="text"
                                    name="SchoolName"
                                    id="SchoolName"
                                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow pl-8 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <label htmlFor="studentStream" className="text-[17px] font-medium">
                            Student Stream
                        </label>
                        <textarea

                            maxLength={100}
                            placeholder="ex, Art with economy"
                            type="text"
                            name="studentStream"
                            id="studentStream"
                            className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow "
                        />
                    </div>
                    <p className="text-end text-[#4555BA] text-[16px] font-medium">
                        words limit/100
                    </p>
                    <div className='flex gap-24 my-4'>
                        <div className="flex flex-col gap-2 w-[25%]">
                            <label htmlFor="studentAge" className="text-[17px] font-medium">
                                Student Age
                            </label>
                            <select name="studentAge" id="studentAge" className='bg-[#EEF0FF]  px-[10px] py-1 rounded-md shadow' >
                                <option  className='' defaultValue hidden >Student Age</option>
                                <option className='' value="14">14</option>
                                <option className='' value="15">15</option>
                                <option className='' value="16">16</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-[25%]">
                            <label htmlFor="studentClass" className="text-[17px] font-medium">
                                Student Class
                            </label>
                            <select name="studentClass" id="studentClass" className='bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow' >
                                <option defaultValue className='' hidden>Student Class</option>
                                <option className='' value="7">7</option>
                                <option className='' value="8">8</option>
                                <option className='' value="9">9</option>
                            </select>
                        </div>

                    </div>
                    <div className='grid justify-center mt-36'>
                        <button
                            type="submit"
                            className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyStudentAddDetails;