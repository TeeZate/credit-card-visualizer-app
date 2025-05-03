import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/ProfilePage.css';

export default function ProfilePage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <h2>{user?.name}</h2>
          <p className="email">{user?.email}</p>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Member Since</span>
            <span className="value">June 2023</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Account Type</span>
            <span className="value">Premium</span>
          </div>
        </div>
        
        <button onClick={logout} className="logout-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
}