// src/App.js
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TransactionsPage from './pages/TransactionsPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navigation/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TransactionProvider>
          <div className="app-container">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                } />
                <Route path="/transactions" element={
                  <PrivateRoute>
                    <TransactionsPage />
                  </PrivateRoute>
                } />
                <Route path="/analytics" element={
                  <PrivateRoute>
                    <AnalyticsPage />
                  </PrivateRoute>
                } />
                <Route path="/profile" element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                } />
              </Routes>
            </div>
          </div>
        </TransactionProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;