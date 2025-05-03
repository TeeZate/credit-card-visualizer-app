import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Personal Expense Tracker</Link>
      </div>
      
      {user && (
        <>
          {/* Hamburger icon for mobile */}
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          {/* Regular navbar links (hidden on mobile) */}
          <div className="navbar-links">
            <Link to="/">Dashboard</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" onClick={toggleMobileMenu}>Dashboard</Link>
              <Link to="/transactions" onClick={toggleMobileMenu}>Transactions</Link>
              <Link to="/analytics" onClick={toggleMobileMenu}>Analytics</Link>
              <Link to="/profile" onClick={toggleMobileMenu}>Profile</Link>
              <button onClick={() => {
                handleLogout();
                toggleMobileMenu();
              }} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </>
      )}
    </nav>
  );
}
