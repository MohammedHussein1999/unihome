import { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { PiMonitorPlayFill } from "react-icons/pi";
import Wallet from "./Wallet";
import Settings from "./Settings";

import AddQuestions from "./Quiz/AddQuestions";
import SubmitAnswer from "./Quiz/SubmitAnswer";
import ResultQuestionForStudent from "./Quiz/ResultQuestionForStudent";
import ResultQuestionForTeacher from "./Quiz/ResultQuestionForTeacher";
import { GiWallet } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import Cookies from "js-cookie";
import RoutingSession from "./Sessions/RoutingSession";
import DesignWallet from "./Wallet/DesignWallet";

export default function Dashboard() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [addQuestion, setAddQuestion] = useState(false);
  const [dataSession, setDataSession] = useState([]);
  const [student, setStudent] = useState([]);
  const [sessionsStudent, setSessionsStudent] = useState([]);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [resultQuestionForStudent, setResultQuestionForStudent] =
    useState(false);
  const [resultQuestionForTeacher, setResultQuestionForTeacher] =
    useState(false);
  let dataUser = JSON.parse(sessionStorage.getItem("user"));
  const token = Cookies.get("accessToken");

  useEffect(() => {
    if (dataUser.type === "student") {
      setSubmitAnswer(true);
      setResultQuestionForStudent(true);
    } else {
      setResultQuestionForTeacher(true);
      setAddQuestion(true);
    }
  }, [dataUser.type]);

  const handleBasicClick = (value) => {
    closeSidebar();
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  console.log(dataSession);
  const closeSidebar = () => {
    document
      .getElementById("default-sidebar")
      .classList.add("-translate-x-full");
    document
      .getElementById("default-sidebar")
      .classList.remove("transform-none");
  };

  const openSidebar = () => {
    document
      .getElementById("default-sidebar")
      .classList.remove("-translate-x-full");
  };
  useEffect(() => {
    let sessions = async () => {
      try {
        let response = await axios.get(
          "https://unih0me.com/api/auth/sessions",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDataSession(response.data.data.sessions);
      } catch (error) {
        console.log(error);
      }
    };
    sessions();
  }, []);
  useEffect(() => {
    dataSession.map(async (e) => {
      const userId = dataUser.type === "student" ? e.student_id : e.teacher_id;
      let request = await axios.get(
        `https://unih0me.com/api/teacher/${userId}`,
        {
          headers: {
            "Content-Type": "application",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudent(request.data.data.user);
      setSessionsStudent(request.data.data.user.sessions);
    });
  }, [dataSession]);
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#eee]">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex gap-5 w-fit items-center mt-4 ms-4 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => openSidebar()}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-10 h-10 bg-orange-500 p-1 rounded-xl text-white"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
          <p className="text-xl text-blue-600 font-bold me-2">
            <span className="me-3">
              <FontAwesomeIcon
                className="fa-solid fa-poo-bolt fa-beat-fade"
                style={{
                  "--fa-beat-fade-opacity": 0.5,
                  "--fa-beat-fade-scale": 1.25,
                }}
                icon={faCircleArrowLeft}
              />
            </span>
            Dashboard
          </p>
        </button>

        <aside
          id="default-sidebar"
          className="fixed bottom-0 left-0 z-40 w-56 md:pt-28 pt-24 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full py-3  bg-gray-50 dark:bg-gray-800 rounded-e-3xl">
            <TETabs className="flex flex-col justify-start font-medium gap-4">
              <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                className="bg-gray-200 flex justify-start items-center mx-auto rounded-3xl gap-1 w-5/6"
                active={basicActive === "tab1"}
              >
                <PiMonitorPlayFill className="text-2xl inline text-orange-500" />
                <span className="mt-1 text-base font-semibold">Sessions</span>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                className="bg-gray-200 flex justify-start items-center mx-auto rounded-3xl gap-1 w-5/6"
                active={basicActive === "tab2"}
              >
                <FaChalkboardTeacher className="text-2xl inline text-orange-500" />
                <span className="mt-1 text-base font-semibold">Teacher</span>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleBasicClick("tab6")}
                className="bg-gray-200 flex justify-start items-center mx-auto rounded-3xl gap-1 w-5/6"
                active={basicActive === "tab6"}
              >
                <MdQuiz className="text-2xl inline text-orange-500" />
                <span className="mt-1 text-base font-semibold">Quizzes</span>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleBasicClick("tab4")}
                className="bg-gray-200 flex justify-start items-center mx-auto rounded-3xl gap-1 w-5/6"
                active={basicActive === "tab4"}
              >
                <GiWallet className="text-2xl inline text-orange-500" />
                <span className="mt-1 text-base font-semibold">Wallet</span>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleBasicClick("tab5")}
                className="bg-gray-200 flex justify-start items-center mx-auto rounded-3xl gap-1 w-5/6"
                active={basicActive === "tab5"}
              >
                <IoSettingsSharp className="text-2xl inline text-orange-500" />
                <span className="mt-1 text-base font-semibold">Settings</span>
              </TETabsItem>
            </TETabs>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full p-5">
          <TETabsContent>
            <TETabsPane show={basicActive === "tab1"}>
              <RoutingSession Student={student} Session={sessionsStudent} />
            </TETabsPane>

            <TETabsPane show={basicActive === "tab2"}></TETabsPane>

            <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>

            <TETabsPane show={basicActive === "tab4"}>
              <DesignWallet />
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
          </TETabsContent>
        </div>
      </div>
    </>
  );
}
