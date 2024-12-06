import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import Registration from "./Registration.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle button state (loading)
  const [isForgotPassword, setIsForgotPassword] = useState(false); // For Forgot Password Popup
  const [recoveryEmail, setRecoveryEmail] = useState(""); // For recovery email input
  const [recoveryMessage, setRecoveryMessage] = useState(""); // For success/error messages
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      return "Both fields are required.";
    }
    return null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate form fields before making the API call
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true); // Start loading

    try {
      const response = await axios.post("http://localhost:7000/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid username or password. Please try again.");
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setRecoveryMessage(""); // Clear previous messages
    if (!recoveryEmail) {
      setRecoveryMessage("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/recover-password",
        {
          email: recoveryEmail,
        }
      );

      if (response.status === 200) {
        setRecoveryMessage("Recovery email sent successfully.");
      } else {
        setRecoveryMessage("Failed to send recovery email. Please try again.");
      }
    } catch (error) {
      setRecoveryMessage("Error occurred. Please try again later.");
    }
  };

  const [isLogin, setLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="form-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setLogin(false)}
        >
          Signup
        </button>
      </div>

      {isLogin ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            {error && <p className="error-msg">{error}</p>}
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
          <p
            className="forgot-password"
            onClick={() => setIsForgotPassword(true)}
          >
            Forgot Password?
          </p>
        </>
      ) : (
        <Registration />
      )}

      {/* Forgot Password Popup */}
      {isForgotPassword && (
        <div className="popup-container">
          <div className="popup">
            <h3>Recover Your Password</h3>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your recovery email"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                required
              />
              <button type="submit">Send Recovery Email</button>
            </form>
            {recoveryMessage && (
              <p className="recovery-message">{recoveryMessage}</p>
            )}
            <button
              className="close-button"
              onClick={() => setIsForgotPassword(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
