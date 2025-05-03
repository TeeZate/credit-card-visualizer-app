import { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import './RecentActivity.css';

export default function RecentActivity({ transactions }) {
  const { loading } = useContext(TransactionContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul className="activity-list">
        {transactions.map(tx => (
          <li key={tx.id} className="activity-item">
            <div className="activity-info">
              <span className="activity-description">{tx.description}</span>
              <span className="activity-date">
                {new Date(tx.date).toLocaleDateString()}
              </span>
            </div>
            <div className={`activity-amount ${tx.type}`}>
              {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}