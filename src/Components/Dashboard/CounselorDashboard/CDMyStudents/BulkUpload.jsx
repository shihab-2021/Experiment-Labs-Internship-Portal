import React, { useContext, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import axios from "axios";

const BulkUpload = ({
  schoolName,
  setSchoolName,
  schools,
  schoolInfo,
  setSchoolInfo,
  schoolNameDropDown,
  setSchoolNameDropDown,
}) => {
  const { userInfo } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [tableWidth, setTableWidth] = useState("100%");

  useEffect(() => {
    // Calculate the desired width (e.g., 200px less than the screen width)
    const screenWidth = window.innerWidth;
    const desiredWidth = screenWidth - 320;

    // Set the table width as a string
    setTableWidth(`${desiredWidth}px`);

    // Update the width if the window is resized
    const handleResize = () => {
      const updatedWidth = window.innerWidth - 320;
      setTableWidth(`${updatedWidth}px`);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   const handleFileChange = (event) => {
  //     setFile(event.target.files[0]);
  //   };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    setFile(file);
    handleFileRead(file);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    handleFileRead(file);
  };

  const handleFileRead = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // Assuming first sheet
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(json);
    };
    reader.readAsBinaryString(file);
  };

  const allKeys = jsonData?.reduce(
    (keys, student) => {
      Object.keys(student).forEach((key) => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      });
      return keys;
    },
    [jsonData]
  );

  const handleAddStudents = async () => {
    const users = jsonData;
    const relatedData = {
      counsellorId: userInfo?.organizations[0]?.counsellorId,
      schoolId: schoolInfo?._id,
    };
    const newUsers = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users/addBulkStudent`,
      { users, relatedData }
    );
    console.log(newUsers);
    if (newUsers) {
      Swal.fire({
        title: "New User created successfully!",
        icon: "success",
      });
      //   navigate("/counselorDashboard/MyStudents");
    }
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mt-4 relative">
        <label htmlFor="schoolName" className="text-[17px] font-medium">
          Student School Name
        </label>
        <div className="relative w-full">
          <input
            required
            className="bg-[#EEF0FF] w-full focus:outline-none px-[10px] py-1 rounded-md shadow"
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            onFocus={() => setSchoolNameDropDown(true)}
            onBlur={() => {
              setSchoolName(schoolName);
              setSchoolNameDropDown(false);
            }}
            placeholder="ex, delhi public school"
          />
          {schoolNameDropDown && (
            <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg max-h-[250px] overflow-y-auto">
              {schools
                ?.filter((scl) =>
                  scl?.schoolName
                    ?.toLowerCase()
                    ?.includes(schoolName?.toLowerCase())
                )
                .map((scl, index) => (
                  <div
                    key={index}
                    className={` px-4 py-2 cursor-pointer hover:bg-gray-100`}
                    onMouseDown={() => {
                      setSchoolName(scl?.schoolName);
                      setSchoolInfo(scl);
                      setSchoolNameDropDown(false);
                    }}
                  >
                    {scl?.schoolName}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <p className="text-[17px] mt-6 mb-2 font-medium">Upload File(xlsx)</p>
      <div
        className="w-[220px] h-[220px] bg-[#F6F7FF] flex flex-col items-center justify-center rounded-lg "
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "0.917px dashed #000",
          background: "#F6F7FF",
        }}
      >
        <>
          <CloudUploadIcon className={` ${dragActive && "animate-ping"} `} />
          <p className="text-[17px] font-semibold mb-3 mt-3">Drag and drop </p>
          <p className="text-sm font-medium mb-3">Or</p>
        </>
        <>
          <div className="flex gap-2 justify-center w-full">
            <label
              className="flex items-center px-5 py-2 rounded-lg bg-[#FFDB70] text-xs font-bold"
              htmlFor="input-file-upload"
            >
              Browser
            </label>
            <input
              className="hidden"
              type="file"
              name="input-file-upload"
              id="input-file-upload"
              onChange={handleFileChange}
              multiple
            />
          </div>
        </>
        {file && <p className="p-1 text-center">{file?.name}</p>}
      </div>
      {jsonData && (
        <>
          <div
            className={`flex flex-col mt-8 font-sans`}
            style={{ width: tableWidth }}
          >
            <div className="overflow-x-auto max-w-full rounded-lg max-h-96">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y bg-white border border-gray-300 divide-gray-200 ">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          First Name
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Last Name
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Email
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Phone
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Class
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Section
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Parent Name
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Parent Email
                        </th>
                        <th className="py-3 px-4 border-b border-r whitespace-nowrap">
                          Parent Phone
                        </th>
                        <th className="py-3 px-4 border-b whitespace-nowrap">
                          Area of Interest
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jsonData?.map((student, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.firstName}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.lastName}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.email}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.phone}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.class}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.section}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.parentName}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.parentEmail}
                          </td>
                          <td className="py-3 px-4 border-b border-r whitespace-nowrap">
                            {student.parentPhone}
                          </td>
                          <td className="py-3 px-4 border-b whitespace-nowrap">
                            {student.areaOfInterest}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleAddStudents()}
            className="flex mt-6 gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
          >
            Add Students
          </button>
        </>
      )}
    </div>
  );
};

export default BulkUpload;
