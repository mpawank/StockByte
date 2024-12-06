import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {" "}
      {/* Updated to use the grid layout */}
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Body />
      </div>
      <div className="div3">
        <Footer />
      </div>
    </div>
  );
};

export default App;
