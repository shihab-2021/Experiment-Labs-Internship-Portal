import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inputImg from "../../../../assets/Shared/input.svg";
import { FaArrowRight } from "react-icons/fa";

const CompanyInformation = ({
  formatDate,
  organizationInfo,
  setOrganizationInfo,
  orgName,
  orgLogo,
  setOrgName,
  orgNameDropDown,
  setOrgNameDropDown,
  organizations,
  handleNext,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileChange,
  fileLoading,
  selectedFile,
}) => {
  return (
    <div className="w-11/12 min-h-screen mx-auto mt-10">
      <div className="flex gap-10 justify-items-center">
        <div>
          <p className="text-[21px] font-medium tracking-wide">
            {formatDate()}
          </p>
        </div>
        <div
          style={{
            borderRadius: "14px",
            border: "1px solid #DDD",
          }}
          className="mb-[40px] lg:flex hidden  items-center  px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
        >
          <FaMagnifyingGlass />
          <input className="w-full" placeholder="Search"></input>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-2">
          <p className="bg-[#4555BA] rounded-full px-[10px] py-[7px] w-[39px] h-[39px] text-[16px] font-medium text-white text-center">
            1
          </p>
          <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
            Company Information
          </p>
        </div>
        <p className="bg-[#D9D9D9] w-[50px] h-1"></p>
        <div className="flex items-center gap-2">
          <p className="bg-[#8F8F8F] rounded-full  px-[10px] py-[7px]  w-[39px] h-[39px] text-white text-[16px] font-medium text-center">
            2
          </p>
          <p className="text-[17px] font-medium tracking-wider text-[#0C0C20]">
            Task Information
          </p>
        </div>
      </div>
      {!organizationInfo?.orgName && (
        <div className=" h-full ">
          <div className="flex flex-col gap-2 mt-4 relative">
            <label htmlFor="companyName" className="text-[17px] font-medium">
              Company
            </label>
            <div className="relative w-full">
              <input
                className="bg-[#EEF0FF] w-full focus:outline-none px-[10px] py-1 rounded-md shadow"
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onFocus={() => setOrgNameDropDown(true)}
                onBlur={() => {
                  setOrgName(orgName);
                  setOrgNameDropDown(false);
                }}
                placeholder="Type organization name..."
                name="companyName"
                id="companyName"
              />
              {orgNameDropDown && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg max-h-[250px] overflow-y-auto">
                  {organizations
                    ?.filter((org) =>
                      org?.orgName
                        ?.toLowerCase()
                        ?.includes(orgName?.toLowerCase())
                    )
                    .map((org, index) => (
                      <div
                        key={index}
                        className={` px-4 py-2 cursor-pointer hover:bg-gray-100`}
                        onMouseDown={() => {
                          setOrgName(org?.orgName);
                          setOrganizationInfo(org);
                          setOrgNameDropDown(false);
                        }}
                      >
                        {org?.orgName}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {organizationInfo?.orgName && (
        <form onSubmit={handleNext}>
          <div className="flex flex-col gap-2 mt-4 relative">
            <label htmlFor="companyName" className="text-[17px] font-medium">
              Company
            </label>
            <input
              required
              defaultValue={organizationInfo?.orgName}
              placeholder="Write company name"
              type="text"
              name="companyName"
              id="companyName"
              f
              onChange={(e) => {
                setOrgName(e.target.value);
              }}
              className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
            />
          </div>
          <h1 className="text-[18px] font-medium tracking-wide text-center mt-[45px]">
            Upload Logo
          </h1>
          <label>
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
                  <img src={inputImg} className="mx-auto mt-2" alt="inputImg" />
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
              // required
              // defaultValue={organizationInfo?.orgLogo}
              className="hidden"
              type="file"
              name="file"
              placeholder="upload"
              onChange={handleFileChange}
            />
          </label>
          {orgLogo && (
            <img src={orgLogo} className="mx-auto my-4" alt="orgLogo" />
          )}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="aboutCompany" className="text-[17px] font-medium">
              Write about company
            </label>
            <textarea
              defaultValue={organizationInfo?.aboutOrg}
              maxLength={200}
              placeholder="ex,write about company what company does"
              type="text"
              name="aboutCompany"
              id="aboutCompany"
              className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow h-[100px]"
            />
          </div>
          <p className="text-end text-[#4555BA] text-[15px] font-medium">
            words limit/200
          </p>
          <button
            type="submit"
            className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
          >
            Next <FaArrowRight></FaArrowRight>
          </button>
        </form>
      )}
    </div>
  );
};

export default CompanyInformation;
