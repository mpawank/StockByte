// src/components/Dashboard/DashboardContent.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./DashboardContent.css";

const DashboardContent = () => {
  // Sample data for charts
  const sampleData = [
    { name: "Jan", value: 400, gain: 240 },
    { name: "Feb", value: 300, gain: 139 },
    { name: "Mar", value: 200, gain: 98 },
    { name: "Apr", value: 278, gain: 390 },
    { name: "May", value: 189, gain: 480 },
  ];

  return (
    <div className="dashboard-content">
      <h2>Welcome, Pawan Kumar</h2>
      <p className="user-details">Email: pawankumar@example.com</p>

      {/* Section for Portfolio and Stock Prices */}
      <div className="top-section">
        <div className="portfolio-card">
          <h3>Portfolio Value</h3>
          <p>$475,000</p>
        </div>
        <div className="stock-data-card">
          <h3>Stock Prices</h3>
          <ul>
            <li>Apple (AAPL): $150.20</li>
            <li>Google (GOOGL): $2,785.00</li>
            <li>Amazon (AMZN): $3,292.23</li>
          </ul>
        </div>
      </div>

      {/* Section for Graphs */}
      <div className="graphs-section">
        <div className="line-chart">
          <h3>Monthly Performance</h3>
          <LineChart width={400} height={250} data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Line type="monotone" dataKey="gain" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="bar-chart">
          <h3>Stock Gain Comparison</h3>
          <BarChart width={400} height={250} data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
            <Bar dataKey="gain" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
