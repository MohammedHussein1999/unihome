import React, { useEffect, useReducer, useState } from "react";
import {
  FaStar,
  FaFlag,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLanguage,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineMessage, AiOutlineBook } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Schedule from "./Schedule";
import Reviews from "./Reviews/Reviews";

const TutorCard = () => {
  const [teacher, setTeacher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //* Refresh Component After make a change
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);
  const teacher_id = useParams().teacher_id;
  // const token = JSON.parse(localStorage.getItem("user")).access_token;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://unih0me.com/api/teacher/${teacher_id}`
        );
        const data = await response.json();
        setTeacher(data?.data?.user);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [teacher_id, update]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  let embedLink = teacher?.youtube_link?.replace("watch?v=", "embed/");

  console.log(teacher);

  return (
    <>
      <div className="max-w-3xl p-3 mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-lg sm:p-4 md:p-5 lg:p-6 animate-fade-in sm:my-6 md:my-8">
        <div className="mt-2 mb-5 videoInstractor d-flex justify-content-center">
          <iframe
            width="700"
            height="350"
            src={embedLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col mb-4 border-b lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <Link>
              <img
                className="object-cover w-24 h-24 mb-4 rounded-sm shadow-md sm:w-28 sm:h-28 md:w-32 md:h-32 lg:mb-0"
                src={teacher?.image}
                alt="Tutor"
              />
            </Link>
            <div className="w-full lg:ml-0 lg:mr-6">
              <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
                <div className="text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center mt-3 lg:justify-start">
                    <span className="px-2 py-1 mb-2 mr-2 text-xs text-white bg-green-500 rounded-md lg:mb-0">
                      FEATURED
                    </span>
                    <h2 className="text-xl font-bold sm:text-2xl">
                      {teacher?.name}
                    </h2>
                    <FaFlag className="ml-2 text-blue-500" />
                  </div>
                  <p className="flex items-center justify-center mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
                    <FaChalkboardTeacher className="mr-1" /> Egypt
                  </p>
                  <p className="flex items-center justify-center mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
                    <FaUserGraduate className="mr-1" /> Lessons{" "}
                    {teacher?.lessons} Students {teacher?.students}
                  </p>
                  <p className="flex items-center justify-center mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
                    <FaLanguage className="mr-1" /> {teacher?.languages}
                  </p>
                </div>
                <div className="mt-3 text-center lg:text-right lg:mt-0">
                  {/* <div className="flex items-center justify-center lg:justify-end">
                  {[...Array(teacher?.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <span className="ml-1 text-lg font-bold sm:text-xl">{teacher?.rating}</span>
                </div> */}
                  {/* <p className="text-xs text-gray-500 sm:text-sm">Ratings: {teacher?.ratingsCount}</p>
                <p className="mt-1 text-lg font-bold sm:text-xl sm:mt-2">
                  £{teacher?.rate} per hour
                </p> */}
                </div>
              </div>
              <p className="mt-3 text-sm text-center text-gray-700 sm:text-base sm:mt-4 lg:text-left">
                {teacher?.description}
              </p>
              <div className="flex items-center justify-center mt-3 lg:justify-start sm:mt-4">
                <FaTwitter className="mr-3 text-blue-500 cursor-pointer sm:mr-4" />
                <FaLinkedin className="mr-3 text-blue-700 cursor-pointer sm:mr-4" />
                <FaFacebook className="text-blue-600 cursor-pointer" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 sm:mt-5 md:mt-6 sm:flex sm:flex-wrap sm:gap-3 md:gap-4">
                <Link to={`/calendar/${teacher_id}`}>
                  <button className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-green-500 rounded-lg sm:px-4 sm:text-base hover:scale-105">
                    <AiOutlineBook className="mr-1" />
                    Book Now
                  </button>
                </Link>
                <Link to={`/chat/${teacher_id}`}>
                  <button className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-blue-500 rounded-lg sm:px-4 sm:text-base hover:scale-105">
                    <AiOutlineMessage className="mr-1" />
                    Message
                  </button>
                </Link>
                {/* <button className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-orange-500 rounded-lg sm:px-4 sm:text-base hover:scale-105">
                <AiOutlineEdit className="mr-1" />
                Edit
              </button> */}
              </div>
              <div className="mt-6 sm:mt-7 md:mt-8">
                <h3 className="mb-3 text-base font-semibold text-center sm:text-lg sm:mb-4 lg:text-left">
                  Reviews
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {teacher?.reviews?.map((review, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-100 rounded-lg shadow-sm sm:p-4"
                    >
                      <div className="flex items-center justify-center lg:justify-start">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-sm text-yellow-500 sm:text-base"
                          />
                        ))}
                        <span className="ml-2 text-xs font-medium sm:text-sm">
                          by {review.name}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-center text-gray-700 sm:text-sm lg:text-left">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Schedule
          events={teacher?.sessions}
          forceUpdate={forceUpdate}
          teacher={teacher}
        />
        <Reviews teacher={teacher} />
        {console.log(teacher)};
      </div>
    </>
  );
};

export default TutorCard;
