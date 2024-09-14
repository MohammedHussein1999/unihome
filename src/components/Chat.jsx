import { useContext, useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Cookies from "js-cookie";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { apiWallet } from "../App";

export default function Chat() {
  const [verticalActive, setVerticalActive] = useState("tab1");
  const [messages, setMessages] = useState([]);
  const [getMessages, setGetMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const token = Cookies.get("accessToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();
  const urlID = new URLSearchParams(location.search);
  const idTeacher = Number(urlID.get("id"));
  const { userTable } = useContext(apiWallet);

  // 🔥 إضافة فحص للتأكد من وجود البيانات قبل الاستخدام
  let dataApi = userTable?.data?.data?.teachers || [];
  let dataTeacher = dataApi?.find((i) => i.id === idTeacher);

  function sendMessage() {
    if (newMessage.trim()) {
      const newMsg = {
        sender: user.firstName,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);

      let ms = async () => {
        try {
          // 🔥 تحسين طريقة التعامل مع الأخطاء
          const response = await axios.post(
            "https://unih0me.com/api/auth/chat/store",
            {
              receiver_id: dataTeacher?.id,
              message: newMessage,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
          setNewMessage(""); // 🔥 تصحيح إعادة ضبط الرسالة الجديدة
        } catch (error) {
          console.error(error);
        }
      };

      ms();
    }
  }

  // 🔥 تعديل طريقة معالجة البيانات في الماب لضمان التكرار الصحيح

/*   dataApi.forEach((e) => {
    let getMs = async () => {
      try {
        const res = await axios.get(
          `https://unih0me.com/api/auth/chats/${e.id}`, // 🔥 استخدام id صحيح
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // if (res.data.data.chats > 0) {
          console.log(res.data.data.chats);
        // }

        // setGetMessages((prev) => [...prev, ...res.data.data.chats]);
      } catch (error) {
        console.log(error);
      }
    };
    getMs();
  });

  // 🔥 تحسين الشرط للتأكد من أن الطباعة تعمل كما هو متوقع
  useEffect(() => {
    // console.log(getMessages);
    if (getMessages.length > 0) {
      // console.log("Messages loaded:", getMessages);
    }
  }, [getMessages]);

  function receiveMessage(message) {
    const receivedMsg = {
      text: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, receivedMsg]);
  }

  // 🔥 التأكد من إعادة طباعة الرسائل المستلمة
  useEffect(() => {
    // console.log("Received messages:", getMessages);
  }, [getMessages]); */

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <div className="flex flex-row ">
      <div className="min-w-40 shadow-lg border-black">
        <div>
          <input
            type="search"
            placeholder="Type here"
            className="input input-ghost focus:outline-none h-8 border border-slate-400 w-full max-w-xs"
          />
        </div>
        <div className=" flex flex-row  flex-wrap rtl:flex-row-reverse">
          <TETabs vertical className="w-full flex">
            <TETabsItem
              onClick={() => handleVerticalClick("tab1")}
              active={verticalActive === "tab1"}
            >
              <div>
                <div className="flex flex-row justify-center gap-3 text-start w-full items-center">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-xl">
                      <img alt="User Avatar" src={dataTeacher?.image} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-bold text-black">
                      {dataTeacher?.firstname}
                    </h2>
                    <span className="opacity-60">message</span>
                  </div>
                </div>
              </div>
            </TETabsItem>
            ;
            <TETabsItem
              onClick={() => handleVerticalClick("tab2")}
              active={verticalActive === "tab2"}
            >
              Profile
            </TETabsItem>
            <TETabsItem
              onClick={() => handleVerticalClick("tab3")}
              active={verticalActive === "tab3"}
            >
              Messages
            </TETabsItem>
            <TETabsItem
              onClick={() => handleVerticalClick("tab4")}
              active={verticalActive === "tab4"}
            >
              Contact
            </TETabsItem>
          </TETabs>
        </div>
      </div>
      <div className="w-4/5">
        <div className="h-screen rounded-lg w-full md:w-full bg-white">
          <TETabsContent className="">
            <TETabsPane show={verticalActive === "tab1"} className="">
              <div className="flex flex-col justify-between h-screen">
                <div className="border-b flex px-3 flex-row justify-start gap-3 text-start w-full items-center">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-xl">
                      <img alt="User Avatar" src={user.img} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-bold text-black">{user.firstName}</h2>
                    <span className="opacity-60">Online</span>
                  </div>
                </div>
                <div className="p-5 h-full flex flex-col overflow-auto">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`chat ${
                        msg.sender === user.firstName
                          ? "chat-end"
                          : "chat-start"
                      }`}
                    >
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Chat Avatar" src={user.img} />
                        </div>
                      </div>
                      <div className="chat-header">
                        {msg.sender}
                        <time className="text-xs opacity-50">
                          {msg.timestamp}
                        </time>
                      </div>
                      <div className="chat-bubble">{msg.text}</div>
                      <div className="chat-footer opacity-50">Delivered</div>
                    </div>
                  ))}
                </div>
                <div className="">
                  <div className="p-3 w-full flex flex-row items-center gap-3">
                    <input
                      type="text"
                      placeholder="Type here"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="input input-ghost focus:outline-none h-10 border w-full border-slate-400"
                    />
                    <button
                      onClick={sendMessage}
                      className="btn btn-primary mt-2"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </TETabsPane>
          </TETabsContent>
        </div>
      </div>
    </div>
  );
}
