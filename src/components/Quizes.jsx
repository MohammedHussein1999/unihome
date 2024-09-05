import React from "react";
import comment from "../../src/images/comment-icon.png";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function QuizResult() {
  return (
    <>
      {/* titel of component */}
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Quizes</h2>
        </div>

        {/* card of question */}
        <div className="py-3 border-black border-b-2">
          {/* date of add question */}
          <div>
            <p>Date: April 9, 2025</p>
          </div>

          {/* header of qustion */}
          <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-6 mb-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={comment} alt="comment icon" className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Question 1</h4>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">
                  <FaXmark />
                </span>
                <span className="text-sm font-medium text-gray-700">
                  0/1 points
                </span>
              </div>
            </div>

            {/* qustion */}

            <p className="text-gray-700 mb-4">
              What was the important contribution to microbiology of Anton Van
              Leeuwenhoek in the 1600s?
            </p>

            {/* answer choices */}
            <div className="space-y-2">
              {/* correct choice */}
              <div className="border-2 border-green-500 rounded-md flex justify-between items-center bg-green-50">
                <span className="p-3 border-e-2">A</span>
                <p className="flex-grow px-4">
                  He was the first to observe microorganisms.
                </p>
              </div>

              {/* normal choice */}
              <div className="border-2 border-gray-300 rounded-md flex justify-between items-center">
                <span className="p-3 border-e-2">B</span>
                <p className="flex-grow px-4">
                  He was the first to show that a disease could be caused by a
                  microorganism.
                </p>
              </div>

              {/* normal choice */}
              <div className="border-2 border-gray-300 rounded-md flex justify-between items-center">
                <span className="p-3 border-e-2">C</span>
                <p className="flex-grow px-4">
                  He disproved the theory of spontaneous generation of
                  microorganisms.
                </p>
              </div>

              {/* wrong choice */}
              <div className="border-2 border-red-500 rounded-md flex justify-between items-center bg-red-50">
                <span className="p-3 border-e-2">D</span>
                <p className="flex-grow px-4">
                  He was the first to describe the process of fermentation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************** */}

        {/* card of question */}
        <div className="py-3 border-black border-b-2">
          {/* date of add question */}
          <div>
            <p>Date: April 9, 2025</p>
          </div>

          {/* header of qustion */}
          <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-6 mb-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={comment} alt="comment icon" className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Question 2</h4>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 font-bold">
                  <FaCheck />
                </span>
                <span className="text-sm font-medium text-gray-700">
                  1/1 points
                </span>
              </div>
            </div>

            {/* qustion */}
            <p className="text-gray-700 mb-4">
              What was the important contribution to microbiology of Anton Van
              Leeuwenhoek in the 1600s?
            </p>

            {/* answer choices */}
            <div className="space-y-2">
              {/* correct choice */}
              <div className="border-2 border-green-500 rounded-md flex justify-between items-center bg-green-50">
                <span className="p-3 border-e-2">A</span>
                <p className="flex-grow px-4">
                  He was the first to observe microorganisms.
                </p>
              </div>

              {/* normal choice */}
              <div className="border-2 border-gray-300 rounded-md flex justify-between items-center">
                <span className="p-3 border-e-2">B</span>
                <p className="flex-grow px-4">
                  He was the first to show that a disease could be caused by a
                  microorganism.
                </p>
              </div>

              {/* normal choice */}
              <div className="border-2 border-gray-300 rounded-md flex justify-between items-center">
                <span className="p-3 border-e-2">C</span>
                <p className="flex-grow px-4">
                  He disproved the theory of spontaneous generation of
                  microorganisms.
                </p>
              </div>

              {/* normal choice */}
              <div className="border-2 border-gray-300 rounded-md flex justify-between items-center">
                <span className="p-3 border-e-2">D</span>
                <p className="flex-grow px-4">
                  He was the first to describe the process of fermentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
