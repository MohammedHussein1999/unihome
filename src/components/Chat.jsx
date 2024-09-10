/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Chat() {
  const [verticalActive, setVerticalActive] = useState("tab1");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const token = Cookies.get("accessToken");
  const user = JSON.parse(sessionStorage.getItem("user"));

  // محاكاة إرسال الرسالة
  function sendMessage() {
    if (newMessage.trim()) {
      const newMsg = {
        sender: "me",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);

      let ms = () => {
        axios
          .post(
            "https://unih0me.com/api/auth/chat/store",
            {
              message: messages, // الرسالة المُرسلة
              receiver_id: 91, // معرف المستلم (تأكد أن الرقم صحيح)
            },
            {
              headers: {
                "Content-Type": "application/json", // نوع المحتوى
                Authorization: `Bearer ${token}`, // توكن المصادقة
              },
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      ms();
      console.log(messages);
      setNewMessage("");
    }
  }

  // محاكاة استقبال رسالة جديدة
  function receiveMessage(message) {
    const receivedMsg = {
      sender: "other",
      text: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, receivedMsg]);
  }

  // مثال على استقبال رسالة جديدة بعد 3 ثوانٍ (يمكنك استبداله بآلية أخرى إذا لزم الأمر)
  /*  useEffect(() => {
    const interval = setInterval(() => {
      receiveMessage("This is a simulated incoming message.");
    }, 3000);

    return () => clearInterval(interval);
  }, []); 
 */

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <div className="flex flex-row">
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
              className=""
            >
              <div>
                <div className="flex flex-row justify-center gap-3 text-start w-full items-center">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-xl">
                      <img alt="User Avatar" src={user.img} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-bold text-black">{user.firstName}</h2>
                    <span className="opacity-60">message</span>
                  </div>
                </div>
              </div>
            </TETabsItem>
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
      <div>
        <div className="h-screen rounded-lg w-[75vw] md:w-full  bg-white">
          <TETabsContent className="">
            <TETabsPane show={verticalActive === "tab1"} className="">
              <div className="flex flex-col   justify-between  h-screen">
                <div className="border-b flex px-3 flex-row  justify-start gap-3 text-start w-full items-center">
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
                        msg.sender === "me" ? "chat-end" : "chat-start"
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
                <div className=" ">
                  <div className="p-3 w-full flex flex-row items-center gap-3 ">
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
