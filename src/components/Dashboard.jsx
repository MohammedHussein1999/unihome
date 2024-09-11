import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { FaSheetPlastic } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { MdQuiz } from "react-icons/md";
import { FcQuestions } from "react-icons/fc";
import { FaWallet } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import Wallet from "./Wallet";
import Instructors from "./Lessons";

import Settings from "./Settings";
import { SessionSinglePage } from "./SessionSinglePage";
import TutorCard from "./InstructorDetail";
import AddQuestions from "./Quiz/AddQuestions";
import SubmitAnswer from "./Quiz/SubmitAnswer";
import ResultQuestionForStudent from "./Quiz/ResultQuestionForStudent";
import ResultQuestionForTeacher from "./Quiz/ResultQuestionForTeacher";

export default function Dashboard() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [addQuestion, setAddQuestion] = useState(false);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [resultQuestionForStudent, setResultQuestionForStudent] =
    useState(false);
  const [resultQuestionForTeacher, setResultQuestionForTeacher] =
    useState(false);
  let dataUser = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (dataUser.type === "teacher") {
      setAddQuestion(true);
    }
  }, [dataUser.type]);

  useEffect(() => {
    if (dataUser.type === "student") {
      setSubmitAnswer(true);
    }
  }, [dataUser.type]);

  useEffect(() => {
    if (dataUser.type === "student") {
      setResultQuestionForStudent(true);
    }
  }, [dataUser.type]);

  useEffect(() => {
    if (dataUser.type === "teacher") {
      setResultQuestionForTeacher(true);
    }
  }, [dataUser.type]);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <>
      <div className=" text-lg  p-2  h-max min-h-screen pr-5 font-semibold bg-[#eee] break-after-auto   relative  ">
        <div className="  flex flex-row  gap-5  ">
          <div className=" max-w-sm p-6 h-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <TETabs className="flex flex-col justify-center items-start  font-bold ">
              <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                className=" linkTabs "
                active={basicActive === "tab1"}
              >
                <FcViewDetails className=" text-3xl inline mr-1 " />
                <span>Lessons</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("Levels")}
                className="  linkTabs"
                active={basicActive === "Levels"}
              >
                <FaSheetPlastic className=" text-3xl inline mr-1" />

                <span>Levels</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                className="  linkTabs"
              >
                <span>
                  <FcManager className=" text-3xl inline mr-1   " />
                </span>
                <span>Instructors</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab6")}
                className="  linkTabs "
                active={basicActive === "tab6"}
              >
                <FcQuestions className=" inline mr-1 text-3xl" />
                <span>Quizes</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab3")}
                className=" linkTabs "
                active={basicActive === "tab3"}
              >
                <MdQuiz className=" inline mr-1 text-3xl" />
                <span>Material levels</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab4")}
                className=" linkTabs "
                active={basicActive === "tab4"}
              >
                <FaWallet className=" inline mr-1 text-3xl" />
                <span>Wallet</span>
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab5")}
                className=" linkTabs "
                active={basicActive === "tab5"}
              >
                <FcSettings className=" inline text-3xl mr-1" />
                <span>Settings</span>
              </TETabsItem>
            </TETabs>
          </div>
          {/* <span className="  left-[18vw] block h-full absolute    border-[#c6c6c6] border-l"></span> */}

          <div>
            <TETabsContent>
              <TETabsPane show={basicActive === "tab1"}>
                <SessionSinglePage />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab2"}>
                <TutorCard />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab3"}>
                Tab 3 content
              </TETabsPane>
              <TETabsPane show={basicActive === "tab4"}>
                <Wallet />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab5"}>
                <Settings />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab6"}>
                {addQuestion && <AddQuestions />}
                {submitAnswer && <SubmitAnswer />}
                {resultQuestionForStudent && <ResultQuestionForStudent />}
                {resultQuestionForTeacher && <ResultQuestionForTeacher />}
              </TETabsPane>
              <TETabsPane show={basicActive === "Levels"}></TETabsPane>
            </TETabsContent>
          </div>
        </div>
      </div>
    </>
  );
}
