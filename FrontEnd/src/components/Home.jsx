import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaArrowDown,
  FaBitcoin,
  FaChartLine,
  FaUser,
} from "react-icons/fa";
import "./Home.css";
import wall from "../assets/wall.avif";
import appleImage from "../assets/apple.jpeg";
import googleImage from "../assets/googlelogo.png";
import teslaImage from "../assets/teslalogo.png";
import bitcoinImage from "../assets/Bitcoin.jpeg";
import ethereumImage from "../assets/ethlogo.png";
import user1Image from "../assets/elon.jpg";
import user2Image from "../assets/sunder.jpg";

const Home = () => {
  const trendingStocks = [
    { name: "Apple Inc.", price: 185.65, change: 2.34, icon: appleImage },
    { name: "Google LLC", price: 2765.88, change: -1.45, icon: googleImage },
    { name: "Tesla Inc.", price: 915.3, change: 0.98, icon: teslaImage },
  ];

  const cryptoTrends = [
    { name: "Bitcoin", price: 39000, change: 3.5, icon: bitcoinImage },
    { name: "Ethereum", price: 2800, change: -2.1, icon: ethereumImage },
  ];

  const userReviews = [
    {
      name: "Elon Musk",
      feedback: "Amazing platform to track stocks and crypto prices!",
      profilePic: user1Image,
    },
    {
      name: "Sunder Pichai",
      feedback: "Super intuitive and visually appealing design.",
      profilePic: user2Image,
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        style={{ backgroundImage: `url(${wall})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to Stock Tracker</h1>
        <p className="hero-subtitle">
          Your one-stop solution for market insights
        </p>
        <button className="cta-button">Get Started</button>
      </motion.div>

      {/* Who Can Use Our Website Section */}
      <div className="usage-section">
        <h2 className="section-title">Who Can Use Our Website?</h2>
        <motion.div
          className="usage-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div className="usage-card">
            <FaChartLine className="usage-icon" />
            <h3>Investors</h3>
            <p>Track your stocks and monitor real-time changes.</p>
          </motion.div>
          <motion.div className="usage-card">
            <FaBitcoin className="usage-icon" />
            <h3>Crypto Enthusiasts</h3>
            <p>Stay ahead with crypto market trends and updates.</p>
          </motion.div>
          <motion.div className="usage-card">
            <FaUser className="usage-icon" />
            <h3>Beginners</h3>
            <p>Learn and grow with our user-friendly tools.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trending Stocks Section */}
      <div className="trending-stocks">
        <h2 className="section-title">Trending Stocks</h2>
        <div className="stocks-grid">
          {trendingStocks.map((stock, index) => (
            <div key={index} className="stock-card">
              <img
                src={stock.icon}
                alt={stock.name}
                className="section-image"
              />
              <h3>{stock.name}</h3>
              <p>Price: ${stock.price.toFixed(2)}</p>
              <p
                className={`change ${
                  stock.change > 0 ? "positive" : "negative"
                }`}
              >
                {stock.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                {Math.abs(stock.change)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Crypto Trends Section */}
      <div className="crypto-trends">
        <h2 className="section-title">Cryptocurrency Trends</h2>
        <div className="crypto-grid">
          {cryptoTrends.map((crypto, index) => (
            <div key={index} className="crypto-card">
              <img
                src={crypto.icon}
                alt={crypto.name}
                className="section-image"
              />
              <h3>{crypto.name}</h3>
              <p>Price: ${crypto.price.toFixed(2)}</p>
              <p
                className={`change ${
                  crypto.change > 0 ? "positive" : "negative"
                }`}
              >
                {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                {Math.abs(crypto.change)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="user-reviews">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="reviews-grid">
          {userReviews.map((review, index) => (
            <div key={index} className="review-card">
              <img
                src={review.profilePic}
                alt={review.name}
                className="profile-pic"
              />
              <h3>{review.name}</h3>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
