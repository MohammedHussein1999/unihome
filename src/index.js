import "./index.css";
import "flowbite";
import "tw-elements";
import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import App from "./App";

import Dashboard from "./components/Dashboard";
import Tetsh from "./components/Tetsh";
import Log from "./components/Log";
import Chat from "./components/Chat";
import TutorCard from "./components/InstructorDetail";
// import { AccessToken } from "./AccessToken";

// import { AccessToken } from "./AccessToken";
// AccessToken();

const routes = [
  {
    path: "/",
    element: <App className="" />, // يستخدم مكون App كمكون أساسي
    children: [
      {
        // path: "Log",
        index: true,

        element: <Log />,
      },
      {
        path: "Home",

        element: <Home />,
      },
      {
        path: "Teth",
        element: <Tetsh />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "DD",
        element: <Dashboard />,
      },
      {
        path: "Chat",
        element: <Chat />,
      },
      {
        path: "TutorCard",
        element: <TutorCard />,
      },
    ],
  },
];

// بعد ذلك، نستخدم مصفوفة المسارات في `createBrowserRouter`
const router = createBrowserRouter(routes, {
  basename: "", // basename يُضاف هنا
});

// إنشاء العنصر الرئيسي (root) وتحميل التطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
