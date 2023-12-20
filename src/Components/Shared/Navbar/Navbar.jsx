import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/UpdatedHome/logo.png";
import DialogLayout from "../DialogLayout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import LoginFormImage from "../../../assets/Home/LoginFormImage.png";
import ExperimentLabsLogo from "../../../assets/Shared/experiment_labs_logo.png";
import GoogleIcon from "../../../assets/Shared/icon_google.png";

const Navbar = () => {
  const { user, userInfo, signIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

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

  // responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="bg-[#4250AC]  flex items-center justify-between px-2 lg:px-[40px] py-[11px]">
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
      <div className={isMobile ? 'w-6/12 mx-auto flex gap-[8px] items-center' : 'w-8/12 mx-auto lg:w-full mt-2 lg:mt-0 flex gap-[13px] items-center'}>
        <img src={logo} alt="icon" />
        <h1 className="text-[15px] md:text-base font-bold text-[#fff]">Experiment labs</h1>
      </div>
      <div className={isMobile ? ' mt-5 flex gap-2' : 'lg:w-full mt-2 lg:mt-0 flex justify-end gap-[13px] items-center'}>
        <button
          className="text-[12px] lg:text-base font-bold text-[#3F3F3F] px-3 py-2 lg:px-[18px] lg:py-[10px]"
          style={{
            borderRadius: "24px",
            background: "#F6F7FF",
          }}
        >
          For Business
        </button>
        <button
          onClick={() => setShowLoginForm(true)}
          className="text-[12px] lg:text-base font-bold text-[#3F3F3F] px-3 py-2 lg:px-[18px] lg:py-[10px]"
          style={{
            borderRadius: "24px",
            background: "#FB9700",
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
