import React from "react";
import { BsPlus } from "react-icons/bs";

const Highlights = () => {
  return <div className="w-full h-12 md:px-36 px-4 py-2 flex items-center mb-5">
    <div className="circle rounded-full w-12 h-12  flex items-center justify-center  border-2 border-gray-500">
        <BsPlus className="text-4xl text-gray-400"/>
    </div>
  </div>
};

export default Highlights;
