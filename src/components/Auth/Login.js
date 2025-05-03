import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';
import './Auth.css';

export default function Login() {
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <div className="auth-image-content">
          <h2>Welcome to Personal Expense Tracker</h2>
          <p>
            Track your expenses, analyze spending patterns, and take control of your financial future.
            Our secure platform helps you make smarter financial decisions.
          </p>
        </div>
      </div>
      
      <div className="auth-form-section">
        <div className="auth-form-container">
          <div className="auth-logo">
            {/* You can add your logo here */}
            <img src="/logo.png" alt="Logo" />
          </div>
          
          <h1 className="auth-heading">Welcome Back</h1>
          <p className="auth-subheading">Sign in to continue to your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <AuthForm 
            onSubmit={handleSubmit} 
            isLogin={true}
          />
          
          <p className="auth-switch">
            Don't have an account? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
