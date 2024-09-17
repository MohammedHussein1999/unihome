import { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Cookies from "js-cookie";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { apiWallet } from "../App";
import { useRef } from "react";

export default function Chat() {
  const [verticalActive, setVerticalActive] = useState(null); // غيرنا القيمة الافتراضية
  const [messages, setMessages] = useState([]);
  const [dataUserSHat, setDataUserSHat] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const token = Cookies.get("accessToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();
  const newMs = useRef();
  // const { userTable } = useContext(apiWallet);
  const idParm = new URLSearchParams(location.search);

  const idT = idParm.get("id");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let request = await axios.get(
          "https://unih0me.com/api/auth/chat/users",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDataUserSHat(request.data.data);
        if (request.data.data.length > 0) {
          // عند الحصول على المستخدمين، نقوم بتعيين أول مستخدم كـ active
          setVerticalActive(request.data.data[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [token]);

  // إحضار الرسائل للمستخدم المحدد

  // إرسال الرسالة
  function sendMessage() {
    if (newMessage.trim()) {
      // setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage("");

      const sendMsgToAPI = async () => {
        try {
          await axios.post(
            "https://unih0me.com/api/auth/chat/store",
            {
              receiver_id: verticalActive, // يجب إرسال الرسالة إلى المستخدم الحالي
              message: newMessage,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (error) {
          console.error(error);
        }
      };

      sendMsgToAPI();
    }
  }

  const handleVerticalClick = (value) => {
    if (value !== verticalActive) {
      console.log(value);

      setVerticalActive(value); // تحديث المستخدم الحالي لجلب الرسائل الجديدة
    }
  };
  useEffect(() => {
    if (verticalActive) {
      const fetchMessages = async () => {
        try {
          const res = await axios.get(
            `https://unih0me.com/api/auth/chats/${verticalActive}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMessages(res.data.data.chats); // تحديث الرسائل بناءً على المستخدم المحدد
          // setMessages(idT); // تحديث الرسائل بناءً على المستخدم المحدد
        } catch (error) {
          console.log(error);
        }
      };
      fetchMessages();
    }
  }, [verticalActive, newMessage, token]);

  useEffect(() => {
    if (messages.length === 0) {
      console.log(messages);
      if (idT) {
        const sendNewMsgToAPI = async () => {
          try {
            let res = await axios.post(
              "https://unih0me.com/api/auth/chat/store",
              {
                receiver_id: idT, // يجب إرسال الرسالة إلى المستخدم الحالي
                message: "Hello",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        };

        sendNewMsgToAPI();
      }
    }
  }, []);

  return (
    <div className="flex flex-row">
      <div className="min-w-40 shadow-lg border-black">
        <input
          type="search"
          placeholder="Type here"
          className="input input-ghost focus:outline-none h-8 border border-slate-400 w-full max-w-xs"
        />
        <div className="flex flex-row flex-wrap rtl:flex-row-reverse">
          <TETabs ref={newMs} vertical className="w-full flex">
            {dataUserSHat.map((e) => (
              <TETabsItem
                key={e.id}
                onClick={() => handleVerticalClick(e.id)} // عند النقر، تحديث المستخدم النشط
                active={verticalActive === e.id}
              >
                <div className="flex flex-row justify-center gap-3 text-start w-full items-center">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-xl">
                      <img alt="User Avatar" src={e.image} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-bold text-black">{e.firstname}</h2>
                  </div>
                </div>
              </TETabsItem>
            ))}
          </TETabs>
        </div>
      </div>
      <div className="w-4/5">
        <div className="h-screen rounded-lg w-full md:w-full bg-white">
          <TETabsContent>
            {dataUserSHat.map((response) => (
              <TETabsPane
                key={response.id}
                show={verticalActive === response.id} // عرض الرسائل للمستخدم النشط فقط
              >
                <div className="flex flex-col justify-between h-screen">
                  <div className="border-b flex p-2 px-3 flex-row justify-start gap-3 text-start w-full items-center">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-xl">
                        <img alt="User Avatar" src={response.image} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-bold text-black">
                        {response.firstname}
                      </h2>
                      <span className="opacity-60">Online</span>
                    </div>
                  </div>
                  <div className="p-5 h-full flex flex-col 	 	 overflow-y-auto">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`chat ${
                          msg.sender_id === user.id ? "chat-end" : "chat-start"
                        }`}
                      >
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Chat Avatar"
                              src={
                                msg.sender_id === user.id
                                  ? user.image
                                  : response.image
                              }
                            />
                          </div>
                        </div>

                        <div className="chat-bubble">{msg.message}</div>

                        <div className="chat-footer opacity-50">Delivered</div>
                        <div className="chat-header">
                          {response.firstname}
                          <time className="text-xs opacity-50">12:46</time>
                        </div>
                      </div>
                    ))}
                  </div>
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
              </TETabsPane>
            ))}
          </TETabsContent>
        </div>
      </div>
    </div>
  );
}
