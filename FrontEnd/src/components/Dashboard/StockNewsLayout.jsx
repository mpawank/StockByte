// src/components/Dashboard/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./StockNewsLayout.css";
import StockNews from "./StockNews";

const StockNewsLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`dashboard-layout ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleSidebarToggle} />
      <div className="main-view">
        <StockNews />
      </div>
    </div>
  );
};

export default StockNewsLayout;
