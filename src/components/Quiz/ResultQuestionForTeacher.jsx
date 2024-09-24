import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck, FaXmark, FaCalendarCheck } from 'react-icons/fa6';
import { HiIdentification } from 'react-icons/hi';
import { GiProgression } from 'react-icons/gi';

export default function ResultQuestionForTeacher() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://unih0me.com/api/') 
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div className="container mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl p-6">
        <div className="w-full md:w-[550px] lg:w-[750px] xl:w-[900px]">
      <div className="mb-6">
        <h2 className="text-6xl font-light font-[Jomhuria-R]">Result :</h2>
      </div>
      {/* Date of the question */}
      <div>
        <p className="ms-2 px-2 pt-1 rounded-t-md shadow-md shadow-black w-fit">
          Date: {new Date().toLocaleDateString()}
        </p>
      </div>
      {/* Table of results */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <FaCalendarCheck className="mr-2" />
                  <span>Date</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <HiIdentification className="mr-2 text-lg" />
                  <span>Question ID</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <FaCheck className="mr-2" />
                  <span>Status</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <GiProgression className="mr-2" />
                  <span>Points</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map(question => (
              <tr key={question.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-200 transition-all duration-300 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{new Date(question.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">{question.id}</td>
                <td className="px-6 py-4">
                  {question.isCorrect ? (
                    <span className="text-green-500 font-bold">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold">
                      <FaXmark />
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-950">{question.points}</span> / {question.totalPoints} points
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
