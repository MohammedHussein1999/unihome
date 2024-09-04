import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import App from "./App";
import Dashboard from "./components/Dashboard";
import Tetsh from "./components/Tetsh";
import Log from "./components/Log";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className="" />, // يستخدم مكون App كمكون أساسي
    children: [
      {
        index: true,
        element: <Home />, // الصفحة الرئيسية
      },
      {
        path: "Teth",
        element: <Tetsh />, // صفحة المعلومات
      },
      {
        path: "about",
        element: <About />, // صفحة المعلومات
      },
      {
        path: "DD",
        element: <Dashboard />, // صفحة المعلومات
      },
      {
        path: "Log",
        element: <Log />, // صفحة المعلومات
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
