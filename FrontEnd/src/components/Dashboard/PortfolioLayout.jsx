// src/components/Dashboard/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";

import "./PortfolioLayout.css";
import Portfolio from "./Portfolio";
const PortfolioLayout = () => {
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
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioLayout;
