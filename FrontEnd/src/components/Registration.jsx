import axios from "axios";
import { useRef, useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaIdBadge,
} from "react-icons/fa";
import "./Registration.css";

const Register = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Refs for input fields
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const refEmail = useRef(null);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refAddress = useRef(null);
  const refPhoneNumber = useRef(null);

  // Validate form inputs
  const validateInputs = () => {
    if (
      !refUsername.current.value ||
      !refPassword.current.value ||
      !refEmail.current.value
    ) {
      setError("Please fill out all required fields.");
      return false;
    }
    if (refPassword.current.value.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(refEmail.current.value)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!/^\d{10}$/.test(refPhoneNumber.current.value)) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    setError(null);
    return true;
  };

  // Handle form submission using Axios
  const handleSubmit = async () => {
    if (!validateInputs()) return;

    try {
      const res = await axios.post("http://localhost:7000/save", {
        username: refUsername.current.value,
        password: refPassword.current.value,
        email: refEmail.current.value,
        firstname: refFirstName.current.value,
        lastname: refLastName.current.value,
        address: refAddress.current.value,
        phonenumber: refPhoneNumber.current.value,
      });
      setResponse(res.data);
    } catch (err) {
      setError("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <FaUser className="icon" />
        <input type="text" placeholder="Username" ref={refUsername} />
      </div>
      <div className="form-group">
        <FaLock className="icon" />
        <input type="password" placeholder="Password" ref={refPassword} />
      </div>
      <div className="form-group">
        <FaEnvelope className="icon" />
        <input type="email" placeholder="Email" ref={refEmail} />
      </div>
      <div className="form-group">
        <FaIdBadge className="icon" />
        <input type="text" placeholder="First Name" ref={refFirstName} />
      </div>
      <div className="form-group">
        <FaIdBadge className="icon" />
        <input type="text" placeholder="Last Name" ref={refLastName} />
      </div>
      <div className="form-group">
        <FaHome className="icon" />
        <input type="text" placeholder="Address" ref={refAddress} />
      </div>
      <div className="form-group">
        <FaPhone className="icon" />
        <input type="text" placeholder="Mobile Number" ref={refPhoneNumber} />
      </div>
      <button onClick={handleSubmit}>Register</button>
      {response && <p className="success">Registration Successful!</p>}
    </div>
  );
};

export default Register;
