import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  return (
    <div className="error-container">
      <div className="error-card">
        <h2>Invalid URL</h2>
        <p>The URL you entered is not valid. Please check the URL and try again.</p>
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default Error;
