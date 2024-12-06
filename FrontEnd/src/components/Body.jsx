import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import Registration from "./Registration";
import DashboardLayout from "./Dashboard/DashboardLayout";
import PortfolioLayout from "./Dashboard/PortfolioLayout";
import About from "./About";
import StockNewsLayout from "./Dashboard/StockNewsLayout";
import Education from "./Education";
import ChatLayout from "./Dashboard/ChatLayout";
import Setting from "./Dashboard/Setting";
const Body = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/education" element={<Education />} />
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/portfolio" element={<PortfolioLayout />} />
        <Route path="/stocknews" element={<StockNewsLayout />} />
      </Routes>
    </main>
  );
};

export default Body;
