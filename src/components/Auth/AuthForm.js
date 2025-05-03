import { useState } from 'react';

export default function AuthForm({ onSubmit, isLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onSubmit(email, password);
    } else {
      onSubmit(name, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {!isLogin && (
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
        />
      </div>
      
      <button type="submit" className="auth-button">
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  );
}