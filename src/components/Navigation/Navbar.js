import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">CreditCard Visualizer</Link>
      </div>
      
      {user && (
        <div className="navbar-links">
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}