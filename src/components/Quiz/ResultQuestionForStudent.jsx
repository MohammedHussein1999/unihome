import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import commentIcon from "../../images/comment-icon.png";

export default function ResultQuestionForStudent() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://unih0me.com/api/")
      .then((response) => {
        console.log(response);
        setResults(response.data);
      })
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="w-full md:w-[550px] lg:w-[750px] xl:w-[900px]">
        <div className="mb-6">
          <h2 className="text-6xl font-light font-[Jomhuria-R]">Result :</h2>
        </div>
        {results?.map((result, index) => (
          <div key={index} className="py-4 border-b-2 border-black">
            {/* Date of the question */}
            <div>
              <p className="ms-2 px-2 pt-1 rounded-t-md shadow-md shadow-black w-fit">
                Date: {new Date(result.date).toLocaleDateString()}
              </p>
            </div>

            {/* Header of the question */}
            <div className="w-full max-w-4xl bg-white rounded-md cardShadow p-6 mb-5">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={commentIcon}
                    alt="comment icon"
                    className="w-6 h-6"
                  />
                  <h4 className="text-lg font-semibold">
                    Question {index + 1}
                  </h4>
                </div>
                <div className="flex items-center space-x-2">
                  {result.isCorrect ? (
                    <span className="text-green-500 font-bold">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold">
                      <FaTimes />
                    </span>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {result.score}/5 points
                  </span>
                </div>
              </div>

              {/* Question */}
              <p className="text-gray-700 mb-4">{result?.questionText}</p>

              {/* Answer choices */}
              <div className="space-y-2">
                {result?.answers?.map((answer) => (
                  <div
                    key={answer.choice}
                    className={`border-2 rounded-md flex justify-between items-center ${
                      answer?.isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } `}
                  >
                    <span className="p-3 border-e-2">{answer.choice}</span>
                    <p className="flex-grow px-4">{answer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
