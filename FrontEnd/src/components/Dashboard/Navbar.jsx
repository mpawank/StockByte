// src/components/Dashboard/Navbar.jsx
import React from "react";
import "./Navbar.css";
import user from "./profile_img.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <input
        type="text"
        className="search-bar"
        placeholder="Search stocks..."
      />
      <div className="profile">
        <span>Pawan Kumar</span>
        <img src={user} alt="User" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
