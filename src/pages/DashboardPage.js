import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TransactionContext } from '../context/TransactionContext';
import BalanceCard from '../components/Dashboard/BalanceCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import SpendingPieChart from '../components/Charts/SpendingPieChart';
import MonthlyTrendsChart from '../components/Charts/MonthlyTrendsChart';
import '../styles/DashboardPage.css';

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const { balance, transactions } = useContext(TransactionContext);

  return (
    <div className="dashboard-page">
      <h1>Welcome back, {user?.name}</h1>
      <p className="subtitle">Here's your financial overview</p>
      
      <div className="dashboard-grid">
        <div className="dashboard-section">
          <BalanceCard balance={balance} />
          <RecentActivity transactions={transactions.slice(0, 5)} />
        </div>
        
        <div className="dashboard-section">
          <SpendingPieChart />
          <MonthlyTrendsChart />
        </div>
      </div>
    </div>
  );
}