import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/ProfilePage.css";
import Loader from "../components/Loader"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.msg || "Login failed");
      } else {
        toast.success("Login successful!");
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error("Login error:", err);
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
          onClick={() => navigate("/")}
        >
          Signup
        </button>
        <div className="logo">
          <div className="logo-icon">M!G</div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="profile-info">
            <label htmlFor="login-name">Name:</label>
            <input
              type="text"
              id="login-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="profile-info">
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="profile-info">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
