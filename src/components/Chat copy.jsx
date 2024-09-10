import axios from "axios";
import { useState } from "react";
import { Server } from "socket.io";
  // client.js
  import io from "socket.io-client";

import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Cookies from "js-cookie";

export default function Chat() {
  // شات ريل تيم

  // server.js
  const express = require("express");
  const http = require("http");
  const socketIo = require("socket.io");
  const bodyParser = require("body-parser");

  const app = express();
  const server = http.createServer(app);
  const io = socketIo(server);

  app.use(bodyParser.json());

  app.post("/send-message", (req, res) => {
    const message = req.body.message;
    // يمكنك التعامل مع الرسائل هنا أو حفظها في قاعدة البيانات
    res.json({ status: "Message received" });
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
      io.emit("message", msg); // إرسال الرسالة إلى جميع العملاء المتصلين
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  server.listen(4000, () => {
    console.log("Server is running on port 4000");
  });



  const socket = io("http://localhost:4000");

  socket.on("message", (msg) => {
    console.log("New message:", msg);
  });

  function sendMessage(message) {
    socket.emit("message", message);
  }

  // إرسال رسالة عبر HTTP
  function sendMessageViaHttp(message) {
    axios
      .post("http://localhost:4000/send-message", { message })
      .then((response) => {
        console.log("Message sent:", response.data);
      });
  }

  // END

  const [verticalActive, setVerticalActive] = useState("tab1");
  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };
  let token = Cookies.get("accessToken");
  let user = JSON.parse(sessionStorage.getItem("user"));
  axios
    .get("https://unih0me.com/api/auth/chats/78", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (
    <div className=" flex flex-row">
      <div className=" min-w-40  shadow-lg border-black">
        <div>
          <input
            type="search"
            placeholder="Type here"
            className="input input-ghost focus:outline-none h-8 border  border-slate-400 w-full max-w-xs"
          />
        </div>
        <div className="">
          <TETabs vertical className="  w-full  flex ">
            <TETabsItem
              onClick={() => handleVerticalClick("tab1")}
              active={verticalActive === "tab1"}
              className=""
            >
              <div>
                <div className=" flex flex-row justify-center gap-3 text-start w-full items-center ">
                  <div className="chat-image avatar">
                    <div className="w-10  rounded-xl">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src={user.img}
                      />
                    </div>
                  </div>
                  <div className=" space-y-2">
                    <h2 className=" font-bold text-black">{user.firstName}</h2>
                    <span className=" opacity-60">massage</span>
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
      <div className="  ">
        <div className=" 	 h-screen rounded-lg bg-white">
          {" "}
          <TETabsContent className="  ">
            <TETabsPane show={verticalActive === "tab1"} className="  ">
              <div className="flex flex-col  justify-between  h-screen ">
                <div className=" border-b flex px-3 flex-row justify-start gap-3 text-start w-full items-center ">
                  <div className="chat-image avatar">
                    <div className="w-10  rounded-xl">
                      <img alt="   chat bubble component" src={user.img} />
                    </div>
                  </div>
                  <div className=" space-y-2 ">
                    <h2 className=" font-bold text-black">{user.firstName}</h2>
                    <span className=" opacity-60">Online</span>
                  </div>
                </div>
                {/* chat masses */}
                <div className=" p-5 h-full  ">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <div className="chat-header">
                      Obi-Wan Kenobi
                      <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <div className="chat-header">
                      Anakin
                      <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">I hate you!</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                  </div>
                </div>
                <div>
                  <div className="p-3 w-full">
                    <span></span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-ghost focus:outline-none h-10 border w-full  border-slate-400  "
                    />
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
