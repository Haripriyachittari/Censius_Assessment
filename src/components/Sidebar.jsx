import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { CiDark, CiBrightnessUp } from "react-icons/ci";
import { RxCube } from "react-icons/rx";
import { HiOutlineInbox } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const { open } = props;
  const handleDarkTheme = () => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    setIsDark(!isDark);
  };
  const handleLightTheme = () => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    setIsDark(!isDark);
  };

  console.log(open);
  // fixed bottom-0 right-0 left-0
  return (
    <div
      className={
        open
          ? "hidden md:bg-primary md:flex md:flex-col md:justify-between md:py-8 md:pr-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-7  "
          : "  bg-primary   md:flex md:flex-col justify-between py-8 pr-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-7 "
      }
    >
      <div className="md:mt-[60px]">
        <ul className="flex flex-col ">
          <NavLink to="/">
            <li
              className={
                location.pathname === "/"
                  ? "flex gap-2 items-center p-2 bg-[#2563EB] font-semibold text-white mb-2  rounded-tr-md rounded-br-md "
                  : "flex gap-2 items-center p-2 text-[#2563EB] font-semibold  mb-2 rounded-tr-md rounded-br-md "
              }
            >
              <FiUsers className=" font-bold" size={24} />
              Team members
            </li>
          </NavLink>
          <NavLink to="/products">
            <li
              className={
                location.pathname === "/products"
                  ? "flex gap-2 items-center p-2 bg-[#2563EB] font-semibold text-white mb-2  rounded-tr-md rounded-br-md "
                  : "flex gap-2 items-center p-2 text-[#2563EB] font-semibold mb-2 rounded-tr-md rounded-br-md "
              }
            >
              <RxCube className=" font-bold" size={24} />
              Products
            </li>
          </NavLink>
          <NavLink to="/inbox">
            <li
              className={
                location.pathname === "/inbox"
                  ? "flex gap-2 items-center p-2 bg-[#2563EB] font-semibold text-white mb-2   rounded-tr-md rounded-br-md "
                  : "flex gap-2 items-center p-2 text-[#2563EB] font-semibold mb-2 rounded-tr-md rounded-br-md "
              }
            >
              <HiOutlineInbox className="font-bold" size={24} /> Inbox
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="">
        {isDark ? (
          <button
            className="bg-secondary text-primary font-bold text-center gap-2   rounded md:mx-auto p-2 md:w-[100%] flex items-center"
            onClick={handleLightTheme}
          >
            <CiDark className="font-extrabold" size={24} />
            Dark Mode
          </button>
        ) : (
          <button
            className="bg-secondary text-primary   font-bold text-center gap-2   rounded md:mx-auto p-2 md:w-[100%] flex items-center"
            onClick={handleDarkTheme}
          >
            <CiBrightnessUp className="font-extrabold" size={24} />
            Light mode
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
