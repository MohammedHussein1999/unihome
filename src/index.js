import "./index.css";
import "flowbite";
import "tw-elements";
import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./components/Home";
import About from "./components/About";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Tetsh from "./components/Tetsh";
import Chat from "./components/Chat";
import TeacherS from "./components/TeacherS";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Teacher from "./components/Teacher";
import Support from "./components/Support";
import LiveStreamingPage from "./components/Sessions/LiveStreamingPage";
import { Toaster } from "react-hot-toast";
import VideoConference from "./components/Sessions/VideoConference ";
import AddQuestions from "./components/Quiz/AddQuestions";
import RoutingSting from "./components/Profile/RoutingSting";
import DesignWallet from "./components/Wallet/DesignWallet";


// تعريف عنصر ProtectedRoute
function ProtectedRoute({ children }) {
  const token = Cookies.get("accessToken");
  return token ? children : <Navigate to="/Home" />; // إذا لم يكن هناك token، يتم إعادة التوجيه إلى صفحة تسجيل الدخول
}

const routes = [
  {
    path: "/",
    element: <App />, // يستخدم مكون App كمكون أساسي
    children: [
   
      {
        path: "LogIn",
        element: <Login />,
      },
      {
        index: true,
        path: "Home",
        element: <Home />,
      },
      {
        path: "teth", // تأكد من أن المسار يتوافق مع ما تريد
        element: (
          <ProtectedRoute>
            <Tetsh />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "chat",
        element: (
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        ),
      },
      {
        path: "TeacherS",
        element: <TeacherS />,
      },
      {
        path: "TeacherS/:Teacher", // استخدم اسم متغير منطقي
        element: (
          <ProtectedRoute>
            <Teacher />
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/Session/:SingleSession",
        element: (
          <ProtectedRoute>
            <LiveStreamingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "support",
        element: (
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        ),
      },
      {
        path: "Session/:SingleSession/VideoConference",
        element: (
          <ProtectedRoute>
            <VideoConference />
          </ProtectedRoute>
        ),
      },
      {
        path: "addQuestion",
        element: (
          <ProtectedRoute>
            <AddQuestions />
          </ProtectedRoute>
        ),
      },
      {
        path: "setting",
        element: (
          <ProtectedRoute>
            <RoutingSting />
          </ProtectedRoute>
        ),
      },
      {
        path: "wallet",
        element: (
          <ProtectedRoute>
            <DesignWallet />
          </ProtectedRoute>
        ),
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
