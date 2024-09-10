import React, { lazy, Suspense, useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import Test from "./Test";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function SliderTeatcher() {
  const InstructorCard = lazy(() => import("./InstructorCard"));
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiData = async () => {
    try {
      const res = await axios.get("https://unih0me.com/api/teachers");
      setDataApi(res.data.data.teachers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false); // Ensure loading state is set to false even if an error occurs
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    apiData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    adaptiveHeight: true,
    swipeToSlide: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-10">
      {loading ? (
        <div className="w-full flex justify-evenly items-center my-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Test />
            <Test />
            <Test />
            <Test />
          </Suspense>
        </div>
      ) : (
        <Slider {...settings}>
          {dataApi.map((e) => (
            <Link
              to="/TutorCard"
              key={e.id}
              className="transform my-20 hover:scale-105 translate duration-200 ease-in"
            >
              <Suspense fallback={<div>Loading Card...</div>}>
                <InstructorCard
                  img={e.image}
                  firstName={e.firstname}
                  lastName={e.lastname}
                  country={e.country}
                  students={e.students.length}
                  Lessons={e.sessions.length}
                  type={e.type}
                />
              </Suspense>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
}
