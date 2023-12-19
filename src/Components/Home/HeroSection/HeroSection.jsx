import React, { useContext, useState } from "react";
import HeroSectionImage from "../../../assets/Home/HeroSectionImage.png";
import LoginFormImage from "../../../assets/Home/LoginFormImage.png";
import ExperimentLabsLogo from "../../../assets/Shared/experiment_labs_logo.png";
import GoogleIcon from "../../../assets/Shared/icon_google.png";
import DialogLayout from "../../Shared/DialogLayout";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HeroSection = () => {
  const { user, userInfo, signIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  console.log(userInfo);

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
  const registerUser = (e) => {
    e.preventDefault();
    console.log("something");
    const form = e?.target;
    // const name = form.name.value;
    const userData = {
      email: form.email.value,
      password: form.password.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      phoneCountryCode: form.phoneCountryCode.value,
    };
    console.log(userData);

    createUser(userData.email, userData.password)
      .then(async (result) => {
        const user = result?.user;
        console.log(user);

        const newUser = await axios.post(
          `${import.meta.env.VITE_APP_SERVER_API}/api/v1/users`,
          userData
        );

        console.log(newUser);

        alert("Register successful");
        // setOpen2(false);

        updateUserProfile({
          displayName: user?.firstName,
        });
        // saveUser(email);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className=" w-11/12 mx-auto px-4">
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
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className=" basis-full md:basis-1/2">
          <div>
            <h1 className="font-[700] text-[37px]">
              Create the task which is completed by the students.
            </h1>
            <h3 className="font-[600] text-[24px]">
              “Students who matches industry standards."
            </h3>
          </div>
          <img src={HeroSectionImage} />
        </div>
        <div className="basis-full md:basis-1/2">
          <form
            onSubmit={registerUser}
            className="m-2 border-[#CCC] border-[1px] p-4 rounded-lg flex flex-col tracking-[1.5px] "
          >
            <label className="font-[500] text-[20px] space-x-1 mb-[10px] ">
              Official Email.id
            </label>
            <input
              className="border-[1px] border-[#C2C2C2] rounded-full p-[10px] mb-[20px] "
              type="email"
              name="email"
              placeholder="Write your email"
            />
            <label className="font-[500] text-[20px] space-x-1 mb-[10px] ">
              Password
            </label>
            <input
              className="border-[1px] border-[#C2C2C2] rounded-full p-[10px] mb-[20px] "
              type="password"
              name="password"
              placeholder="Minimum 6 character"
            />
            <div className="flex gap-2 ">
              <div className="basis-1/2">
                <label className="font-[500] text-[20px] space-x-1 mb-[10px] ">
                  First Name
                </label>
                <br />
                <input
                  className="border-[1px] w-full border-[#C2C2C2] rounded-full p-[10px] mb-[20px] "
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                />
              </div>
              <div className="basis-1/2">
                <label className="font-[500] text-[20px] space-x-1 mb-[10px] ">
                  Last Name
                </label>
                <br />
                <input
                  className="border-[1px] w-full border-[#C2C2C2] rounded-full p-[10px] mb-[20px] "
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[500] text-[20px] space-x-1 mb-[10px] ">
                Mobile number
              </label>
              <div className="flex gap-2">
                <select
                  className="border-[1px] border-[#C2C2C2] rounded-full p-[10px] mb-[20px] bg-white "
                  name="phoneCountryCode"
                  id=""
                >
                  <option>91+</option>
                </select>
                <input
                  className="border-[1px] basis-full border-[#C2C2C2] rounded-full p-[10px] mb-[20px] "
                  type="number"
                  name="phone"
                  placeholder="Minimum 6 character"
                />
              </div>
            </div>
            <h3 className="my-[25px] text-center tracking-[1.6px]">
              By clicking on Post for Free, you agree to our{" "}
              <span className="text-[#4555BA] text-center ">
                Term and condition
              </span>
            </h3>
            <button
              type="submit"
              className="w-full py-[15px] px-[10px] text-center text-white rounded-full text-[20px] font-[500] bg-[#3E4DAC]"
            >
              Free Sign up
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowLoginForm(true);
              }}
              className="w-full py-[15px] px-[10px] text-center text-white rounded-full text-[20px] font-[500] bg-[#0A98EA] mt-[25px] "
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
