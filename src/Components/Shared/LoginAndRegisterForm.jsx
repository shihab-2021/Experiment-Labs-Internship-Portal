import React, { useContext, useState } from "react";
import LoginFormImage from "../../assets/Home/LoginFormImage.png";
import ExperimentLabsLogo from "../../assets/Shared/experiment_labs_logo.png";
import GoogleIcon from "../../assets/Shared/icon_google.png";
import { useNavigate } from "react-router-dom";
import DialogLayout from "./DialogLayout";
import { AuthContext } from "../../Contexts/AuthProvider";

const LoginAndRegisterForm = ({ showLoginForm, setShowLoginForm }) => {
  const { user, userInfo, signIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");

  const handleSetRole = (role) => {
    localStorage.setItem("role", role);
    setRole(role);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const form = e?.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      await signIn(email, password).then(() => {
        console.log("user logged in");
        navigate("/dashboard");
      });
    } catch (error) {
      console.error(error);
      // toast.error("password or email error");
    }
  };
  return (
    <div>
      <DialogLayout open={showLoginForm} setOpen={setShowLoginForm} width={500}>
        <div className="w-full p-2 mt-16 mb-4">
          <div className="grid grid-cols-2 text-gray-400 items-center justify-center">
            <button
              onClick={() => handleSetRole("Student")}
              className={`${
                role === "Student"
                  ? "border-blue-500 border-b-2 text-gray-600"
                  : "mb-[2px]"
              } p-2 font-semibold text-md`}
            >
              Student
            </button>
            <button
              onClick={() => handleSetRole("Employer")}
              className={`${
                role === "Employer"
                  ? "border-blue-500 border-b-2 text-gray-600"
                  : "mb-[2px]"
              } p-2 font-semibold text-md`}
            >
              Employer / T&P
            </button>
          </div>
          <div>
            <h1 className="text-xl font-semibold my-4 text-center">
              Login as {role}
            </h1>
            <form
              className=" my-[25px] px-4 flex flex-col "
              onSubmit={handleLoginSubmit}
            >
              <label className="text-[20px] font-[500]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-[15px] px-[10px] border-[1px] border-[#C9C9C9] "
              />{" "}
              <label
                className="text-[20px] font-[500] mt-[15px] "
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="py-[15px] px-[10px] border-[1px] border-[#C9C9C9] "
              />
              <div className="mt-[50px]">
                <button
                  type="submit"
                  className="py-[15px] text-white text-[20px] font-[500] w-full px-[10px] border-[1px] border-[#C9C9C9] bg-[#1976D2] flex items-center justify-center mb-[20px] "
                >
                  Login
                </button>
                {/* {role === "Employer" && (
                  <button className="py-[15px] text-[#737373] text-[20px] font-[500 w-full px-[10px] border-[1px] border-[#C9C9C9] flex items-center justify-center ">
                    Don't have account(Sign up)
                  </button>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </DialogLayout>
    </div>
  );
};

export default LoginAndRegisterForm;