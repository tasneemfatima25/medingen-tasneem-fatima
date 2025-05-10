import React from 'react';
import { FaHome, FaBell, FaUser, FaShoppingCart, FaPercent } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Navbar.css';
import logo from "../assets/images/Logo.png"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
      <img className="Logo" src={logo} alt="LOGO"/>
        <span className="logo-text">Medingen</span>
      </div>

      <div className="menu">
        <NavItem icon={<FaHome />} label="Home" onClick={() => navigate('/dashboard')} />
        <NavItem icon={<FaPercent />} label="Offers" />
        <NavItem icon={<FaBell />} label="Notification" />
        <NavItem
          icon={<FaUser />}
          label="Profile"
          onClick={() => navigate('/login')}
        />
      </div>

      <div className="cart-icon">
        <FaShoppingCart size={20} />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, onClick }) => {
  return (
    <div className="nav-item" onClick={onClick} style={{ cursor: 'pointer' }}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Navbar;
