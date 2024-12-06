import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Chat.css";

export default function Chat() {
  const APIKEY = "AIzaSyCnfbE6CMPyI7VXqMCeJaAU-J24OdeuAR0"; // Replace this with your new API key.
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion("");
    setChatHistory((prev) => [
      ...prev,
      { type: "question", content: currentQuestion },
    ]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${APIKEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "answer",
          content: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>StockByte Bot</h2>
      </div>
      <div className="chat-history" ref={chatContainerRef}>
        {chatHistory.length === 0 ? (
          <div className="welcome-message">
            <h2>Welcome to StockByte Bot! 👋</h2>
            <p>
              Ask me anything about stocks, market trends, financial news, or
              investment tips!
            </p>
            <p>Type your question below to get started.</p>
          </div>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`message ${
                chat.type === "question" ? "message-question" : "message-answer"
              }`}
            >
              <ReactMarkdown>{chat.content}</ReactMarkdown>
            </div>
          ))
        )}
        {generatingAnswer && <div className="loading">Thinking...</div>}
      </div>
      <form className="chat-form" onSubmit={generateAnswer}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="chat-input"
        />
        <button
          type="submit"
          disabled={generatingAnswer}
          className={`chat-submit-button ${generatingAnswer ? "disabled" : ""}`}
        >
          {generatingAnswer ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
