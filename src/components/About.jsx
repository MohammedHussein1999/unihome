import CardAbout from "./CardAbout";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import hero from "./Assets/images/hero.png"

export default function About() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    arrows: false,
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="flex flex-col md:flex-row m-auto text-2xl items-center justify-center w-full flex-nowrap p-5 md:p-10">
        <div className="p-5 md:w-1/2 lg:w-1/3">
          <img className="w-full md:w-96" src={hero} alt="hero" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-5">
          <h3 className="mb-4 mt-6 text-2xl md:text-3xl text-center md:text-start font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Why{" "}<span className="text-orange-500 font-bold"><span className="text-blue-600">Uni</span>Home</span>?
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center text-gray-800 font-bold">
                <FaCheckCircle className="mr-2 colorPAbout" />
                Untraditional Interactive Explanation!
              </h4>
              <p className="bgColorPAbout">
                We provide an interactive and fun learning experience that differs from the traditional learning routine.
              </p>
            </div>
            <div>
              <h4 className="flex items-center text-gray-800 font-bold">
                <FaCheckCircle className="mr-2 colorPAbout" />
                Experienced and qualified professors
              </h4>
              <p className="bgColorPAbout">
                Our team includes distinguished professors and experts in their fields, ensuring the delivery of high-quality content.
              </p>
            </div>
            <div>
              <h4 className="flex items-center text-gray-800 font-bold">
                <FaCheckCircle className="mr-2 colorPAbout" />
                Interact with professors directly
              </h4>
              <p className="bgColorPAbout">
                It provides teachers with all their needs, such as the electronic whiteboard, to add explanations, files and folders specific to each lesson and each subject, to add any enrichments or attachments to the subject, etc.
              </p>
            </div>
            <div>
              <h4 className="flex items-center text-gray-800 font-bold">
                <FaCheckCircle className="mr-2 colorPAbout" />
                Questions & answers special section
              </h4>
              <p className="bgColorPAbout">
                It helps parents know the student’s level and how to develop it and talk to teachers about their level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="text-center mx-auto w-full max-w-4xl px-4">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            What do students say about{" "}
            <span className="text-orange-500 font-bold">
              <span className="text-blue-600">Uni</span>Home
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            We help you stimulate your ambition and achieve your goals in an
            effective and motivating way, making you stand out among others.
          </p>
        </div>
        <div className="slider-container mx-auto max-w-6xl px-4">
          <Slider {...settings} className="flex justify-between items-center">
            {/* Render each CardAbout component with a unique key */}
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-4 transition-transform duration-300 hover:scale-105"
                >
                  <div className="h-full bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden p-5">
                    <CardAbout />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>

    </>
  );
}
