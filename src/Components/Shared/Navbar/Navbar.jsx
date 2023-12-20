import React from "react";
import logo from "../../../assets/UpdatedHome/logo.png"


const Navbar = () => {
    return (
        <div className="bg-[#4250AC] flex justify-between px-[40px] py-[11px]">
            <div className="flex items-center gap-2">
                <img src={logo} alt="icon" />
                <h1 className="text-base font-bold text-[#fff]">Experiment labs</h1>
            </div>
            <div className="flex gap-[13px] items-center">
                <button
                className="text-base font-bold text-[#3F3F3F] px-[18px] py-[10px]"
                    style={{
                        borderRadius: "24px",
                        background: "#F6F7FF"
                    }}
                >
                    For Business
                </button>
                <button
                className="text-base font-bold text-[#fff] px-[18px] py-[10px]"
                    style={{
                        borderRadius: "24px",
                        background: "var(--Secontary-color, #007AD3)"

                    }}
                >
                    Log in
                </button>
            </div>
        </div>
    );
};

export default Navbar;


