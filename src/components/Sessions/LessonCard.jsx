import React, { useState, useEffect } from "react";
import "./Sesssion.css";
import { FaLink } from "react-icons/fa6";
import { ImLoop2 } from "react-icons/im";
import { MdAirplay } from "react-icons/md";
import Avatar from "../../images/profileImage.png";
import { AiOutlineMessage } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LessonCard = (Session) => {
  let dateSection = new Date(`${Session.Session.date} ${Session.Session.time}`);
  let dateNew = new Date().getTime();
  let DateAll = dateSection - dateNew;
  const [timeLeft, setTimeLeft] = useState(DateAll > 0 ? DateAll : 0);

  // console.log(Session);
  // Countdown effect

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1000; // طرح 1000 مللي ثانية
          } else {
            clearInterval(timerId);
            return 0; // تأكد من عدم الذهاب إلى قيم سالبة
          }
        });
      }, 1000);

      return () => clearInterval(timerId); // تنظيف المؤقت عند الخروج
    }
  }, [timeLeft]);

  // Convert time left in seconds to days, hours, minutes, and seconds

  const days = Math.floor(timeLeft / (1000 * 24 * 60 * 60));
  const hours = Math.floor(
    (timeLeft % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return (
    <div id={Session.Session.id} className="p-4">
      <div className="bg-white rounded-lg shadow-md px-6 py-10 mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl mt-6 relative">
        {/* Date Styled Inside the Card */}
        <div className="absolute top-0 left-0 p-2 bg-gray-200 text-gray-600 rounded-br-lg shadow-md">
          <p className="text-sm font-semibold">Date: {Session.Session.date}</p>
        </div>

        {/* User Info & Countdown Timer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
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
                {Session.StudentData.country}
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="my-3 flex justify-center">
            <div className="mx-1 sm:mx-2 py-4 bg-white text-black rounded-lg text-md w-full sm:w-auto flex items-center justify-center space-x-2">
              <span className="shadow_in">{days}</span>
              <span className="mx-1 sm:mx-2">:</span>
              <span className="shadow_in">{hours}</span>
              <span className="mx-1 sm:mx-2">:</span>
              <span className="shadow_in">{minutes}</span>
              <span className="mx-1 sm:mx-2">:</span>
              <span className="shadow_in">{seconds}</span>
              {/* <span className="shadow_in"> {Session.Session.time}</span> */}
            </div>
          </div>
        </div>

        {/* Scheduled Actions */}
        <div className="text-center mb-6 bg-gray-100 p-3 rounded-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center">
            <h3 className="text-gray-500 text-sm lg:text-base">Details</h3>
            <p className="text-gray-800 font-medium">
              <span className="text-black font-bold">
                {Session.Session.date}
              </span>
              
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-500 text-sm lg:text-base">Status</h3>
            {Session.Session.status === 0 ? (
              <p className=" text-green-500 font-bold">Available</p>
            ) : (
              <p className="text-black font-bold"></p>
            )}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm lg:text-base mb-3">Actions</h3>
            <div className="flex flex-wrap justify-center space-x-2">
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <MdAirplay className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <AiOutlineMessage className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-orange-500 rounded-full hover:scale-110 transition-all duration-500">
                <FaLink className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-red-500 rounded-full hover:scale-110 transition-all duration-500">
                <RiCloseLargeFill className="text-white" />
              </button>
              <button className="p-2 sm:p-3 bg-yellow-400 rounded-full hover:scale-110 transition-all duration-500">
                <ImLoop2 className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Join Lesson Button */}
        {console.log(Session.Session.id)}
        <Link
          to={`/Session/${Session.Session.id}`}
          className="my-3 flex justify-end h-11"
        >
          <button className="flex items-center justify-center text-white text-lg rounded-3xl py-2 px-4 font-bold bg-blue-600 border-b-4 border-blue-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-blue-700 active:scale-95">
            Join Lesson
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
