import React from 'react';

const SDSchoolEdit = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">

        <form className="mt-3" autocomplete="on">
          <h1 className="font-semibold text-[18px] tracking-widest my-3">
            Edit School
          </h1>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="schoolName" className="text-[17px] font-medium">
              School Name
            </label>
            <input
              placeholder="write school name"
            //   value={member?.firstName}
              type="text"
              name="schoolName"
              id="schoolName"
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="schoolMail" className="text-[17px] font-medium">
              Schol Email
            </label>
            <input
              placeholder="write team member email id"
            //   value={member?.email}
              type="email"
              name="schoolMail"
              id="schoolMail"
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="schoolNumber" className="text-[17px] font-medium">
              School Mobile Number
            </label>
            <input
              placeholder="write team member mobile number"
              type="text"
            //   defaultValue={member?.phone}
              name="schoolNumber"
              id="schoolNumber"
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-8 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
            >
              {" "}
              Edit team member
            </button>
          </div>
        </form>
      </div>
    );
};

export default SDSchoolEdit;