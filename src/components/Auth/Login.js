import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';

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
    <div className="auth-page">
      <h1>Login to Your Account</h1>
      {error && <p className="error-message">{error}</p>}
      <AuthForm 
        onSubmit={handleSubmit} 
        isLogin={true}
      />
      <p className="auth-switch">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}