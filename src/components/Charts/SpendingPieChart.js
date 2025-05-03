// src/components/Charts/SpendingPieChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTransactions } from '../../context/TransactionContext';
import { groupByCategory } from '../../utils/transactionHelpers';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SpendingPieChart() {
  const { transactions } = useTransactions();
  
  const expenseData = groupByCategory(
    transactions.filter(tx => tx.type === 'expense')
  );
  
  const data = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
          '#9966FF', '#FF9F40', '#8AC24A', '#607D8B'
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
          '#9966FF', '#FF9F40', '#8AC24A', '#607D8B'
        ]
      }
    ]
  };

  return (
    <div className="chart-container">
      <h3>Spending by Category</h3>
      <Pie data={data} />
    </div>
  );
}