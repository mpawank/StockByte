import React, { useState, useEffect } from "react";
import "./StockNews.css";
import wall from "./stocknewslogo.png";

// Your StockNews API key
const API_KEY = "STT43KHY2LUZ132T"; // Replace with your actual StockNews API key

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [educationContent, setEducationContent] = useState([]);

  // Fetch Stock Market News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.feed) {
          setNews(data.feed.slice(0, 6)); // Display top 6 news articles
        } else {
          console.error("News feed unavailable");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    // Educational Content (Static for now, could be fetched dynamically)
    setEducationContent([
      {
        title: "Introduction to Stock Market",
        description:
          "Learn about the basics of stock markets and how they function.",
        videoUrl:
          "https://www.youtube.com/embed/MG8mqrCUQWo?si=CRSJcOdcurfiZllc", // Example YouTube video URL
      },
      {
        title: "How to Read Stock Charts",
        description:
          "A guide on reading stock charts, including candlestick patterns.",
        videoUrl:
          "https://www.youtube.com/embed/Ak5ZWRHg1B0?si=aDxkm6XwWEJcB8XH", // Example YouTube video URL
      },
      {
        title: "Stock Market Strategies",
        description:
          "Learn the various strategies for successful investing in stocks.",
        videoUrl:
          "https://www.youtube.com/embed/LQlryRL-6nI?si=UKpU8Zb5xpOL28JS", // Example YouTube video URL
      },
      {
        title: "Understanding Stock Volatility",
        description:
          "Explore the factors that cause volatility in the stock market.",
        videoUrl:
          "https://www.youtube.com/embed/ICJUvzbtn70?si=0YhipQK0JPzfMNOx", // Example YouTube video URL
      },
    ]);

    fetchNews();
  }, []);

  return (
    <>
      <img
        src={wall}
        width="1000px"
        height="400px"
        style={{ display: "block", margin: "30px auto" }}
        alt="Wall"
      />
      <div className="stock-news-container">
        {/* Stock News Section (Left) */}
        <div className="news-section">
          <h2 className="section-title">Stock Market News</h2>
          {news.length > 0 ? (
            <>
              {/* Displaying the Banner Image for Stock Market News */}
              {news[0].banner_image && (
                <img
                  className="news-banner-image"
                  src={news[0].banner_image}
                  alt="Stock Market News Banner"
                />
              )}
              <div className="news-list">
                {news.map((article, index) => (
                  <div className="news-item" key={index}>
                    <h3 className="news-item-title">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </h3>
                    {article.image_url && (
                      <img
                        src={
                          article.image_url || "https://via.placeholder.com/150"
                        }
                        alt={article.title}
                        className="news-image"
                      />
                    )}
                    <p className="news-item-description">
                      {article.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Loading news...</p>
          )}
        </div>

        {/* Stock Market Education Section (Right) */}
        <div className="education-section">
          <h2 className="section-title">Stock Market Education</h2>
          <div className="education-content">
            {educationContent.map((item, index) => (
              <div className="education-item" key={index}>
                <h3 className="education-item-title">{item.title}</h3>
                <p className="education-item-description">{item.description}</p>
                <div className="education-item-video">
                  <iframe
                    width="100%"
                    height="315"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StockNews;
