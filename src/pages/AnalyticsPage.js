import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import SpendingPieChart from '../components/Charts/SpendingPieChart';
import MonthlyTrendsChart from '../components/Charts/MonthlyTrendsChart';
import CategoryBarChart from '../components/Charts/CategoryBarChart';
import BalanceHistoryChart from '../components/Charts/BalanceHistoryChart';
import '../styles/AnalyticsPage.css';

export default function AnalyticsPage() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="analytics-page">
      <h1>Spending Analytics</h1>
      <p className="subtitle">Visualize your spending patterns</p>
      
      <div className="analytics-grid">
        <div className="chart-container">
          <SpendingPieChart />
        </div>
        
        <div className="chart-container">
          <MonthlyTrendsChart />
        </div>
        
        <div className="chart-container">
          <CategoryBarChart />
        </div>
        
        <div className="chart-container">
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
}