import React, { useState } from "react";
import "./Portfolio.css";
// Alpha Vantage API key
const API_KEY = "614NR3A3LX5YVJM5"; // Your actual API key
import user from "./profile_img.svg";
import Navbar from "./Navbar";
function Portfolio() {
  const [stocks, setStocks] = useState([
    {
      name: "AAPL",
      price: 150,
      quantity: 10,
      purchaseDate: "2024-01-10",
      icon: "📱",
    },
    {
      name: "GOOG",
      price: 2800,
      quantity: 5,
      purchaseDate: "2024-02-05",
      icon: "💻",
    },
    {
      name: "AMZN",
      price: 3500,
      quantity: 2,
      purchaseDate: "2024-03-12",
      icon: "📦",
    },
  ]);
  const [newStock, setNewStock] = useState({
    name: "",
    price: "",
    quantity: "",
    purchaseDate: "",
  });
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStock({ ...newStock, [name]: value });
  };

  const addStock = () => {
    if (
      !newStock.name ||
      !newStock.price ||
      !newStock.quantity ||
      !newStock.purchaseDate
    ) {
      alert("Please fill in all fields");
      return;
    }

    setStocks([
      ...stocks,
      {
        name: newStock.name,
        price: parseFloat(newStock.price),
        quantity: parseInt(newStock.quantity),
        purchaseDate: newStock.purchaseDate,
        icon: "📈",
      },
    ]);

    setNewStock({ name: "", price: "", quantity: "", purchaseDate: "" });
  };

  const removeStock = (name) => {
    setStocks(stocks.filter((stock) => stock.name !== name));
  };

  const fetchStockData = async (symbol) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
      );
      const data = await response.json();
      const latestPrice = data["Time Series (5min)"]
        ? Object.values(data["Time Series (5min)"])[0]["4. close"]
        : "N/A";
      setStockData(latestPrice);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStockData("Error");
    }
    setLoading(false);
  };

  const totalValue = stocks.reduce(
    (acc, stock) => acc + stock.price * stock.quantity,
    0
  );

  return (
    <div className="portfolio">
      <div className="portfolio-grid">
        {/* Left Column: Add Stock Form */}
        <div className="add-stock">
          <h3>Add New Stock</h3>
          <input
            type="text"
            name="name"
            placeholder="Stock Symbol"
            value={newStock.name}
            onChange={handleInputChange}
            onBlur={() => fetchStockData(newStock.name)}
          />
          {stockData && (
            <div className="stock-data">
              <p>Latest Price: {loading ? "Loading..." : `$${stockData}`}</p>
            </div>
          )}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newStock.price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newStock.quantity}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="purchaseDate"
            value={newStock.purchaseDate}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addStock}>
            Add Stock
          </button>
        </div>

        {/* Right Column: Stock List */}
        <div className="stock-list">
          <div className="user-info">
            <img src={user} alt="User" className="user-logo" />
            <div className="user-name">
              <h2>Pawan Kumar</h2>
              <p>Your Portfolio</p>
            </div>
          </div>

          <h1>My Stock Portfolio</h1>
          <h2>Total Portfolio Value: ${totalValue.toFixed(2)}</h2>
          <div className="stock-table">
            <div className="table-header">
              <div className="header-item">Stock Name</div>
              <div className="header-item">Price</div>
              <div className="header-item">Quantity</div>
              <div className="header-item">Total</div>
              <div className="header-item">Purchase Date</div>
              <div className="header-item">Action</div>
            </div>
            {stocks.map((stock) => (
              <div className="stock-row" key={stock.name}>
                <div className="stock-item">{stock.name}</div>
                <div className="stock-item">${stock.price.toFixed(2)}</div>
                <div className="stock-item">{stock.quantity}</div>
                <div className="stock-item">
                  ${(stock.price * stock.quantity).toFixed(2)}
                </div>
                <div className="stock-item">{stock.purchaseDate}</div>
                <div className="stock-item">
                  <button
                    className="remove-button"
                    onClick={() => removeStock(stock.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
