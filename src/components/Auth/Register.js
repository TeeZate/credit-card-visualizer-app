import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';

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
    <div className="auth-page">
      <h1>Create Your Account</h1>
      {error && <p className="error-message">{error}</p>}
      <AuthForm 
        onSubmit={handleSubmit} 
        isLogin={false}
      />
      <p className="auth-switch">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}