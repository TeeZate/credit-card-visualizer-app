import { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import './BalanceCard.css';

export default function BalanceCard() {
  const { balance } = useContext(TransactionContext);

  return (
    <div className="balance-card">
      <h3>Current Balance</h3>
      <div className="balance-amount">
        ${balance.toFixed(2)}
      </div>
      <div className="balance-details">
        <span>Total available</span>
      </div>
    </div>
  );
}