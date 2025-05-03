import { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import './TransactionList.css';

export default function TransactionList({ transactions }) {
  const { loading } = useContext(TransactionContext);

  if (loading) return <div>Loading transactions...</div>;

  return (
    <div className="transaction-list">
      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <ul>
          {transactions.map(tx => (
            <li key={tx.id} className="transaction-item">
              <div className="transaction-info">
                <span className="transaction-category">{tx.category}</span>
                <span className="transaction-description">{tx.description}</span>
                <span className="transaction-date">
                  {new Date(tx.date).toLocaleDateString()}
                </span>
              </div>
              <div className={`transaction-amount ${tx.type}`}>
                {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}