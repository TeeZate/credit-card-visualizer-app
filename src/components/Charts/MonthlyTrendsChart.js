import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { useTransactions } from '../../context/TransactionContext';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

export default function MonthlyTrendsChart() {
  const { transactions } = useTransactions();
  const [monthlyData, setMonthlyData] = useState({});

  useEffect(() => {
    const monthlyExpenses = {};
    const monthlyIncome = {};
    
    // Initialize last 6 months
    const months = [];
    const date = new Date();
    for (let i = 5; i >= 0; i--) {
      const monthDate = new Date(date.getFullYear(), date.getMonth() - i, 1);
      const monthKey = monthDate.toLocaleString('default', { month: 'short', year: 'numeric' });
      months.push(monthKey);
      monthlyExpenses[monthKey] = 0;
      monthlyIncome[monthKey] = 0;
    }
    
    // Calculate monthly totals
    transactions.forEach(tx => {
      const date = new Date(tx.date);
      const monthKey = date.toLocaleString('default', { month: 'short', year: 'numeric' });
      
      if (months.includes(monthKey)) {
        if (tx.type === 'expense') {
          monthlyExpenses[monthKey] += tx.amount;
        } else {
          monthlyIncome[monthKey] += tx.amount;
        }
      }
    });
    
    setMonthlyData({
      labels: months,
      expenses: Object.values(monthlyExpenses),
      income: Object.values(monthlyIncome)
    });
  }, [transactions]);

  const data = {
    labels: monthlyData.labels || [],
    datasets: [
      {
        label: 'Expenses',
        data: monthlyData.expenses || [],
        backgroundColor: '#f72585',
      },
      {
        label: 'Income',
        data: monthlyData.income || [],
        backgroundColor: '#4cc9f0',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}