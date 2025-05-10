import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/ProfilePage.css";
import Loader from "../components/Loader"; 

const Signup = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)");
      return;
    }

    setLoading(true); 

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg || "Signup failed");
      } else {
        toast.success("Signup successful!");
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="profile-container">
        <ToastContainer position="top-right" autoClose={3000} />
        <button
          className="signup-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <div className="logo">
          <div className="logo-icon">M!G</div>
        </div>
        <form onSubmit={handleSignup}>
          <div className="profile-info">
            <label htmlFor="signup-name">Name:</label>
            <input
              type="text"
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="profile-info">
            <label htmlFor="signup-email">Email:</label>
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="profile-info">
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
