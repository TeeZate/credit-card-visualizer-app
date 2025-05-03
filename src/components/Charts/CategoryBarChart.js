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
import { groupByCategory } from '../../utils/transactionHelpers';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

export default function CategoryBarChart() {
  const { transactions } = useTransactions();
  
  const expenseData = groupByCategory(
    transactions.filter(tx => tx.type === 'expense')
  );
  
  const data = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(expenseData),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
          '#9966FF', '#FF9F40', '#8AC24A', '#607D8B'
        ],
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Spending by Category',
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