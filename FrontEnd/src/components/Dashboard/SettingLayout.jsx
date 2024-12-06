// src/components/Dashboard/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";

import Setting from "./Setting";
import "./DashboardLayout.css";
const DashboardLayout = () => {
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
        <Setting />
      </div>
    </div>
  );
};

export default DashboardLayout;
