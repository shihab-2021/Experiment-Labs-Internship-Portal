import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const SuperAdminTaskAccessForm = () => {
  const { userInfo } = useContext(AuthContext);
  const getInitials = () => {
    const firstNameInitial =
      userInfo?.firstName?.charAt(0)?.toUpperCase() || "";
    const lastNameInitial = userInfo?.lastName?.charAt(0)?.toUpperCase() || "";
    return `${firstNameInitial}${lastNameInitial}`;
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Generate a random background color if it hasn't been generated yet
    if (!backgroundColor) {
      setBackgroundColor(getRandomColor());
    }

    // Your existing useEffect logic...
  }, [userInfo, backgroundColor]);
  console.log(userInfo)
  return (
    <div className="p-4 mb-10">
      <div className=" relative">
        <div className="min-h-12">
          <div className="min-w-[200px] px-7 py-[9px] left-[75%] top-0 absolute rounded-[11px] border border-neutral-200 flex-col justify-center items-center gap-1.5 inline-flex">
            <div className="aspect-[1.09] object-contain object-center w-full overflow-hidden rounded-[80%]">
              <div
                className="w-full h-full flex items-center text-red-50 justify-center text-5xl font-bold"
                style={{ backgroundColor }}
              >
                {getInitials()}
              </div>
            </div>
            <div className="text-zinc-800 text-xl font-medium tracking-[2px] self-stretch whitespace-nowrap mt-1.5 text-center">
              {userInfo?.firstName} {userInfo?.lastName}
            </div>
            <div className="text-zinc-800 text-base font-medium tracking-widest self-stretch whitespace-nowrap mt-2 text-center">
              Super Admin
            </div>
          </div>
          <div className="w-[70%] h-12 p-2.5 mt-[30px] border-b border-neutral-300 justify-center items-center gap-2.5 inline-flex">
            <h1 className="grow shrink basis-0 text-neutral-800 text-2xl font-medium font-raleway tracking-widest">
              Task Access{" "}
            </h1>
          </div>
        </div>
        <div className=" mt-5 w-full flex-col justify-start gap-3 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch py-[7px] max-w-[504px] border-b border-neutral-200 justify-start items-start gap-2.5 inline-flex">
              <h1 className="text-zinc-800 text-xl font-bold font-raleway tracking-widest">
                My task permission
              </h1>
            </div>
            <p className=" text-neutral-700 text-lg font-medium font-raleway tracking-widest">
              "Provide an approved decision for all of my tasks."
            </p>
          </div>
          <div className=" ml-10 inline-flex gap-7 items-center h-[40px] text-[#535353] ">
            <div>
              <input
                id="draft"
                className="peer/draft me-2"
                type="radio"
                name="status"
                value="Give permission"
              // checked={selectedItemEarningOption === "Automated"}
              // onChange={handleItemEarningOptionChange}
              />
              <label
                for="draft"
                className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
              >
                Give permission
              </label>
            </div>

            <div>
              <input
                id="published"
                class="peer/published me-2"
                type="radio"
                name="status"
                value="No permission"
              // checked={selectedItemEarningOption === "Manual"}
              // onChange={handleItemEarningOptionChange}
              />
              <label
                for="published"
                className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
              >
                No permission
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[20px] w-full flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[95%] py-[7px] border-b border-gray-200 justify-start items-start gap-2.5 inline-flex">
              <h1 className="text-zinc-800 text-xl font-bold font-raleway tracking-widest">
                Company task permission
              </h1>
            </div>
            <p className="text-neutral-700 text-lg font-medium font-raleway tracking-widest">
              "Approved decision for all company tasks."
            </p>
          </div>
          <div className="relative flex items-center gap-10 ml-10 mt-2">
            <div className=" inline-flex gap-7 items-center  h-[40px]   text-[#535353] ">
              <div>
                <input
                  id="draft"
                  className="peer/draft me-2"
                  type="radio"
                  name="status"
                  value="Give permission"
                // checked={selectedItemEarningOption === "Automated"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="draft"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  Give permission
                </label>
              </div>

              <div>
                <input
                  id="published"
                  class="peer/published me-2"
                  type="radio"
                  name="status"
                  value="No permission"
                // checked={selectedItemEarningOption === "Manual"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="published"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  No permission
                </label>
              </div>
            </div>
            <div className=" justify-start items-center gap-[11px] inline-flex">
              <label className="text-neutral-700 text-base font-medium font-raleway tracking-wider">
                Access for some company
              </label>
              <input
                placeholder="Search Company"
                className="h-[39px] p-2.5 rounded-sm border border-gray-200 justify-center focus:outline-none items-center gap-2.5 flex"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5 justify-center items-center gap-3 flex flex-wrap ">
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Magic pin
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Big basket
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                AMAZON
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Flipkart
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[20px] w-full flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[95%] py-[7px] border-b border-gray-200 justify-start items-start gap-2.5 inline-flex">
              <h1 className="text-zinc-800 text-xl font-bold font-raleway tracking-widest">
                Company task permission
              </h1>
            </div>
            <p className="text-neutral-700 text-lg font-medium font-raleway tracking-widest">
              "Approved decision for all company tasks."
            </p>
          </div>
          <div className="relative flex items-center gap-10 ml-10 mt-2">
            <div className=" inline-flex gap-7 items-center  h-[40px]   text-[#535353] ">
              <div>
                <input
                  id="draft"
                  className="peer/draft me-2"
                  type="radio"
                  name="status"
                  value="Give permission"
                // checked={selectedItemEarningOption === "Automated"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="draft"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  Give permission
                </label>
              </div>

              <div>
                <input
                  id="published"
                  class="peer/published me-2"
                  type="radio"
                  name="status"
                  value="No permission"
                // checked={selectedItemEarningOption === "Manual"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="published"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  No permission
                </label>
              </div>
            </div>
            <div className=" justify-start items-center gap-[11px] inline-flex">
              <label className="text-neutral-700 text-base font-medium font-raleway tracking-wider">
                Access for some company
              </label>
              <input
                placeholder="Search Company"
                className="h-[39px] p-2.5 rounded-sm border border-gray-200 justify-center focus:outline-none items-center gap-2.5 flex"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5 justify-center items-center gap-3 flex flex-wrap ">
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Magic pin
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Big basket
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                AMAZON
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Flipkart
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[20px] w-full flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[95%] py-[7px] border-b border-gray-200 justify-start items-start gap-2.5 inline-flex">
              <h1 className="text-zinc-800 text-xl font-bold font-raleway tracking-widest">
                Company task permission
              </h1>
            </div>
            <p className="text-neutral-700 text-lg font-medium font-raleway tracking-widest">
              "Approved decision for all company tasks."
            </p>
          </div>
          <div className="relative flex items-center gap-10 ml-10 mt-2">
            <div className=" inline-flex gap-7 items-center  h-[40px]   text-[#535353] ">
              <div>
                <input
                  id="draft"
                  className="peer/draft me-2"
                  type="radio"
                  name="status"
                  value="Give permission"
                // checked={selectedItemEarningOption === "Automated"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="draft"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  Give permission
                </label>
              </div>

              <div>
                <input
                  id="published"
                  class="peer/published me-2"
                  type="radio"
                  name="status"
                  value="No permission"
                // checked={selectedItemEarningOption === "Manual"}
                // onChange={handleItemEarningOptionChange}
                />
                <label
                  for="published"
                  className="text-neutral-700 text-base font-medium font-raleway tracking-wider"
                >
                  No permission
                </label>
              </div>
            </div>
            <div className=" justify-start items-center gap-[11px] inline-flex">
              <label className="text-neutral-700 text-base font-medium font-raleway tracking-wider">
                Access for some company
              </label>
              <input
                placeholder="Search Company"
                className="h-[39px] p-2.5 rounded-sm border border-gray-200 justify-center focus:outline-none items-center gap-2.5 flex"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5 justify-center items-center gap-3 flex flex-wrap ">
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Magic pin
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Big basket
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                AMAZON
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
            <div className="px-3 py-[7px] bg-violet-50 rounded-2xl border border-zinc-400 items-center gap-2 flex">
              <img
                className="max-w-[30px] max-h-[30px] rounded-full"
                src="https://via.placeholder.com/126x126"
              />
              <div className="text-neutral-700 text-[17px] font-medium font-raleway tracking-widest">
                Flipkart
              </div>
              <button className="p-1 relative">x</button>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminTaskAccessForm;
