import React, { useContext } from "react";
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
      <DialogLayout
        open={showLoginForm}
        setOpen={setShowLoginForm}
        width={1000}
      >
        <div className="w-full grid grid-cols-12 items-center justify-center ">
          <div className="md:col-span-5 col-span-12 h-full">
            <img
              className=" h-full object-cover "
              src={LoginFormImage}
              alt="LoginFormImage"
            />
          </div>
          <form
            onSubmit={handleLoginSubmit}
            className="md:col-span-7 col-span-12 px-4 py-[50px]"
          >
            <div className="max-w-[450px] mx-auto ">
              <div className="flex items-center text-[17px] font-[700] ">
                <img
                  className=" object-cover "
                  src={ExperimentLabsLogo}
                  alt="ExperimentLabsLogo"
                />
                <h1>Experiment Labs</h1>
              </div>
              <div className="mt-[20px]">
                <h1 className=" text-[30px] font-[700] tracking-wide ">
                  Welcome Back
                </h1>
                <h1 className=" mt-1 text-[20px] font-[500] text-[#3F3F3F] ">
                  Welcome back please enter your details
                </h1>
              </div>
              <div className=" my-[25px] flex flex-col ">
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
                <p className="text-[#737373] font-[500] text-[16px] text-center my-[20px] ">
                  or login with Google Account
                </p>
                <button className="py-[8px] px-[10px] border-[1px] border-[#C9C9C9] flex items-center justify-center ">
                  <img src={GoogleIcon} alt="GoogleIcon" /> Continue with google
                </button>
                <div className="mt-[50px]">
                  <button
                    type="submit"
                    className="py-[15px] text-white text-[20px] font-[500] w-full px-[10px] border-[1px] border-[#C9C9C9] bg-[#1976D2] flex items-center justify-center mb-[20px] "
                  >
                    Login
                  </button>
                  <button className="py-[15px] text-[#737373] text-[20px] font-[500 w-full px-[10px] border-[1px] border-[#C9C9C9] flex items-center justify-center ">
                    Don't have account(Sign up)
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DialogLayout>
    </div>
  );
};

export default LoginAndRegisterForm;
