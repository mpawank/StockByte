import React from "react";
import "./Education.css";
import Quiz from "./Quiz"; // Import the Quiz component
import wall from "../assets/edu.png";
import stockMarketImage from "../assets/article1.jpg"; // Image for "What is the Stock Market?"
import investImage from "../assets/article2.jpg"; // Image for "How to Invest in the Stock Market?"
import MarketImage from "../assets/article3.jpg";
const Education = () => {
  return (
    <div className="education-container">
      <img
        src={wall}
        width="1000px"
        height="400px"
        style={{ display: "block", margin: "30px auto" }}
        alt="Wall"
      />

      <h1 className="education-header">Stock Market Education</h1>

      {/* Education content and articles section */}
      <div className="articles-grid">
        <div className="article">
          <img
            src={stockMarketImage}
            alt="Stock Market"
            className="article-image"
          />
          <h3>What is the Stock Market?</h3>
          <p>
            The stock market is a place where buyers and sellers trade stocks or
            shares of companies. It plays a critical role in the global economy
            and allows individuals and institutions to invest in companies and
            gain ownership.
          </p>
        </div>
        <div className="article">
          <img
            src={investImage}
            alt="How to Invest"
            className="article-image"
          />
          <h3>How to Invest in the Stock Market?</h3>
          <p>
            To invest in the stock market, you can buy shares of companies
            through a brokerage account. Understanding the basics of stock
            trading and the types of stocks is essential before making any
            investment decisions.
          </p>
        </div>
        <div className="article">
          <img src={MarketImage} alt="Stock Market" className="article-image" />
          <h3>What are Dividends?</h3>
          <p>
            A dividend is a portion of a company's earnings that is distributed
            to shareholders. Companies usually distribute dividends quarterly,
            and they can provide a steady stream of income for investors.
          </p>
        </div>
      </div>

      {/* Insert the Quiz component here */}
      <div className="quiz-section">
        <h2 className="quiz-header">
          Test Your Knowledge on the Stock Market!
        </h2>
        <Quiz /> {/* Rendering the Quiz component */}
      </div>
    </div>
  );
};

export default Education;
