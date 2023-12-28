import React, { useEffect, useState } from "react";
import logo from "../../../assets/UpdatedHome/logo.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoginAndRegisterForm from "../LoginAndRegisterForm";
import { Helmet } from "react-helmet";
// import DynamicFavicon from "../../../DynamicFavicon";

const Navbar = () => {
  const { id } = useParams();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [organizationInfo, setOrganizationInfo] = useState({});

  if (!id) localStorage.setItem("orgId", "");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/organizations/${id}`)
      .then((org) => {
        setOrganizationInfo(org?.data);
        if (org?.data?._id) localStorage.setItem("orgId", org?.data?._id);
      })
      .catch((error) => console.error(error));
  }, [id]);

  // responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="sticky top-0 bg-[#4250AC] flex items-center justify-between px-2 lg:px-[40px] py-[11px] z-[1000]">
      {organizationInfo?.orgName && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{organizationInfo?.orgName}</title>
        </Helmet>
      )}
      {/* <DynamicFavicon /> */}
      <LoginAndRegisterForm
        setShowLoginForm={setShowLoginForm}
        showLoginForm={showLoginForm}
      />
      <div
        className={
          isMobile
            ? "w-6/12 mx-auto flex gap-[8px] items-center"
            : "w-8/12 mx-auto lg:w-full mt-2 lg:mt-0 flex gap-[13px] items-center"
        }
      >
        {id ? (
          <img
            className="max-w-[150px]"
            src={organizationInfo?.orgLogo}
            alt="icon"
          />
        ) : (
          <>
            <img src={logo} alt="icon" />
            <h1 className="text-[15px] md:text-base font-bold text-[#fff]">
              Experiment labs
            </h1>
          </>
        )}
      </div>
      <div
        className={
          isMobile
            ? "  flex gap-2"
            : "lg:w-full mt-2 lg:mt-0 flex justify-end gap-[13px] items-center"
        }
      >
        <button
          onClick={() => setShowLoginForm(true)}
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
