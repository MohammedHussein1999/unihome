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

import Chat from "./components/Chat";

import TeacherS from "./components/TeacherS";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Teacher2 from "./components/Teacher2";
import Support from "./components/Support";
import { Toaster } from "react-hot-toast";
import LiveStreamingPage from "./components/Sessions/LiveStreamingPage";

const routes = [
  {
    path: "/",
    element: <App />, // يستخدم مكون App كمكون أساسي
    children: [
      {
        index: true, // تحديد الصفحة الافتراضية عند الوصول إلى /
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "teth", // تأكد من أن المسار يتوافق مع ما تريد
        element: <Tetsh />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dd",
        element: <Dashboard />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "TeacherS",
        element: <TeacherS />,
      },
      {
        path: "TeacherS/:Teacher2", // استخدم اسم متغير منطقي
        element: <Teacher2 />,
      },
      /*   {
        path: "TeacherS/:Teacher", // استخدم اسم متغير منطقي
        element: <Teacher />,
      }, */
      {
        path: "register", // استخدم اسم متغير منطقي
        element: <Register />,
      },
      {
        path: "/Session/:SingleSession", // استخدم اسم متغير منطقي
        element: <LiveStreamingPage />,
      },
      {
        path: "support", // Added support path here
        element: <Support />,
      },
    ],
  },
];

// إنشاء المتصفح باستخدام createBrowserRouter
const router = createBrowserRouter(routes, {
  basename: "", // لا يوجد basename هنا، ما لم تكن تريد إضافة مسار أساسي
});

// إنشاء العنصر الرئيسي وتحميل التطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
