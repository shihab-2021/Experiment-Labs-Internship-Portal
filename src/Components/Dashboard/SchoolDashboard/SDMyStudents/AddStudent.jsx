import React, { useContext, useEffect, useState } from "react";
import backicon from "../../../../assets/Dashboard/CounselorsDashboard/fluent-mdl2_back.svg";
import imgImg from "../../../../assets/Dashboard/CounselorsDashboard/material-symbols_image-outline.svg";
import addImg from "../../../../assets/Dashboard/CounselorsDashboard/Group1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import BulkUpload from "./BulkUpload";
import Loading from "../../../Shared/Loading/Loading";
const AddStudent = ({ setShowAddStudent }) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [fileLoading, setFileLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [schoolInfo, setSchoolInfo] = useState({});
  const [orgLogo, setOrgLogo] = useState("");
  const [addBulkUpload, setAddBulkUpload] = useState(false);

  useEffect(() => {
    Loading();
    axios
      .get(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/schools/schoolId/${
          userInfo?.organizations[0]?.schoolId
        }`
      )
      .then((school) => {
        setSchoolInfo(school?.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        Loading().close();
      });
  }, [userInfo, addBulkUpload]);

  const handleBack = () => {
    if (addBulkUpload) setAddBulkUpload(false);
    else setShowAddStudent(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setFileLoading(false);

    const file = e.dataTransfer.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/uploadFile/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setOrgLogo(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedFile(file);
    setFileLoading(true);
  };

  const handleFileChange = async (e) => {
    setFileLoading(true);
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API}/api/v1/uploadFile/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setOrgLogo(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setSelectedFile(file);
    setFileLoading(false);
  };

  const handleAddStudent = async (event) => {
    event.preventDefault();
    const form = event?.target;
    console.log("Selected School:", schoolInfo?.schoolName);
    const userData = {
      firstName: form.studentfirstName.value,
      lastName: form.studentlastName.value,
      email: form.studentemail.value,
      phone: form.studentphone.value,
      schoolId: schoolInfo?._id,
      areaOfInterest: form.studentAreaofinterest.value,
      counsellorId: userInfo?.organizations[0]?.counsellorId,
      class: form.studentClass.value,
      userImg: selectedFile,
      // creator: {
      //     email: user?.email,
      //     organizationId: organizationInfo?._id,
      //     role: userInfo?.organizations[0]?.role,
      // },
      // taskStatus:
      //     userInfo?.organizations[0]?.role === "Admin"
      //         ? "AdminApproved"
      //         : "Pending",
      // postingDateTime: new Date(),
    };
    console.log(userData);
    const newUser = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users`,
      userData
    );
    console.log(newUser);
    if (newUser) {
      Swal.fire({
        title: "New User created successfully!",
        icon: "success",
      });
      navigate("/schoolDashboard/myStudents");
    }
    form.reset();
  };

  return (
    <div className="p-4 mx-auto w-full">
      <div className="grid grid-flow-col mt-10 border-b border-[#D9D9D9] pb-2">
        <button>
          <img onClick={handleBack} src={backicon} alt="" />
        </button>
        <p className=" text-left text-[20px] text-[#3F3F3F] font-medium tracking-wider">
          Add Student
        </p>
      </div>
      {addBulkUpload && (
        <div className="w-full overflow-hidden">
          <BulkUpload schoolInfo={schoolInfo} />
        </div>
      )}
      {!addBulkUpload && (
        <>
          <div className="mt-5">
            <button
              onClick={() => setAddBulkUpload(true)}
              className="flex gap-2 py-1 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
            >
              Bulk Upload
            </button>
          </div>
          <div className="my-4">
            <form onSubmit={handleAddStudent} autoComplete="on">
              <label>
                <div
                  className="grid justify-center w-fit mx-auto "
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {fileLoading && (
                    <div className=" min-w-[242px] min-h-[114px]">
                      <img
                        src={addImg}
                        className="mx-auto mt-2 animate-ping"
                        alt="addImg"
                      />
                    </div>
                  )}
                  {!fileLoading && (
                    <div className=" min-w-[242px] min-h-[114px]">
                      <img
                        src={addImg}
                        className="mx-auto mt-2"
                        alt="inputImg"
                      />
                      {selectedFile && (
                        <p className="text-[18px] font-[700] m-[5px] ">
                          File:{" "}
                          <span className="font-[500]">
                            {selectedFile?.name}
                          </span>
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
              )}

              <div className="flex justify-between my-4">
                <div className="flex flex-col gap-2  w-[40%]">
                  <label
                    htmlFor="studentfirstName"
                    className="text-[17px] font-medium"
                  >
                    Student First Name
                  </label>
                  <input
                    required
                    placeholder="write student first name"
                    type="text"
                    name="studentfirstName"
                    id="studentfirstName"
                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                  />
                </div>
                <div className="flex flex-col gap-2  w-[40%]">
                  <label
                    htmlFor="studentlastName"
                    className="text-[17px] font-medium"
                  >
                    Student Last Name
                  </label>
                  <input
                    required
                    placeholder="write student last name"
                    type="text"
                    name="studentlastName"
                    id="studentlastName"
                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                  />
                </div>
              </div>
              <div className="flex justify-between my-4">
                <div className="flex flex-col gap-2  w-[40%]">
                  <label
                    htmlFor="studentemail"
                    className="text-[17px] font-medium"
                  >
                    Student Email
                  </label>
                  <input
                    required
                    placeholder="write student email"
                    type="email"
                    name="studentemail"
                    id="studentemail"
                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                  />
                </div>
                <div className="flex flex-col gap-2  w-[40%]">
                  <label
                    htmlFor="studentphone"
                    className="text-[17px] font-medium"
                  >
                    Student Phone Number
                  </label>
                  <input
                    required
                    placeholder="write student phone no."
                    type="number"
                    name="studentphone"
                    id="studentphone"
                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 relative">
                <label htmlFor="schoolName" className="text-[17px] font-medium">
                  Student School Name
                </label>
                <div className="relative w-full">
                  <input
                    required
                    className="bg-[#EEF0FF] w-full focus:outline-none px-[10px] py-1 rounded-md shadow"
                    type="text"
                    value={schoolInfo?.schoolName}
                    placeholder="ex, delhi public school"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 my-4">
                <label
                  htmlFor="studentAreaofinterest"
                  className="text-[17px] font-medium"
                >
                  Student Area of Interest
                </label>
                <textarea
                  maxLength={100}
                  placeholder="ex, Art with economy"
                  type="text"
                  name="studentAreaofinterest"
                  id="studentAreaofinterest"
                  className="text-start bg-[#EEF0FF] p-[10px] rounded-md shadow "
                />
              </div>
              <p className="text-end text-[#4555BA] text-[16px] font-medium">
                words limit/100
              </p>
              <div className="flex gap-24 my-3">
                <div className="flex flex-col gap-2 w-[25%]">
                  <label
                    htmlFor="studentClass"
                    className="text-[17px] font-medium"
                  >
                    Student Class
                  </label>
                  <select
                    name="studentClass"
                    id="studentClass"
                    className="bg-[#EEF0FF] px-[10px] py-1 rounded-md shadow"
                    required
                  >
                    <option defaultValue hidden>
                      Student Class
                    </option>
                    <option className="" value="6">
                      6
                    </option>
                    <option className="" value="7">
                      7
                    </option>
                    <option className="" value="8">
                      8
                    </option>
                    <option className="" value="9">
                      9
                    </option>
                    <option className="" value="10">
                      10
                    </option>
                    <option className="" value="11">
                      11
                    </option>
                    <option className="" value="12">
                      12
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid justify-center mt-36">
                <button
                  type="submit"
                  className="flex gap-2 py-3 px-7 text-white bg-[#3E4DAC] items-center rounded-3xl"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AddStudent;
