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
import TeacherCard from "./Instructor/TeacherCard";
import RoutingSting from "./Profile/RoutingSting";

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
      const userId = dataUser.type === "student" ? e.teacher_id : e.student_id;
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
                <span className="mt-1 text-base font-semibold">
                  {dataUser.type === "student" ? "Teacher" : "student"}
                </span>
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

            <TETabsPane show={basicActive === "tab2"}>
              {sessionsStudent.map((e) => (
                <TeacherCard Student={student} Session={e} />
              ))}
            </TETabsPane>

            <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>

            <TETabsPane show={basicActive === "tab4"}>
              <DesignWallet />
            </TETabsPane>

            <TETabsPane show={basicActive === "tab5"} className=" overflow-auto">
              {/* <RoutingSting /> */}
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit officiis non in magnam recusandae esse eveniet, sapiente molestiae beatae eligendi debitis provident. Perferendis minima, eum magnam assumenda dicta beatae.</p>
                <p>At animi eum natus, quidem, deleniti architecto magnam tenetur voluptatem ea delectus distinctio nostrum nisi, officia praesentium unde dolores beatae minima. Ratione doloremque aliquam itaque sint eaque deleniti sed corrupti?</p>
                <p>Iusto eum totam, reprehenderit eaque perferendis vitae similique deleniti quam ullam. Natus vel asperiores alias reprehenderit, doloremque accusantium aliquam beatae ut iusto nulla quis, laborum assumenda debitis enim nostrum numquam.</p>
                <p>Harum, ipsam obcaecati, sequi, doloribus eaque cum quisquam nostrum voluptatibus iusto adipisci accusamus doloremque consequuntur voluptates dolore. At, possimus sint. Perspiciatis modi eaque nostrum necessitatibus eum molestiae qui unde. Numquam!</p>
                <p>Minima expedita, molestias assumenda repellendus quasi fugit incidunt saepe sequi. Praesentium architecto, laudantium vero possimus itaque ea mollitia labore, nihil consectetur vel eius, modi impedit nemo suscipit eos sit placeat.</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta quas inventore nesciunt, alias quaerat quo consequatur, vel illo amet, dolore animi obcaecati nobis eaque neque maiores error! Velit, cum.</p>
                <p>Pariatur repellat ipsam magni accusamus hic eligendi officia minus vitae, ab consectetur voluptate unde, iste optio aut sunt perspiciatis libero accusantium, quaerat nobis maiores quia recusandae quisquam similique perferendis. Consequatur!</p>
                <p>Voluptates quisquam exercitationem corrupti est, aut quis, sapiente nobis veniam officiis amet nam. Dolore accusantium voluptatum earum suscipit, sed odio officiis quos recusandae autem cum nobis necessitatibus maiores eligendi nisi?</p>
                <p>Soluta nihil quam iure quis aliquam in, natus adipisci odit inventore ipsa maxime molestiae hic eaque beatae repellendus id porro veniam quaerat perspiciatis eius sapiente cumque pariatur corporis libero! Aliquam?</p>
                <p>Distinctio nesciunt provident in cumque culpa cupiditate illo, hic perferendis iste, eligendi quibusdam nostrum nihil, maxime alias quasi. Necessitatibus excepturi aperiam ipsam sint placeat? Beatae consequuntur minus facilis nulla voluptates.</p>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae vel amet corporis autem, eum nulla nostrum accusamus quo consectetur, dolore iste ad doloribus? Voluptatibus blanditiis quae at incidunt quos?</p>
                <p>Autem aut ut ex vel necessitatibus obcaecati, fugiat culpa harum dignissimos officiis consequatur totam pariatur sed adipisci deserunt, nulla aspernatur ab voluptas. Fugit perferendis officia voluptas repellendus modi assumenda et?</p>
                <p>Asperiores aut fugiat corporis ullam voluptatum officia, inventore hic incidunt tempore rem! Dolore, cum, officiis labore culpa alias velit porro deleniti provident incidunt molestias doloribus ipsam ullam nostrum maxime ipsum?</p>
                <p>Aliquam at praesentium assumenda corporis nisi. Voluptas recusandae ab labore iste. Quis necessitatibus adipisci dicta optio. Veritatis rem obcaecati exercitationem nisi, nihil in perferendis quibusdam, laboriosam, vero tempore reiciendis sunt!</p>
                <p>Veniam vero aliquid numquam illo itaque consectetur deleniti possimus? Architecto tempora exercitationem provident soluta eum? Qui minima tenetur modi a, porro fugit consectetur numquam dolor! Soluta beatae quasi molestiae consectetur.</p>
              </div>
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
