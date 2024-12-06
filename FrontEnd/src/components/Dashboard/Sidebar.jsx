import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";
import {
  FaTachometerAlt,
  FaChartPie,
  FaNewspaper,
  FaUser,
  FaWallet,
  FaLightbulb,
  FaChartLine,
  FaQuestionCircle,
  FaCog,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
      document.body.classList.remove("sidebar-closed");
    } else {
      document.body.classList.add("sidebar-closed");
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaTachometerAlt className="icon" />
              <span className="link-text">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/portfolio">
              <FaChartPie className="icon" />
              <span className="link-text">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/stocknews">
              <FaNewspaper className="icon" />
              <span className="link-text">Stock News</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/my-stock">
              <FaUser className="icon" />
              <span className="link-text">My Stock</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/deposit">
              <FaWallet className="icon" />
              <span className="link-text">Deposit</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/insight">
              <FaLightbulb className="icon" />
              <span className="link-text">Insight</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/market-stock">
              <FaChartLine className="icon" />
              <span className="link-text">Market Stock</span>
            </Link>
          </li> */}
          <li>
            <Link to="/chat">
              <FaQuestionCircle className="icon" />
              <span className="link-text">Help Center</span>
            </Link>
          </li>
          <li>
            <Link to="/setting">
              <FaCog className="icon" />
              <span className="link-text">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
