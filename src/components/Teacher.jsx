import { Link, useParams } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { apiWallet } from "../App";
import { AiOutlineBook, AiOutlineMessage } from "react-icons/ai";
import {
  FaChalkboardTeacher,
  FaFacebook,
  FaFlag,
  FaLanguage,
  FaLinkedin,
  FaTwitter,
  FaUserGraduate,
} from "react-icons/fa";
import Reviews from "./Reviews/Reviews";

const localizer = momentLocalizer(moment);

export default function Teacher() {
  const { token } = useContext(apiWallet);
  const [View, setView] = useState();
  // let dataUse = JSON.parse(sessionStorage.getItem("user"));
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dataApi, setDataApi] = useState(null);
  const [events, setEvents] = useState([]);
  let { Teacher } = useParams();

  let Teacher_id = Number(Teacher);

  useEffect(() => {
    const apiData = async () => {
      await axios
        .get(`https://unih0me.com/api/teacher/${Teacher_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDataApi(res?.data?.data?.user);
        })
        .catch((error) => console.log(error));
    };
    apiData();
  }, []);

  const sndID = () => {
    axios
      .post(
        "https://unih0me.com/api/auth/session/store",
        { sessiontable_id: Teacher },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  // sndID();
  useEffect(() => {
    if (dataApi && dataApi.sessions) {
      const sessionEvents = dataApi.sessions.map((session) => {
        const startDate = new Date(`${session.date}T${session.time}`);
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // إضافة ساعة افتراضية كوقت نهاية

        return {
          id: session.id,
          start: startDate,
          end: endDate,
          title: session.title,
          status: session.status, // لتمييز الحالة
        };
      });

      setEvents(sessionEvents);
    }
  }, [dataApi]);

  const eventStyleGetter = (event) => {
    let backgroundColor = event.status === 0 ? "red" : "green"; // تغيير اللون بناءً على الحالة
    let onClick = () => console.log("ss");
    let style = {
      backgroundColor,
      onClick,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  const handleSelectSlot = (slotInfo) => {
    const { start, end } = slotInfo;
    console.log("Selected slot:", start, end);
    // يمكن هنا إرسال البيانات أو حفظ الاختيار
    // const newEvent = { start, end, title: "New Booking", status: 1 };
    // setEvents([...events, newEvent]);
  };

  const MyCalendar = (props) => (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={events} // عرض الجلسات المحجوزة
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot} // التعامل مع تحديد الفتحات الزمنية
        eventPropGetter={eventStyleGetter} // تخصيص ألوان الأحداث
        timeslots={2}
        views={["week"]}
      />
    </div>
  );
  let embedLink = dataApi?.youtube_link?.replace("watch?v=", "embed/");
  // console.log(dataApi?.id);

  Teacher = dataApi?.id;
  // console.log(Teacher);

  return (
    <div>
      {embedLink && (
        <div className="mt-2 m-a mb-5 videoInstructor d-flex justify-content-center">
          <iframe
            width="700"
            height="350"
            src={embedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div>
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-start mt-3 lg:justify-start">
            <span className="px-2 py-1 mb-2 mr-2 text-xs text-white bg-green-500 rounded-md lg:mb-0">
              FEATURED
            </span>
            <h2 className="text-xl font-bold sm:text-2xl">
              {dataApi?.name || "Teacher's Name"}
            </h2>
            <FaFlag className="ml-2 text-blue-500" />
          </div>
          <p className="flex items-center justify-start mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
            <FaChalkboardTeacher className="mr-1" /> Egypt
          </p>
          <p className="flex items-center justify-start mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
            <FaUserGraduate className="mr-1" /> Lessons {dataApi?.lessons}{" "}
            Students {dataApi?.students}
          </p>
          <p className="flex items-center justify-start mt-1 text-sm text-gray-500 sm:text-base lg:justify-start sm:mt-2">
            <FaLanguage className="mr-1" /> {dataApi?.languages}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-center text-gray-700 sm:text-base sm:mt-4 lg:text-left">
        {dataApi?.description}
      </p>
      <div className="flex items-center justify-start mt-3 lg:justify-start sm:mt-4">
        <FaTwitter className="mr-3 text-blue-500 cursor-pointer sm:mr-4" />
        <FaLinkedin className="mr-3 text-blue-700 cursor-pointer sm:mr-4" />
        <FaFacebook className="text-blue-600 cursor-pointer" />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 sm:mt-5 md:mt-6 sm:flex sm:flex-wrap sm:gap-3 md:gap-4">
        <Link to={`/calendar/${Teacher_id}`}>
          <button className="flex items-center justify-start px-3 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-green-500 rounded-lg sm:px-4 sm:text-base hover:scale-105">
            <AiOutlineBook className="mr-1" />
            Book Now
          </button>
        </Link>
        <Link to={`/chat?id=${Teacher_id}`}>
          <button className="flex items-center justify-start px-3 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-blue-500 rounded-lg sm:px-4 sm:text-base hover:scale-105">
            <AiOutlineMessage className="mr-1" />
            Message
          </button>
        </Link>
      </div>
      <div className="mt-6 sm:mt-7 md:mt-8">
        <h3 className="mb-3 text-base font-semibold text-center sm:text-lg sm:mb-4 lg:text-left">
          Reviews
        </h3>
      </div>
      <div className="p-5">
        <hr className="border border-[#dfdfdf]" />
        <div className="p-2">
          <h3 className="mb-1 text-4xl font-bold text-gray-900 dark:text-white">
            Availability
          </h3>
          <div className="height600">
            <MyCalendar />
          </div>
          <div>
            <Reviews teacher={Teacher_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
