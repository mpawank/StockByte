import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import companyImage from "../assets/wall.avif"; // replace with actual image path

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={companyImage} alt="Company" className="hero-image" />
        <h1 className="hero-title">About Our Company</h1>
      </motion.div>

      {/* About Content Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="content-title">Who We Are</h2>
        <p className="content-description">
          We are a forward-thinking company focused on providing cutting-edge
          solutions for stock market tracking and cryptocurrency monitoring. Our
          platform helps users stay updated with real-time market trends,
          enabling smarter investment decisions.
        </p>

        <h2 className="content-title">Our Mission</h2>
        <p className="content-description">
          Our mission is to make financial tracking accessible to everyone. By
          providing accurate, real-time data on stocks and cryptocurrencies, we
          aim to empower both beginners and seasoned investors to navigate the
          financial markets with ease and confidence.
        </p>

        <h2 className="content-title">Our Values</h2>
        <ul className="values-list">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Transparency</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
