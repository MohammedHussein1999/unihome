import React, { useEffect } from "react";
import liveStream from "../../images/teacherLive.png";
import { FaLink } from "react-icons/fa6";
import Avatar from "../../images/profileImage.png";
import { AiOutlineMessage } from "react-icons/ai";

const LiveStreamingPage = () => {
  useEffect(() => {
    // Disable outside scroll when component mounts
    document.body.style.overflow = "hidden";

    // Clean up: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0009] text-gray-800 z-50 flex flex-col lg:flex-row overflow-y-auto">
      {/* Main Content Area */}
      <main className="flex-grow flex justify-center items-center p-0 lg:p-6">
        <div className="bg-transparent w-full h-full rounded-none lg:rounded-lg relative">
          <div className="w-full h-full">
            {/* Session Start Background */}
            {/* {!sessionStarted && ( */}
            <div className="absolute inset-0 bg-black bg-opacity-50 lg:rounded-lg rounded-none flex flex-col items-center justify-center text-white">
              <div className="my-3 flex justify-center">
                <div className="py-4 text-white rounded-lg text-md w-fit">
                  <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner bg-[#0005]">
                    10
                  </span>
                  <span>:</span>
                  <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner bg-[#0005]">
                    20
                  </span>
                  <span>:</span>
                  <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner bg-[#0005]">
                    44
                  </span>
                  <span>:</span>
                  <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner bg-[#0005]">
                    55
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center text-white text-lg rounded-3xl py-2 px-4 font-bold bg-blue-600 border-b-4 border-blue-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-blue-700 active:scale-95">
                Start Lesson
              </button>
            </div>

            <div className="h-[67vh] lg:h-full bg-gray-200 rounded-lg">
              <div className="w-full h-full rounded-lg bg-gray-400">
                <img
                  src={liveStream}
                  alt="live"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Section */}
      <aside className="w-full lg:w-1/4 bg-white p-4 lg:p-6 lg:rounded-s-3xl rounded-s-none shadow-lg h-full">
        <ul className="space-y-4">
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
              <h2 className="text-black font-bold text-lg">Teacher</h2>
              <h2 className="text-gray-700 font-bold text-md">Ibrahim Mohamed</h2>
              <p className="text-gray-400 text-sm">Egypt</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Lesson Details:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700">
              Status : <span className="text-black">Available</span>
            </h3>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700">
              Details : <span className="text-black">60 Minutes Of Lesson</span>
            </h3>
          </div>
          <div className="my-2 flex justify-center">
            <div className="py-4 bg-white text-black rounded-lg text-md w-fit">
              <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner ">
                10
              </span>
              <span>:</span>
              <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner ">
                20
              </span>
              <span>:</span>
              <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner ">
                44
              </span>
            </div>
          </div>
          <div className="my-3 flex justify-start items-center gap-3">
            <button className="flex items-center justify-center text-white text-lg rounded-3xl py-1 px-3 font-bold bg-blue-600 border-b-4 border-blue-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-blue-700 active:scale-95">
              End Lesson
            </button>
            <button className="flex items-center justify-center text-white text-lg rounded-3xl py-1 px-3 font-bold bg-green-600 border-b-4 border-green-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-green-700 active:scale-95">
              Create Quiz
            </button>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700 mb-3">Actions</h3>
            <button className="p-3 bg-orange-500 me-3 rounded-full hover:scale-110 transition-all duration-500">
              <AiOutlineMessage className="text-white" />
            </button>
            <button className="p-3 bg-orange-500 me-3 rounded-full hover:scale-110 transition-all duration-500">
              <FaLink className="text-white" />
            </button>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default LiveStreamingPage;
