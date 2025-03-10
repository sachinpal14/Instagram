import React from "react";
import { BsCameraReels } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar  w-[17%] border-r-1 border-r-gray-500 h-screen flex-col flex item px-6 py-2">
     <h1 className="text-xl font-bold">Instagram</h1>
      <div className="allheading flex flex-col justify-evenly h-full w-full ">
        <div className="flex items-center gap-4 ">
          <IoHomeOutline/>
          <h1>Home</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <CiSearch/>
          <h1>Search</h1>
        </div>
        <div className="flex items-center gap-4 ">
         <MdExplore/>
          <h1>Explore</h1>
        </div>
        <div className="flex items-center gap-4 ">
        <BsCameraReels />
          <h1>Reel</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <FaMessage/>
          <h1>Message</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <IoIosNotifications/>
          <h1>Notification</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <MdCreateNewFolder/>
          <h1>Create</h1>
        </div>
        <div className="flex items-center gap-4 ">
          <MdSpaceDashboard/>
          <h1>Dashboard</h1>
        </div>

        <div className="flex items-center gap-4 ">
          <img 
          className="w-5 h-5 rounded-full"
          src="https://th.bing.com/th/id/OIP.h7XuXj-4r36swz4TMaKWvAHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
