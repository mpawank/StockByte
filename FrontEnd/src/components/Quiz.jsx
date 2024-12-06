import React, { useState } from "react";
import "./quiz.css";

const questions = [
  {
    question: "What is the stock market?",
    options: [
      "A place to buy and sell stocks",
      "A place to play games",
      "A shopping mall",
      "A computer programming language",
    ],
    correct: "A place to buy and sell stocks",
  },
  {
    question: "What is a stock?",
    options: [
      "A type of food",
      "A share in a company",
      "A car brand",
      "A computer program",
    ],
    correct: "A share in a company",
  },
  {
    question: "What does a stockbroker do?",
    options: [
      "Cook meals for investors",
      "Buy and sell stocks on behalf of clients",
      "Manage a company’s stock",
      "Create computer programs",
    ],
    correct: "Buy and sell stocks on behalf of clients",
  },
  {
    question: "What is a dividend?",
    options: [
      "A discount on products",
      "A payment made by a company to its shareholders",
      "The value of a stock",
      "A government grant",
    ],
    correct: "A payment made by a company to its shareholders",
  },
  {
    question: "What is a bear market?",
    options: [
      "A market with increasing prices",
      "A market with falling prices",
      "A type of stock",
      "A kind of animal in the market",
    ],
    correct: "A market with falling prices",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(""); // Reset selected option
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <div className="quiz-header">Stock Market Quiz</div>
          <div className="question">
            {questions[currentQuestionIndex].question}
          </div>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1
              ? "Next Question"
              : "Submit Quiz"}
          </button>
        </>
      ) : (
        <div className="score">
          <div>
            Your score: {score} / {questions.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
