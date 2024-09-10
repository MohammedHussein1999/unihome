import { TERipple } from "tw-elements-react";
import { AiFillMessage } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

export default function InstructorCard({
  firstName,
  lastName,
  students,
  type,
  country,
  Lessons,
  img,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" min-w-80 w-4/5  bg-[#eee] p-3 m-5 hover:cursor-pointer flex justify-between items-center text-base  flex-col flex-nowrap    gap-5   rounded-lg   shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="  ">
        <img src={img} className="w-32 rounded-full" alt="Avatar" />
      </div>

      <h2 className=" font-bold space-x-2">
        <span className="colorAbout">
          {firstName} {lastName}
        </span>
        <div className="rating inline rating-xs">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </h2>
      <div className="flex font-bold flex-row justify-between w-full px-5  ">
        <div className="flex flex-col gap-y-3">
          <span className="colorAbout bg-[#dadada] p-2 rounded-md">
            {type} : {country}
          </span>
          <span className="colorAbout bg-[#dadada] p-2 rounded-md">
            From : {country}
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="colorAbout bg-[#dadada] p-2 rounded-lg">
            Lessons : {Lessons}
          </span>
          <span className="colorAbout bg-[#dadada] p-2 rounded-md">
            Students : {students}
          </span>
        </div>
      </div>
      <div className="max-w-96">
        <p className={`text-[#6c6c6c] ${isExpanded ? "" : "line-clamp-3"}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit error totam, assumenda, soluta beatae, aperiam facere
          voluptatem qui reiciendis nulla laudantium quia sint sapiente eos
          officia exercitationem impedit optio illo?
        </p>
        <button
          className="ext-blue-500 mt-2 text-blue-600"
          onClick={toggleReadMore}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <TERipple className=" flex flex-row flex-nowrap gap-2">
        <button type="button" className=" buttonIn ">
          <FaRegCalendarAlt className="inline text-xl text-white" />
          <span>AvailAboilIty</span>
        </button>
        <button
          type="button"
          className=" space-x-2  rounded-md  px-6 pb-2 pt-2.5 hover:bg-[#FF911A] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-600"
        >
          <AiFillMessage className="inline text-xl text-white" />
          <span>Message</span>
        </button>
      </TERipple>
    </div>
  );
}
