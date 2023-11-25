import React from "react";
import logo from "../assets/logo.svg";

const SidebarLeft = () => {
  return (
    <div>
      <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start bg-slate-700">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>
      <div></div>
    </div>
  );
};

export default SidebarLeft;
