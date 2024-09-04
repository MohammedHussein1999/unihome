import CardAbout from "./CardAbout";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";

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
      className={`${className}  custom-next-arrow`}
      style={{ ...style, display: "block " }}
      onClick={onClick}
    />
  );
}
export default function About() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
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
    <div>
      <div className=" flex justify-center text-center  flex-nowrap flex-col items-center m-auto w-[70%] ">
        <h2 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          What do students say about
          <span className=" text-[#FF911A] font-bold"> UniHome </span>?
        </h2>
        <p className="text-[#9c9c9c]">
          We help you stimulate your ambition and achieve your goals in an
          effective and motivating way and make you stand out among others
        </p>
      </div>
      <div className="slider-container  p-10">
        <Slider
          {...settings}
          className="flex  flex-row flex-nowrap justify-between"
        >
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
          <div>
            <h3>
              <CardAbout />
            </h3>
          </div>
        </Slider>
      </div>
      <div className="flex m-auto text-2xl items-center justify-center w-full flex-nowrap">
        <div className="p-5">
          <img
            className=" w-96"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHcZPvy01X61yORcPE1zIvf7xnqkxS0-b8g&s"
            alt="w"
          />
        </div>
        <div className="w-[60%]">
          <h3 className="mb-2 mt-62 text-3xl text-start font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Why <span className=" text-[#FF911A] font-bold"> UniHome </span>?
          </h3>
          <div>
            <h4>
              <span>
                <FaCheckCircle className=" inline colorPAbout" />
              </span>
              Untraditional Interactive Explanation! Untraditional Interactive
              Explanation!
            </h4>
            <p className="bgColorPAbout">
              We provide an interactive and fun learning experience that differs
              from the traditional learning routine.
            </p>
            <h4>
              <span>
                <FaCheckCircle className=" inline colorPAbout" />
              </span>
              Experienced and qualified professors
            </h4>
            <p className="bgColorPAbout">
              Our team includes distinguished professors and experts in their
              fields, ensuring the delivery of high-quality content.
            </p>
            <h4>
              <span>
                <FaCheckCircle className=" inline colorPAbout" />
              </span>
              Interact with professors directly
            </h4>
            <p className="bgColorPAbout">
              It provides teachers with all their needs, such as the electronic
              whiteboard, to add explanations, files and folders specific to
              each lesson and each subject, to add any enrichments or
              attachments to the subject, etc.
            </p>
            <h4>
              <span>
                <FaCheckCircle className=" inline colorPAbout" />
              </span>
              questions & answers special section
            </h4>
            <p className="bgColorPAbout">
              It helps parents know the student’s level and how to develop it
              and talk to teachers about their level.
            </p>
          </div>
          <div>
            <button class="btn mt-7 w-36 text-white bg-[#FF9800]">
              Apply New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
