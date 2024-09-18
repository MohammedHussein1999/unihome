import React from "react";
import Avatar from "../../images/profileImage.png";
import { AiOutlineMessage } from "react-icons/ai";

const Cancelled = (Session) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md px-6 py-10 mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl mt-6 relative">
        {/* Date Styled Inside the Card */}
        <div className="absolute top-0 left-0 p-2 bg-gray-200 text-gray-600 rounded-br-lg shadow-md">
          <p className="text-sm font-semibold">Date: {Session.Session.date}</p>
        </div>
        {/* User Info & Countdown Timer */}
        <div className="for_book">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div>
              {/* Profile Avatar */}
              <img
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl"
                src={Avatar} // Placeholder for Avatar
                alt="User Avatar"
              />
            </div>
            <div>
              {/* User Name & Country */}
              <h2 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">
                {Session.StudentData.firstname} {Session.StudentData.lastname}
              </h2>
              <p className="text-gray-500 text-sm lg:text-base">
                {" "}
                {Session.StudentData.country}
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="my-3 flex justify-center items-center bg-gray-100 p-4 rounded-lg">
            <div className="text-center flex ">
              <h3 className="text-gray-500 text-sm lg:text-base p-3 flex justify-center items-center">
                Details
              </h3>
              <div className="border-s-2 border-black px-3">
                <p className="text-gray-800 font-medium">
                  <span className="text-black font-bold">
                    Time: {Session.Session.time}
                  </span>
                </p>
                <p className="text-gray-800 font-medium">
                  Date: {Session.Session.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Actions */}
        <div className="text-center mb-6 bg-gray-100 p-3 rounded-lg flex flex-col sm:flex-row justify-evenly items-center space-y-4 sm:space-y-0">
          <div className="text-center">
            <h3 className="text-gray-500 text-sm lg:text-base">Status</h3>
            {Session.Session.status === 0 ? (
              <p className=" text-green-500 font-bold">Cancelled</p>
            ) : (
              <p className="text-black font-bold"></p>
            )}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm lg:text-base mb-3">Actions</h3>
            <div className="flex flex-wrap justify-center space-x-2">
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <AiOutlineMessage className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancelled;
