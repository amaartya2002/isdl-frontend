import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/Login";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LeaveRequest from "./components/LeaveRequest";
import Card from "./utils/Card";
import Exam from "./components/Exam";
import Contact from "./components/Contact";
import SeatingPlan from "./components/SeatingPlan";
import DutyLog from "./components/DutyLog";

// const appRouter = createBrowserRouter([

//   {

//   }
// ]

// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/admin" element={<h1>Admin</h1>} /> */}
        <Route path="/leaveReq" element={<LeaveRequest />} />
        <Route path="/examVenue" element={<Exam />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/generateSeatPlan" element={<SeatingPlan/>} /> */}
        {/* <Route path="/dutyLog" element={<DutyLog/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
