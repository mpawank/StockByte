import React, { useState, useEffect } from 'react';
import { FaBitcoin, FaEthereum, FaApple, FaChartLine } from 'react-icons/fa'; 
import './Dashboard.css';

import profile_img from '../assets/profile_img.svg'


const Dashboard = () => {
  const [userName] = useState("Pawan Kumar");
  const [userAvatar] = useState(profile_img); // User avatar image
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const trendingCryptos = [
    { name: "Bitcoin (BTC)", icon: <FaBitcoin /> },
    { name: "Ethereum (ETH)", icon: <FaEthereum /> },
    { name: "Ripple (XRP)", icon: "🔷" },
    { name: "Litecoin (LTC)", icon: "💰" }
  ];

  const trendingStocks = [
    { name: "Apple (AAPL)", icon: <FaApple /> },
    { name: "Tesla (TSLA)", icon: <FaChartLine /> }, 
    { name: "Amazon (AMZN)", icon: "📦" },
    { name: "Microsoft (MSFT)", icon: "💻" }
  ];

  // Fetch Alpha Vantage news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=ZT52WFXRCHIBL1AS`
        );
        const data = await response.json();
        
        if (data.feed) {
          setLatestNews(data.feed.slice(0, 6)); // Display top 5 news articles
        } else {
          console.error("News feed unavailable");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="dashboard-container">
      {/* User Information */}
      <div className="user-info">
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
        <h1>Welcome, {userName}</h1>
      </div>

      <div className="dashboard-columns">
        {/* Trending Cryptocurrencies */}
        <section className="dashboard-section">
          <h2>Trending Cryptocurrencies</h2>
          
          <ul>
            {trendingCryptos.map((crypto, index) => (
              <li key={index}>
                <span className="crypto-icon">{crypto.icon}</span> {crypto.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Trending Stocks */}
        <section className="dashboard-section">
          <h2>Trending Stocks</h2>
        
          <ul>
            {trendingStocks.map((stock, index) => (
              <li key={index}>
                <span className="stock-icon">{stock.icon}</span> {stock.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Latest News from API */}
        <section className="dashboard-section">
          <h2>Latest News</h2>
          {loading ? (
            <p>Loading news...</p>
          ) : (
            latestNews.map((news, index) => (
              <article key={index} className="news-item">
                <img
                  src={news.banner_image || "https://via.placeholder.com/150"}
                  alt={news.title}
                  className="news-image"
                />
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
