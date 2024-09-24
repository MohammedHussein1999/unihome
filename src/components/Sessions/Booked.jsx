import React from "react";
import Avatar from "../../images/profile.jpg";
import { AiOutlineMessage } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { TbEyeSearch } from "react-icons/tb";
import countries from "../flag.json";

// Utility function to convert 24-hour time to 12-hour format with AM/PM
const convertTo12HourFormat = (time24) => {
  let [hour, minute] = time24.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert '0' hour to '12' for AM
  // Pad single-digit hour with leading zero
  const hour12 = hour.toString().padStart(2, "0");
  return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
};

// Utility function to add one hour to a 24-hour time string
const addOneHour = (time24) => {
  let [hour, minute] = time24.split(":").map(Number);
  hour = (hour + 1) % 24; // Ensure the hour wraps around if it exceeds 23
  // Pad single-digit hour with leading zero
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
};

const Booked = (Session) => {
  const getCountryFlag = (countryName) => {
    const country = countries.find((c) => c.country === countryName);
    return country ? country.flag : ""; // Return the flag or an empty string if not found
  };

  const dateSession = new Date(Session.Session.session_table.created_at);
  const date = dateSession.toLocaleDateString();

  // Format time in 12-hour format for both start and end times
  const startTime = Session.Session.session_table.time;
  const endTime = addOneHour(startTime);
  const formattedStartTime = convertTo12HourFormat(startTime);
  const formattedEndTime = convertTo12HourFormat(endTime);

  if (Session.Session.status !== "booked") {
    return null;
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md px-6 py-10 mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl mt-6 relative">
        {/* Date Styled Inside the Card */}
        <div className="absolute top-0 left-0 p-2 bg-gray-200 text-gray-600 rounded-br-lg shadow-md">
          <p className="text-sm font-semibold">Date: {date}</p>
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
              <h2 className="text-gray-800 font-bold text-sm sm:text-md lg:text-2xl">
                {Session.Session?.teacher_id?.firstname} {Session.Session?.teacher_id?.lastname}
              </h2>
              <p className="text-gray-500 text-sm lg:text-base">
                <span className="mr-1">{getCountryFlag(Session.Session?.teacher_id?.country)}</span>
                {Session.Session?.teacher_id?.country}
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
                    Time: {formattedStartTime} <p>to: {formattedEndTime}</p>
                  </span>
                </p>
                <p className="text-gray-800 font-medium">
                  Date: {Session.Session.session_table.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Actions */}
        <div className="text-center mb-6 bg-gray-100 p-3 rounded-lg flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
          <div className="text-center">
            <h3 className="text-gray-500 text-sm lg:text-base">Status</h3>
            <p className=" text-green-500 font-bold">{Session.Session.status}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm lg:text-base mb-3">Actions</h3>
            <div className="flex flex-wrap justify-center space-x-2">
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <TbEyeSearch className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <AiOutlineMessage className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <GiNotebook className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;
