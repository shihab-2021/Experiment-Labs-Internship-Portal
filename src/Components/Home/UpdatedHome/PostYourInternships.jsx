import React, { useState } from "react";
import HomeImage from "../../../assets/UpdatedHome/HomeImage.png";
import LoginAndRegisterForm from "../../Shared/LoginAndRegisterForm";

const PostYourInternships = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="w-11/12 mx-auto lg:flex items-center justify-between">
      <div className="mb-5 lg:mb-0">
        <h1 className=" text-[45px] font-bold lg:w-[50%]">
          Post Your Internships
        </h1>
        <p className="text-xl font-medium text-[#696969] w-[90%] mt-3">
          Find the right candidate from a diverse talentpool for your role.
        </p>
        <button
          onClick={() => setShowLoginForm(true)}
          className="text-xl font-semibold px-[30px] py-[14px] text-[#fff] mt-[32px]"
          style={{
            borderRadius: "32px",
            background: "#4250AC",
          }}
        >
          Post Internship now
        </button>
        <LoginAndRegisterForm
          setShowLoginForm={setShowLoginForm}
          showLoginForm={showLoginForm}
        />
      </div>
      <div>
        <img src={HomeImage} className="shadow-md rounded-3xl" alt="Image" />
      </div>
    </div>
  );
};

export default PostYourInternships;
