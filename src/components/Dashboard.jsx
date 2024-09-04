import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { FaSheetPlastic } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import Wallet from "./Wallet";

export default function Dashboard() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <>
      <div className=" text-lg font-semibold bg-[#eee] break-after-auto   relative  ">
        {/*      <div className="  mx-3">
          <div className="p-">
            <button className="btn  ml-28 text-sm font-normal  mt-2  bg-white">
              Edit <FaEdit />
            </button>
          </div>
          <div className=" p-5 flex flex-col justify-center  items-center text-center gap-2">
            <div className=" relative flex justify-center items-center bg-[#b6b6b6] w-28  h-28 rounded-full">
              {/* <img src="" /> */}
        {/*  <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                name=""
                id=""
              />
              <FaCamera className=" text-3xl text-blue-900" />
            </div>
            <div className=" space-y-5">
              <h2 className="text-xl font-bold">Student Name</h2>
              <span className=" opacity-35">Phone Number</span>
              <address>Cairo, Egypt</address>
              <address>14:00 (UTC +3:00)</address>
            </div> */}
        {/*  </div>
        </div> */}

        <div className="  flex flex-row  gap-20  ">
          <div className="w-[18vw] m-3 w-max bg-white ">
            <TETabs
              pillsLink
              className=" text-[20px]  flex flex-col  font-bold  "
            >
              <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                className=" text-[20px]  "
                active={basicActive === "tab1"}
              >
                <FaSheetPlastic className=" inline mr-1" />
                Lessons
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                className=" text-[20px]  "
              >
                <FaUser className=" inline mr-1  text-[20px] " />
                Instructors
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab6")}
                className=" text-[20px]  "
                active={basicActive === "tab6"}
              >
                <MdQuiz className=" inline mr-1" />
                Quizes
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab3")}
                className=" text-[20px]  "
                active={basicActive === "tab3"}
              >
                <MdQuiz className=" inline mr-1" />
                Material levels
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab4")}
                className=" text-[20px]  "
                active={basicActive === "tab4"}
              >
                <FaWallet className=" inline mr-1" />
                Wallet
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab5")}
                className=" text-[20px]  "
                active={basicActive === "tab5"}
              >
                <IoMdSettings className=" inline mr-1" />
                Settings
              </TETabsItem>
            </TETabs>
          </div>
          {/* <span className="  left-[18vw] block h-full absolute    border-[#c6c6c6] border-l"></span> */}

          <div>
            <TETabsContent>
              <TETabsPane show={basicActive === "tab1"}>
                Tab 1 content
              </TETabsPane>
              <TETabsPane show={basicActive === "tab2"}>
                Tab 2 content
              </TETabsPane>
              <TETabsPane show={basicActive === "tab3"}>
                Tab 3 content
              </TETabsPane>
              <TETabsPane show={basicActive === "tab4"}>
                <Wallet />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab5"}>
                Tab 5 content
              </TETabsPane>
              <TETabsPane show={basicActive === "tab6"}>
                Tab 6 content
              </TETabsPane>
            </TETabsContent>
          </div>
        </div>
      </div>
    </>
  );
}
