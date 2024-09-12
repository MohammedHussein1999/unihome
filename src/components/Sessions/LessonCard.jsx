import React from "react";
import { FaEye, FaLink } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { ImLoop2 } from "react-icons/im";
import { MdOutlineComment } from "react-icons/md";
import  Avatar  from "../../images/profileImage.png";

const LessonCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl">
      {/* User Info & Countdown Timer */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        {/* User Info */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div>
            {/* Profile Avatar */}
            <img
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
              src={Avatar} // Placeholder for Avatar
              alt="User Avatar"
            />
          </div>
          <div>
            {/* User Name & Country */}
            <h2 className="text-gray-800 font-bold text-lg">Ibrahim</h2>
            <p className="text-gray-500 text-sm">Egypt</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="my-3 flex justify-center">
          <div cla className="mx-1 sm:mx-2"ssName="py-4 bg-white text-black rounded-lg text-md w-full sm:w-fit flex items-center justify-center space-x-2">
            <span className="p-2 sm:p-4 rounded-xl shadow-black shadow-inner">
              10
            </span>
            <span className="mx-1 sm:mx-2">:</span>
            <span className="p-2 sm:p-4 rounded-xl shadow-black shadow-inner">
              20
            </span>
            <span className="mx-1 sm:mx-2">:</span>
            <span className="p-2 sm:p-4 rounded-xl shadow-black shadow-inner">
              44
            </span>
            <span className="mx-1 sm:mx-2">:</span>
            <span className="p-2 sm:p-4 rounded-xl shadow-black shadow-inner">
              55
            </span>
          </div>
        </div>
      </div>

      {/* Schedule and Status */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center mb-6 bg-gray-100 p-3 rounded-lg">
        <div className="text-center mb-4 sm:mb-0">
          <h3 className="text-gray-500 text-sm">Schedule</h3>
          <p className="text-gray-800 font-medium">
            Sunday, August 11, 2024 English 60 Minutes
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-500 text-sm">Status</h3>
          <p className="text-gray-800 font-medium">Programming</p>
        </div>
      </div>

      {/* Scheduled Actions */}
      <div className="text-center mb-6 bg-gray-100 p-3 rounded-lg">
        <h3 className="text-gray-500 text-sm mb-3">Actions</h3>
        <div className=" flex flex-wrap justify-center">
          <button className="p-2 sm:p-3 bg-gray-400 me-2 mb-2 rounded-full hover:scale-110 transition-all duration-500">
            <FaEye className="text-white" />
          </button>
          <button className="p-2 sm:p-3 bg-gray-400 me-2 mb-2 rounded-full hover:scale-110 transition-all duration-500">
            <MdOutlineComment className="text-white" />
          </button>
          <button className="p-2 sm:p-3 bg-gray-400 me-2 mb-2 rounded-full hover:scale-110 transition-all duration-500">
            <FaLink className="text-white" />
          </button>
          <button className="p-2 sm:p-3 bg-gray-400 me-2 mb-2 rounded-full hover:scale-110 transition-all duration-500">
            <GiCancel className="text-white" />
          </button>
          <button className="p-2 sm:p-3 bg-gray-400 me-2 mb-2 rounded-full hover:scale-110 transition-all duration-500">
            <ImLoop2 className="text-white" />
          </button>
        </div>
      </div>

      {/* Join Lesson Button */}
      <div className="my-3 flex justify-end h-11">
        <button className="flex items-center justify-center text-white text-lg rounded-3xl py-2 px-4 font-bold bg-blue-600 border-b-4 border-blue-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-blue-700 active:scale-95">
          Join Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
