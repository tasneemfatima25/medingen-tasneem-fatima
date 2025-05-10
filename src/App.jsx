import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../src/pages/Dashbboard'; 
import Login from './components/Login';
import Signup from './components/Signup';
import ReverseUrlPage from './pages/Error';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const isAuthenticated = localStorage.getItem('token');
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/error" element={isAuthenticated ? <ReverseUrlPage /> : <Navigate to="/login" />} />        
        <Route path="*" element={isAuthenticated ? <ReverseUrlPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
