<<<<<<< HEAD
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
<<<<<<< HEAD
import Teacher2 from "./components/Teacher2";
=======
import Support from "./components/Support";
import { Toaster } from "react-hot-toast";
>>>>>>> 5b93cb3b23df58eba6c3e55c5e3e394f63d2fa09

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
        path: "support", // Added support path here
        element: <Support />,
      }
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
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </React.StrictMode>
);
=======
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
        path: "support", // Added support path here
        element: <Support />,
      }
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
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </React.StrictMode>
);
>>>>>>> a9816f2511565fe83b8661b3a67cab0a1a44ead2
