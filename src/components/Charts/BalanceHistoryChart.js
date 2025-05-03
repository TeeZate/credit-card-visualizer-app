import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { useTransactions } from '../../context/TransactionContext';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
);

export default function BalanceHistoryChart() {
  const { transactions } = useTransactions();
  const [balanceHistory, setBalanceHistory] = useState([]);

  useEffect(() => {
    // Calculate balance history for the last 30 days
    const history = [];
    let currentBalance = 5000; // Starting balance
    
    // Sort transactions by date ascending
    const sortedTx = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Group transactions by day
    const txByDay = sortedTx.reduce((acc, tx) => {
      const date = new Date(tx.date).toLocaleDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(tx);
      return acc;
    }, {});
    
    // Calculate balance for each day
    const dates = Object.keys(txByDay);
    dates.forEach(date => {
      const dayTx = txByDay[date];
      dayTx.forEach(tx => {
        currentBalance += tx.type === 'income' ? tx.amount : -tx.amount;
      });
      history.push({
        date,
        balance: currentBalance
      });
    });
    
    setBalanceHistory(history);
  }, [transactions]);

  const data = {
    labels: balanceHistory.map(item => item.date),
    datasets: [
      {
        label: 'Account Balance',
        data: balanceHistory.map(item => item.balance),
        borderColor: '#4361ee',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        tension: 0.1,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Balance History',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      }
    }
  };

  return (
    <div className="chart-container">
      <h3>Balance Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
}