import React, { useState, useEffect } from "react";
import liveStream from "../../images/liveStream.png";
import { FaEye, FaLink } from "react-icons/fa6";
import { MdOutlineComment } from "react-icons/md";

const LiveStreamingPage = () => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [countdown, setCountdown] = useState(10); // Countdown in seconds

  // Countdown logic
  useEffect(() => {
    // Disable outside scroll when component mounts
    document.body.style.overflow = "hidden";

    // Clean up: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setSessionStarted(true); // Start session when countdown reaches 0
    }
  }, [countdown]);

  return (
    <div className="fixed inset-0 bg-[#0009] text-gray-800 z-50 flex flex-col lg:flex-row overflow-y-auto">
      {/* Main Content Area */}
      <main className="flex-grow flex justify-center items-center p-0 lg:p-6">
        <div className="bg-transparent w-full h-full rounded-none lg:rounded-lg relative">
          <div className="w-full h-full">
            {/* Session Start Background */}
            {!sessionStarted && (
              <div className="absolute inset-0 bg-black bg-opacity-50 lg:rounded-lg rounded-none flex flex-col items-center justify-center text-white">
                <h3 className="text-xl lg:text-3xl font-bold mb-4">
                  Session Starts In
                </h3>
                <div className="text-2xl lg:text-4xl font-mono">
                  {countdown > 0 ? countdown : "Starting..."}
                </div>
              </div>
            )}

            {/* Video Placeholder */}
            <div className="h-[67vh] lg:h-full bg-gray-200 rounded-lg">
              {sessionStarted ? (
                <video
                  controls
                  className="w-full h-full rounded-lg shadow-lg shadow-black"
                >
                  <source src="stream.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full rounded-lg bg-gray-400">
                  <img
                    src={liveStream}
                    alt="live"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div> // Placeholder background for the video
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Chat Section */}
      <aside className="w-full lg:w-1/4 bg-white p-4 lg:p-6 lg:rounded-s-3xl rounded-s-none shadow-lg h-full">
      <div className="my-3 flex justify-center">
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
              <span>:</span>
              <span className="p-4 mx-1 sm:mx-2 rounded-xl shadow-black shadow-inner ">
                55
              </span>
            </div>
          </div>
        <h3 className="text-xl font-semibold mb-4">Lesson Details:</h3>
        <ul className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700">
              Schedule :{" "}
              <span className="text-black">Sun, August 11, 2024</span>
            </h3>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700">
              Status : <span className="text-black">Booked</span>
            </h3>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700">
              Details : <span className="text-black">60 Minutes Of Lesson</span>
            </h3>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-gray-700 mb-3">Actions</h3>
            <button className="p-3 bg-gray-400 me-3 rounded-full hover:scale-110 transition-all duration-500">
              <FaEye className="text-white" />
            </button>
            <button className="p-3 bg-gray-400 me-3 rounded-full hover:scale-110 transition-all duration-500">
              <MdOutlineComment className="text-white" />
            </button>
            <button className="p-3 bg-gray-400 me-3 rounded-full hover:scale-110 transition-all duration-500">
              <FaLink className="text-white" />
            </button>
          </div>
          <div className="my-3 flex justify-end">
            <button className="flex items-center justify-center text-white text-lg rounded-3xl py-1 px-3 font-bold bg-blue-600 border-b-4 border-blue-800 transition-transform duration-300 hover:border-b-0 hover:translate-y-0.5 active:outline-none active:bg-blue-700 active:scale-95">
              End Lesson
            </button>
          </div>

          {/* Additional chat messages */}
        </ul>
      </aside>
    </div>
  );
};

export default LiveStreamingPage;
