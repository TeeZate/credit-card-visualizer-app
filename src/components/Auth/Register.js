import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';
import './Auth.css';

export default function Register() {
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (name, email, password) => {
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <div className="auth-image-content">
          <h2>Your Personal Expense Tracker</h2>
          <p>Create an account to track your spending, visualize your finances, and make smarter financial decisions.</p>
        </div>
      </div>
      
      <div className="auth-form-section">
        <div className="auth-form-container">         
          <h1 className="auth-heading">Create Your Account</h1>
          <p className="auth-subheading">Join thousands of users managing their finances smarter</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <AuthForm 
            onSubmit={handleSubmit} 
            isLogin={false}
          />
          
          <div className="social-divider">
            <span>Or sign up with</span>
          </div>
          
          <div className="social-login">
            <button className="social-button">Google</button>
            <button className="social-button">Facebook</button>
          </div>
          
          <p className="auth-switch">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
