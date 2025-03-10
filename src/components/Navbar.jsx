import React from "react";
import { BsCameraReels, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="   navbar  md:w-[17%]  md:border-r-1 md:border-r-gray-500 md:h-screen md:flex-col md:flex md:px-6 py-2">

      <div className="mobileNav md:hidden flex px-4 justify-between ">
        <h1>Pikachu</h1>
        <div className="flex gap-2 t">
        <CiSquarePlus  className="text-white font-bold text-2xl" />
        <CiMenuBurger className="text-white font-bold text-2xl" />
        </div>
      </div>
      <h1 className=" hidden md:block text-xl font-bold">Instagram</h1>
      <div className="  allheading md:flex flex-col justify-evenly h-full w-full ">
        <div className=" hidden md:flex items-center gap-4 ">
          <IoHomeOutline />
          <h1>Home</h1>
        </div>
        <div className=" hidden md:flex items-center gap-4 ">
          <CiSearch />
          <h1>Search</h1>
        </div>
        <div className=" hidden md:flex items-center gap-4 ">
          <MdExplore />
          <h1>Explore</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <BsCameraReels />
          <h1>Reel</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <FaMessage />
          <h1>Message</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <IoIosNotifications />
          <h1>Notification</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <MdCreateNewFolder />
          <h1>Create</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <MdSpaceDashboard />
          <h1>Dashboard</h1>
        </div>

        <div className="hidden md:flex items-center gap-4 ">
          <img
            className="w-5 h-5 rounded-full"
            src="https://th.bing.com/th/id/OIP.h7XuXj-4r36swz4TMaKWvAHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
