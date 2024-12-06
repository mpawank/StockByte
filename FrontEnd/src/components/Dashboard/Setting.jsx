import React, { useState } from "react";
import "./Setting.css";

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleLogout = () => {
    // Logic for logging out
    console.log("Logging out...");
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : ""}`}>
      <h1>Settings</h1>
      <div className="settings-option">
        <h2>Account</h2>
        <p>Edit your account information.</p>
        <button onClick={() => alert("Go to Account Settings")}>Edit</button>
      </div>
      <div className="settings-option">
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="settings-option">
        <h2>Dark Mode</h2>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Setting;
